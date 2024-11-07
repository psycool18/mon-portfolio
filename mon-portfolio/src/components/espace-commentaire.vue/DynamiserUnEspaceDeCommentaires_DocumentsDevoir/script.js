document.addEventListener('DOMContentLoaded', function() {
    // Ajoute un écouteur d'événement sur la soumission du formulaire
    document.getElementById('commentForm').addEventListener('submit', function(event) {
        // Empêche l'envoi du formulaire
        event.preventDefault();

        // Récupère les valeurs des champs
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const message = document.getElementById('message').value.trim();

        // Vérifie si l'un des champs est vide
        if (firstName === "" || lastName === "" || message === "") {
            // Affiche le message d'erreur
            document.getElementById('error-message').style.display = 'block';
        } else {
            // Cache le message d'erreur
            document.getElementById('error-message').style.display = 'none';

            // Crée un nouvel élément de commentaire
            const newComment = document.createElement('div');
            newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500', 'border-t', 'border-gray-200');

            // Ajoute le nom d'utilisateur
            const userElement = document.createElement('div');
            userElement.classList.add('flex-1', 'py-10');
            const userName = document.createElement('h3');
            userName.classList.add('font-medium', 'text-gray-900');
            userName.textContent = `${firstName} ${lastName}`;
            userElement.appendChild(userName);

            // Ajoute le texte du commentaire
            const commentTextElement = document.createElement('div');
            commentTextElement.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500');
            const commentText = document.createElement('p');
            commentText.textContent = message;
            commentTextElement.appendChild(commentText);
            userElement.appendChild(commentTextElement);

            // Ajoute le contenu à la div principale du commentaire
            newComment.appendChild(userElement);

            // Ajoute le nouveau commentaire à la section des commentaires
            document.getElementById('comment-list').appendChild(newComment);

            // Réinitialise le formulaire pour vider les champs
            document.getElementById('commentForm').reset();
        }
    });
});
