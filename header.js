var modifiedHeaders = $request.headers;
modifiedHeaders['Referer'] = 'https://www.weibo.com';

$done({headers : modifiedHeaders});
