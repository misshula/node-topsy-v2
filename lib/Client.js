var request = require('request');

var Client = module.exports = function(apiKey) {
    if (apiKey === undefined || apiKey === null)
    {
        throw new Error("You must provide an API key.");
    }

    this._apiBaseUrl = 'http://api.topsy.com/v2';
    this._apiFormat = 'json';
    this._apiKey = apiKey;
};

// Client API Methods OLD

Client.prototype.getAuthorInfo = function(parameters, callback)
{
    this._get('authorinfo', this._apiFormat, parameters, callback);
};

Client.prototype.getExperts = function(parameters, callback)
{
    this._get('experts', this._apiFormat, parameters, callback);
};

Client.prototype.getLinkPosts = function(parameters, callback)
{
    this._get('linkposts', this._apiFormat, parameters, callback);
};

Client.prototype.getLinkPostCount = function(parameters, callback)
{
    this._get('linkpostcount', this._apiFormat, parameters, callback);
};

Client.prototype.getPopularTrackbacks = function(parameters, callback)
{
    this._get('populartrackbacks', this._apiFormat, parameters, callback);
};

Client.prototype.getSearch = function(parameters, callback)
{
    this._get('search', this._apiFormat, parameters, callback);
};

Client.prototype.getSearchCount = function(parameters, callback)
{
    this._get('searchcount', this._apiFormat, parameters, callback);
};

Client.prototype.getSearchHistogram = function(parameters, callback)
{
    this._get('searchhistogram', this._apiFormat, parameters, callback);
};

Client.prototype.getSearchDate = function(parameters, callback)
{
    this._get('searchdate', this._apiFormat, parameters, callback);
};

Client.prototype.getStats = function(parameters, callback)
{
    this._get('stats', this._apiFormat, parameters, callback);
};

Client.prototype.getTags = function(parameters, callback)
{
    this._get('tags', this._apiFormat, parameters, callback);
};

Client.prototype.getTop = function(parameters, callback)
{
    this._get('top', this._apiFormat, parameters, callback);
};

Client.prototype.getTrackbacks = function(parameters, callback)
{
    this._get('trackbacks', this._apiFormat, parameters, callback);
};

Client.prototype.getTrending = function(parameters, callback)
{
    this._get('trending', this._apiFormat, parameters, callback);
};

Client.prototype.getUrlInfo = function(parameters, callback)
{
    this._get('urlinfo', this._apiFormat, parameters, callback);
};

//APIv2

/* CONTENT APIs*/
/* 
Provides the top tweets for a list of terms and additional search parameters. 
The ranking is determined by the sort method.
*/
Client.prototype.getTopTweets = function(parameters, callback)
{
    this._get('content/tweets', this._apiFormat, parameters, callback);
};

/* 
Provides a large set of tweets that match the specified query and filter parameters. 
The maximum number of items returned per query is 20,000.
*/
Client.prototype.getBulkTweets = function(parameters, callback)
{
    this._get('content/bulktweets', this._apiFormat, parameters, callback);
};

/* 
Provides a stream of tweets that match the query in a time-ordered manner. 
The response is a stream of tweets, where each tweet is a JSON object in itself. 
(Note: this endpoint is on http://stream.topsy.com, instead of http://api.topsy.com). 
*/
Client.prototype.getStreamTweets = function(parameters, callback)
{
    this._apiBaseUrl = 'http://stream.topsy.com/v2';
    this._get('content/streaming', this._apiFormat, parameters, callback);
};

/* 
Provides the top links for a list of terms and additional search parameters. 
The ranking is determined by the sort method. 
*/
Client.prototype.getLinks = function(parameters, callback)
{
    this._get('content/links', this._apiFormat, parameters, callback);
};

/* 
Provides the top photos for a list of terms and additional search parameters. 
The ranking is determined by the sort method. 
*/
Client.prototype.getPhotos = function(parameters, callback)
{
    this._get('content/photos', this._apiFormat, parameters, callback);
};

/* 
Provides the top videos for a list of terms and additional search parameters. 
The ranking is determined by the sort method.
*/
Client.prototype.getVideos = function(parameters, callback)
{
    this._get('content/videos', this._apiFormat, parameters, callback);
};

/* 
Returns the full trackback history of an url in reverse chronological order (up to 10,000 results).
*/
Client.prototype.getCitations = function(parameters, callback)
{
    this._get('content/citations', this._apiFormat, parameters, callback);
};

/* 
Provides the full reply thread to a specific tweet.
*/
Client.prototype.getConversation = function(parameters, callback)
{
    this._get('content/conversation', this._apiFormat, parameters, callback);
};

/* 
Look up tweets by tweet ID
*/
Client.prototype.getTweet = function(parameters, callback)
{
    this._get('content/tweet', this._apiFormat, parameters, callback);
};

/* 
Returns true if a tweet is still valid, false otherwise. This is useful to check for 
tweet deletions that occur after a tweet was first returned.
*/
Client.prototype.getValid = function(parameters, callback)
{
    this._get('content/validate', this._apiFormat, parameters, callback);
};

/* 
Provides a list of potential region integer IDs based on a search string.
*/
Client.prototype.getLocation = function(parameters, callback)
{
    this._get('content/location', this._apiFormat, parameters, callback);
};


/* METRIC APIs */
/* 
Provides volume of tweet mentions over time for a list of keywords.
*/
Client.prototype.getMentions = function(parameters, callback)
{
    this._get('metrics/mentions', this._apiFormat, parameters, callback);
};

/* 
Provides volume of tweet citations over time for a list of keywords.
*/
Client.prototype.getCitations = function(parameters, callback)
{
    this._get('metrics/citations', this._apiFormat, parameters, callback);
};

/* 
Provides volume of tweet impressions over time for a list of keywords.
*/
Client.prototype.getImpressions = function(parameters, callback)
{
    this._get('metrics/impressions', this._apiFormat, parameters, callback);
};

/* 
Returns the Topsy Sentiment Score over time. The Topsy Sentiment Score, 
ranging from 0 to 100, is a normalized score based on sentiment on all 
tweet mentioning the query term(s) in the specified time period.
*/
Client.prototype.getSentiment = function(parameters, callback)
{
    this._get('metrics/sentiment', this._apiFormat, parameters, callback);
};

/* 
Provides mention metrics in a specific region and its corresponding subregions 
for a list of query terms. If no region is specified, mentions for all countries are returned.
*/
Client.prototype.getGeo = function(parameters, callback)
{
    this._get('metrics/geo', this._apiFormat, parameters, callback);
};


/* INSIGHTS APIs */
/* 
Returns a list of related terms for terms entered.
*/
Client.prototype.getRelatedTerms = function(parameters, callback)
{
    this._get('insights/relatedterms', this._apiFormat, parameters, callback);
};

/* 
Provides a list of authors who mention the specified query term(s), 
sorted by frequency of tweets and the author’s influence level.
*/
Client.prototype.getInfluencers = function(parameters, callback)
{
    this._get('insights/influencers', this._apiFormat, parameters, callback);
};

/* 
Returns true if a tweet is still valid, false otherwise. This is useful to 
check for tweet deletions that occur after a tweet was first returned.
*/
Client.prototype.getAuthor = function(parameters, callback)
{
    this._get('insights/author', this._apiFormat, parameters, callback);
};


// Private

Client.prototype._get = function(resource, format, parameters, callback)
{
    var self = this;

    var requestUrlString = this._apiBaseUrl + '/' + resource + '.' + format
        + '?'
        + 'apikey=' + this._apiKey;

    for (var key in parameters)
    {
        var value = parameters[key];
        if (value instanceof Array)
        {
            value = value.join(',');
        }

        requestUrlString = requestUrlString + '&' + key + '=' + escape(value);
    }

    request(requestUrlString, function (error, response, body) {
        if (error)
        {
            callback(error, undefined);

            return;
        }

        // Error handling for status codes documented at
        // http://code.google.com/p/otterapi/wiki/ErrorHandling
        var errorMessage = null;
        switch(response.statusCode)
        {
            case 400:
                errorMessage = 'Parameter check failed.';
                break;
            case 403:
                errorMessage = 'Forbidden';
                break;
            case 404:
                errorMessage = 'Action not supported.';
                break;
            case 500:
                errorMessage = 'Unexpected internal error.';
                break;
            case 503:
                errorMessage = 'Temporarily unavailable';
                break;
        }

        if (errorMessage !== null)
        {
            callback(new Error(errorMessage), undefined);

            return;
        }

        var result = JSON.parse(body);
        if (result.response !== undefined)
        {
            callback(undefined, result.response);

            return;
        }
    });
};

module.exports = Client;
