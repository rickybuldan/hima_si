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
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between">
                            <div class="p-2">
                                <h5>{{ $subtitle }}</h5>
                            </div>
                            <div class="p-2">
                                <a class="btn btn-primary" id="add-btn"><i class="fa fa-plus"></i> Tambah</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive  theme-scrollbar">
                            <table id="table-list" class="dataTables_wrapper display nowrap">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>NTA</th>
                                        <th>Nama</th>
                                        <th>Kategori</th>

                                        <th>Judul</th>
                                        <th>Status</th>
                                        <th>Tipe Doc</th>
                                        <th>Isi</th>
                                        <th>File Upload</th>
                                        <th>Action</th>
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
        <div class="modal fade" id="modal-data" tabindex="-1" aria-labelledby="exampleModalCenter1" style="display: none;"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">View Data</h5>
                        <button class="btn-close py-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="basic-form">

                            <form>
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label">NTA Pengusul</label>
                                    <div class="col-sm-9">
                                        <input id="form-status" type="hidden" class="form-control" placeholder="NTA">
                                        <input id="form-nta" type="text" class="form-control" placeholder="NTA">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label">Ditujukan</label>
                                    <div class="col-sm-9 mb-0">
                                        <select class="form-select form-select-sm" id="form-tujuan">

                                        </select>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label">Kategori Berkas</label>
                                    <div class="col-sm-9 mb-0">
                                        <select class="form-select form-select-sm" id="form-kategori">

                                        </select>
                                    </div>
                                </div>
                                <div class="mb-3 row add-kategori" style="display:none">
                                    <label class="col-sm-3 col-form-label">Nama Kategori Berkas</label>
                                    <div class="col-sm-9 mb-0">
                                        <input id="form-nm-kategori" type="text" class="form-control" placeholder="Kategori Baru">
                                    </div>
                                </div>
                                <fieldset class="mb-3">
                                    <div class="row">
                                        <label class="col-form-label col-sm-3 pt-0">Tipe Berkas</label>
                                        <div class="col-sm-9">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="form-type"
                                                    value="10" checked>
                                                <label class="form-check-label">
                                                    Pengajuan
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="form-type"
                                                    value="20">
                                                <label class="form-check-label">
                                                    Laporan
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label">Judul</label>
                                    <div class="col-sm-9">
                                        <input id="form-judul" type="text" class="form-control" placeholder="judul">
                                    </div>
                                </div>
                                <div class="pengajuan-form">
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Isi</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control" id="form-isi" placeholder="Isi" required=""></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="laporan-form">
                                    <div class="mb-3 row">
                                        <label class="col-sm-3 col-form-label">Berkas Program</label>
                                        <div class="col-sm-9">
                                            <label for="form-file" id="fileLabel">Choose a file...</label>
                                            <input id="form-file" type="file" accept="application/pdf"
                                                class="form-control">
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                        <button type="button" id="save-btn" class="btn btn-primary">Save</button>
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
