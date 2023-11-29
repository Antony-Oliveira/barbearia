<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function(){
    return inertia('Welcome');
});

Route::get('/teste', function(){
    return inertia('Teste');
});
