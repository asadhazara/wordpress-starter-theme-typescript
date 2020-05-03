<?php

use Timber\Post;
use Timber\Timber;

$context = Timber::get_context();

$context['post'] = new Post();

$templates = array('page/' . $context['post']->slug . '.twig', 'page.twig');

Timber::render($templates, $context);
