setInterval(checkLeads, 5000); //Check for leads every 5 seconds
function checkLeads() {

    //Don't forget, jquery is required for $.getJSON

    $.getJSON("https://d1ph51qsmnjpvt.cloudfront.net/public/external/check2.php?testing=0&callback=?", //Hint: change to testing=1 for test leads
        function (leads) {
            var completed_leads = leads.length;
            if (completed_leads) {
                var offer_ids = [];
                var earnings_in_cents = 0;
                $.each(leads, function (key, lead) {
                    offer_ids.push(parseInt(lead.offer_id));
                    earnings_in_cents += parseFloat(lead.points);
                    document.getElementById("PF").innerHTML = "Status : <b style='color: #e75e8d;border-bottom: 1px solid #e75e8d;'>Completed</b>";
                    document.getElementById("PF2").innerHTML = "Status : <b style='color: #e75e8d;border-bottom: 1px solid #e75e8d;'>Completed</b>"
                });
                console.log("SUMMARY: User has completed " + completed_leads + " leads, for $" + (earnings_in_cents / 100) + " earnings, on offer ids: " + offer_ids.join(","));
            }
            else {
                console.log("No leads were found");
            }
        });
}
