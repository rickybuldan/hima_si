@extends('layout.default_two')
@push('after-style')
    @foreach ($cssFiles as $file)
        <link rel="stylesheet" href="{{ $file }}">
    @endforeach
    <link rel="stylesheet" type="text/css" href="{{ asset('template/admin2/assets/css/vendors/owlcarousel.css') }}">
@endpush

@section('content')
    {{-- <div class="container-fluid">
        <div class="page-title">
            <div class="row">
                <div class="col-6">
                    <h3>{{ $subtitle }}</h3>
                </div>
                <div class="col-6">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">
                                <svg class="stroke-icon">
                                    <use href="{{asset('template/admin2/assets/svg/icon-sprite.svg#stroke-home')}}""></use>
                                </svg></a></li>
                        <li class="breadcrumb-item">{{ $title }}</li>
                        <li class="breadcrumb-item active">{{ $subtitle }}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div> --}}
    <!-- Container-fluid starts-->

    <div class="container-fluid p-3">
        <div class="row"
            style="width: 100%;background-image: url({{ asset('template/admin2/assets/images/email-template/invoice-3/bg-0.png') }});background-position: center;background-size: cover;background-repeat: no-repeat; border-radius: 10px;">
            <div class="col-xxl-9 col-md-6 box-col-12">
                {{-- <div class="card">
                    <div class="card-header card-no-border">
                        <h5>Total Profits</h5><span class="f-light f-w-500 f-14">(Detail Profit)</span>
                    </div>
                    <div class="card-body pt-0">
                        <div class="monthly-profit">
                            <div id="profitmonthly"></div>
                        </div>
                    </div>
                </div> --}}
                <div class="p-5">
                    <div class="">
                        <h2>HIMA SI</h2>
                        <p class="my-3 w-50 f-w-300 f-14">Sistem Informasi Pengelolaan Kegiatan yang di khususkan pada
                            organisasi HIMA-SI (Himpunan Mahasiswa Sistem Informasi) </p>
                    </div>
                    <div class="">
                        <a class="btn btn-primary" href="https://www.unikom.ac.id/">Kunjungi Situs Unikom!</a>
                    </div>
                </div>
            </div>

            <div class="col-xxl-3 col-md-6 box-col-6 d-flex align-items-center justify-content-center">
                <img class="w-50" src="{{ asset('images/logo.png') }}" alt="grooming">
            </div>

        </div>
        <section class="pt-5 text-center container">
            <div class="row">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h3 class="fw-light">Tentang HIMA SI</h3>
                </div>
            </div>
        </section>
        <div class="row d-flex justify-content-center p-5">
            <div class="col-xxl-3 col-md-6 box-col-6 card me-3">
                <figure class="figure pt-3 px-0"><strong class="mb-2">Tujuan</strong>
                    <figcaption class="figure-caption "
                        style="  text-align: justify; /* Align text to both left and right edges */
        text-justify: inter-word;">
                        Terbentuknya insan akademis, pencipta dan pengabdi yang bertakwa
                        kepada Tuhan YME, berbudi luhur, beretos kerja, professional, inovatif, kreatif, bertanggung jawab
                        memiliki idealisme dan integritas yang tinggi. Yang sesuai dengan asas HIMA SI serta berguna bagi
                        bangsa dan negara.</figcaption>
                </figure>
            </div>
            <div class="col-xxl-3 col-md-6 box-col-6 card me-3">
                <figure class="figure pt-3 px-0"><strong class="mb-2">Tugas</strong>
                    <figcaption class="figure-caption "
                        style="  text-align: justify; /* Align text to both left and right edges */
        text-justify: inter-word;">
                        HIMA SI mempunyai tugas pokok menyelenggarakan kegiatan yang bersifat
                        kependidikan, keterampilan, kecerdasan dan pengabdian kepada masyarakat.</figcaption>
                </figure>
            </div>
            <div class="col-xxl-3 col-md-6 box-col-6 card me-3">
                <figure class="figure pt-3 px-0"><strong class="mb-2">Fungsi</strong>
                    <figcaption class="figure-caption "
                        style="  text-align: justify; /* Align text to both left and right edges */
        text-justify: inter-word;">
                        HIMA SI berfungsi sebagai lembaga pendidikan di luar kelas dan di
                        luar keluarga serta sebagai wadah aspirasi,berpikir kritis,berkreasi, beraktivitas, berapresiasi dan
                        keterampilan bagi mahasiswa Sistem Informasi dan Manajemen Infomatika Universitas Komputer
                        Indonesia.</figcaption>
                </figure>
            </div>
        </div>
    </div>
    <section class=" text-center container mb-5">
        <div class="row">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h3 class="fw-light">Foto Kegiatan</h3>
            </div>
        </div>
    </section>
    <div class="row">
        <div class="row d-flex justify-content-center">
            <div class="card d-flex justify-content-center align-items-center bg-transparent "
                style="text-align:center!important;">
                <img class="card-img-top w-50" src="{{ asset('images/img-si-1.jpg') }}" alt="grooming">
            </div>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 p-5">
        <div class="col">
            <div class="card shadow-sm">
                <img class="card-img-top" src="{{ asset('images/foto-1.jpg') }}" alt="grooming">
                {{-- <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div> --}}
            </div>
        </div>
        <div class="col">
            <div class="card shadow-sm">
                <img class="card-img-top" src="{{ asset('images/img-si-3.jpg') }}" alt="grooming">

                {{-- <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div> --}}
            </div>
        </div>
        <div class="col">
            <div class="card shadow-sm">
                <img class="card-img-top" src="{{ asset('images/img-si-2.jpg') }}" alt="grooming">
                {{-- <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                </div> --}}
            </div>
        </div>
    </div>
    <div class="content-aspirasi">
        <section class=" text-center container">
            <div class="row">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h3 class="fw-light">Aspirasi</h3>
                </div>
            </div>
        </section>
        <div class="p-5">
            <div class="mb-3 row">
                <div class="col-sm-3">
                    <input id="form-status" type="hidden" class="form-control" placeholder="NTA">
                    <input id="form-nta" type="text" class="form-control" placeholder="NIM">
                </div>
            </div>
            <div class="mb-3 row">
                <div class="col-sm-3">
                    <input id="form-nama" type="text" class="form-control" placeholder="Nama">
                </div>
            </div>
            <div class="mb-3 row">

                <div class="col-sm-3">
                    <input id="form-judul" type="text" class="form-control" placeholder="Judul">
                </div>
            </div>
            <textarea class="form-control" id="form-isi" placeholder="Isi aspirasi" rows="5"></textarea>
            <div class="text-start mt-3">
                <a class="btn btn-primary" id="save-btn">Simpan aspirasi</a>
            </div>
        </div>
    </div>

    {{-- 
    <div id="contact-kimi" class="row p-5">
        <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="klbfooterwidget footer-wrapper mb-30 widget_footer_about">
                <h3 class="footer-title">Tentang Kami</h3>
                <div class="footer-text">
                    <p>KIMI SHOP adalah penyedia jasa layanan grooming dan penitipan hewan yang berada di bandung </p>
                </div>
                <div class="footer-icon">
                    <a href="http://www.facebook.com/" target="_blank"><i class="fa fa-facebook fs=2 me-2"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter fs=2 me-2"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram fs=2 me-2"></i></a>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="klbfooterwidget footer-wrapper ml-20 mb-30 widget_footer_contact">
                <h3 class="footer-title">Kontak Kami</h3>
                <p class="m-0 p-0"><i class="fa fa-map-marker me-1"></i>Bandung, Indonesia
                </p>
                <p class="m-0 p-0"> <i class="fa fa-phone me-1"></i>+ 888 456-7890
                </p>
                <p class="m-0 p-0"><i class="fa fa-envelope me-1"></i>kimishop@gmail.com</p>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="klbfooterwidget footer-wrapper mb-30 widget_footer_about">
                <h3 class="footer-title">Grooming</h3>
                <div class="footer-text">
                    <p>Jasa pelayanan yang ada di KIMI SHOP untuk merawat kesehatan hewan peliharan anda</p>
                </div>

            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="klbfooterwidget footer-wrapper mb-30 widget_footer_about">
                <h3 class="footer-title">Penitipan</h3>
                <div class="footer-text">
                    <p>Jasa pelayanan yang ada di KIMI SHOP untuk anda yang ingin menitipkan hewan peliharaan anda di
                        penitipan yang nyaman</p>
                </div>

            </div>
        </div>

    </div> --}}



    <footer class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 footer-copyright text-center">
                    <p class="mb-0">Copyright 2024 © HIMA-SI (Sistem Informasi Kegiatan Organisasi Himpunan) </p>
                </div>
            </div>
        </div>
    </footer>
    <!-- Container-fluid Ends-->
@endsection


@push('after-script')
    <script>
        @foreach ($varJs as $varjsi)
            {!! $varjsi !!}
        @endforeach
    </script>


    @foreach ($javascriptFiles as $file)
        <script src="{{ $file }}"></script>
    @endforeach
    <script src="{{ asset('template/admin2/assets/js/owlcarousel/owl.carousel.js') }}"></script>
@endpush
