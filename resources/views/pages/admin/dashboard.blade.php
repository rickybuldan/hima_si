@extends('layout.default_two')
@push('after-style')
    @foreach ($cssFiles as $file)
        <link rel="stylesheet" href="{{ $file }}">
    @endforeach
@endpush
@section('content')
    <div class="container-fluid">
        <div class="page-title">
            <div class="row">
                <div class="col-6">
                    <h3>{{ $subtitle }}</h3>
                </div>
                <div class="col-6">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">
                                <svg class="stroke-icon">
                                    <use href="../assets/svg/icon-sprite.svg#stroke-home"></use>
                                </svg></a></li>
                        <li class="breadcrumb-item">{{ $title }}</li>
                        <li class="breadcrumb-item active">{{ $subtitle }}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
        <div class="row">
            <div class="col-xxl-3 col-md-6 box-col-6">
                <div class="card">
                    <div class="card-header card-no-border">
                        <h5>Total Profit</h5><span class="f-light f-w-500 f-14">(Detail Profit)</span>
                    </div>
                    <div class="card-body pt-0">
                        <div class="monthly-profit">
                            <div id="profitmonthly"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-9 col-md-6 box-col-12">
                <div class="card">
                    <div class="card-header card-no-border pb-0">
                        <h5>Overview Transaksi</h5><span class="f-light f-w-500 f-14">(Transaksi dibulan <b id="this-month">ini</b> berdasarkan
                            hari)</span>
                    </div>
                    <div class="card-body pt-0">
                        <div class="visitors-container">
                            <div id="visitor-chart"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Transaksi Grooming yang baru saja selesai</h5><span>Detail Transaksi Grooming</span>
                    </div>
                    <div class="card-body pt-0">
                        <div class="table-responsive  theme-scrollbar">
                            <table id="table-list" class="dataTables_wrapper">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Tgl Transaksi</th>
                                        <th>Tgl Dibuat</th>
                                        <th>Nama Pet</th>
                                        <th>Dikerjakan Oleh</th>
                                        <th>Tgl Selesai / Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
@endpush
