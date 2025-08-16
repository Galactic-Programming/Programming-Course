<x-layout>
    <x-slot:heading>
        Job
    </x-slot:heading>

    <h2 class="text-xl font-bold">
        {{ $job->title }}
    </h2>

    <p>
        Salary: {{ $job->salary }} / year.
    </p>

    @can('edit', $job)
        <p class="mt-6">
            <x-button href="/jobs/{{ $job->id }}/edit">
                Edit
            </x-button>
        </p>
    @endcan
</x-layout>
