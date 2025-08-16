<x-app-layout>
    <div class="py-4">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <h1 class="text-2xl mb-4">{{ $post->title }}</h1>

                <!-- User Avatar -->
                <div class="flex gap-4">
                    @if ($post->user->image)
                        <img src="{{ $post->user->imageUrl() }}" alt="{{ $post->user->username }}"
                            class="w-16 h-16 rounded-full">
                    @else
                        <img src="https://i.pinimg.com/1200x/1b/fd/ea/1bfdea0ca18a2f8403106ac973f22c55.jpg"
                            alt="Default Avatar" class="w-16 h-16 rounded-full">
                    @endif

                    <div>
                        <div class="flex gap-2 items-center mb-2">
                            <h3>{{ $post->user->name }}</h3>
                            &middot;
                            <a href="#" class="text-emerald-600">{{ __('Follow') }}</a>
                        </div>
                        <div class="flex gap-2 text-sm text-gray-500">
                            {{ $post->readTime() }} min read
                            &middot;
                            {{ $post->created_at->format('M d, Y') }}
                        </div>
                    </div>
                </div>

                <!-- Clap -->
                <x-clap-button />

                <!-- Post Content -->
                <div class="mt-8">
                    <img src="{{ $post->imageUrl() }}" alt="{{ $post->title }}" class="w-full h-auto rounded-lg">

                    <div class="mt-4">
                        {{ $post->content }}
                    </div>

                    <div class="mt-8">
                        <span class="px-4 py-2 bg-gray-200 rounded-2xl">
                            {{ $post->category->name }}
                        </span>
                    </div>

                    <!-- Clap -->
                    <x-clap-button />
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
