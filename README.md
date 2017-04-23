# Meld Craft Plugin #

[![Build Status](https://travis-ci.org/experience/meld.craft-plugin.svg?branch=master)](https://travis-ci.org/experience/meld.craft-plugin)

Meld is a Craft plugin which eases the process of adding a prefix or a suffix to an array of strings within your Twig templates.

That's pretty useful, but Meld goes further, by allowing you to meld an array of prefixes with an array of suffixes. Let's take a look at a quick example:

```
{% set prefixes = ['Hello', ['Hola', 'Adios']] %}
{% set suffixes = ['World', ['Tierra', 'Amigo']] %}
{% set melded = prefixes|meld(suffixes) %}
    
<ul>
    {% for meld in melded %}
        <li>{{ meld }}</li>
    {% endfor %}
</ul>
    
// Result:
<ul>
    <li>HelloTierra</li>
    <li>HelloAmigo</li>
    <li>HolaWorld</li>
    <li>AdiosWorld</li>
    <li>HolaTierra</li>
    <li>HolaAmigo</li>
    <li>AdiosTierra</li>
    <li>AdiosAmigo</li>
</ul>
```

## How it works ##
You can throw pretty much anything at Meld, and it will do its best to make sense of the madness.

If either the prefix or the suffix is an array, Meld returns an array of results. Otherwise, Meld returns a single string.

When processing each prefix and suffix "pair", Meld first attempts to coerce the prefix and suffix into a string (assuming they're not already). In practical terms, this means:

- Integers are converted to their string equivalent;
- Floats are converted to their string equivalent;
- Booleans are converted to "1" (`true`) or "0" (`false`);
- Objects which implement the `__toString` method are converted to their string representation;
- Everything else is converted to an empty string.

It's worth noting that even if the prefix or suffix is an empty string, Meld will still include it in the results. If you don't want this to happen, sanitise your prefixes and suffixes before passing them to Meld. Rubbish in, rubbish out.

## Requirements ##
Each release of Meld is [automatically tested][build-status] against PHP 5.5 and above. It is also manually tested on the most recent version of Craft.

[build-status]: https://travis-ci.org/experience/meld.craft-plugin "See the Meld build status on Travis CI"

## Installation ##

1. [Download the latest release][download], and unzip it.
2. Copy the `meld` folder to your `craft/plugins` directory.
3. Navigate to the "Admin &rarr; Settings &rarr; Plugins" page, and activate Meld.

[download]: https://github.com/experience/meld.craft-plugin/releases/download/0.0.0/meld-0.0.0.zip "Download the latest release"

## Configuration ##
You don't need to configure Meld. Just follow the usage instructions, below.

## Usage ##
Meld can cope with a wide variety of prefixes and suffixes, from basic strings, all the way up to arrays of objects. Refer to the "How it works" section, above, for additional information.

Use the Meld filter in exactly the same way as any other Twig filter, with the prefix to the left of the pipe, and the suffix as the filter argument.

For example:

```
{# Outputs a single string. #}
{{ 'Hello'|meld('World') }}
    
{# Returns an array of strings. #}
{% set prefixes = ['Hello', ['Hola', 'Adios']] %}
{% set suffixes = ['World', ['Tierra', 'Amigo']] %}
{% set melded = prefixes|meld(suffixes) %}
```

## Developer documentation ##
If you need to dig further into the code, the API documentation provides detailed information about every class and method; just open `docs/build/index.html` in your browser to view it.

Note that the search won't work in Chrome, due to JavaScript security restrictions for local files. It should work fine in Firefox and Opera, though.
