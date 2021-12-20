<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <button onclick="window.location.href='{{ route('register')}}'">register</button>
    <button onclick="window.location.href='{{ route('login', App::getLocale()) }}'">login</button>
    {{ __('Laravel') }}

    <form action="{{route('search')}}" method="GET">
    <input type="text" name="s" required/>
    <button type="submit">Submit</button>
</form>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"
         href="{{route('lang.switch', App::getLocale())}}" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="flag-icon flag-icon-{{Config::get('languages')[App::getLocale()]['flag-icon']}}"></span> {{ Config::get('languages')[App::getLocale()]['display'] }}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        @foreach (Config::get('languages') as $lang => $language)
            @if ($lang != App::getLocale())
                    <a class="dropdown-item" href="{{ route('lang.switch', $lang) }}"><span class="flag-icon flag-icon-{{$language['flag-icon']}}"></span> {{$language['display']}}</a>
              @endif
        @endforeach
        </div>
    </li>

    @foreach ($x as $y)
        @foreach ($y as $g)
                {{ $g->category }}
        @endforeach
    @endforeach



</body>
<script src="{{ asset('js/index.js') }}"></script>
</html>
