
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Craft" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Craft.html">Craft</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Craft_MeldPlugin" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Craft/MeldPlugin.html">MeldPlugin</a>                    </div>                </li>                            <li data-name="class:Craft_MeldTwigExtension" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Craft/MeldTwigExtension.html">MeldTwigExtension</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Experience</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Meld</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">App</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Experience_Meld_App_Helpers" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Experience/Meld/App/Helpers.html">Helpers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Experience_Meld_App_Helpers_ConfigHelper" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Experience/Meld/App/Helpers/ConfigHelper.html">ConfigHelper</a>                    </div>                </li>                            <li data-name="class:Experience_Meld_App_Helpers_TransactionHelper" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Experience/Meld/App/Helpers/TransactionHelper.html">TransactionHelper</a>                    </div>                </li>                            <li data-name="class:Experience_Meld_App_Helpers_TranslationHelper" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Experience/Meld/App/Helpers/TranslationHelper.html">TranslationHelper</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Experience_Meld_App_ServiceProviders" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Experience/Meld/App/ServiceProviders.html">ServiceProviders</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Experience_Meld_App_ServiceProviders_PluginServiceProvider" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Experience/Meld/App/ServiceProviders/PluginServiceProvider.html">PluginServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Experience_Meld_App_Services" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Experience/Meld/App/Services.html">Services</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Experience_Meld_App_Services_MeldService" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Experience/Meld/App/Services/MeldService.html">MeldService</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Experience_Meld_App_Utilities" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Experience/Meld/App/Utilities.html">Utilities</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Experience_Meld_App_Utilities_Logger" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Experience/Meld/App/Utilities/Logger.html">Logger</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Craft.html", "name": "Craft", "doc": "Namespace Craft"},{"type": "Namespace", "link": "Experience.html", "name": "Experience", "doc": "Namespace Experience"},{"type": "Namespace", "link": "Experience/Meld.html", "name": "Experience\\Meld", "doc": "Namespace Experience\\Meld"},{"type": "Namespace", "link": "Experience/Meld/App.html", "name": "Experience\\Meld\\App", "doc": "Namespace Experience\\Meld\\App"},{"type": "Namespace", "link": "Experience/Meld/App/Helpers.html", "name": "Experience\\Meld\\App\\Helpers", "doc": "Namespace Experience\\Meld\\App\\Helpers"},{"type": "Namespace", "link": "Experience/Meld/App/ServiceProviders.html", "name": "Experience\\Meld\\App\\ServiceProviders", "doc": "Namespace Experience\\Meld\\App\\ServiceProviders"},{"type": "Namespace", "link": "Experience/Meld/App/Services.html", "name": "Experience\\Meld\\App\\Services", "doc": "Namespace Experience\\Meld\\App\\Services"},{"type": "Namespace", "link": "Experience/Meld/App/Utilities.html", "name": "Experience\\Meld\\App\\Utilities", "doc": "Namespace Experience\\Meld\\App\\Utilities"},
            
            {"type": "Class", "fromName": "Craft", "fromLink": "Craft.html", "link": "Craft/MeldPlugin.html", "name": "Craft\\MeldPlugin", "doc": "&quot;The main Meld plugin file.&quot;"},
                                                        {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method___construct", "name": "Craft\\MeldPlugin::__construct", "doc": "&quot;Constructor. Loads the config file containing the plugin information.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_initializeAutoloader", "name": "Craft\\MeldPlugin::initializeAutoloader", "doc": "&quot;Initialises the autoloader.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_initializeContainer", "name": "Craft\\MeldPlugin::initializeContainer", "doc": "&quot;Initialises the dependency-injection container.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_loadConfig", "name": "Craft\\MeldPlugin::loadConfig", "doc": "&quot;Loads the plugin configuration details from the config file.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_getName", "name": "Craft\\MeldPlugin::getName", "doc": "&quot;Returns the plugin name.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_getDescription", "name": "Craft\\MeldPlugin::getDescription", "doc": "&quot;Returns the plugin description.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_getVersion", "name": "Craft\\MeldPlugin::getVersion", "doc": "&quot;Returns the plugin\u2019s version number.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_getDeveloper", "name": "Craft\\MeldPlugin::getDeveloper", "doc": "&quot;Returns the plugin developer\u2019s name.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_getDeveloperUrl", "name": "Craft\\MeldPlugin::getDeveloperUrl", "doc": "&quot;Returns the plugin developer\u2019s URL.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_getDocumentationUrl", "name": "Craft\\MeldPlugin::getDocumentationUrl", "doc": "&quot;Returns the documentation URL.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_getReleaseFeedUrl", "name": "Craft\\MeldPlugin::getReleaseFeedUrl", "doc": "&quot;Returns the \&quot;releases\&quot; URL.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_getSchemaVersion", "name": "Craft\\MeldPlugin::getSchemaVersion", "doc": "&quot;Returns a faux schema version, so Craft doesn&#039;t attempt to run database\nupdates when the plugin version changes.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_hasSettings", "name": "Craft\\MeldPlugin::hasSettings", "doc": "&quot;Returns a boolean indicating whether the plugin has settings.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_hasCpSection", "name": "Craft\\MeldPlugin::hasCpSection", "doc": "&quot;Returns a boolean indicating whether the plugin has it&#039;s own control\npanel section.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldPlugin", "fromLink": "Craft/MeldPlugin.html", "link": "Craft/MeldPlugin.html#method_addTwigExtension", "name": "Craft\\MeldPlugin::addTwigExtension", "doc": "&quot;Registers the Twig extension.&quot;"},
            
            {"type": "Class", "fromName": "Craft", "fromLink": "Craft.html", "link": "Craft/MeldTwigExtension.html", "name": "Craft\\MeldTwigExtension", "doc": "&quot;Class MeldTwigExtension&quot;"},
                                                        {"type": "Method", "fromName": "Craft\\MeldTwigExtension", "fromLink": "Craft/MeldTwigExtension.html", "link": "Craft/MeldTwigExtension.html#method___construct", "name": "Craft\\MeldTwigExtension::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldTwigExtension", "fromLink": "Craft/MeldTwigExtension.html", "link": "Craft/MeldTwigExtension.html#method_getName", "name": "Craft\\MeldTwigExtension::getName", "doc": "&quot;Returns the name of the extension.&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldTwigExtension", "fromLink": "Craft/MeldTwigExtension.html", "link": "Craft/MeldTwigExtension.html#method_getFilters", "name": "Craft\\MeldTwigExtension::getFilters", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Craft\\MeldTwigExtension", "fromLink": "Craft/MeldTwigExtension.html", "link": "Craft/MeldTwigExtension.html#method_meldFilter", "name": "Craft\\MeldTwigExtension::meldFilter", "doc": "&quot;Melds the given prefix and suffix, and returns the result.&quot;"},
            
            {"type": "Class", "fromName": "Experience\\Meld\\App\\Helpers", "fromLink": "Experience/Meld/App/Helpers.html", "link": "Experience/Meld/App/Helpers/ConfigHelper.html", "name": "Experience\\Meld\\App\\Helpers\\ConfigHelper", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Experience\\Meld\\App\\Helpers\\ConfigHelper", "fromLink": "Experience/Meld/App/Helpers/ConfigHelper.html", "link": "Experience/Meld/App/Helpers/ConfigHelper.html#method_getConfig", "name": "Experience\\Meld\\App\\Helpers\\ConfigHelper::getConfig", "doc": "&quot;Retrieves the JSON file at the given path, and returns it as an object.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\Helpers\\ConfigHelper", "fromLink": "Experience/Meld/App/Helpers/ConfigHelper.html", "link": "Experience/Meld/App/Helpers/ConfigHelper.html#method_loadConfig", "name": "Experience\\Meld\\App\\Helpers\\ConfigHelper::loadConfig", "doc": "&quot;Loads and returns the config file contents.&quot;"},
            
            {"type": "Class", "fromName": "Experience\\Meld\\App\\Helpers", "fromLink": "Experience/Meld/App/Helpers.html", "link": "Experience/Meld/App/Helpers/TransactionHelper.html", "name": "Experience\\Meld\\App\\Helpers\\TransactionHelper", "doc": "&quot;Provides helper methods for working with Craft&#039;s database transactions.&quot;"},
                                                        {"type": "Method", "fromName": "Experience\\Meld\\App\\Helpers\\TransactionHelper", "fromLink": "Experience/Meld/App/Helpers/TransactionHelper.html", "link": "Experience/Meld/App/Helpers/TransactionHelper.html#method___construct", "name": "Experience\\Meld\\App\\Helpers\\TransactionHelper::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\Helpers\\TransactionHelper", "fromLink": "Experience/Meld/App/Helpers/TransactionHelper.html", "link": "Experience/Meld/App/Helpers/TransactionHelper.html#method_begin", "name": "Experience\\Meld\\App\\Helpers\\TransactionHelper::begin", "doc": "&quot;If a database transaction does not exist, begins a new transaction, and\nreturns it. If a database transaction already exists, returns null.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\Helpers\\TransactionHelper", "fromLink": "Experience/Meld/App/Helpers/TransactionHelper.html", "link": "Experience/Meld/App/Helpers/TransactionHelper.html#method_commit", "name": "Experience\\Meld\\App\\Helpers\\TransactionHelper::commit", "doc": "&quot;Commits the transaction, if it is a valid transaction.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\Helpers\\TransactionHelper", "fromLink": "Experience/Meld/App/Helpers/TransactionHelper.html", "link": "Experience/Meld/App/Helpers/TransactionHelper.html#method_isValidTransaction", "name": "Experience\\Meld\\App\\Helpers\\TransactionHelper::isValidTransaction", "doc": "&quot;Returns a boolean, indicating whether the given argument is a valid\ntransaction.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\Helpers\\TransactionHelper", "fromLink": "Experience/Meld/App/Helpers/TransactionHelper.html", "link": "Experience/Meld/App/Helpers/TransactionHelper.html#method_rollback", "name": "Experience\\Meld\\App\\Helpers\\TransactionHelper::rollback", "doc": "&quot;Rolls back the transaction, if it is a valid transaction.&quot;"},
            
            {"type": "Class", "fromName": "Experience\\Meld\\App\\Helpers", "fromLink": "Experience/Meld/App/Helpers.html", "link": "Experience/Meld/App/Helpers/TranslationHelper.html", "name": "Experience\\Meld\\App\\Helpers\\TranslationHelper", "doc": "&quot;Provides a simple wrapper around the &lt;code&gt;Craft::t&lt;\/code&gt; static method.&quot;"},
                                                        {"type": "Method", "fromName": "Experience\\Meld\\App\\Helpers\\TranslationHelper", "fromLink": "Experience/Meld/App/Helpers/TranslationHelper.html", "link": "Experience/Meld/App/Helpers/TranslationHelper.html#method_translate", "name": "Experience\\Meld\\App\\Helpers\\TranslationHelper::translate", "doc": "&quot;Wrapper for Craft&#039;s &lt;code&gt;t&lt;\/code&gt; static method. Makes other classes a bit more\nunit-testable, in theory at least.&quot;"},
            
            {"type": "Class", "fromName": "Experience\\Meld\\App\\ServiceProviders", "fromLink": "Experience/Meld/App/ServiceProviders.html", "link": "Experience/Meld/App/ServiceProviders/PluginServiceProvider.html", "name": "Experience\\Meld\\App\\ServiceProviders\\PluginServiceProvider", "doc": "&quot;Populates the plugin&#039;s IoC container.&quot;"},
                                                        {"type": "Method", "fromName": "Experience\\Meld\\App\\ServiceProviders\\PluginServiceProvider", "fromLink": "Experience/Meld/App/ServiceProviders/PluginServiceProvider.html", "link": "Experience/Meld/App/ServiceProviders/PluginServiceProvider.html#method___construct", "name": "Experience\\Meld\\App\\ServiceProviders\\PluginServiceProvider::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\ServiceProviders\\PluginServiceProvider", "fromLink": "Experience/Meld/App/ServiceProviders/PluginServiceProvider.html", "link": "Experience/Meld/App/ServiceProviders/PluginServiceProvider.html#method_register", "name": "Experience\\Meld\\App\\ServiceProviders\\PluginServiceProvider::register", "doc": "&quot;Registers items with the container.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\ServiceProviders\\PluginServiceProvider", "fromLink": "Experience/Meld/App/ServiceProviders/PluginServiceProvider.html", "link": "Experience/Meld/App/ServiceProviders/PluginServiceProvider.html#method_initializeLogger", "name": "Experience\\Meld\\App\\ServiceProviders\\PluginServiceProvider::initializeLogger", "doc": "&quot;Initialises the logger.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\ServiceProviders\\PluginServiceProvider", "fromLink": "Experience/Meld/App/ServiceProviders/PluginServiceProvider.html", "link": "Experience/Meld/App/ServiceProviders/PluginServiceProvider.html#method_initializeTransactionHelper", "name": "Experience\\Meld\\App\\ServiceProviders\\PluginServiceProvider::initializeTransactionHelper", "doc": "&quot;Initialises the transaction helper.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\ServiceProviders\\PluginServiceProvider", "fromLink": "Experience/Meld/App/ServiceProviders/PluginServiceProvider.html", "link": "Experience/Meld/App/ServiceProviders/PluginServiceProvider.html#method_initializeTranslationHelper", "name": "Experience\\Meld\\App\\ServiceProviders\\PluginServiceProvider::initializeTranslationHelper", "doc": "&quot;Initialises the translation helper.&quot;"},
            
            {"type": "Class", "fromName": "Experience\\Meld\\App\\Services", "fromLink": "Experience/Meld/App/Services.html", "link": "Experience/Meld/App/Services/MeldService.html", "name": "Experience\\Meld\\App\\Services\\MeldService", "doc": "&quot;Class MeldService&quot;"},
                                                        {"type": "Method", "fromName": "Experience\\Meld\\App\\Services\\MeldService", "fromLink": "Experience/Meld/App/Services/MeldService.html", "link": "Experience/Meld/App/Services/MeldService.html#method_meld", "name": "Experience\\Meld\\App\\Services\\MeldService::meld", "doc": "&quot;Melds the given prefix(es) and suffix(es), and returns the result.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\Services\\MeldService", "fromLink": "Experience/Meld/App/Services/MeldService.html", "link": "Experience/Meld/App/Services/MeldService.html#method_isReturnTypeArray", "name": "Experience\\Meld\\App\\Services\\MeldService::isReturnTypeArray", "doc": "&quot;Determines whether either of the given inputs is an array. If so, we\nshould return an array of strings. Otherwise, we should return a string.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\Services\\MeldService", "fromLink": "Experience/Meld/App/Services/MeldService.html", "link": "Experience/Meld/App/Services/MeldService.html#method_normalizeMeldParameter", "name": "Experience\\Meld\\App\\Services\\MeldService::normalizeMeldParameter", "doc": "&quot;Normalises the given \&quot;prefixes\&quot; or \&quot;suffixes\&quot; parameter, by ensuring\nthat it&#039;s an array we can loop through.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\Services\\MeldService", "fromLink": "Experience/Meld/App/Services/MeldService.html", "link": "Experience/Meld/App/Services/MeldService.html#method_meldPair", "name": "Experience\\Meld\\App\\Services\\MeldService::meldPair", "doc": "&quot;Melds the given pair, and returns the result.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\Services\\MeldService", "fromLink": "Experience/Meld/App/Services/MeldService.html", "link": "Experience/Meld/App/Services/MeldService.html#method_normalizeMeldPairParameter", "name": "Experience\\Meld\\App\\Services\\MeldService::normalizeMeldPairParameter", "doc": "&quot;Normalises the given \&quot;pair\&quot; parameter, to ensure it&#039;s a string.&quot;"},
            
            {"type": "Class", "fromName": "Experience\\Meld\\App\\Utilities", "fromLink": "Experience/Meld/App/Utilities.html", "link": "Experience/Meld/App/Utilities/Logger.html", "name": "Experience\\Meld\\App\\Utilities\\Logger", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Experience\\Meld\\App\\Utilities\\Logger", "fromLink": "Experience/Meld/App/Utilities/Logger.html", "link": "Experience/Meld/App/Utilities/Logger.html#method_logInfo", "name": "Experience\\Meld\\App\\Utilities\\Logger::logInfo", "doc": "&quot;Logs an informational message to the plugin log file.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\Utilities\\Logger", "fromLink": "Experience/Meld/App/Utilities/Logger.html", "link": "Experience/Meld/App/Utilities/Logger.html#method_log", "name": "Experience\\Meld\\App\\Utilities\\Logger::log", "doc": "&quot;Logs the given message with the given \&quot;level\&quot; to the plugin log file.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\Utilities\\Logger", "fromLink": "Experience/Meld/App/Utilities/Logger.html", "link": "Experience/Meld/App/Utilities/Logger.html#method_logWarning", "name": "Experience\\Meld\\App\\Utilities\\Logger::logWarning", "doc": "&quot;Logs a warning message to the plugin log file.&quot;"},
                    {"type": "Method", "fromName": "Experience\\Meld\\App\\Utilities\\Logger", "fromLink": "Experience/Meld/App/Utilities/Logger.html", "link": "Experience/Meld/App/Utilities/Logger.html#method_logError", "name": "Experience\\Meld\\App\\Utilities\\Logger::logError", "doc": "&quot;Logs an error message to the plugin log file.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


