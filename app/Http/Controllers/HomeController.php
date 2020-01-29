<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        Inertia::setRootView('layouts.inertia');
        return Inertia::render('Home');
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
