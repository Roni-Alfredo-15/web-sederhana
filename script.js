document.addEventListener("DOMContentLoaded", function () {
    const pdfList = [
        { name: "Tugas 1", file: "pdfs/4332311024_Roni-Alfredo-Simamora_Tugas_Docker_1.pdf" },
        { name: "Tugas 2", file: "pdfs/4332311024-Roni_LAPORAN RELATIONAL DAN NONREALTIONAL DATABASE_2.pdf" },
        { name: "Tugas 3", file: "pdfs/4332311024_Roni-Alfredo_Practical Module-Type of Access Control_3.pdf" },
        { name: "Tugas 4", file: "pdfs/4332311024_SQL INJECTION_4.pdf" },
        { name: "Tugas 5", file: "pdfs/4332311024_Roni-Alfredo_Redis vs ArangoDB_5.pdf" },
        { name: "Tugas 6", file: "pdfs/4332311024_TUGAS 10 _ KLASIFIKASI KEAMANAN DATABASE_6.pdf" },
        { name: "Tugas 7", file: "pdfs/43332311024_LAPORAN PENGUJIAN ENCRYPTION DATA IN TRANSIT_7.pdf" }
    ];

    const listContainer = document.getElementById("pdf-list");

    pdfList.forEach(pdf => {
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.href = pdf.file;
        link.textContent = pdf.name;
        link.target = "_blank"; // Buka di tab baru
        listItem.appendChild(link);
        listContainer.appendChild(listItem);
    });
});
