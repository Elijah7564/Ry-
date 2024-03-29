module.exports = {
	// Vous pouvez personnaliser la langue ici ou directement dans les fichiers de commande
	onlyadminbox: {
		shortDescription: "Activer/désactiver la boîte réservée aux administrateurs pour utiliser le bot",
		longDescription: "Activer/désactiver la boîte réservée aux administrateurs pour utiliser le bot",
		guide: "   {pn} [on | off]",
		text: {
			turnedOn: "Mode activé : seuls les administrateurs du groupe peuvent utiliser le bot",
			turnedOff: "Mode désactivé : tout le monde peut utiliser le bot",
			syntaxError: "Erreur de syntaxe, utilisez uniquement {pn} on ou {pn} off"
		}
	},
	adduser: {
		shortDescription: "Ajouter un utilisateur à la boîte de discussion",
		longDescription: "Ajouter un utilisateur à votre boîte de discussion",
		guide: "   {pn} [lien du profil | uid]",
		text: {
			alreadyInGroup: "Déjà dans le groupe",
			successAdd: "- %1 membres ajoutés avec succès au groupe",
			failedAdd: "- Échec de l'ajout de %1 membres au groupe",
			approve: "- %1 membres ajoutés à la liste d'approbation",
			invalidLink: "Veuillez entrer un lien Facebook valide",
			cannotGetUid: "Impossible d'obtenir l'UID de cet utilisateur",
			linkNotExist: "Ce lien de profil n'existe pas",
			cannotAddUser: "Le bot est bloqué ou cet utilisateur interdit aux inconnus d'ajouter au groupe"
		}
	},
	admin: {
		shortDescription: "Ajouter, supprimer, modifier le rôle d'administrateur",
		longDescription: "Ajouter, supprimer, modifier le rôle d'administrateur",
		guide: "   {pn} [add | -a] <uid> : Ajouter le rôle d'administrateur à l'utilisateur\n\t  {pn} [remove | -r] <uid> : Supprimer le rôle d'administrateur de l'utilisateur\n\t  {pn} [list | -l] : Liste de tous les administrateurs",
		text: {
			added: "✅ | Rôle d'administrateur ajouté pour %1 utilisateurs :\n%2",
			alreadyAdmin: "\n⚠️ | %1 utilisateurs ont déjà le rôle d'administrateur :\n%2",
			missingIdAdd: "⚠️ | Veuillez saisir l'ID ou mentionner l'utilisateur pour ajouter le rôle d'administrateur",
			removed: "✅ | Rôle d'administrateur supprimé pour %1 utilisateurs :\n%2",
			notAdmin: "⚠️ | %1 utilisateurs n'ont pas le rôle d'administrateur :\n%2",
			missingIdRemove: "⚠️ | Veuillez saisir l'ID ou mentionner l'utilisateur pour supprimer le rôle d'administrateur",
			listAdmin: "👑 | Liste des administrateurs :\n%1"
		}
	},
	adminonly: {
		shortDescription: "Activer/désactiver le mode réservé aux administrateurs pour utiliser le bot",
		longDescription: "Activer/désactiver le mode réservé aux administrateurs pour utiliser le bot",
		guide: "{pn} [on | off]",
		text: {
			turnedOn: "Mode activé : seuls les administrateurs peuvent utiliser le bot",
			turnedOff: "Mode désactivé : tout le monde peut utiliser le bot",
			syntaxError: "Erreur de syntaxe, utilisez uniquement {pn} on ou {pn} off"
		}
	},
	all: {
		shortDescription: "Mentionner tous les membres",
		longDescription: "Mentionner tous les membres dans votre groupe de discussion",
		guide: "{pn} [contenu | vide]"
	},
	anime: {
		shortDescription: "Image anime aléatoire",
		longDescription: "Image anime aléatoire",
		guide: "{pn} <endpoint>\n   Liste des points d'extrémité : neko, kitsune, hug, pat, waifu, cry, kiss, slap, smug, punch",
		text: {
			loading: "Initialisation de l'image, veuillez patienter...",
			error: "Une erreur est survenue, veuillez réessayer ultérieurement"
		}
	},
  antichgeinfobox: {
		shortDescription: "Anti modification de la boîte d'informations",
		longDescription: "Activer/désactiver l'anti modification de la boîte d'informations",
		guide: "   {pn} avt [on | off] : anti modification de l'avatar de la boîte de discussion\n   {pn} name [on | off] : anti modification du nom de la boîte de discussion\n   {pn} theme [on | off] : anti modification du thème de la boîte de discussion\n   {pn} emoji [on | off] : anti modification de l'emoji de la boîte de discussion",
		text: {
			antiChangeAvatarOn: "Activation de l'anti modification de l'avatar de la boîte de discussion",
			antiChangeAvatarOff: "Désactivation de l'anti modification de l'avatar de la boîte de discussion",
			missingAvt: "Vous n'avez pas défini d'avatar pour la boîte de discussion",
			antiChangeNameOn: "Activation de l'anti modification du nom de la boîte de discussion",
			antiChangeNameOff: "Désactivation de l'anti modification du nom de la boîte de discussion",
			antiChangeThemeOn: "Activation de l'anti modification du thème de la boîte de discussion",
			antiChangeThemeOff: "Désactivation de l'anti modification du thème de la boîte de discussion",
			antiChangeEmojiOn: "Activation de l'anti modification de l'emoji de la boîte de discussion",
			antiChangeEmojiOff: "Désactivation de l'anti modification de l'emoji de la boîte de discussion",
			antiChangeAvatarAlreadyOn: "Votre boîte de discussion a déjà activé l'anti modification de l'avatar",
			antiChangeNameAlreadyOn: "Votre boîte de discussion a déjà activé l'anti modification du nom",
			antiChangeThemeAlreadyOn: "Votre boîte de discussion a déjà activé l'anti modification du thème",
			antiChangeEmojiAlreadyOn: "Votre boîte de discussion a déjà activé l'anti modification de l'emoji"
		}
 },
  appstore: {
		shortDescription: "Recherche d'application sur l'App Store",
		longDescription: "Recherche d'application sur l'App Store",
		text: {
			missingKeyword: "Vous n'avez saisi aucun mot-clé",
			noResult: "Aucun résultat trouvé pour le mot-clé %1"
		}
	},
	autosetname: {
		shortDescription: "Changement automatique du pseudo du nouveau membre",
		longDescription: "Changement automatique du pseudo du nouveau membre",
		guide: "   {pn} set <pseudo>: utilisé pour configurer le changement automatique du pseudo, avec quelques raccourcis :\n   + {userName}: nom du nouveau membre\n   + {userID}: identifiant du membre\n   Exemple:\n    {pn} set {userName} 🚀\n\n   {pn} [on | off]: utilisé pour activer/désactiver cette fonctionnalité\n\n   {pn} [view | info]: afficher la configuration actuelle",
		text: {
			missingConfig: "Veuillez entrer la configuration requise",
			configSuccess: "La configuration a été définie avec succès",
			currentConfig: "La configuration autoSetName actuelle dans votre groupe de discussion est :\n%1",
			notSetConfig: "Votre groupe n'a pas défini la configuration autoSetName",
			syntaxError: "Erreur de syntaxe, seules les commandes \"{pn} on\" ou \"{pn} off\" peuvent être utilisées",
			turnOnSuccess: "La fonction autoSetName a été activée avec succès",
			turnOffSuccess: "La fonction autoSetName a été désactivée avec succès",
			error: "Une erreur s'est produite lors de l'utilisation de la fonction autoSetName, essayez de désactiver la fonction de lien d'invitation dans le groupe et réessayez ultérieurement"
		}
	},
	avatar: {
		shortDescription: "Créer un avatar anime",
		longDescription: "Créer un avatar anime avec signature",
		guide: "{p}{n} <identifiant du personnage ou nom du personnage> | <texte d'arrière-plan> | <signature> | <nom de la couleur d'arrière-plan ou code hexadécimal de couleur>\n{p}{n} help : voir comment utiliser cette commande",
		text: {
			initImage: "Initialisation de l'image, veuillez patienter...",
			invalidCharacter: "Actuellement, il n'y a que %1 personnages dans le système, veuillez saisir un identifiant de personnage inférieur à",
			notFoundCharacter: "Aucun personnage portant le nom %1 n'a été trouvé dans la liste des personnages",
			errorGetCharacter: "Une erreur s'est produite lors de la récupération des données du personnage :\n%1 : %2",
			success: "✅ Votre avatar\nPersonnage : %1\nID : %2\nTexte d'arrière-plan : %3\nSignature : %4\nCouleur : %5",
			defaultColor: "par défaut",
			error: "Une erreur s'est produite\n%1 : %2"
		}
	},
  badwords: {
		shortDescription: "Activer/désactiver l'avertissement de mots interdits",
		longDescription: "Activer/désactiver/ajouter/supprimer l'avertissement de mots interdits. Si un membre enfreint les règles, il recevra un avertissement. La deuxième fois, il sera exclu de la boîte de discussion.",
		guide: "   {pn} add <mots> : ajouter des mots interdits (vous pouvez ajouter plusieurs mots séparés par des virgules \",\" ou des barres verticales \"|\")\n   {pn} delete <mots> : supprimer des mots interdits (vous pouvez supprimer plusieurs mots séparés par des virgules \",\" ou des barres verticales \"|\")\n   {pn} list <cacher | laisser vide> : désactiver l'avertissement (ajoutez \"cacher\" pour masquer les mots interdits)\n   {pn} unwarn [<userID> | <@tag>] : supprimer 1 avertissement d'un membre\n   {pn} on : désactiver l'avertissement\n   {pn} off : activer l'avertissement",
		text: {
			onText: "activé",
			offText: "désactivé",
			onlyAdmin: "⚠️ | Seuls les administrateurs peuvent ajouter des mots interdits à la liste",
			missingWords: "⚠️ | Vous n'avez pas saisi les mots interdits",
			addedSuccess: "✅ | Ajouté %1 mots interdits à la liste",
			alreadyExist: "❌ | %1 mots interdits existent déjà dans la liste : %2",
			tooShort: "⚠️ | %1 mots interdits ne peuvent pas être ajoutés à la liste car ils font moins de 2 caractères : %2",
			onlyAdmin2: "⚠️ | Seuls les administrateurs peuvent supprimer des mots interdits de la liste",
			missingWords2: "⚠️ | Vous n'avez pas saisi les mots à supprimer",
			deletedSuccess: "✅ | Supprimé %1 mots interdits de la liste",
			notExist: "❌ | %1 mots interdits n'existent pas dans la liste avant : %2",
			emptyList: "⚠️ | La liste des mots interdits dans votre groupe est actuellement vide",
			badWordsList: "📑 | Liste des mots interdits dans votre groupe : %1",
			onlyAdmin3: "⚠️ | Seuls les administrateurs peuvent %1 cette fonctionnalité",
			turnedOnOrOff: "✅ | L'avertissement de mots interdits a été %1",
			onlyAdmin4: "⚠️ | Seuls les administrateurs peuvent supprimer l'avertissement de mots interdits",
			missingTarget: "⚠️ | Vous n'avez pas saisi l'ID de l'utilisateur ou l'utilisateur tagué",
			notWarned: "⚠️ | L'utilisateur %1 n'a pas été averti pour mots interdits",
			removedWarn: "✅ | Avertissement de mots interdits supprimé pour l'utilisateur %1 | %2",
			warned: "⚠️ | Des mots interdits \"%1\" ont été détectés dans votre message. Si vous continuez à enfreindre les règles, vous serez exclu du groupe.",
			warned2: "⚠️ | Des mots interdits \"%1\" ont été détectés dans votre message. Vous avez enfreint les règles 2 fois et serez exclu du groupe.",
			needAdmin: "Le bot a besoin de privilèges d'administrateur pour exclure les membres interdits",
			unwarned: "✅ | Avertissement de mots interdits supprimé pour l'utilisateur %1 | %2"
		}
	},
	balance: {
		shortDescription: "Voir votre argent",
		longDescription: "Voir votre argent ou l'argent de la personne taguée",
		guide: "   {pn} : voir votre argent\n   {pn} <@tag> : voir l'argent de la personne taguée",
		text: {
			money: "Vous avez %1$",
			moneyOf: "%1 a %2$"
		}
	},
	batslap: {
		shortDescription: "Image de claque avec une batte",
		longDescription: "Image de claque avec une batte",
		text: {
			noTag: "Vous devez taguer la personne que vous voulez gifler"
		}
  },
  busy: {
		shortDescription: "Activer/désactiver le mode Ne pas déranger",
		longDescription: "Activer/désactiver le mode Ne pas déranger. Lorsque vous êtes tagué, le bot vous notifiera.",
		guide: "   {pn} [vide | <raison>] : activer le mode Ne pas déranger\n   {pn} off : désactiver le mode Ne pas déranger",
		text: {
			turnedOff: "✅ | Le mode Ne pas déranger a été désactivé",
			turnedOn: "✅ | Le mode Ne pas déranger a été activé",
			turnedOnWithReason: "✅ | Le mode Ne pas déranger a été activé avec la raison : %1",
			alreadyOn: "L'utilisateur %1 est actuellement occupé",
			alreadyOnWithReason: "L'utilisateur %1 est actuellement occupé avec la raison : %2"
		}
	},
	callad: {
		shortDescription: "Envoyer un message à l'administrateur du bot",
		longDescription: "Envoyer un rapport, des commentaires, un bug,... à l'administrateur du bot",
		guide: "   {pn} <message>",
		text: {
			missingMessage: "Veuillez saisir le message que vous souhaitez envoyer à l'administrateur",
			sendByGroup: "\n- Envoyé depuis le groupe : %1\n- ID du fil : %2",
			sendByUser: "\n- Envoyé par l'utilisateur",
			content: "\n\nContenu :\n─────────────────\n%1\n─────────────────\nRépondez à ce message pour envoyer un message à l'utilisateur",
			success: "Votre message a été envoyé à l'administrateur avec succès !",
			reply: "📍 Réponse de l'administrateur %1 :\n─────────────────\n%2\n─────────────────\nRépondez à ce message pour continuer à envoyer des messages à l'administrateur",
			replySuccess: "Votre réponse a été envoyée à l'administrateur avec succès !",
			feedback: "📝 Commentaires de l'utilisateur %1 :\n- ID de l'utilisateur : %2%3\n\nContenu :\n─────────────────\n%4\n─────────────────\nRépondez à ce message pour envoyer un message à l'utilisateur",
			replyUserSuccess: "Votre réponse a été envoyée à l'utilisateur avec succès !"
		}
	},
	cmd: {
		shortDescription: "Gérer les commandes",
		longDescription: "Gérer vos fichiers de commandes",
		guide: "{pn} load <nom du fichier de commande>\n{pn} loadAll\n{pn} install <URL> <nom du fichier de commande> : Télécharger et installer un fichier de commande à partir d'une URL, l'URL est le chemin vers le fichier (brut)",
		text: {
			missingFileName: "⚠️ | Veuillez entrer le nom de la commande que vous souhaitez recharger",
			loaded: "✅ | Commande \"%1\" chargée avec succès",
			loadedError: "❌ | Échec du chargement de la commande \"%1\" avec l'erreur\n%2 : %3",
			loadedSuccess: "✅ | Chargée avec succès la commande \"%1\"",
			loadedFail: "❌ | Échec du chargement de la commande \"%1\"\n%2",
			missingCommandNameUnload: "⚠️ | Veuillez entrer le nom de la commande que vous souhaitez décharger",
			unloaded: "✅ | Commande \"%1\" déchargée avec succès",
			unloadedError: "❌ | Échec du déchargement de la commande \"%1\" avec l'erreur\n%2 : %3",
			missingUrlCodeOrFileName: "⚠️ | Veuillez entrer l'URL ou le code et le nom du fichier de commande que vous souhaitez installer",
			missingUrlOrCode: "⚠️ | Veuillez entrer l'URL ou le code du fichier de commande que vous souhaitez installer",
			missingFileNameInstall: "⚠️ | Veuillez entrer le nom de fichier pour enregistrer la commande (avec l'extension .js)",
			invalidUrlOrCode: "⚠️ | Impossible d'obtenir le code de la commande",
			alreadExist: "⚠️ | Le fichier de commande existe déjà. Êtes-vous sûr de vouloir écraser l'ancien fichier de commande ?\nRéagissez à ce message pour continuer",
			installed: "✅ | Commande \"%1\" installée avec succès, le fichier de commande est enregistré à %2",
			installedError: "❌ | Échec de l'installation de la commande \"%1\" avec l'erreur\n%2 : %3",
			missingFile: "⚠️ | Fichier de commande \"%1\" introuvable",
			invalidFileName: "⚠️ | Nom de fichier de commande invalide",
			unloadedFile: "✅ | Commande \"%1\" déchargée"
		}
  },
  count: {
    shortDescription: "Voir les messages du groupe",
    longDescription: "Voir le nombre de messages de tous les membres ou de vous-même (depuis que le bot a rejoint le groupe)",
    guide: "   {pn} : utilisé pour voir le nombre de vos messages\n   {pn} @tag : utilisé pour voir le nombre de messages de ceux qui sont tagués\n   {pn} all : utilisé pour voir le nombre de messages de tous les membres",
    text: {
        count: "Nombre de messages des membres :",
        endMessage: "Ceux qui n'ont pas de nom dans la liste n'ont envoyé aucun message.",
        page: "Page [%1/%2]",
        reply: "Répondez à ce message avec le numéro de page pour en voir davantage",
        result: "%1 rang %2 avec %3 messages",
        yourResult: "Vous êtes classé %1 et avez envoyé %2 messages dans ce groupe",
        invalidPage: "Numéro de page invalide"
    }
},
customrankcard: {
    shortDescription: "Concevoir une carte de classement personnalisée",
    longDescription: "Concevoir une carte de classement selon vos préférences",
    guide: {
        body: "   {pn} [maincolor | subcolor | linecolor | progresscolor | alphasubcolor | textcolor | namecolor | expcolor | rankcolor | levelcolor | reset] <valeur>"
            + "\n   Dans lequel : "
            + "\n  + maincolor | background <valeur> : fond principal de la carte de classement"
            + "\n  + subcolor <valeur> : fond secondaire"
            + "\n  + linecolor <valeur> : couleur de la ligne entre le fond principal et le fond secondaire"
            + "\n  + expbarcolor <valeur> : couleur de la barre d'expérience"
            + "\n  + progresscolor <valeur> : couleur de la barre d'expérience actuelle"
            + "\n  + alphasubcolor <valeur> : opacité du fond secondaire (de 0 à 1)"
            + "\n  + textcolor <valeur> : couleur du texte (code hexadécimal ou rgba)"
            + "\n  + namecolor <valeur> : couleur du nom"
            + "\n  + expcolor <valeur> : couleur de l'expérience"
            + "\n  + rankcolor <valeur> : couleur du rang"
            + "\n  + levelcolor <valeur> : couleur du niveau"
            + "\n    • <valeur> peut être un code couleur hexadécimal, rgb, rgba, dégradé (chaque couleur est séparée par un espace) ou une URL d'image"
            + "\n    • Si vous souhaitez utiliser un dégradé, veuillez saisir plusieurs couleurs séparées par un espace"
            + "\n   {pn} reset : réinitialiser tout par défaut"
            + "\n   Exemple :"
            + "\n    {pn} maincolor #fff000"
            + "\n    {pn} subcolor rgba(255,136,86,0.4)"
            + "\n    {pn} reset",
        attachment: {
            [`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_1.jpg`]: "https://i.ibb.co/BZ2Qgs1/image.png",
            [`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_2.png`]: "https://i.ibb.co/wy1ZHHL/image.png"
        }
    },
    text: {
        invalidImage: "URL d'image invalide, veuillez choisir une URL avec une destination d'image (jpg, jpeg, png, gif), vous pouvez télécharger l'image sur https://imgbb.com/ et choisir « obtenir le lien direct » pour obtenir l'URL de l'image",
        invalidAttachment: "Pièce jointe invalide, veuillez choisir un fichier image",
        invalidColor: "Code couleur invalide, veuillez choisir un code couleur hexadécimal (6 chiffres) ou rgba",
        notSupportImage: "L'image URL n'est pas prise en charge avec l'option \"%1\"",
        success: "Vos modifications ont été enregistrées, voici un aperçu",
        reseted: "Tous les paramètres ont été réinitialisés par défaut",
        invalidAlpha: "Veuillez choisir un nombre de 0 à 1"
    }
  },
  dhbc: {
    shortDescription: "jeu attrape le mot",
    longDescription: "jouez au jeu attrape le mot",
    guide: "{pn}",
    text: {
        reply: "Veuillez répondre à ce message avec la réponse\n%1",
        isSong: "Il s'agit du nom de la chanson du chanteur %1",
        notPlayer: "⚠️ Vous n'êtes pas le joueur de cette question",
        correct: "🎉 Félicitations, vous avez répondu correctement et avez reçu %1$",
        wrong: "⚠️ Vous avez répondu incorrectement"
    }
},
emojimix: {
    shortDescription: "Mélanger 2 emoji",
    longDescription: "Mélanger 2 emoji ensemble",
    guide: "   {pn} <emoji1> <emoji2>\n   Exemple :  {pn} 🤣 🥰"
},
eval: {
    shortDescription: "Tester rapidement du code",
    longDescription: "Tester rapidement du code",
    guide: "{pn} <code à tester>",
    text: {
        error: "❌ Une erreur s'est produite :"
    }
},
event: {
    shortDescription: "Gérer les commandes d'événements",
    longDescription: "Gérez vos fichiers de commandes d'événements",
    guide: "{pn} load <nom du fichier de commande>\n{pn} loadAll\n{pn} install <url> <nom du fichier de commande> : Téléchargez et chargez une commande d'événement, l'URL est le chemin vers le fichier de commande (brut)",
    text: {
        missingFileName: "⚠️ | Veuillez entrer le nom de la commande que vous souhaitez recharger",
        loaded: "✅ | Commande d'événement \"%1\" chargée avec succès",
        loadedError: "❌ | Le chargement de la commande d'événement \"%1\" a échoué avec l'erreur\n%2 : %3",
        loadedSuccess: "✅ | Chargement de la commande d'événement \"%1\" réussi",
        loadedFail: "❌ | Le chargement de la commande d'événement \"%1\" a échoué\n%2",
        missingCommandNameUnload: "⚠️ | Veuillez entrer le nom de la commande que vous souhaitez décharger",
        unloaded: "✅ | Commande d'événement \"%1\" déchargée avec succès",
        unloadedError: "❌ | Le déchargement de la commande d'événement \"%1\" a échoué avec l'erreur\n%2 : %3",
        missingUrlCodeOrFileName: "⚠️ | Veuillez entrer l'URL ou le code et le nom du fichier de commande que vous souhaitez installer",
        missingUrlOrCode: "⚠️ | Veuillez entrer l'URL ou le code du fichier de commande que vous souhaitez installer",
        missingFileNameInstall: "⚠️ | Veuillez entrer le nom du fichier pour enregistrer la commande (avec l'extension .js)",
        invalidUrlOrCode: "⚠️ | Impossible d'obtenir le code de la commande",
        alreadExist: "⚠️ | Le fichier de commande existe déjà, êtes-vous sûr de vouloir écraser l'ancien fichier de commande ?\nRéagissez à ce message pour continuer",
        installed: "✅ | Commande d'événement \"%1\" installée avec succès, le fichier de commande est enregistré à %2",
        installedError: "❌ | L'installation de la commande d'événement \"%1\" a échoué avec l'erreur\n%2 : %3",
        missingFile: "⚠️ | Fichier \"%1\" introuvable",
        invalidFileName: "⚠️ | Nom de fichier non valide",
        unloadedFile: "✅ | Commande \"%1\" déchargée"
    }
  },
  filteruser: {
    shortDescription: "filtrer les membres du groupe",
    longDescription: "filtrer les membres du groupe par nombre de messages ou compte verrouillé",
    guide: "   {pn} [<nombre de messages> | die]",
    text: {
        needAdmin: "⚠️ | Veuillez ajouter le bot en tant qu'administrateur du groupe pour utiliser cette commande",
        confirm: "⚠️ | Êtes-vous sûr de vouloir supprimer les membres du groupe avec moins de %1 messages ?\nRéagissez à ce message pour confirmer",
        kickByBlock: "✅ | Suppression réussie de %1 membres dont le compte est verrouillé",
        kickByMsg: "✅ | Suppression réussie de %1 membres avec moins de %2 messages",
        kickError: "❌ | Une erreur s'est produite et %1 membres n'ont pas pu être exclus :\n%2",
        noBlock: "✅ | Il n'y a aucun membre dont le compte est verrouillé",
        noMsg: "✅ | Il n'y a aucun membre avec moins de %1 messages"
    }
},
getfbstate: {
    shortDescription: "Obtenir l'état actuel de fbstate",
    longDescription: "Obtenir l'état actuel de fbstate",
    guide: "{pn}",
    text: {
        success: "Fbstate envoyé, veuillez vérifier le message privé du bot"
    }
},
grouptag: {
    shortDescription: "Tag par groupe",
    longDescription: "Taguer les membres par groupe",
    guide: "   {pn} add <nomGroupeTag> <@tags> : utilisé pour ajouter un nouveau groupe tag ou ajouter des membres à un groupe tag\n   Exemple :\n    {pn} TEAM1 @tag1 @tag2\n\n   {pn} del <nomGroupeTag> <@tags> : utilisé pour supprimer des membres d'un groupe tag\n   Exemple :\n    {pn} del TEAM1 @tag1 @tag2\n\n   {pn} remove <nomGroupeTag> : utilisé pour supprimer un groupe tag\n   Exemple :\n    {pn} remove TEAM1\n\n   {pn} rename <nomGroupeTag> | <nouveauNomGroupeTag> : utilisé pour renommer un groupe tag\n\n   {pn} [list | all] : utilisé pour voir la liste des group tags dans votre groupe\n\n   {pn} info <nomGroupeTag> : utilisé pour voir les infos du groupe tag",
    text: {
        noGroupTagName: "Veuillez entrer le nom du groupe tag",
        noMention: "Vous n'avez marqué aucun membre à ajouter au groupe tag",
        addedSuccess: "Membres ajoutés :\n%1\nau groupe tag \"%2\"",
        addedSuccess2: "Groupe tag \"%1\" ajouté avec les membres :\n%2",
        existedInGroupTag: "Membres :\n%1\nexistent déjà dans le groupe tag \"%2\"",
        notExistedInGroupTag: "Membres :\n%1\nn'existent pas dans le groupe tag \"%2\"",
        noExistedGroupTag: "Le groupe tag \"%1\" n'existe pas dans votre groupe",
        noExistedGroupTag2: "Votre groupe n'a ajouté aucun groupe tag",
        noMentionDel: "Veuillez marquer les membres à supprimer du groupe tag \"%1\"",
        deletedSuccess: "Membres supprimés :\n%1\ndu groupe tag \"%2\"",
        deletedSuccess2: "Groupe tag \"%1\" supprimé",
        tagged: "Groupe tag \"%1\" marqué :\n%2",
        noGroupTagName2: "Veuillez entrer l'ancien nom du groupe tag et le nouveau nom du groupe tag, séparés par \"|\"",
        renamedSuccess: "Groupe tag \"%1\" renommé en \"%2\"",
        infoGroupTag: "📑 | Nom du groupe : \"%1\"\n👥 | Nombre de membres : %2\n👨‍👩‍👧‍👦 | Liste des membres :\n %3"
    }
 },
  help1: {
    shortDescription: "Voir l'utilisation des commandes",
    longDescription: "Voir l'utilisation des commandes",
    guide: "{pn} [vide | <numéro de page> | <nom de la commande>]",
    text: {
        help: "╭════════════════❍\n%1╭═════════════❍\n┃ Page [ %2/%3 ]\n│ Actuellement, le bot a %4 commandes utilisables\n┃ » Tapez %5help <page> pour voir la liste des commandes\n│ » Tapez %5help pour voir les détails de l'utilisation de cette commande\n┃ %6\n╰═══════════════❍",
        help2: "%1\n╭ ───── ╮\n│ 𝗚𝗨𝗜𝗗𝗘  │\n╰ ───── ╯\n𝗣𝗢𝗨𝗥 𝗟'𝗜𝗡𝗦𝗧𝗔𝗡𝗧 𝗘𝗥𝗪𝗜𝗡 𝗔 %2\n 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗘𝗦 𝗨𝗧𝗜𝗟𝗜𝗦𝗔𝗕𝗟𝗘𝗦\n\n𝗣𝗢𝗨𝗥 𝗦𝗔𝗩𝗢𝗜𝗥 𝗨𝗦𝗘𝗥 𝗗𝗘 \n𝗖𝗘𝗦 𝗖𝗠𝗗𝗘𝗦 , 𝗦𝗔𝗜𝗦𝗜𝗦𝗦𝗘𝗭 : \n %3𝗛𝗘𝗟𝗣 + 𝗡𝗢𝗠 𝗗𝗘 𝗟𝗔 𝗖𝗠𝗗𝗘\n𝗘𝗫: %3help bank\n%4╔════☾✿☽════╗\n┃  𝗘𝗟𝗜𝗔𝗦 𝗕𝗔𝗥𝗨𝗧𝗜 ┃\n╚════☾❀☽════╝\nfacebook.com/elias.baruti45",
        commandNotFound: "La commande \"%1\" n'existe pas",
        getInfoCommand: "╭── NOM ────⭓\n│ %1\n├── INFO\n│ Description : %2\n│ Autres noms : %3\n│ Autres noms dans votre groupe : %4\n│ Version : %5\n│ Rôle : %6\n│ Temps par commande : %7s\n│ Auteur : %8\n├── Utilisation\n%9\n├── Remarques\n│ Le contenu à l'intérieur de <XXXXX> peut être modifié\n│ Le contenu à l'intérieur de [a|b|c] est a ou b ou c\n╰──────⭔",
        doNotHave: "N'a pas",
        roleText0: "0 (Tous les utilisateurs)",
        roleText1: "1 (Administrateurs de groupe)",
        roleText2: "2 (Administrateur du bot)",
        roleText0setRole: "0 (définir le rôle, tous les utilisateurs)",
        roleText1setRole: "1 (définir le rôle, administrateurs de groupe)",
        pageNotFound: "La page %1 n'existe pas"
    }
},
kick: {
    shortDescription: "Expulser un membre",
    longDescription: "Expulser un membre de la boîte de discussion",
    guide: "{pn} @tags : utilisé pour expulser les membres qui sont tagués"
},
loadconfig: {
    shortDescription: "Recharger la configuration",
    longDescription: "Recharger la configuration du bot"
},
moon: {
    shortDescription: "Voir l'image de la lune",
    longDescription: "Voir l'image de la lune pour la nuit que vous choisissez (jj/mm/aaaa)",
    guide: "  {pn} <jour/mois/année>\n   {pn} <jour/mois/année> <légende>",
    text: {
        invalidDateFormat: "Veuillez entrer une date valide au format JJ/MM/AAAA",
        error: "Une erreur s'est produite lors de la récupération de l'image de la lune du %1",
        invalidDate: "%1 n'est pas une date valide",
        caption: "- Image de la lune le %1"
    }
 },
  notification: {
    shortDescription: "Envoyer une notification de l'administrateur à toutes les boîtes",
    longDescription: "Envoyer une notification de l'administrateur à toutes les boîtes",
    guide: "{pn} <message>",
    text: {
        missingMessage: "Veuillez entrer le message que vous souhaitez envoyer à tous les groupes",
        notification: "╭━━━━━━━━━━━━━╮\n❍━𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡━❍\n╰━━━━━━━━━━━━━╯",
        sendingNotification: "Début de l'envoi de la notification de l'administrateur du bot à %1 groupes de discussion",
        sentNotification: "✅ Notification envoyée à %1 groupes avec succès",
        errorSendingNotification: "Une erreur s'est produite lors de l'envoi à %1 groupes :\n %2"
    }
},
prefix: {
    shortDescription: "Changer le préfixe du bot",
    longDescription: "Changer le préfixe du bot dans votre boîte de discussion ou dans tout le système du bot (uniquement l'admin bot)",
    guide: "   {pn} <nouveau préfixe> : changer le nouveau préfixe dans votre boîte de discussion\n   Exemple :\n    {pn} #\n\n   {pn} <nouveau préfixe> -g : changer le nouveau préfixe dans le système du bot (uniquement l'admin bot)\n   Exemple :\n    {pn} # -g\n\n   {pn} reset : réinitialiser le préfixe dans votre boîte de discussion par défaut",
    text: {
        reset: "Votre préfixe a été réinitialisé par défaut : %1",
        onlyAdmin: "Seul l'administrateur peut changer le préfixe du système du bot",
        confirmGlobal: "Veuillez réagir à ce message pour confirmer le changement du préfixe du système du bot",
        confirmThisThread: "Veuillez réagir à ce message pour confirmer le changement du préfixe dans votre boîte de discussion",
        successGlobal: "Préfixe du système du bot changé en : %1",
        successThisThread: "Préfixe dans votre boîte de discussion changé en : %1",
        myPrefix: "🌐 Préfixe du système : %1\n🛸 Préfixe de votre boîte de discussion : %2"
    }
},
rank: {
    shortDescription: "Voir le niveau de l'utilisateur",
    longDescription: "Voir votre niveau ou le niveau de la personne taguée. Vous pouvez taguer plusieurs personnes"
},
rankup: {
    shortDescription: "Activer/désactiver la notification de montée de niveau",
    longDescription: "Activer/désactiver la notification de montée de niveau",
    guide: "{pn} [on | off]",
    text: {
        syntaxError: "Erreur de syntaxe, utilisez uniquement {pn} on ou {pn} off",
        turnedOn: "Notification de montée de niveau activée",
        turnedOff: "Notification de montée de niveau désactivée",
        notiMessage: "🎉🎉 Félicitations pour avoir atteint le niveau %1"
    }
 },
  refresh: {
    shortDescription: "Actualiser les informations",
    longDescription: "Actualiser les informations du groupe de discussion ou de l'utilisateur",
    guide: "   {pn} [thread | group] : actualiser les informations de votre groupe de discussion\n   {pn} group <threadID> : actualiser les informations du groupe de discussion par ID\n\n   {pn} user : actualiser les informations de votre utilisateur\n   {pn} user [<userID> | @tag] : actualiser les informations de l'utilisateur par ID",
    text: {
        refreshMyThreadSuccess: "✅ | Actualisation des informations de votre groupe de discussion réussie !",
        refreshThreadTargetSuccess: "✅ | Actualisation des informations du groupe de discussion %1 réussie !"
    }
},
rules: {
    shortDescription: "Règles du groupe",
    longDescription: "Créer/voir/ajouter/éditer/changer la position/supprimer les règles du groupe",
    guide: "   {pn} [add | -a] <règle à ajouter> : ajouter une règle pour le groupe.\n   {pn} : voir les règles du groupe.\n   {pn} [edit | -e] <n> <contenu après l'édition> : éditer la règle numéro n.\n   {pn} [move | -m] <stt1> <stt2> : échanger la position de la règle numéro <stt1> et <stt2>.\n   {pn} [delete | -d] <n> : supprimer la règle numéro n.\n   {pn} [remove | -r] : supprimer toutes les règles du groupe.\n\n   Exemple :\n    {pn} add ne pas spammer\n    {pn} move 1 3\n    {pn} -e 1 ne pas spammer de message dans le groupe\n    {pn} -r"
},
sendnoti: {
    shortDescription: "Créer et envoyer une notification aux groupes",
    longDescription: "Créer et envoyer une notification aux groupes que vous gérez",
    guide: "   {pn} create <nomGroupeNotif> : Créer un nouveau groupe de notification avec le nom <nomGroupeNotif>\n   Exemple :\n    {pn} create TEAM1\n\n   {pn} add <nomGroupeNotif> : ajouter la boîte de discussion actuelle au groupe de notification <nomGroupeNotif> (vous devez être administrateur de cette boîte de discussion)\n   Exemple :\n    {pn} add TEAM1\n\n   {pn} delete : supprimer la boîte de discussion actuelle du groupe de notification <nomGroupeNotif> (vous devez être le créateur de ce groupe)\n   Exemple :\n    {pn} delete TEAM1\n\n   {pn} send <nomGroupeNotif> | <message> : envoyer une notification à tous les groupes dans le groupe de notification <nomGroupeNotif> (vous devez être administrateur de ces groupes)\n   Exemple :\n    {pn} remove TEAM1\n\n   {pn} remove <nomGroupeNotif> : supprimer le groupe de notification <nomGroupeNotif> (vous devez être le créateur du groupe de notification <nomGroupeNotif>)\n   Exemple :\n    {pn} remove TEAM1",
    text: {
        missingGroupName: "Veuillez entrer le nom du groupeNoti",
        groupNameExists: "Le groupe de notification avec le nom %1 a été créé par vous auparavant, veuillez choisir un autre nom",
        createdGroup: "Groupe de notification créé avec succès :\n- Nom : %1\n- ID : %2",
        missingGroupNameToAdd: "Veuillez entrer le nom du groupeNoti auquel vous souhaitez ajouter cette boîte de discussion",
        groupNameNotExists: "Vous n'avez créé/géré aucun groupe de notification avec le nom : %1",
        notAdmin: "Vous n'êtes pas administrateur de cette boîte de discussion",
        added: "Boîte de discussion actuelle ajoutée au groupe de notification : %1",
        missingGroupNameToDelete: "Veuillez entrer le nom du groupeNoti que vous souhaitez supprimer de la liste de cette boîte de discussion",
        notInGroup: "La boîte de discussion actuelle n'est pas dans le groupe de notification %1",
        deleted: "Boîte de discussion actuelle supprimée du groupe de notification : %1",
        failed: "Échec de l'envoi de la notification à %1 groupes de discussion : \n%2",
        missingGroupNameToRemove: "Veuillez entrer le nom du groupeNoti que vous souhaitez supprimer",
        removed: "Groupe de notification supprimé : %1",
        missingGroupNameToSend: "Veuillez entrer le nom du groupeNoti auquel vous souhaitez envoyer le message",
        groupIsEmpty: "Le groupe de notification \"%1\" est vide",
        sending: "Envoi de la notification à %1 groupes de discussion",
        success: "Notification envoyée à %1 groupes de discussion dans le groupe de notification \"%2\" avec succès",
        notAdminOfGroup: "Vous n'êtes pas administrateur de ce groupe",
        missingGroupNameToView: "Veuillez entrer le nom du groupeNoti que vous souhaitez afficher les informations",
        groupInfo: "- Nom du groupe : %1\n - ID : %2\n - Créé le : %3\n%4 ",
        groupInfoHasGroup: "- A des boîtes de discussion : \n%1",
        noGroup: "Vous n'avez pas créé/géré aucun groupe de notification"
    }
 },
  setalias: {
    shortDescription: "Ajouter un alias pour la commande",
    longDescription: "Ajouter un alias pour n'importe quelle commande dans votre groupe",
    guide: "  Cette commande est utilisée pour ajouter/supprimer un alias pour n'importe quelle commande dans votre groupe\n   {pn} add <alias> <commande>: ajouter un alias pour la commande dans votre groupe\n   {pn} add <alias> <commande> -g: ajouter un alias pour la commande dans tout le système (seulement l'administrateur du bot)\nExemple:\n    {pn} add ctrk customrankcard\n\n   {pn} [remove | rm] <alias> <commande>: supprimer un alias pour la commande dans votre groupe\n   {pn} [remove | rm] <alias> <commande> -g: supprimer un alias pour la commande dans tout le système (seulement l'administrateur du bot)\nExemple:\n    {pn} rm ctrk customrankcard\n\n   {pn} list: lister tous les alias pour les commandes dans votre groupe\n   {pn} list -g: lister tous les alias pour les commandes dans tout le système"
},
setavt: {
    shortDescription: "Changer l'avatar du bot",
    longDescription: "Changer l'avatar du bot",
    text: {
        cannotGetImage: "❌ | Une erreur s'est produite lors de la récupération de l'URL de l'image",
        invalidImageFormat: "❌ | Format d'image invalide",
        changedAvatar: "✅ | Avatar du bot changé avec succès"
    }
},
setlang: {
    shortDescription: "Définir la langue par défaut",
    longDescription: "Définir la langue par défaut du bot pour le chat actuel ou tous les chats",
    guide: "   {pn} <code de langue ISO 639-1>\n   Exemple :    {pn} en    {pn} vi    {pn} ja",
    text: {
        setLangForAll: "Définir la langue par défaut pour tous les chats : %1",
        setLangForCurrent: "Définir la langue par défaut pour le chat actuel : %1",
        noPermission: "Seul l'administrateur du bot peut utiliser cette commande"
    }
},
setleave: {
    shortDescription: "Modifier le message de départ",
    longDescription: "Modifier le contenu/activer/désactiver le message de départ lorsque le membre quitte votre groupe de discussion",
    guide: {
        body: "   {pn} on: Activer le message de départ\n   {pn} off: Désactiver le message de départ\n   {pn} text [<contenu> | reset]: éditer le contenu du texte ou réinitialiser aux paramètres par défaut, raccourcis disponibles :\n  + {userName}: nom du membre qui quitte le groupe\n  + {userNameTag}: nom du membre qui quitte le groupe (tag)\n  + {boxName}: nom du groupe de discussion\n  + {type}: départ/expulsé par l'administrateur\n  + {session}: session dans la journée\n\n   Exemple:\n    {pn} text {userName} a {type} le groupe, à bientôt 🤧\n\n   Répondez ou envoyez un message avec un fichier ayant le contenu {pn} file: pour ajouter un fichier joint au message de départ (image, vidéo, audio)\n\nExemple:\n   {pn} file reset: réinitialiser le fichier",
        attachment: {
            [`${process.cwd()}/scripts/cmds/assets/guide/setleave/setleave_en_1.png`]: "https://i.ibb.co/2FKJHJr/guide1.png"
        }
    },
    text: {
        missingContent: "Veuillez entrer le contenu",
        edited: "Contenu du message de départ de votre groupe édité :\n%1",
        reseted: "Contenu du message de départ réinitialisé",
        noFile: "Aucun fichier joint au message de départ à réinitialiser",
        resetedFile: "Fichier joint au message de départ réinitialisé avec succès",
        missingFile: "Veuillez répondre à ce message avec un fichier image/vidéo/audio",
        addedFile: "Ajouté %1 fichier joint à votre message de départ"
    }
 },
  setname: {
    shortDescription: "Changer le surnom",
    longDescription: "Changer le surnom de tous les membres dans le chat ou des membres tagués par un format",
    guide: {
        body: "   {pn} <surnom>: changer le surnom de vous-même\n   {pn} @tags <surnom>: changer le surnom des membres tagués\n   {pn} all <surnom>: changer le surnom de tous les membres dans le chat\n\nAvec des raccourcis disponibles :\n   + {userName}: nom du membre\n   + {userID}: ID du membre\n\n   Exemple : (voir l'image)",
        attachment: {
            [`${process.cwd()}/scripts/cmds/assets/guide/setname_1.png`]: "https://i.ibb.co/gFh23zb/guide1.png",
            [`${process.cwd()}/scripts/cmds/assets/guide/setname_2.png`]: "https://i.ibb.co/BNWHKgj/guide2.png"
        }
    },
    text: {
        error: "Une erreur s'est produite, essayez de désactiver la fonction de lien d'invitation dans le groupe et réessayez plus tard"
    }
},
setrole: {
    shortDescription: "Éditer le rôle de la commande",
    longDescription: "Éditer le rôle de la commande (commandes avec un rôle < 2)",
    guide: "   {pn} <nom de la commande> <nouveau rôle> : définir le nouveau rôle pour la commande\n   Avec :\n   + <nom de la commande> : nom de la commande\n   + <nouveau rôle> : nouveau rôle de la commande avec :\n   + <nouveau rôle> = 0 : la commande peut être utilisée par tous les membres du groupe\n   + <nouveau rôle> = 1 : la commande peut être utilisée uniquement par l'administrateur\n   + <nouveau rôle> = par défaut : réinitialiser le rôle de la commande par défaut\n   Exemple :\n    {pn} rank 1 : (la commande rank peut être utilisée uniquement par l'administrateur)\n    {pn} rank 0 : (la commande rank peut être utilisée par tous les membres du groupe)\n    {pn} rank default : réinitialiser par défaut\n—————\n   {pn} [viewrole|view|show] : voir le rôle des commandes éditées",
    text: {
        noEditedCommand: "✅ Votre groupe n'a pas de commande éditée",
        editedCommand: "⚠️ Votre groupe a des commandes éditées :\n",
        noPermission: "❗ Seul l'administrateur peut utiliser cette commande",
        commandNotFound: "Commande \"%1\" introuvable",
        noChangeRole: "❗ Impossible de changer le rôle de la commande \"%1\"",
        resetRole: "Réinitialiser le rôle de la commande \"%1\" par défaut",
        changedRole: "Changé le rôle de la commande \"%1\" à %2"
    }
 },
  setwelcome: {
    shortDescription: "Modifier le contenu du message de bienvenue",
    longDescription: "Modifier le contenu du message de bienvenue lorsque de nouveaux membres rejoignent votre groupe",
    guide: {
        body: "   {pn} text [<contenu> | reset]: modifier le contenu du texte ou réinitialiser par défaut, avec quelques raccourcis :\n  + {userName}: nom du nouveau membre\n  + {userNameTag}: nom du nouveau membre (tag)\n  + {boxName}: nom du groupe de discussion\n  + {multiple}: vous || vous tous\n  + {session}: session du jour\n\n   Exemple :\n    {pn} text Bonjour {userName}, bienvenue sur {boxName}, passez une bonne journée {multiple}\n\n   Répondez ou envoyez un message avec le fichier avec le contenu {pn} file : pour ajouter des pièces jointes au message de bienvenue (image, vidéo, audio)\n\n   Exemple :\n    {pn} file reset : supprimer les pièces jointes",
        attachment: {
            [`${process.cwd()}/scripts/cmds/assets/guide/setwelcome/setwelcome_en_1.png`]: "https://i.ibb.co/vsCz0ks/setwelcome-en-1.png"
        }
    },
    text: {
        missingContent: "Veuillez entrer le contenu du message de bienvenue",
        edited: "Contenu du message de bienvenue modifié pour votre groupe : %1",
        reseted: "Contenu du message de bienvenue réinitialisé",
        noFile: "Aucune pièce jointe à supprimer",
        resetedFile: "Pièces jointes réinitialisées avec succès",
        missingFile: "Veuillez répondre à ce message avec un fichier image/vidéo/audio",
        addedFile: "Ajouté %1 pièce(s) jointe(s) à votre message de bienvenue de groupe"
    }
},
shortcut: {
    shortDescription: "Ajouter un raccourci pour vous",
    longDescription: "Ajouter un raccourci pour votre message dans le groupe de discussion",
    text: {
        missingContent: 'Veuillez entrer le contenu du message',
        shortcutExists: 'Le raccourci "%1" existe déjà, réagissez à ce message pour remplacer le contenu du raccourci',
        shortcutExistsByOther: 'Le raccourci %1 a été ajouté par un autre membre, veuillez essayer un autre mot-clé',
        added: 'Raccourci ajouté %1 => %2',
        addedAttachment: ' avec %1 pièce(s) jointe(s)',
        missingKey: 'Veuillez entrer le mot-clé du raccourci que vous souhaitez supprimer',
        notFound: 'Aucun raccourci trouvé pour le mot-clé %1 dans votre groupe de discussion',
        onlyAdmin: 'Seuls les administrateurs peuvent supprimer les raccourcis des autres membres',
        deleted: 'Raccourci supprimé %1',
        empty: 'Votre groupe de discussion n\'a ajouté aucun raccourci',
        message: 'Message',
        attachment: 'Pièce jointe',
        list: 'Votre liste de raccourcis',
        onlyAdminRemoveAll: 'Seuls les administrateurs peuvent supprimer tous les raccourcis dans le groupe de discussion',
        confirmRemoveAll: 'Êtes-vous sûr de vouloir supprimer tous les raccourcis dans ce groupe de discussion ? (réagissez à ce message pour confirmer)',
        removedAll: 'Tous les raccourcis ont été supprimés dans votre groupe de discussion'
    }
 },
  simsimi: {
    shortDescription: "Simsimi",
    longDescription: "Discutez avec simsimi",
    guide: "   {pn} [on | off]: activer/désactiver simsimi\n\n   {pn} <mot>: discuter avec simsimi\n   Exemple:\n    {pn} bonjour",
    text: {
        turnedOn: "Simsimi activé avec succès !",
        turnedOff: "Simsimi désactivé avec succès !",
        chatting: "Discussion avec simsimi...",
        error: "Simsimi est occupé, veuillez réessayer plus tard"
    }
},
sorthelp: {
    shortDescription: "Trier la liste d'aide",
    longDescription: "Trier la liste d'aide",
    guide: "{pn} [nom | catégorie]",
    text: {
        savedName: "Liste d'aide triée par nom enregistrée",
        savedCategory: "Liste d'aide triée par catégorie enregistrée"
    }
},
thread: {
    shortDescription: "Gérer le groupe de discussion",
    longDescription: "Gérer le groupe de discussion dans le système du bot",
    guide: "   {pn} [find | -f | search | -s] <nom à rechercher>: rechercher le groupe de discussion dans les données du bot par nom\n   {pn} [find | -f | search | -s] [-j | joined] <nom à rechercher>: rechercher le groupe de discussion dans les données du bot auquel le bot est toujours inscrit par nom\n   {pn} [ban | -b] [<tid> | laisser vide] <raison>: utiliser pour bannir le groupe avec l'id <tid> ou le groupe actuel utilisant le bot\n   Exemple:\n    {pn} ban 3950898668362484 spam bot\n    {pn} ban spam trop\n    {pn} unban [<tid> | laisser vide] pour débannir le groupe avec l'id <tid> ou le groupe actuel",
    text: {
        noPermission: "Vous n'avez pas l'autorisation d'utiliser cette fonctionnalité",
        found: "🔎 Trouvé %1 groupe correspondant au mot-clé \"%3\" dans les données du bot :\n%3",
        notFound: "❌ Aucun groupe trouvé correspondant au mot-clé : \"%1\" dans les données du bot",
        hasBanned: "Le groupe avec l'id [%1 | %2] a déjà été banni :\n» Raison : %3\n» Heure : %4",
        banned: "Groupe banni avec l'id [%1 | %2] en utilisant le bot.\n» Raison : %3\n» Heure : %4",
        notBanned: "Le groupe avec l'id [%1 | %2] n'est pas banni en utilisant le bot",
        unbanned: "Groupe débanni avec l'id [%1 | %2] en utilisant le bot",
        missingReason: "La raison du bannissement ne peut pas être vide",
        info: "» ID de la boîte : %1\n» Nom : %2\n» Date de création des données : %3\n» Nombre total de membres : %4\n» Garçon : %5 membres\n» Fille : %6 membres\n» Nombre total de messages : %7%8"
    }
 },
  tid: {
    shortDescription: "Voir l'ID de la conversation",
    longDescription: "Voir l'ID de la conversation de votre groupe",
    guide: "{pn}"
},
tik: {
    shortDescription: "Tiktok",
    longDescription: "Téléchargez une vidéo/diaporama (image), un audio à partir du lien tiktok",
    guide: "   {pn} [video|-v|v] <url>: utilisé pour télécharger une vidéo/diaporama (image) à partir du lien tiktok.\n   {pn} [audio|-a|a] <url>: utilisé pour télécharger un audio à partir du lien tiktok",
    text: {
        invalidUrl: "Veuillez entrer une URL tiktok valide",
        downloadingVideo: "Téléchargement de la vidéo : %1...",
        downloadedSlide: "Diaporama téléchargé : %1\n%2",
        downloadedVideo: "Vidéo téléchargée : %1\nURL de téléchargement : %2",
        downloadingAudio: "Téléchargement de l'audio : %1...",
        downloadedAudio: "Audio téléchargé : %1"
    }
},
trigger: {
    shortDescription: "Déclencheur d'image",
    longDescription: "Déclencheur d'image",
    guide: "{pn} [@tag | vide]"
},
uid: {
    shortDescription: "Voir uid",
    longDescription: "Voir l'identifiant utilisateur Facebook de l'utilisateur",
    guide: "   {pn}: utilisé pour afficher votre identifiant utilisateur Facebook\n   {pn} @tag: afficher l'identifiant utilisateur Facebook des personnes taguées\n   {pn} <lien du profil>: afficher l'identifiant utilisateur Facebook du lien de profil",
    text: {
        syntaxError: "Veuillez taguer la personne dont vous voulez voir l'UID ou laisser vide pour voir votre propre UID"
    }
},
unsend: {
    shortDescription: "Annuler l'envoi du message du bot",
    longDescription: "Annuler l'envoi du message du bot",
    guide: "répondez au message que vous voulez annuler et appelez la commande {pn}",
    text: {
        syntaxError: "Veuillez répondre au message que vous voulez annuler"
    }
},
user: {
    shortDescription: "Gérer les utilisateurs",
    longDescription: "Gérer les utilisateurs dans le système du bot",
    guide: "   {pn} [find | -f | search | -s] <nom à rechercher>: rechercher des utilisateurs dans les données du bot par nom\n\n   {pn} [ban | -b] [<uid> | @tag | répondre au message] <raison>: bannir l'utilisateur avec l'identifiant <uid> ou l'utilisateur tagué ou l'expéditeur du message répondu en utilisant le bot\n\n   {pn} unban [<uid> | @tag | répondre au message]: débannir l'utilisateur en utilisant le bot",
    text: {
        noUserFound: "❌ Aucun utilisateur trouvé avec un nom correspondant au mot-clé : \"%1\" dans les données du bot",
        userFound: "🔎 Trouvé %1 utilisateur avec un nom correspondant au mot-clé \"%2\" dans les données du bot :\n%3",
        uidRequired: "L'UID de l'utilisateur à bannir ne peut pas être vide, veuillez entrer l'UID ou le tag ou répondre au message d'un utilisateur par ban user <uid> <raison>",
        reasonRequired: "La raison du bannissement de l'utilisateur ne peut pas être vide, veuillez entrer l'UID ou le tag ou répondre au message d'un utilisateur par ban user <uid> <raison>",
        userHasBanned: "L'utilisateur avec l'identifiant [%1 | %2] a déjà été banni :\n» Raison : %3\n» Date : %4",
        userBanned: "L'utilisateur avec l'identifiant [%1 | %2] a été banni :\n» Raison : %3\n» Date : %4",
        uidRequiredUnban: "L'UID de l'utilisateur à débannir ne peut pas être vide",
        userNotBanned: "L'utilisateur avec l'identifiant [%1 | %2] n'est pas banni",
        userUnbanned: "L'utilisateur avec l'identifiant [%1 | %2] a été débanni"
    }
 },
  videofb: {
    shortDescription: "Télécharger une vidéo depuis Facebook",
    longDescription: "Télécharger une vidéo/une story depuis Facebook (public)",
    guide: "   {pn} <url vidéo/story>: télécharger la vidéo depuis Facebook",
    text: {
        missingUrl: "Veuillez entrer l'URL de la vidéo/story Facebook (public) que vous souhaitez télécharger",
        error: "Une erreur s'est produite lors du téléchargement de la vidéo",
        downloading: "Téléchargement de la vidéo pour vous",
        tooLarge: "Désolé, nous ne pouvons pas télécharger la vidéo pour vous car sa taille est supérieure à 83 Mo"
    }
},
warn: {
    shortDescription: "Avertir un membre",
    longDescription: "Avertir un membre dans le groupe, s'ils reçoivent 3 avertissements, ils seront bannis",
    guide: "   {pn} @tag <raison>: avertir un membre\n   {pn} list: voir la liste des membres avertis\n   {pn} listban: voir la liste des membres bannis\n   {pn} info [@tag | <uid> | laisser vide]: voir les infos d'avertissement du membre tagué ou de l'uid ou de vous-même\n   {pn} unban <uid>: débannir le membre par uid\n   {pn} unwarn <uid> [<numéro d'avertissement> | laisser vide]: supprimer l'avertissement du membre par uid et numéro d'avertissement\n   {pn} warn reset: réinitialiser toutes les données d'avertissement\n⚠️ Vous devez donner les droits d'administrateur au bot pour expulser automatiquement les membres bannis",
    text: {
        list: "Liste des membres qui ont été avertis :\n%1\n\nPour voir les détails des avertissements, utilisez la commande \"%2warn info [@tag | <uid> | laisser vide]\" : pour voir les informations d'avertissement de la personne taguée ou de l'uid ou de vous-même",
        listBan: "Liste des membres ayant reçu 3 avertissements et bannis du groupe :\n%1",
        listEmpty: "Votre groupe n'a aucun membre ayant reçu un avertissement",
        listBanEmpty: "Votre groupe n'a aucun membre banni du groupe",
        invalidUid: "Veuillez entrer un uid valide de la personne dont vous souhaitez voir les informations",
        noData: "Aucune donnée",
        noPermission: "❌ Seuls les administrateurs de groupe peuvent débannir les membres bannis du groupe",
        invalidUid2: "⚠️ Veuillez entrer un uid valide de la personne que vous souhaitez débannir",
        notBanned: "⚠️ L'utilisateur avec l'ID %1 n'a pas été banni de votre groupe",
        unbanSuccess: "✅ Membre débanni avec succès [%1 | %2], actuellement cette personne peut rejoindre votre groupe de discussion",
        noPermission2: "❌ Seuls les administrateurs de groupe peuvent supprimer les avertissements des membres du groupe",
        invalidUid3: "⚠️ Veuillez entrer un uid ou taguer la personne dont vous souhaitez supprimer l'avertissement",
        noData2: "⚠️ L'utilisateur avec l'ID %1 n'a aucune donnée d'avertissement",
        notEnoughWarn: "❌ L'utilisateur %1 n'a que %2 avertissements",
        unwarnSuccess: "✅ Avertissement %1 du membre supprimé avec succès [%2 | %3]",
        noPermission3: "❌ Seuls les administrateurs de groupe peuvent réinitialiser les données d'avertissement",
        resetWarnSuccess: "✅ Réinitialisation réussie des données d'avertissement",
        noPermission4: "❌ Seuls les administrateurs de groupe peuvent avertir les membres du groupe",
        invalidUid4: "⚠️ Vous devez taguer ou répondre au message de la personne que vous souhaitez avertir",
        warnSuccess: "⚠️ Membre averti %1 fois %2\n- UID : %3\n- Raison : %4\n- Date Heure : %5\nCe membre a été averti 3 fois et banni du groupe, pour débannir, utilisez la commande \"%6warn unban <uid>\" (avec uid étant l'uid de la personne que vous souhaitez débannir)",
        noPermission5: "⚠️ Le bot a besoin des droits d'administrateur pour expulser les membres bannis",
        warnSuccess2: "⚠️ Membre averti %1 fois %2\n- UID : %3\n- Raison : %4\n- Date Heure : %5\nSi cette personne viole %6 fois de plus, elle sera bannie du groupe",
        hasBanned: "⚠️ Les membres suivants ont été avertis 3 fois auparavant et bannis du groupe :\n%1",
        failedKick: "⚠️ Une erreur s'est produite lors de l'expulsion des membres suivants :\n%1"
    }
 },
  ytb: {
    shortDescription: "YouTube",
    longDescription: "Téléchargez des vidéos, de l'audio ou consultez des informations sur les vidéos YouTube",
    guide: "   {pn} [video|-v] [<nom de la vidéo>|<lien de la vidéo>]: utilisé pour télécharger une vidéo depuis YouTube.\n   {pn} [audio|-a] [<nom de la vidéo>|<lien de la vidéo>]: utilisé pour télécharger de l'audio depuis YouTube\n   {pn} [info|-i] [<nom de la vidéo>|<lien de la vidéo>]: utilisé pour voir les informations d'une vidéo depuis YouTube\n   Exemple:\n    {pn} -v Fallen Kingdom\n    {pn} -a Fallen Kingdom\n    {pn} -i Fallen Kingdom",
    text: {
        error: "Une erreur s'est produite : %1",
        noResult: "Aucun résultat de recherche ne correspond au mot-clé %1",
        choose: "%1Répondez au message avec le numéro pour choisir ou tout contenu pour annuler",
        downloading: "Téléchargement de la vidéo %1",
        noVideo: "Désolé, aucune vidéo n'a été trouvée avec une taille inférieure à 83 Mo",
        downloadingAudio: "Téléchargement de l'audio %1",
        noAudio: "Désolé, aucun fichier audio n'a été trouvé avec une taille inférieure à 26 Mo",
        info: "💠 Titre : %1\n🏪 Chaîne : %2\n👨‍👩‍👧‍👦 Abonnés : %3\n⏱ Durée de la vidéo : %4\n👀 Vues : %5\n👍 J'aime : %6\n🆙 Date de publication : %7\n🔠 ID : %8\n🔗 Lien : %9",
        listChapter: "\n📖 Liste des chapitres : %1\n"
    }
	}
};










