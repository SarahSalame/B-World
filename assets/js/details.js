document.addEventListener("DOMContentLoaded", function () {
    const bookId = localStorage.getItem("selectedBookId");

    if (bookId) {
        fetch(`https://example-data.draftbit.com/books/${bookId}`)
            .then(response => response.json())
            .then(book => {
                document.getElementById("book-image").src = book.image_url;
                document.getElementById("book-title").textContent = book.title;
                document.getElementById("book-author").textContent = book.authors;
                document.getElementById("book-description").textContent = book.description;
                document.getElementById("book-pages").textContent = book.num_pages;
                document.getElementById("book-rating").textContent = book.rating;
                document.getElementById("book-reviews").textContent = book.review_count ;
            })
            .catch(error => console.error("حدث خطأ أثناء جلب تفاصيل الكتاب:", error));
    } 
});