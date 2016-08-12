<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ViewComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot(){

        view()->composer('/public/view/nav.template', function($view){
            $view->with('user', Auth::user());
        });

    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register(){
        //
    }

}