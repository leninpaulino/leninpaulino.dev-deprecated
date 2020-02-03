<?php

namespace App\Http\Controllers;

use Canvas\Events\PostViewed;
use Canvas\Post;
use Canvas\Tag;
use Canvas\Topic;
use Canvas\UserMeta;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Show the application home page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $metaData = UserMeta::forCurrentUser()->first();
        $emailHash = md5(trim(Str::lower(optional(request()->user())->email)));

        $data = [
            'avatar' => optional($metaData)->avatar && ! empty(optional($metaData)->avatar) ? $metaData->avatar : "https://secure.gravatar.com/avatar/{$emailHash}?s=500",
            'posts'  => Post::published()->orderByDesc('published_at')->simplePaginate(10),
            'topics' => Topic::all(['name', 'slug']),
            'tags'   => Tag::all(['name', 'slug']),
        ];

        return Inertia::render('Home', $data);
    }

    /**
     * Show the application about page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function about()
    {
        return Inertia::render('About');
    }

    /**
     * Show the application contact.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function contact()
    {
        return Inertia::render('Contact');
    }

    /**
     * Show a post given a slug.
     *
     * @param string $slug
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function findPostBySlug(string $slug)
    {
        $posts = Post::with('tags', 'topic')->published()->get();
        $post = $posts->firstWhere('slug', $slug);

        if ($post && $post->published) {
            $readNext = $posts->sortBy('published_at')->firstWhere('published_at', '>', $post->published_at);

            if ($readNext) {
                $randomPool = $posts->filter(function ($item) use ($readNext, $post) {
                    return $item->id != $post->id && $item->id != $readNext->id;
                });
            } else {
                $randomPool = $posts->filter(function ($item) use ($readNext, $post) {
                    return $item->id != $post->id;
                });
            }

            if ($post->tags || $post->topic) {
                $related = $this->findRelatedViaTaxonomy($randomPool, $post);
                $readRandom = $related->isEmpty() ? null : $related->first();
            } else {
                $readRandom = $randomPool->random();
            }

            $metaData = UserMeta::forCurrentUser()->first();
            $emailHash = md5(trim(Str::lower(optional(request()->user())->email)));

            $data = [
                'avatar' => optional($metaData)->avatar && ! empty(optional($metaData)->avatar) ? $metaData->avatar : "https://secure.gravatar.com/avatar/{$emailHash}?s=500",
                'author' => $post->user,
                'post'   => $post,
                'meta'   => $post->meta,
                'next'   => $readNext,
                'random' => $readRandom,
                'topic'  => $post->topic->first() ?? null,
            ];

            event(new PostViewed($post));

            return Inertia::render('Post', $data);
        } else {
            abort(404);
        }
    }

    /**
     * @param \Illuminate\Support\Collection $randomPool
     * @param \Canvas\Post $post
     * @return mixed
     */
    private function findRelatedViaTaxonomy(Collection $randomPool, Post $post)
    {
        return collect($randomPool)->filter(function ($item, $key) use ($post) {
            $matched_tag = array_intersect($item->tags->pluck('slug')->toArray(), $post->tags->pluck('slug')->toArray());
            $matched_topic = array_intersect($item->topic->pluck('slug')->toArray(), $post->topic->pluck('slug')->toArray());

            if ($matched_tag || $matched_topic) {
                return true;
            } else {
                return false;
            }
        });
    }
}
