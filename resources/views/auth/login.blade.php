@extends('layout.default_login_two')
@push('after-style')
@endpush
@section('content')
    <div class="row">

        <div class="col-xl-12 p-0">
            <div class="login-card login-dark">
                <div>

                    <div class="login-main">
                        <form class="theme-form" action="{{ route('login') }}" method="POST">
                            @csrf
                            <div class="text-center">
                                <img class="w-25 mb-3" src="{{ asset('images/logo.png') }}" alt="grooming">
                                <h5>Selamat Datang</h5>
                                <p>Masuk untuk menggunakan akun HIMA SI</p>
                            </div>

                            <div class="form-group">
                                <label class="col-form-label">NTA</label>
                                <input class="form-control" type="text" required="" placeholder="nta"
                                    name="nta">
                                <div class="invalid-feedback">Please enter your valid password </div>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label">Password</label>
                                <div class="form-input position-relative">
                                    <input class="form-control" type="password" name="password" required=""
                                        placeholder="*********">
                                    <div class="show-hide"><span class="show"> </span></div>
                                </div>
                                @if ($errors->has('nta'))
                                    <h6><span class="badge badge-danger mt-3">{{ $errors->first('nta') }}</span></h6>
                                @endif
                            </div>
                            <div class="form-group mb-0">
                                <div class="checkbox p-0">
                                    <input id="checkbox1" type="checkbox">
                                    <label class="text-muted" for="checkbox1">Ingat password</label>
                                </div>
                                <button class="btn btn-primary btn-block w-100 mb-2" type="submit">Login</button>
                                <a class="btn btn-primary btn-block w-100" href="{{ route('home') }}">Kunjungi Situs Unikom!</a>
                            </div>

                            {{-- <p class="mt-4 mb-0 text-center">Belum punya akun?<a class="ms-2" href="/sign-up">Buat
                                    Akun</a></p> --}}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('after-script')
@endpush
