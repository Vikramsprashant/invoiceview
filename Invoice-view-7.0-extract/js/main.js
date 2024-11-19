document.addEventListener('DOMContentLoaded', function() {
    // Sample data
    const relatedDocuments = [
        { id: '123456', name: 'PO #123456', status: 'Partially Received' },
        { id: '789012', name: 'Invoice #789012', status: 'New' },
        { id: '345678', name: 'Shipment #345678', status: 'Approved' }
    ];

    const lineItems = [
        { itemNumber: '322', description: 'Item A - Food supplies', quantity: 1, uom: 'EA', rate: 122.00, amount: 122.00 },
        { itemNumber: '333', description: 'Item B - Cleaning supplies', quantity: 2, uom: 'EA', rate: 45.00, amount: 90.00 },
        { itemNumber: '342', description: 'Item C - Kitchenware', quantity: 1, uom: 'EA', rate: 78.50, amount: 78.50 }
    ];

    // Populate related documents
    // const relatedDocsContainer = document.getElementById('related-documents');
    // relatedDocuments.forEach(doc => {
    //     const listItem = document.createElement('li');
    //     listItem.innerHTML = `<strong>${doc.name}:</strong> <span class="badge bg-secondary">${doc.status}</span>`;
    //     relatedDocsContainer.appendChild(listItem);
    // });

    // Populate line items
    const lineItemsContainer = document.getElementById('line-items');
    lineItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.itemNumber}</td>
            <td>${item.description}</td>
            <td>${item.quantity}</td>
            <td>${item.uom}</td>
            <td>$${item.rate.toFixed(2)}</td>
            <td>$${item.amount.toFixed(2)}</td>
        `;
        lineItemsContainer.appendChild(row);
    });
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.tab-content').forEach(section => {
        section.style.display = 'none';
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Set the clicked tab as active
    event.target.classList.add('active');
}

 // Toggle icon rotation on collapse
 $('#collapseOne').on('show.bs.collapse', function () {
    $('.toggle-icon').addClass('rotate'); // Rotate icon when expanding
});

$('#collapseOne').on('hide.bs.collapse', function () {
    $('.toggle-icon').removeClass('rotate'); // Reset rotation when collapsing
});

// Action Functions
function submitInvoice() {
    alert('Invoice submitted.');
}

function editInvoice() {
    alert('Edit mode activated.');
}

function closeInvoice() {
    alert('Invoice closed.');
}
