const examData = [
    {
        id: 1,
        topic: "Negligence / Duty and Breach",
        fp: "The manufacturer made a product that was sold over the counter for the treatment of dandruff and dry scalp conditions. A doctor purchased a bottle at a drugstore. A statement on the label read, \"This product will not harm normal scalp or hair.\" The doctor used the product as directed. Because of a rare scalp condition making him allergic to one of the ingredients, the product irritated his scalp, causing him much pain and discomfort.",
        q: "In an action for negligence by the doctor against the manufacturer, which of the following additional facts or inferences, if it was the only one true, would be most effective in the manufacturer's defense?",
        opts: [
            "The doctor did not read the statement on the label.",
            "The reasonable person in the manufacturer's position would not have foreseen that the product would injure persons with the doctor's allergy.",
            "The product was manufactured for the manufacturer by another company.",
            "The manufacturer was unaware that an allergy existed like that suffered by the doctor."
        ],
        ans: 1,
        exp: "If the risk of injury to the doctor was not foreseeable, then the manufacturer could not be said to have acted unreasonably in the face of a foreseeable risk. Since negligence is usually defined as failure to act reasonably in the face of a foreseeable risk, this would mean that the manufacturer was not negligent.\n\nConduct is a cause of harm if the harm would not have occurred without it. Thus, if the label contained a warning that the doctor disregarded or failed to read, his conduct could be contributory or comparative negligence that helped cause his injury. Since the label did not contain any warning, however, his injury would have occurred whether he read it or not. For this reason, his failure to read it was not causally related to the harm that he suffered and does not provide the manufacturer with a defense. If the doctor sued for breach of warranty, he might be required to show that he relied on some statement contained on the label, and his failure to read it might prevent him from establishing such reliance. Since his lawsuit is based on negligence, however, A is incorrect. Even if the product was manufactured by another, the manufacturer would be under a duty to use reasonable care in marketing it, so that fact alone would not protect the manufacturer against liability to the doctor. C is therefore incorrect. D is incorrect because the manufacturer's lack of awareness might have been negligent if the reasonable person in the manufacturer's shoes would have been aware."
    },
    {
        id: 2,
        topic: "Negligence / Foreseeability",
        fp: "The defendant lived in a neighborhood in which the incidence of violent crime had been increasing. The plaintiff and the defendant were having tea together in the defendant's kitchen when there was a knock at the door of the defendant's home. Although the door was equipped with a peephole that would have enabled the defendant to see who was outside before opening, the defendant opened the door without looking. As soon as the door was opened, an armed robber entered with a gun. The robber struck the plaintiff several times with the barrel of his pistol before robbing her of her money and leaving. The plaintiff subsequently asserted a negligence claim against the defendant for injuries resulting from the attack, alleging that it was negligent for the defendant to open the door without looking to see who was there.",
        q: "Which of the following additional facts, if it was the only one true, would be most helpful to the plaintiff's claim against the defendant?",
        opts: [
            "The defendant was aware of the high incidence of crime in the neighborhood.",
            "The plaintiff was aware of the high incidence of crime in the neighborhood.",
            "The defendant had invited the plaintiff for tea because she hoped to sell the plaintiff her used living room furniture.",
            "One of the defendant's neighbors had been robbed and attacked by the robber in a similar manner the previous day."
        ],
        ans: 0,
        exp: "Negligence is unreasonable conduct in the face of a foreseeable risk. The defendant's awareness of the high incidence of crime in the neighborhood would make the risk foreseeable and might result in a finding that it was unreasonable for her to open the door under the circumstances. While it is not certain that a court would come to this conclusion, the fact in A is the only one listed that would help support the plaintiff's case.\n\nThe plaintiff's knowledge would not impose any duty on the defendant, so B is incorrect. Although the defendant's intention to sell furniture to the plaintiff might make the plaintiff an invitee, and thereby impose upon the defendant a duty to act reasonably, the duty would not be breached unless the defendant had some reason to know that there was a danger in opening the door. C is therefore incorrect. D is incorrect because unless the defendant knew or should have known of the incident, it would have no relevance to the reasonableness of the defendant's conduct."
    },
    {
        id: 3,
        topic: "Negligent Infliction of Emotional Distress",
        fp: "A woman's neighbor liked to shoot neighborhood squirrels with an air rifle. The woman knew the neighbor was shooting the squirrels, but she had not asked him to stop because he had shot several squirrels that had chewed a hole into her roof. One day, as the woman was unloading groceries from the back of her car, which was parked on the other side of the street near the neighbor's house, the neighbor shot at a squirrel and shattered the woman's second-story bedroom window. The woman was very scared by the sound of the falling glass, which caused her to have a severe panic attack.",
        q: "The woman sued the neighbor for negligent infliction of emotional distress. Should the court rule in her favor?",
        opts: [
            "Yes, because she suffered a panic attack from the sound of falling glass.",
            "Yes, because the neighbor should have foreseen that he may have hurt her when he shot at her house.",
            "No, because she didn't tell the neighbor to stop shooting at the squirrels.",
            "No, because she was unloading groceries from her car on the other side of the street when her window was shot."
        ],
        ans: 3,
        exp: "To succeed on a claim of negligent infliction of emotional distress, the plaintiff must have been in the zone of danger caused by the defendant's negligent action. Here, because the woman was across the street unloading her car when the neighbor shot the second-story window, she was nowhere near the broken window, and thus was outside the zone of danger.\n\nThus, A and B are incorrect. C is incorrect because the woman's claim would not rest on whether or not she told her neighbor to stop shooting at the squirrels."
    },
    {
        id: 4,
        topic: "Negligence / Duty and Breach",
        fp: "A woman was injured when a robber shot her with a pistol manufactured by the gun maker. She asserted a claim against the gun maker, alleging that the pistol with which she had been shot was meant to be sold for a price under $50.",
        q: "Which of the following arguments is most likely to lead to a judgment for the woman?",
        opts: [
            "The gun maker is vicariously liable for battery, since it was foreseeable that a purchaser of the pistol would shoot another person with it.",
            "The gun maker breached an implied warranty that the gun was merchantable, since a pistol that is meant to be sold for under $50 is unfit for ordinary use.",
            "The gun maker is liable for negligence, since the criminal law is designed to protect persons like the woman from becoming the victims of robbers.",
            "The gun maker is liable for negligence, since the low selling price of the pistol made it foreseeable that it would be used in connection with a crime."
        ],
        ans: 3,
        exp: "Negligence is the failure to act reasonably in the face of a foreseeable risk. If selling a pistol for less than $50 created a foreseeable risk to the woman, it might be found that the gun maker's conduct in doing so was unreasonable and that the gun maker is liable to the woman for negligence. While it is not certain that a court would come to this conclusion, the argument in D is the only one listed that could possibly support the woman's claim.\n\nIntent is an essential element of battery. In a battery case, intent means that the defendant desired (or knew with substantial certainty) that harmful or offensive contact with the plaintiff would occur. A is incorrect because the fact that harm is foreseeable (rather than substantially certain) is not sufficient to result in liability for battery. In every sale by a merchant, there is an implied warranty that the product sold is merchantable, or fit for ordinary use. There is no indication, however, that the pistol did not function as a pistol ordinarily functions. B is therefore incorrect. It is sometimes said that violation of a criminal statute establishes negligence if the statute was designed to protect a class of persons to which the plaintiff belongs against risks like the one that led to the harm. C is incorrect, however, because there is no indication that the gun maker violated a criminal statute."
    },
    {
        id: 5,
        topic: "Negligence / Proximate Cause",
        fp: "A man was already intoxicated when he entered the bartender's tavern. At first, the bartender refused to serve him any more alcohol. The man insisted, however, and at his insistence, the bartender served him more drinks. When the man left the bar, he was unable to start his car. He asked a dentist, who was driving by, to assist him. The dentist, who realized that the man was drunk, determined that the man's battery was weak and started the man's car by connecting a cable to her own battery. Later, while driving, the man struck a pedestrian who was walking across the street.",
        q: "The pedestrian asserted a claim for his personal injuries against the dentist. Which one of the following facts or inferences, if it was the only one true, would provide the dentist with the most effective defense?",
        opts: [
            "The state had a statute making a barkeeper liable for damage done by a person who purchased alcohol from the barkeeper after already being intoxicated.",
            "The dentist was in the business of rendering road service to motorists having trouble with their cars.",
            "The man drove 200 miles before striking the pedestrian.",
            "The man would not have struck the pedestrian if he had not been intoxicated."
        ],
        ans: 2,
        exp: "One whose conduct creates a foreseeable risk to any person owes that person a duty of reasonable care. One who helps an intoxicated person get his or her car started is creating a foreseeable risk to all who are likely to be endangered by that person's driving. If the injury to the pedestrian occurred 200 miles away from the place where the dentist assisted the man, however, it may successfully be argued that the reasonable person in the man's situation would not have anticipated harm to him because the man could be expected to sober up in the time it took to drive that distance. While it is not certain that a court would come to this conclusion, the argument in C is the only one listed that could possibly support the dentist's defense.\n\nAlthough a statute like the one mentioned in A might impose liability on the bartender, it would not have the effect of relieving any other person of liability, so A is incorrect. B is incorrect because being in the road service business does not exempt any person from his or her common law duty to act reasonably in the face of a foreseeable risk. D would establish that the man's intoxication was a cause of the accident but would not establish that the dentist's actions were not. If anything, it would prove the cause-and-effect relationship between the dentist's conduct and the accident. D is therefore incorrect."
    },
    {
        id: 6,
        topic: "Negligence / Proximate Cause",
        fp: "The driver was driving at an unreasonably fast rate of speed when, as a result, he collided with a hunter's car that was standing unattended against the curb. The impact caused a loaded rifle that the hunter had left in the back seat of the car to fire. The bullet went through the car window and traveled four blocks before striking a painter, who was leaving a paint factory after work. Although the painter had lost the sight in his left eye in an accident that occurred when he was a child, he was employed by the paint factory as a color coordinator. As a result of his being struck by the bullet from the hunter's rifle, the painter lost the sight in his right eye. This rendered him totally blind, causing him to lose his job. The painter subsequently asserted a negligence claim against the driver, alleging permanent loss of earning capacity in addition to other items of damage.",
        q: "Which of the following is the driver's most effective argument in defense against the painter's claim for permanent loss of earning capacity?",
        opts: [
            "The painter was a super-sensitive plaintiff, since he was already blind in one eye.",
            "The hunter acted unreasonably by leaving a loaded rifle in the back seat of his car.",
            "The painter was outside the foreseeable zone of danger.",
            "The reasonable person would not have expected that the driver's conduct would cause any person to be rendered blind."
        ],
        ans: 2,
        exp: "Negligence liability requires a breach of the duty of reasonable care that is a proximate cause of the plaintiff's damage. To say that the plaintiff was outside the foreseeable zone of danger is simply another way of saying that because of where the plaintiff was located, the injury to him or her was not foreseeable. This argument could help support the driver's defense in two ways. First, if harm to the painter was not foreseeable, the driver did not owe him a duty of reasonable care. This would mean that, although the driver's conduct might have been negligent as to the hunter, it could not have been negligent as to the painter. Second, unless some injury to the painter was a foreseeable result of the driver's conduct, that conduct was not a proximate cause of it. Although a court might not agree that the painter was outside the foreseeable zone of danger, the argument in C is the only one listed that could possibly support the driver's defense.\n\nIt is generally understood that if an injury to the plaintiff was foreseeable, all its complications are foreseeable too, no matter how improbable those complications actually were. For this reason, A and D are incorrect. Joint tortfeasors are two or more persons whose torts proximately caused the same injury. In most jurisdictions, they are jointly and severally liable for the full extent of the plaintiff's injury. The argument in B would establish that the hunter was negligent, but this would not provide the driver with a defense since he and the hunter might be found to be joint tortfeasors."
    },
    {
        id: 7,
        topic: "Negligence / Products Liability",
        fp: "A burglar broke into the grocer's grocery store in the middle of the night. After stealing all the money that was in the cash register, she blew open the door of the safe with nitroglycerin and stole its contents as well. Then, as she was leaving, she stole a six-pack of beer. Because of poor quality control at the brewery, the beer contained a toxic ingredient. Later that night, the burglar drank the beer and was made seriously ill by the toxic ingredient that it contained.",
        q: "In an action by the burglar against the brewery, should the court find in the burglar's favor?",
        opts: [
            "Yes, because her injury was proximately caused by the negligence of the brewery.",
            "Yes, because the brewery breached an express warranty.",
            "No, because the burglar does not come into court with \"clean hands.\"",
            "No, because the burglar's theft of the beer will be regarded as unforeseeable."
        ],
        ans: 0,
        exp: "All persons are liable for the harm that proximately results from their negligence. Thus, if the burglar's injury was proximately caused by the brewery's negligence, the brewery is liable to her.\n\nAn express warranty is an assertion of fact that becomes part of the basis of the bargain. B is incorrect because there is no indication that an express warranty was made. C is incorrect because the clean hands doctrine, which is relevant in equity proceedings, is not applicable to an action for money damages. Since it is foreseeable that the burglar could obtain the beer in some manner, the precise manner in which the burglar obtained the beer is immaterial. D is therefore incorrect."
    },
    {
        id: 8,
        topic: "False Imprisonment",
        fp: "A movie studio was filming part of a motion picture at a large residential apartment building with the permission of the building owner. To avoid interference by curious onlookers, the movie studio's security agents set up a command post in the lobby of the building. No persons were allowed to enter the building without identifying themselves and explaining their reasons for being there. A fisherman, who lived in an apartment in the building, was returning from a fishing trip late one night. Unaware of the movie studio's activities, he was stopped by the movie studio employees as he attempted to enter. Because he was not carrying identification, the fisherman was unable to establish his identity. For this reason, the employees refused to allow him to enter. After trying unsuccessfully to convince them that he lived there, the fisherman stayed with his sister, who lived a block away. The following morning, he contacted the building owner, who spoke to the movie studio officials and arranged to have them allow the fisherman to enter.",
        q: "If the fisherman asserts a claim against the movie studio for false imprisonment, which of the following would be the movie studio's most effective argument in defense?",
        opts: [
            "The movie studio employees did not know that the fisherman was entitled to enter the building.",
            "The conduct of the movie studio employees was not unreasonable.",
            "The fisherman was not imprisoned.",
            "The fisherman sustained no damage as a result of the conduct of the movie studio employees."
        ],
        ans: 2,
        exp: "False imprisonment occurs when the defendant intentionally confines the plaintiff. The plaintiff is confined when his or her will to leave a place with fixed boundaries is overcome in a way that would similarly overcome the will of the reasonable person in the plaintiff's situation. Since the fisherman was not prevented from leaving, he was not confined (i.e., imprisoned).\n\nIn a false imprisonment case, the term \"intent\" means a desire or knowledge that the defendant's act will result in a confinement of the plaintiff and does not depend on whether the defendant knew that the plaintiff's rights were being violated. Thus, if the acts of the movie studio's employees had resulted in a confinement of the fisherman, the fact that they did not know they were violating the fisherman's rights would not provide them with an effective defense. A is therefore incorrect. B is incorrect because false imprisonment is an intentional tort of which unreasonable conduct is not an essential element. D is incorrect because damage is not an essential element of liability for false imprisonment."
    },
    {
        id: 9,
        topic: "Negligence / Proximate Cause",
        fp: "A lawyer was at a football game when he started making fun of a fan of the other team. The other team was losing badly and, unbeknownst to the lawyer, the fan had his entire life savings bet on the game. After another score, the lawyer mooned the fan and said something about his mother. The fan took out a gun and shot at the lawyer, missing him and hitting a man selling beer at a concession stand. The beer seller sued the lawyer for his injuries.",
        q: "Is the beer seller likely to recover from the lawyer?",
        opts: [
            "No, because the fan shot the beer seller, not the lawyer.",
            "No, because the shooting was unforeseeable.",
            "Yes, because the lawyer was the proximate cause of the shooting.",
            "Yes, because the lawyer was the actual cause of the shooting."
        ],
        ans: 1,
        exp: "To establish a claim for negligence, the plaintiff must show that the defendant was the proximate cause of his or her injury. Proximate cause requires the plaintiff to be in the general class of people that could foreseeably be injured by the defendant's conduct and the injury was of a type that was reasonably foreseeable. Here, it was unforeseeable that the lawyer's taunting of the fan would result in the beer seller being shot. Consequently, the beer seller is unlikely to recover from the lawyer.\n\nA is incorrect because the mere fact that the lawyer did not personally injure the beer seller would not necessarily bar the beer seller's recovery. C and D are incorrect because it was unforeseeable that the lawyer's acts would result in the beer seller getting shot."
    },
    {
        id: 10,
        topic: "Strict Products Liability",
        fp: "A farmer agreed to deliver all of her wheat to a bread company to be used by that company in the production of bread for sale to the general public. While harvesting the crop, she realized that a blade on her harvesting machine was broken and that fine slivers of metal were becoming mixed with the wheat. She said nothing about this when she delivered the wheat to the bread company since she knew that the bread company ordinarily cleaned its wheat before using it. The harvesting machine had been manufactured and sold by a tractor company. The bread company used the wheat that it purchased from the farmer to manufacture a loaf of bread that it sold to a deli owner who operated a sandwich shop. The deli owner used the bread to make a sandwich. Because the bread contained slivers of the blade from the farmer's harvesting machine, a bike messenger lacerated the lining of his throat when he swallowed a bite of the sandwich.",
        q: "Which of the following additional facts or inferences, if it was the only one true, would be most helpful to the farmer in defense against an action brought by the bike messenger on a theory of strict liability in tort?",
        opts: [
            "If the bread company acted reasonably, the slivers of metal would have been removed from the wheat before it was baked into bread.",
            "The sandwich that contained the slivers of metal had been purchased by one of the bike messenger's coworkers, who gave it to the bike messenger after changing his mind about eating it.",
            "The bread company made substantial changes to the wheat.",
            "The blade on the farmer's harvesting machine was defective when she purchased it from the tractor company."
        ],
        ans: 2,
        exp: "Strict liability is imposed on the seller of a product that is in a defective condition when sold and that reaches the consumer in a condition that is substantially unchanged. Although the farmer could still be held liable, C would be her most effective argument.\n\nA is incorrect because intervening negligence, unless it was unforeseeable, is not sufficient to relieve the supplier of a defective product from liability. Although privity or some substitute is relevant to warranty liability, strict liability in tort may be applied to benefit any plaintiff whose contact with the product was foreseeable. B is therefore incorrect. Since strict liability is not based on fault, proof that the defect resulted from some circumstance beyond the defendant's control is not sufficient to free that defendant from liability. D is therefore incorrect."
    },
    {
        id: 11,
        topic: "Assault and Battery",
        fp: "The plaintiff and the defendant were drinking at the same bar when the plaintiff began insulting the defendant by calling him names that were ethnically offensive. When they started to argue with each other, the bartender asked them both to leave. The plaintiff got into his car and drove away. Angry, the defendant began chasing him in his own car. When he caught up with the plaintiff, the defendant began passing the plaintiff's car on the left. As he did so, he swerved his car toward the plaintiff's for the purpose of frightening the plaintiff. The plaintiff did not know that the car swerving toward him was the defendant's, but he became frightened that it would hit him and steered away from it, striking a fire hydrant and sustaining injury.",
        q: "If the plaintiff institutes an action against the defendant, what should the court find the defendant liable for?",
        opts: [
            "Battery only.",
            "Assault only.",
            "Both battery and assault.",
            "Neither battery nor assault."
        ],
        ans: 2,
        exp: "Assault results when the defendant, with the intention of causing either offensive contact or apprehension of offensive contact, induces apprehension of such contact in the plaintiff. Battery results when the defendant, with the intention of causing either offensive contact or apprehension of offensive contact, causes offensive contact with the plaintiff. The defendant, intending to cause apprehension of offensive contact, induced such apprehension, making him liable for assault. With intent to induce apprehension, he also caused offensive contact, making him liable for battery. Therefore, A, B, and D are all incorrect."
    },
    {
        id: 12,
        topic: "Misrepresentation",
        fp: "The buyer was interested in purchasing the seller's house. Because the buyer knew that some of the houses in the area were infested with termites, he asked the seller whether there were any termites in his house. The seller said that there were none, believing this statement to be true. The buyer purchased the house from the seller and moved into it. Three months later, the buyer discovered that the framework of the house had been damaged by termites, and that the termites had been damaging the framework for several years. He subsequently asserted a claim against the seller on a theory of negligent misrepresentation.",
        q: "Which of the following is the seller's most effective argument in defense against the buyer's claim?",
        opts: [
            "The seller did not know that there were termites in the house.",
            "The seller had no duty to tell the buyer whether there were termites in the house.",
            "The seller's statement that there were no termites in the house was an expression of opinion.",
            "The seller's belief that there were no termites in the house was reasonable."
        ],
        ans: 3,
        exp: "A negligent misrepresentation is a false assertion of fact that is made without knowledge of its falsity but under circumstances such that a reasonable person in the defendant's situation would have had such knowledge. Thus, if the seller's belief that there were no termites in the house was reasonable, his misrepresentation was not negligent. Although there are not enough facts to determine whether a court would come to this conclusion, D is the only argument listed that could possibly support the seller's position.\n\nA is incorrect because lack of such knowledge would be negligent if the reasonable person would have known. Whether or not the seller had a duty to disclose the presence of termites, when he discussed termites, he had a duty to do so honestly and reasonably. B is therefore incorrect. A statement is of opinion if it concerns a subjective matter or contains an expression of doubt. Since the seller's statement was neither, it was not of opinion. C is therefore incorrect."
    },
    {
        id: 13,
        topic: "Strict Products Liability",
        fp: "The plaintiff purchased a box labeled \"Generic Breakfast Cereal\" from a supermarket. While he was eating it, he broke a tooth on a stone that the product contained. The product sold by the supermarket and labeled \"Generic Breakfast Cereal\" is furnished by three different manufacturers. Each sells an approximately equal quantity to the supermarket. In addition, all package their product in identical wrappers, so that it is impossible to tell which of them furnished any given box of breakfast cereal. Although the companies compete with each other, at the supermarket's request, they worked together to design the product wrapper.",
        q: "If the plaintiff is successful in an action for damages against the supermarket, what is the likely reason?",
        opts: [
            "The supermarket and manufacturers were involved in a concerted action in the manufacture and marketing of the product.",
            "The supermarket and manufacturers established standards on an industry-wide basis, which standards made identification of the product's manufacturer impossible.",
            "The negligence of any of the three manufacturers resulted in harm to the plaintiff under circumstances such that it was impossible to tell which of them caused the harm, and the supermarket is vicariously liable for that negligence.",
            "Any of the three manufacturers manufactured a defective product, and the supermarket sold that product while it was in a defective condition."
        ],
        ans: 3,
        exp: "Strict liability is imposed on the seller of a product that is in a defective condition when sold. Thus, if the supermarket sold the product while it was defective, the supermarket would be held strictly liable no matter who manufactured it.\n\nParties who work together to accomplish a particular result are involved in a concert of action that may make any one of them vicariously liable for torts committed by the others. A is incorrect, however, because the facts indicate that the manufacturers and retailer did not work together on manufacturing or marketing the product. It has been held that where there are a small number of manufacturers in a particular industry, where all belong to an industry-wide association that establishes industry standards, where those standards result in their products' being defective, and where all members of the industry and the association are named as defendants, liability may be imposed on an industry-wide basis. B is incorrect, however, because there is no indication that the number of cereal manufacturers is small or that they belong to an industry-wide association that sets standards or that their standards made the product defective or that all members of the industry and their association have been named as defendants. Under the alternate liability theory, where two or more defendants commit identical acts of negligence under circumstances that make it impossible to tell which one injured the plaintiff, it will be presumed that all of them factually caused the plaintiff's injury. C is incorrect, however, because there is no indication that all the parties named committed identical acts of negligence or that any of them was negligent at all."
    },
    {
        id: 14,
        topic: "Assault",
        fp: "A young girl planned to spend an entire weekend camping alone in the woods. A kidnapper, who knew about the girl's plan, phoned the girl's mother the day after the girl left home. The kidnapper said, \"We have your daughter. We've already beaten her up once, just to hear her scream. Next time, we might kill her.\" The kidnapper instructed the girl's mother to deliver a cash ransom to a specified location within one hour. Since there was no way to locate the girl's campsite in the woods, the girl's mother could not find out whether the kidnapper was telling the truth. Horrified that her daughter might be beaten and injured or killed, she delivered the ransom as instructed. She remained in a hysterical state until the girl returned from her camping trip and the girl's mother realized that the ransom demand had been a hoax. The girl's mother, who already suffered from a heart ailment, had a heart attack the day after the girl's return.",
        q: "If the girl's mother asserts a claim against the kidnapper for assault, should the court find in her favor?",
        opts: [
            "Yes, because the kidnapper was aware that his conduct would frighten her.",
            "Yes, because the court will transfer the kidnapper's intent.",
            "No, because the girl's mother did not perceive injury being inflicted upon the girl.",
            "No, because the girl's mother had no reason to expect to be touched by the kidnapper."
        ],
        ans: 3,
        exp: "Assault occurs when, with the intent to induce such apprehension, the defendant induces in the plaintiff a reasonable apprehension that a harmful or offensive contact with the plaintiff will occur. Since the girl's mother did not fear contact with herself, she was not assaulted.\n\nA and B are incorrect because the kidnapper's conduct did not induce the girl's mother to apprehend contact with herself. If the kidnapper's conduct did give the girl's mother reason to apprehend contact with herself, it would not matter whether she had perceived contact with the girl. C is therefore incorrect."
    },
    {
        id: 15,
        topic: "Strict Liability / Wild Animals",
        fp: "An actor owned a leopard, which the actor had trained and which had appeared with him in motion pictures. The leopard had always been tame and gentle, even when young. When the actor retired, the leopard was old, almost blind, somewhat slow-moving, and the size of a large dog. The actor brought the animal to live with him, keeping it in the fenced yard alongside his house. A young girl delivered newspapers to the actor. One day, she came to the actor's home to collect for the past week's deliveries. Since she knew the leopard, the girl opened the gate and called the animal so that she could pet him. The leopard bounded toward the place from which the sound had come, but because he was almost blind, he bumped into the girl. The girl fell to the ground, fracturing her ankle.",
        q: "If the girl asserts a claim against the actor on a theory of strict liability, should the court find in her favor?",
        opts: [
            "No, because the injury did not result from a trait that made it dangerous to keep a leopard.",
            "No, because the leopard was not a wild animal.",
            "Yes, because it was unreasonable for the actor to keep the leopard in his yard.",
            "Yes, because the actor should have anticipated that a child would attempt to pet the leopard."
        ],
        ans: 0,
        exp: "Strict liability is imposed on the keeper of a wild animal, but only for harm that proximately results from an aspect of the animal that made keeping it dangerous. Leopards are dangerous because they bite or attack. The risk that they may clumsily knock someone over is not one that makes them more dangerous than a dog or other domestic animal.\n\nB is incorrect because an animal is \"wild\" if it comes from a species that cannot ordinarily be safely kept without special training or restraint. Since this is true with leopards, the leopard's tameness does not prevent it from being so classified. C and D are incorrect because strict liability does not depend on the reasonableness of a defendant's conduct."
    },
    {
        id: 16,
        topic: "Products Liability / Damages",
        fp: "While the plaintiff was visiting her daughter, the two of them decided to go swimming at a nearby public pool. Since she had not brought a bathing suit along on her visit, the plaintiff went to a department store to purchase one. While looking at the suits on the bargain counter, she found one that had been manufactured by the defendant. The package that contained it bore a label that read, \"Disposable Bathing Suit. This garment is made completely from recycled paper. Although it is strong enough to be worn several times and is even washable, it's inexpensive enough to be thrown away after one use. Buy several, and take them with you on trips to the beach.\" The plaintiff bought the bathing suit and wore it at the public swimming pool. After swimming for a few minutes, the wet paper bathing suit suddenly dissolved and fell from her in shreds, leaving her completely naked.",
        q: "If the plaintiff asserts a claim against the defendant for damages resulting from her embarrassment, what is the defendant's best argument in defense?",
        opts: [
            "The defendant made no representations to the plaintiff.",
            "The plaintiff sustained no physical injury or symptoms.",
            "The plaintiff purchased the suit from the department store.",
            "The defendant acted reasonably in manufacturing and labeling the bathing suit."
        ],
        ans: 1,
        exp: "A claim for damages resulting from contact with a product manufactured or sold by the defendant may be based on several theories, including negligence, misrepresentation, breach of warranty, and strict liability in tort. In most jurisdictions, however, mental suffering is not a recoverable item of damage in a claim based on any of these theories unless the mental suffering is the result of a physical injury or has a physical manifestation. Although a few jurisdictions permit recovery even in the absence of physical injuries, the argument in B is the only one listed that could possibly support the defendant's defense.\n\nA is incorrect for two reasons: First, even without a representation, the defendant could be held liable on negligence, implied warranty, or strict liability theories, and second, the statement that the suit was \"strong enough to be worn several times\" was probably a representation. C is incorrect because none of the theories requires that the plaintiff be in privity with the manufacturer. Although the argument in D might provide an effective defense to a negligence claim, D is incorrect because the other theories that are available do not depend on unreasonable conduct by the defendant."
    },
    {
        id: 17,
        topic: "Negligence / Causation",
        fp: "The plaintiff and two other men were out quail hunting. The plaintiff told the two men to be careful as they walked through a field. The plaintiff was walking in front, while the other two men were walking behind him. One of the other men flushed a quail from the bushes and both men shot in the plaintiff's direction. The plaintiff was hit in the eye and the lip. It was impossible for him to tell which bullet was shot by which man. The plaintiff sued both men for negligence.",
        q: "Which of the following statements is correct?",
        opts: [
            "Both men may be held fully liable for all of the plaintiff's injuries.",
            "Each man may be held liable for 50 percent of the plaintiff's total injuries.",
            "The plaintiff has the burden of proof of showing which injury each man is responsible for.",
            "The plaintiff has to show that each man was a substantial cause of his injuries."
        ],
        ans: 0,
        exp: "If two or more persons have negligently injured a plaintiff but it is impossible to tell who caused what injury, all of the defendants may be held fully liable for the extent of the damages. Summers v. Tice, 199 P.2d 1 (Cal. 1948). In this type of situation, the burden of proof shifts to each defendant to show his or her negligence was not the actual cause of the injuries.\n\nThus, B and C are incorrect. D is incorrect because the substantial factor test is used when several things join together to cause an injury, and any one of them would have been sufficient to cause the entire injury. Here, the plaintiff had two distinct injuries (the eye and the lip), so the substantial factor test would not apply."
    },
    {
        id: 18,
        topic: "Strict Products Liability",
        fp: "A company manufactured a leash for training dogs. The leash had been submitted to all reasonable tests and inspections before being marketed. A professional dog trainer was working with a dog in her unfenced front yard and was using a brand new leash. The dog was of average size and strength. A walker was walking past the yard when the dog began to snarl and lunge at him. When the trainer yanked on the leash, it suddenly broke, freeing the dog. The dog sprang forward, biting the walker.",
        q: "If the walker asserts a claim against the company alleging that the leash used by the trainer was defective, should the court find for the walker?",
        opts: [
            "No, because the walker was not a purchaser or consumer of the product.",
            "No, because the leash had been submitted to all reasonable tests and inspections before being marketed.",
            "Yes, because the dog was a dog of average size and strength.",
            "Yes, because it was foreseeable that the leash would eventually weaken and break when used as it was meant to be used."
        ],
        ans: 2,
        exp: "Strict liability is imposed on the seller of a product that is in a defective condition when sold. A product is defective if its condition would defeat the reasonable expectations of the reasonable consumer. Since the reasonable consumer probably would not expect a brand new training leash to break when used on a dog of average size and strength, one that did was probably defective.\n\nStrict liability may be applied to benefit any person whose contact with the defective product was foreseeable, so A is incorrect. B is incorrect because strict liability does not depend on the reasonableness of the defendant's conduct. D is incorrect because the risk that it describes as foreseeable is not the one that led to the harm in this case since the device was brand new when it broke."
    },
    {
        id: 19,
        topic: "Battery",
        fp: "Every July 4, a minor league baseball team's games were sold out because of fireworks after the game. During the sold-out game, the home team lost by one run. The team's manager was so angry that he threw a baseball as hard as he could into the stands. A fan of the other team, who had actually been heckling the home team the entire time, had beers in both hands that he had snuck into the stadium in his coat. Because he couldn't get his hands up in time to block the baseball, it hit him in the face and broke his nose.",
        q: "The fan sued the manager for battery. Should the court rule in the fan's favor?",
        opts: [
            "Yes, because the manager knew with substantial certainty that he would hit a fan.",
            "Yes, because the game was over when the manager threw the baseball.",
            "No, because the beers the fan snuck in were a but-for cause of his injury.",
            "No, because the fan assumed the risk of being hit by a baseball by attending the game."
        ],
        ans: 0,
        exp: "A claim for battery requires an intentional harmful or offensive contact without the other person's consent. Importantly, the intent element is satisfied if the defendant knew with substantial certainty that a harmful or offensive contact would occur. Here, by throwing the baseball into the stands at a sold-out game, the manager knew with substantial certainty that he was likely to hit someone with the ball.\n\nB is incorrect because the fact that the game was over does not change the analysis. C is incorrect because the fact that the fan was holding the beers he snuck in is irrelevant to the manager's liability. D is incorrect because assumption of the risk is a defense to negligence, not an intentional tort."
    },
    {
        id: 20,
        topic: "Negligence / Products Liability",
        fp: "Because the plaintiff had a headache, he took two headache tablets from a bottle that had been purchased by his wife at the grocery store. The tablets had been manufactured by the company, which sold them to the grocery store in sealed bottles for resale. Because of a toxic ingredient that the tablets contained, the plaintiff became ill as a result of taking them.",
        q: "If the plaintiff asserts a claim based on negligence against the grocery store for his damages, should the court find in the plaintiff's favor?",
        opts: [
            "Yes, because the company's negligence is imputed to the grocery store.",
            "Yes, because a retailer has an absolute duty to provide safe products.",
            "No, because the bottle containing the tablets was sealed when the grocery store received it.",
            "No, because the tablets had been purchased by the plaintiff's wife."
        ],
        ans: 2,
        exp: "The key to this question is that the plaintiff is basing his claim on negligence, not strict products liability. Since negligence is a breach of the duty to act reasonably, the grocery store could be held liable under that theory only if it acted unreasonably. Since the tablets were delivered in a sealed bottle, and since the reasonable merchant does not ordinarily open sealed products before selling them, the grocery store probably did not breach the duty that it owed to the plaintiff. While the grocery store could be held liable if the trier of fact found that the reasonable merchant would ordinarily open sealed products before selling them, C is the best answer out of the choices given.\n\nA is incorrect because a manufacturer's negligence is not imputed to a retailer. B is based on an incorrect statement of the law. A retailer's duty is to use reasonable care. The breach of this duty is negligence. Although a retailer may be held liable without fault under a theory of strict liability, this liability is based not on the breach of \"an absolute duty,\" but on a policy that attempts to distribute the risks of being injured by defective products. D is incorrect because negligence liability depends on the foreseeability of the risk, not upon the existence of any contractual relationship."
    },
    {
        id: 21,
        topic: "Defamation / Public Figures",
        fp: "The city's ballet company, which was well known internationally, was having financial difficulties that caused it to fire several key dancers. After a reporter investigated the story, the city newspaper published an article saying that the ballet company was losing money because the ballet director, a world-famous and well-known public figure, was stealing money to use for his extensive plastic surgery.\n\nThe director brought a defamation suit against the newspaper. During the trial, the director produced irrefutable proof that he had not stolen money from the ballet company.",
        q: "What else does he have to show to be successful in his lawsuit?",
        opts: [
            "That the director personally lost money as a result of the article.",
            "That the reporter was negligent in researching the article.",
            "That the newspaper intended to hurt the director by publishing the article.",
            "That the ballet company suffered pecuniary damages as a result of the article."
        ],
        ans: 2,
        exp: "Because the ballet director is well known in the community, he is a public figure, and must show that the newspaper acted with malice in publishing the false statements about him.\n\nA and D are incorrect because the director does not need to prove any type of pecuniary damages. B is incorrect because negligence is the standard when the plaintiff is a private figure."
    },
    {
        id: 22,
        topic: "Strict Liability / Abnormally Dangerous Activities",
        fp: "The power company operated a nuclear power plant on the seashore just outside the city and sold electricity generated by its operations to city residents. To cool its equipment, the power company drew water from the ocean and piped it through portions of its plant. Because this operation made the water highly radioactive, the power company stored used water in a series of large concrete holding ponds. The water stored in this fashion was subjected to a series of procedures designed to \"neutralize\" it by removing the radioactivity before it was returned to the ocean. Because of an earthquake, one of the concrete holding ponds cracked, permitting several million gallons of neutralized water to escape. Although the escaping water was not radioactive, it caused substantial damage to the fields of a farmer as it passed over them.",
        q: "If the farmer asserts a claim against the power company for damage to his realty, should the court find for the farmer?",
        opts: [
            "Yes, because operating a nuclear power plant is an abnormally dangerous activity.",
            "Yes, because water is a substance that is likely to do great harm if it should escape from captivity.",
            "Yes, because it was unreasonable to operate a nuclear power plant in an area where an earthquake could occur.",
            "No, because the damage resulted from an Act of God."
        ],
        ans: 1,
        exp: "Strict liability is often imposed on one who uses his or her land in a non-natural manner for the storage of a substance that is likely to do harm upon its escape from storage. The storage of water frequently leads to the application of this principle.\n\nAlthough strict liability is imposed on one who engages in an abnormally dangerous activity, it is imposed only for damage that results from the dangerous nature of the activity. Although the operation of a nuclear power plant may be an abnormally dangerous activity, A is incorrect because harm in this case did not result from any of the aspects of operating a nuclear power plant that make it abnormally dangerous. If the power company knew or should have known that an earthquake might occur in the area of the nuclear power plant, it might have been unreasonable to operate it there. But absent such actual or constructive knowledge, the power company's conduct cannot be presumed to be unreasonable. C is therefore incorrect. The intervention of an Act of God does not free an antecedent wrongdoer from liability unless that intervention was unforeseeable. D is therefore incorrect."
    },
    {
        id: 23,
        topic: "Strict Liability / Proximate Cause",
        fp: "The company was a manufacturer of explosives. Its warehouse, which contained large quantities of explosives, was located a short distance from the town. A group of political extremists were planning to set off a series of bombs in public places in the town. Several members broke into the company's warehouse for the purpose of stealing explosives to use in making bombs. Their entry set off an alarm that brought the police. Rather than surrender to the police, the terrorists committed suicide by detonating the explosives that they had stolen. The blast caused the entire warehouse to explode. A house located a half mile away was damaged by the explosion.",
        q: "If the homeowner asserts a claim for damages against the company on the ground that storing explosives was an abnormally dangerous activity, which of the following would be the company's most effective argument in defense?",
        opts: [
            "The explosion did not result from unreasonable conduct by the company.",
            "The damage did not result from a physical invasion of the homeowner's realty by any tangible object in the control of the company.",
            "The conduct of the terrorists was an intervening cause of harm.",
            "It was not foreseeable that terrorists would deliberately detonate explosives in the warehouse."
        ],
        ans: 3,
        exp: "Strict liability may be imposed for damage resulting from participation in abnormally dangerous activities such as the manufacture and storage of explosives. Even under a theory of strict liability, however, a defendant is not liable for harm unless it was proximately caused by the defendant's activity. Conduct that is a factual cause of harm is a proximate cause of that harm if the harm was a foreseeable result and was not brought about by unforeseeable intervention. Thus, if the intervening conduct of the terrorists was not foreseeable, the harm sustained by the homeowner was not proximately caused by the conduct of the company. While it is not certain that a court would come to this conclusion, D is the only argument listed that could possibly support the company's defense.\n\nA is incorrect because strict liability may be imposed regardless of fault and regardless of whether the defendant's conduct was reasonable. Most jurisdictions hold that there can be no liability for trespass to land unless there was a physical invasion of the plaintiff's realty. B is incorrect, however, because the company may be held liable on a strict liability theory, which does not require a physical invasion. Even though a defendant's conduct was a factual cause of harm, that defendant will not be held liable if there was an unforeseeable intervening cause of the harm. C is incorrect, however, because the intervening cause will not prevent such liability unless the intervention was unforeseeable."
    },
    {
        id: 24,
        topic: "Misrepresentation / Nondisclosure",
        fp: "The seller kept an antique hay wagon in front of her house as a yard ornament. On several occasions, she offered to sell the hay wagon to her neighbor, the buyer, for $500. Although the buyer admired it, he had always been unwilling to pay the seller's price. After reading a magazine article about the increasing popularity of farm antiques, the buyer concluded that the value of the seller's hay wagon was likely to increase, and that it would therefore be a good investment. One day he approached her, saying, \"If you're still interested in selling that hay wagon, I'll pay $500.\" The seller was surprised that he had changed his mind, but did not ask him why because she was afraid that he would change it back again. Instead, she said, \"I'll take your offer,\" and sold him the wagon. Two months later, an antique dealer who saw the wagon in the buyer's yard bought it from him for $2,000.",
        q: "If the seller asserts a misrepresentation claim against the buyer, should the court find in the seller's favor?",
        opts: [
            "Yes, because the buyer knew more about the value of antique hay wagons than the seller did.",
            "Yes, because the buyer purchased the hay wagon for the undisclosed purpose of profiting from his investment.",
            "No, because the buyer was not required to disclose his purpose in purchasing the hay wagon.",
            "No, because the seller was initially satisfied with the price that the buyer paid her for the hay wagon."
        ],
        ans: 2,
        exp: "Nondisclosure of a fact is not an assertion (i.e., representation) unless the fact is one that is essential to the transaction and the circumstances are such that the other party is reasonably entitled to expect disclosure of it. Since the buyer had no special expertise, his reason for purchasing the hay wagon was not a fact essential to the transaction, and there were no circumstances that entitled the seller to expect disclosure of his hope of making a profit.\n\nA and B are incorrect because slight differences in knowledge concerning the subject of a particular transaction are not sufficient to impose a duty of disclosure. D is incorrect because the seller's initial satisfaction would not prevent her from recovering if it had been induced by a misrepresentation by the buyer."
    },
    {
        id: 25,
        topic: "Negligence / Proximate Cause",
        fp: "A state statute provides that no person shall transport passengers for hire in an airplane unless that person shall be licensed as a commercial airplane pilot. A pilot owned a small private airplane but did not have a commercial pilot's license. A businessman offered the pilot $200 to fly him to a distant city in the pilot's plane. The pilot agreed, after informing the businessman that he did not have a commercial pilot's license as required by law. While they were flying over another city, the pilot realized that he had miscalculated the amount of fuel that he needed for the trip. As a result, he was forced to land at the other city's airport. After landing and while waiting to be refueled, the pilot's plane was struck by a plane that was being negligently operated by another pilot. The first pilot and the businessman were both injured in the collision. The jurisdiction applies the all-or-nothing rule of contributory negligence.\n\nThe businessman asserted a claim against the first pilot, alleging that the first pilot was negligent in miscalculating the quantity of fuel needed to make the trip.",
        q: "Which of the following arguments would be the first pilot's most effective argument in defense?",
        opts: [
            "The businessman assumed the risk, because he knew that the first pilot did not have a commercial pilot's license.",
            "The businessman was contributorily negligent in accepting a ride with the first pilot, whom he knew to be unlicensed.",
            "The first pilot's miscalculation was not a legal cause of the injury sustained by the businessman, because the first pilot's plane was safely on the ground when struck by the plane operated by the second pilot.",
            "The first pilot's miscalculation was not a factual cause of the injury sustained by the businessman, because the harm would not have occurred if the second pilot had not been negligent."
        ],
        ans: 2,
        exp: "A defendant's conduct is not a proximate cause of harm if the harm was brought about by an independent intervening cause. An intervening cause is \"independent\" if it did not result from one of the normal risks resulting from the defendant's conduct. Since the first pilot's plane was safely on the ground at an airport when struck by the second pilot's plane, it can be argued that the collision was independent of the risks created by the first pilot's miscalculation. While it is not certain that a court would come to this conclusion, the argument in C is the only one listed that could possibly be effective in the first pilot's defense.\n\nA plaintiff may be barred from recovery by assumption of the risk when the harm results from a danger of which the plaintiff was aware and which he or she voluntarily encountered. Since there is no indication that the first pilot's miscalculation resulted from his lack of a commercial pilot's license, the harm did not result from a risk of which the businessman knew. A is therefore incorrect. Under the all-or-nothing rule, a plaintiff's negligence may prevent recovery if it was causally related to the harm which he or she sustained. Since there is no indication that the first pilot's miscalculation resulted from his lack of a commercial pilot's license, any negligence by the businessman in accepting a ride from him was not causally related to the accident. B is therefore incorrect. Conduct is a factual cause of harm if the harm would not have occurred without it. The argument in D states that the harm would not have occurred if the second pilot had not been negligent. This is obviously true and establishes that the second pilot's negligence was a factual cause of the accident. The argument also states, however, that the first pilot's miscalculation was therefore not a factual cause of the accident. Since the accident would not have occurred if the first pilot's plane had not been on the ground, and since the first pilot's plane would not have been on the ground had the first pilot not miscalculated, the first pilot's miscalculation was also a factual cause of the accident. D is therefore incorrect."
    }
];