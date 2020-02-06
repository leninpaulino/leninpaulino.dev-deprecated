<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index')->name('home');
Route::get('/about', 'HomeController@about')->name('about');
Route::get('/contact', 'HomeController@contact')->name('contact');
Route::prefix('posts')->name('posts.')->group(function () {
    Route::middleware('Canvas\Http\Middleware\ViewThrottle')->get('{slug}', 'HomeController@findPostBySlug')->name('show');
    Route::get('tag/{slug}', 'HomeController@getPostsByTag')->name('tag');
    Route::get('topic/{slug}', 'HomeController@getPostsByTopic')->name('topic');
});

Auth::routes(['register' => false]);
