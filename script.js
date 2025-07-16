// Validación del formulario
(function () {
    'use strict'
    
    // Obtener el formulario
    const form = document.getElementById('contactForm');
    
    // Agregar evento de submit
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        form.classList.add('was-validated');
    }, false);
    
    // Validación personalizada para el email
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function () {
        if (emailInput.validity.typeMismatch) {
            emailInput.setCustomValidity('Por favor ingresa un correo electrónico válido.');
        } else {
            emailInput.setCustomValidity('');
        }
    });
})();

// Botón de alerta
document.getElementById('alertaBtn').addEventListener('click', function() {
    // Crear un modal de Bootstrap personalizado
    const alertModal = new bootstrap.Modal(document.createElement('div'));
    
    // Configurar el modal
    const modalElement = alertModal._element;
    modalElement.classList.add('modal', 'fade');
    modalElement.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">¡Alerta Importante!</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Gracias por visitar nuestra página web. Esta es una alerta personalizada creada con JavaScript.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    `;
    
    // Agregar el modal al documento
    document.body.appendChild(modalElement);
    
    // Mostrar el modal
    alertModal.show();
    
    // Limpiar después de cerrar
    modalElement.addEventListener('hidden.bs.modal', function () {
        document.body.removeChild(modalElement);
    });
});

// Efecto de hover para las filas de la tabla
document.querySelectorAll('.table tbody tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f1f1f1';
        this.style.transition = 'background-color 0.3s ease';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});