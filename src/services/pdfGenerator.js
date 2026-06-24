import jsPDF from "jspdf";

export function exportTripPDF(trip) {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(22);
  doc.text(`${trip.destination} Travel Plan`, 20, y);

  y += 15;

  doc.setFontSize(12);

  doc.text(`Duration: ${trip.days} Days`, 20, y);
  y += 8;

  doc.text(`Travelers: ${trip.travelers}`, 20, y);
  y += 8;

  doc.text(`Travel Style: ${trip.travelStyle}`, 20, y);
  y += 8;

  doc.text(
    `Budget: ₹${trip.totalBudget.toLocaleString()}`,
    20,
    y
  );

  y += 15;

  doc.setFontSize(16);
  doc.text("Budget Breakdown", 20, y);

  y += 10;

  doc.setFontSize(12);

  doc.text(
    `Hotel: ₹${trip.budgetBreakdown.hotelBudget.toLocaleString()}`,
    20,
    y
  );
  y += 8;

  doc.text(
    `Food: ₹${trip.budgetBreakdown.foodBudget.toLocaleString()}`,
    20,
    y
  );
  y += 8;

  doc.text(
    `Transport: ₹${trip.budgetBreakdown.transportBudget.toLocaleString()}`,
    20,
    y
  );
  y += 8;

  doc.text(
    `Activities: ₹${trip.budgetBreakdown.activityBudget.toLocaleString()}`,
    20,
    y
  );

  y += 15;

  doc.setFontSize(16);
  doc.text("Itinerary", 20, y);

  y += 10;

  trip.itinerary.forEach((day) => {
    doc.setFontSize(14);
    doc.text(day.title, 20, y);

    y += 8;

    doc.setFontSize(11);

    day.activities.forEach((activity) => {
      doc.text(`• ${activity}`, 25, y);
      y += 7;

      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    y += 5;
  });

  doc.save(
    `${trip.destination.toLowerCase()}-trip-plan.pdf`
  );
}