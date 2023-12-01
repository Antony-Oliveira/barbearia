<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function(){
    return inertia('Welcome');
});

Route::get('/Calendar', function(){
    return inertia('Calendar');
});

Route::get('/Account', function(){
    return inertia('Account');
});

