<!doctype html>
<html>
<head>
  <title>Appointment</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="csrf-token" content="{{ csrf_token() }}" />
  <link href="/css/app.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <div class="container" id="app">
    @yield("content")
  </div>

  <script type="text/javascript" src="/js/app.js"></script>
</body>
</html>
