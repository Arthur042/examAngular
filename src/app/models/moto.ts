export class Moto {
    id ?: number;
    venteFlash ?: boolean;
    nom ?: string;
    prix ?: number;
    type ?: string;
    marque ?: string;
    cylindree ?: number;
    annee ?: number;
    kilometres ?: number;
    image ?: string;

    constructor(id ?: number, venteFlash ?: boolean, nom ?: string, prix ?: number, type ?: string, marque ?: string, cylindree ?: number, annee ?: number, kilometres ?: number, image ?: string) {
        this.id = id;
        this.venteFlash = venteFlash;
        this.nom = nom;
        this.prix = prix;
        this.type = type;
        this.marque = marque;
        this.cylindree = cylindree;
        this.annee = annee;
        this.kilometres = kilometres;
        this.image = image;
    }
}
