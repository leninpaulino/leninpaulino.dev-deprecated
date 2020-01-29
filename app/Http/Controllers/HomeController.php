<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use Canvas\Tag;
use Canvas\Post;
use Canvas\Topic;
use Canvas\UserMeta;
use Illuminate\Support\Str;

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
            'avatar' => optional($metaData)->avatar && !empty(optional($metaData)->avatar) ? $metaData->avatar : "https://secure.gravatar.com/avatar/{$emailHash}?s=500",
            'posts'  => Post::published()->orderByDesc('published_at')->simplePaginate(10),
            'topics' => Topic::all(['name', 'slug']),
            'tags'   => Tag::all(['name', 'slug']),
        ];


        Inertia::setRootView('layouts.inertia');
        return Inertia::render('Home', $data);
    }

    /**
     * Show the application about page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function about()
    {
        Inertia::setRootView('layouts.inertia');
        return Inertia::render('About');
    }

    /**
     * Show the application contact.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function contact()
    {
        Inertia::setRootView('layouts.inertia');
        return Inertia::render('Contact');
    }
}
