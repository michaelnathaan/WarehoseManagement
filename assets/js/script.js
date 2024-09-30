$(document).ready(function() {
    const menuToggle = $('#menu-toggle');
    const navbar = $('.navbar');
    const menuList = $('.navbar ul');
    const logo = $('.logo');

    menuToggle.click(function() {
        navbar.toggleClass('menu-active');
        menuList.each(function() {
            $(this).toggleClass('show-menu');
        });
    });
    
    logo.click(function() {
        window.location.href = '/';
    });

    // Function to open the Add Modal
    function openAddModal() {
        $("#addModal").show();
    }

    // Function to close the Add Modal
    function closeAddModal() {
        $("#addModal").hide();
    }

    // Function to open the Edit Modal
    function openEditModal() {
        $("#editModal").show();
    }

    // Function to close the Edit Modal
    function closeEditModal() {
        $("#editModal").hide();
    }

    // Function to open the Delete Modal
    function openDeleteModal() {
        $("#deleteModal").show();
    }

    // Function to close the Delete Modal
    function closeDeleteModal() {
        $("#deleteModal").hide();
    }

    // Bind the click event to open the Edit Modal
    $(".edit-button").on("click", openEditModal);

    // Bind the click event to close the Edit Modal
    $("#editModal .close-button").on("click", closeEditModal);
    $("#editModal .submit-button").on("click", closeEditModal);

    // Bind the click event to open the Edit Modal
    $("#add-category").on("click", openAddModal);

    // Bind the click event to close the Edit Modal
    $("#addModal .close-button").on("click", closeAddModal);
    $("#addModal .submit-button").on("click", closeAddModal);

    // Bind the click event to open the Delete Modal
    $(".delete-button").on("click", openDeleteModal);

    // Bind the click event to close the Delete Modal
    $("#deleteModal .close-button").on("click", closeDeleteModal);
    $("#deleteModal .delete-button").on("click", closeDeleteModal);
});

$('#login-form').submit(function (event) {
    var email = $('#email').val();
    var password = $('#password').val();

    if ($.trim(email) === '') {
        alert('Email harus diisi');
        event.preventDefault(); // Menghentikan pengiriman formulir
    } else if (!isValidEmail(email)) {
        alert('Format email tidak valid');
        event.preventDefault();
    } else if ($.trim(password) === '') {
        alert('Password harus diisi');
        event.preventDefault();
    }
});

$("#register-form").submit(function(event) {
    // Reset pesan kesalahan
    $(".error-message").remove();

    // Validasi Name
    var name = $("#name").val();
    if (name.trim() === "") {
        event.preventDefault();
        alert("Name harus diisi");
    }

    // Validasi Email
    var email = $("#email").val();
    if (email.trim() === "") {
        event.preventDefault();
        alert("Email harus diisi");
    } else if (!isValidEmail(email)) {
        event.preventDefault();
        alert("Format email tidak valid");
    }

    // Validasi Password
    var password = $("#password").val();
    var passwordConfirmation = $("#password-confirmation").val();
    var passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
    if (password.trim() === "") {
        event.preventDefault();
        alert("Password harus diisi");
    } else if (!passwordPattern.test(password)) {
        event.preventDefault();
        alert("Password harus memiliki minimal 8 karakter dan mengandung setidaknya satu huruf kapital, satu simbol, serta satu angka.");
    }

    // Validasi Confirm Password
    if (password !== passwordConfirmation) {
        event.preventDefault();
        alert("Konfirmasi password tidak sesuai");
    }

    // Validasi Terms and Conditions Checkbox
    if (!$("#remember").is(":checked")) {
        event.preventDefault();
        alert("Anda harus menyetujui syarat dan ketentuan.");
    }
});

function isValidEmail(email) {
    // Sederhana: Verifikasi format email dengan regex
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}