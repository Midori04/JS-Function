

function table(rad, kolonne) {

    document.write("<table border='1'>");
    for (i = 1; i <= rad; i++) {
        document.write("<tr>");
        for (j = 1; j <= kolonne; j++) {
            document.write("<td style=\"padding: 5px;\">Røyken VGS</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");

}
table(3,3);
