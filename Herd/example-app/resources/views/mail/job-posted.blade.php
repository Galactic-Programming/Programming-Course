<h2>
    {{ $job->title }}
</h2>

<p>
    Congratulations on posting a new job!
</p>

<p>
    <a href="{{ url('/jobs/' . $job->id) }}">View Job</a>
</p>
