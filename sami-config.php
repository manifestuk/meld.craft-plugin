<?php

use Sami\Sami;

use Sami\RemoteRepository\GitHubRemoteRepository;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('resources')
    ->exclude('vendor')
    ->in(__DIR__ . '/src/meld');

$repositoryUrl = 'experience/meld.craft-plugin';

$repository = new GitHubRemoteRepository($repositoryUrl, __DIR__);

return new Sami($iterator, array(
    'theme'                => 'default',
    'title'                => 'Meld Craft Plugin',
    'build_dir'            => __DIR__.'/docs/build',
    'cache_dir'            => __DIR__.'/docs/cache',
    'remote_repository'    => $repository,
    'default_opened_level' => 2,
));
