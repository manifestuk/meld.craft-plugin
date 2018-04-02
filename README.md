# Meld

Meld is a [Craft plugin][craft]. It eases the process of adding a prefix or a suffix to an array of strings within your Twig templates.

[craft]: https://craftcms.com "The official Craft CMS website"

That's pretty useful, but Meld goes further. It allows you to combine an array of prefixes with an array of suffixes.

Let's take a look at a quick example:

```twig
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

## How it works
You can throw pretty much anything at Meld, and it will do its best to make sense of the madness.

If either the prefix or the suffix is an array, Meld returns an array of results. Otherwise, Meld returns a single string.

Meld will do its best to coerce each prefix and suffix into a string (assuming it isn't already). In practical terms, this means:

- Integers are converted to their string equivalent;
- Floats are converted to their string equivalent;
- Booleans are converted to "1" (`true`) or "0" (`false`);
- Objects which implement the `__toString` method are converted to their string representation;
- Everything else is converted to an empty string.

It's worth noting that even if the prefix or suffix is an empty string, Meld will still include it in the results. If you don't want this to happen, sanitise your prefixes and suffixes before passing them to Meld. Rubbish in, rubbish out.

## Requirements
Each release of Meld is automatically tested against PHP 7.1 and above. It is also manually tested on the most recent version of Craft.

### PHP 7.0 support
In theory, Meld should be compatible with PHP 7.0. In practise, it's impossible to test this.

We use Codeception for testing (as is [the Yii way][yii-codeception]), and the Codeception dependency tree includes components which only work with PHP 7.1+.

[yii-codeception]: https://www.yiiframework.com/doc/guide/2.0/en/test-environment-setup "The Definitive Guide to Yii 2.0"

Unfortunately there's nothing we can do about that.

## Installation
To install Meld, either search for "Meld" in the Craft Plugin Store, or add it as a [Composer][composer] dependency.

[composer]: https://getcomposer.org "Composer is a PHP dependency manager"

Here's how to install Meld using Composer.

1. Open your terminal, and navigate to your Craft project:

        cd /path/to/project

2. Add Meld as a project dependency:

        composer require experience/meld

3. In the Control Panel, go to "Settings → Plugins", and click the "Install" button for Meld

## Usage
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
