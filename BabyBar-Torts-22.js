const examData = [
    {
        id: 1,
        topic: "Negligence / Intervening Causes",
        fp: "A manufacturer made a colorless alcohol used by physicians for cleaning the skin of patients before administering injections. Another of its products was a red liquid for cleaning glass microscope slides used in medical and research laboratories. Because the slide cleaner contained a strong solvent that was damaging to human skin, the label normally affixed to bottles in which it was sold contained language advising users to wear rubber gloves while handling the product.\n\nAs a result of an oversight at the company's plant, skin cleaner labels were erroneously placed on several bottles of slide cleaner. One of the mislabeled bottles was delivered to a doctor's office. In giving an injection to a patient, the doctor used the slide cleaner, believing it to be the skin cleaner. As a result, the patient sustained damage to his skin.",
        q: "In a negligence action by the patient against the manufacturer, if one of the following facts or inferences were true, which would provide the manufacturer with its strongest argument in defense?",
        opts: [
            "It was unforeseeable that a doctor with the doctor's training and experience would mistake the chemicals, since they were two different colors.",
            "If the doctor had been acting reasonably, she would have realized that the product that she was using was not the skin cleaner, since it was red instead of colorless.",
            "The doctor's failure to notice that the product that she was using was red, and therefore was not the skin cleaner, amounted to gross negligence.",
            "The doctor's conduct was an intervening cause of the patient's injury."
        ],
        ans: 0,
        exp: "The patient's injury would not have occurred without the manufacturer's negligence, so the manufacturer's negligence was a cause of it. Since the patient's injury would not have occurred without the doctor's error, and since the doctor's error came between the manufacturer's conduct and the patient's injury, the doctor's error was an intervening cause of the patient's injury. If negligence that is a cause of harm is followed by an intervening cause of harm that was not foreseeable, the intervention is regarded as a superseding cause that relieves the antecedent wrongdoer of liability. Thus, if the doctor's error was unforeseeable, the manufacturer would not be liable to the patient.\n\nIf the doctor's conduct was foreseeable, it would constitute a concurring cause of harm and, as such, would not shield the antecedent wrongdoer from liability. This is true whether that intervention was reasonable or not, and whether it is classified as gross negligence or not. B, C, and D are therefore incorrect."
    },
    {
        id: 2,
        topic: "Strict Products Liability / Foreseeable Plaintiffs",
        fp: "",
        q: "Which of the following persons is most likely to recover in an action against the manufacturer of a hypodermic needle?",
        opts: [
            "A doctor's child, who found the needle in the doctor's medical bag and was injured when a defect caused it to break while the child was playing with it.",
            "A doctor's patient, who was injured when a defect caused the needle to break while the doctor was injecting him with it.",
            "A dentist, who lost profits when she was unable to inject a patient with the needle because a defect caused it to break.",
            "A narcotics addict, who contracted hepatitis because the needle was infected with the microbe that caused that disease."
        ],
        ans: 1,
        exp: "Almost all theories of products liability require that the plaintiff's contact with the product be foreseeable. Since hypodermic needles are commonly used by doctors to give injections to patients, the patient's contact with the needle is foreseeable.\n\nIt is less foreseeable, if it is foreseeable at all, that a child would play with a hypodermic needle, so A is incorrect. C is incorrect because none of the products liability theories permit the recovery of losses that are unrelated to personal injury or property damage. D is incorrect because there is no indication that the needle was infected when sold by the manufacturer or that the infection resulted from the manufacturer's negligent conduct."
    },
    {
        id: 3,
        topic: "Trespass to Land / Intent",
        fp: "A crop-duster sprayed insecticides onto growing crops from an airplane that she flew within 15 feet of the ground. In locating the fields of her customers, she used a map that the county published for that purpose and that identified every parcel of real estate in the area by a parcel number. A farmer hired the crop-duster to spray his fields with insecticide. The farmer knew that his farm was identified on the county map as parcel 612, but by mistake he told the crop duster that it was parcel 621. As a result, the crop-duster sprayed the farm that the county map identified as parcel 621. That farm belonged to a gardener, who had contracted to grow his crop without chemical insecticides and to sell it to an organic produce distributor. As a result of the crop-duster's spraying, the gardener was unable to fulfill his contract and sustained serious economic losses.",
        q: "If the gardener asserts a claim against the crop-duster for damages resulting from trespass to land, should the court find for the gardener?",
        opts: [
            "Yes, because crop-dusting is an abnormally dangerous activity.",
            "Yes, because the crop-duster intentionally flew through the airspace above his land.",
            "No, because the crop-duster reasonably believed that the farm that she was spraying belonged to the farmer.",
            "No, because there was no damage to the gardener's land."
        ],
        ans: 1,
        exp: "Trespass to land is defined as intentional entry on the plaintiff's realty without authorization. Since realty includes the airspace immediately above the land, the crop-duster entered the gardener's realty when she flew through the air 15 feet above his land. Although she believed that she had authority to do so, she did not have such authority. Her overflight was, thus, a trespass if her entry onto the realty was intentional. A defendant has the necessary intent to be liable for trespass to land if he or she desires or knows that his or her act will result in an entry onto the realty that he or she entered. This is so regardless of whether he or she knows whose realty he or she is entering, or that the entry is unauthorized. Since the crop-duster did desire to fly over parcel 621, she had the necessary intent and will be liable for trespass to the land of the gardener.\n\nWithout intent, there is no trespass liability. A is incorrect because participation in an abnormally dangerous activity does not satisfy the requirement of intent. C is incorrect because intent means a desire to enter the land or airspace above it (without regard to knowledge of the plaintiff's right). D is incorrect because damage to the realty is not an essential element of trespass to land."
    },
    {
        id: 4,
        topic: "Invasion of Privacy / Intrusion Upon Seclusion",
        fp: "A state senator was chair of a committee looking into accusations of corruption in the governor's office. Because reports of committee agents were beginning to indicate that there was a sound basis for the accusations, the senator kept them locked in her office safe to prevent them from becoming public knowledge before the investigation could be completed. A reporter broke into the senator's office, picked the lock on her safe, and photographed the documents that it contained. The following day, realizing that the security of the documents had been compromised, the senator conducted a press conference in which she made their contents known. Before she had completed the conference, however, newspapers containing the reporter's story about the papers in the senator's safe were being sold.",
        q: "If the senator instituted an action against the reporter for invasion of privacy, should the court find in the senator's favor?",
        opts: [
            "No, because the documents in the senator's safe were newsworthy.",
            "No, because the reporter was protected by the First Amendment to the United States Constitution.",
            "No, because the senator made the documents a matter of public record at the press conference.",
            "Yes, because the reporter entered into the senator's office without her permission and broke into her safe."
        ],
        ans: 3,
        exp: "The tort known as invasion of privacy can be committed in various ways. One, called \"intrusion,\" is committed by intentionally invading the plaintiff's right to solitude in a manner that would offend the reasonable person. An invasion of the plaintiff's solitude occurs when the defendant causes a physical entry into the plaintiff's private space. Since the reporter deliberately entered the senator's private office, opened the senator's private file, and copied the senator's private documents, there is no doubt that the reporter intentionally invaded the senator's solitude. Although it can never be certain that a court or jury will decide that the reasonable person would have been offended by any particular conduct, D is the only answer listed that could possibly be correct.\n\nA and B are incorrect because freedom of the press under the First Amendment does not privilege invasions of privacy for the purpose of obtaining documents, even if they are newsworthy. C is incorrect for two reasons: First, the documents were not made public until after the reporter invaded the senator's privacy by obtaining them, and second, the privilege to publish facts that are matters of public records does not include a privilege to invade privacy for the purpose of obtaining them."
    },
    {
        id: 5,
        topic: "Negligence / Duty of Care",
        fp: "A boy, who was 11 years of age, was playing with the plaintiff, who was 10 years of age. While they were playing together, the boy offered to show the plaintiff his new air rifle. The air rifle was manufactured by a local company. The boy purchased it from the defendant with money that he earned by mowing the lawns of several of his neighbors. While demonstrating the air rifle to the plaintiff, the boy accidentally shot him with it, severely injuring the plaintiff's eye. The plaintiff subsequently asserted a negligence claim against the defendant.",
        q: "If the plaintiff is successful in his claim against the defendant, what is the most likely reason?",
        opts: [
            "Any negligence by the company in the design of the air rifle should be imputed to the defendant.",
            "The air rifle was defectively designed.",
            "The air rifle was defectively manufactured.",
            "It was unreasonable for the defendant to sell the air rifle to the boy."
        ],
        ans: 3,
        exp: "The facts specify that the plaintiff's claim is for negligence. Negligence is unreasonable conduct. It may be unreasonable to sell a device as dangerous as an air rifle to an 11-year-old because the risk that he or she will use it to shoot another child is foreseeable. In any event, D is the only finding listed that could result in a judgment for the plaintiff.\n\nA is incorrect because negligence of a manufacturer is not imputed to a retailer. B and C are incorrect for two reasons: First, there is no indication that the air rifle was defective, and second, negligence liability requires unreasonable conduct, and there is no indication that the defendant acted unreasonably. Thus, even if the air rifle was defective, there would be no reason to impose negligence liability on the defendant."
    },
    {
        id: 6,
        topic: "Negligence / Vicarious Liability & Independent Contractors",
        fp: "A car dealer used a mechanic for all of his auto repairs. He used the mechanic because he was cheap, although the car dealer sometimes had to send cars back for repairs three or four times until the mechanic got it right. One of the car dealer's cars had a leaking carburetor, which the car dealer knew made it unsafe to drive. He had it repaired by the mechanic and then rented the car to the plaintiff. One hour later, while the plaintiff was driving the car, the carburetor began leaking again. As a result, the car exploded, injuring the plaintiff.",
        q: "If the plaintiff asserts a claim against the car dealer, what is the plaintiff's most effective argument in support of her claim?",
        opts: [
            "The car dealer is vicariously liable for the negligence of his employee.",
            "The duty to maintain a safe car was non-delegable.",
            "The mechanic was an independent contractor.",
            "It was unreasonable for the car dealer to hire the mechanic to repair the car."
        ],
        ans: 3,
        exp: "Since the car dealer knew that the mechanic's repairs were frequently not successful until the third or fourth attempt, it was probably unreasonable for the car dealer to trust him with the repair of a condition that the car dealer knew made the car unsafe to drive. While it is not certain that a court would come to this conclusion, the argument in D is the only one listed that could possibly result in a judgment for the plaintiff.\n\nUnder the doctrine of respondeat superior, an employer is vicariously liable for torts of an employee committed within the scope of employment. In determining whether one who renders services to the defendant is an employee, courts generally hold that if the employer has a right to control the details of performance, the worker is an employee, while if the employer does not have a right to control the details of performance, the worker is an independent contractor. Since the car dealer did not control the details of the mechanic's performance, the mechanic probably was not an employee. A is therefore incorrect. Statutory duties are sometimes held to be \"non-delegable,\" but B is incorrect because no statute is given. Since employers of independent contractors are not ordinarily held vicariously liable for the torts of those contractors, C is incorrect."
    },
    {
        id: 7,
        topic: "Negligence / Duty of Retailer",
        fp: "",
        q: "What duty, if any, does a retailer owe its customers?",
        opts: [
            "No duty to inspect products furnished by reputable manufacturers.",
            "A duty to inspect the packages of all products sold, but no duty to inspect the contents of those packages.",
            "A duty to inspect only those products that are furnished by manufacturers whose products are not well known to the retailer.",
            "A duty to make a reasonable inspection of all products that are sold by that retailer."
        ],
        ans: 3,
        exp: "Like other suppliers of products, a retailer owes its customers a duty to act reasonably. This includes a duty to make whatever inspection is reasonable. Sometimes the circumstances make it reasonable for a retailer to make no inspection at all, but in such a case, no inspection constitutes a reasonable inspection.\n\nA, B, and C are incorrect because under some circumstances the conduct specified would not be reasonable. (Note: Beware of statements that are overly broad or general. For example, some writers and judges have stated that \"a retailer owes the customer no duty to inspect products furnished by reputable manufacturers.\" Do you think that this statement would be true if the retailer knew that a shipment of glassware furnished by a reputable manufacturer was dropped by the delivery company, or that many customers had found dead rats in the jars of peanut butter that were furnished by a reputable manufacturer? It is safer to recognize that a retailer, like any other supplier of products, owes customers a duty to act reasonably, and that under some circumstances, failure to inspect merchandise furnished by reputable manufacturers is reasonable, while under other circumstances, it is not.)"
    },
    {
        id: 8,
        topic: "Defamation / Publication",
        fp: "After an employee's resignation, the employer wrote him a letter in which he said, \"You were never any good as a mechanic, and in addition, you were the most dishonest employee this company ever had.\" These statements were false. The employee's mother, who lived with the employee and frequently opened his mail, read the letter as soon as it arrived.",
        q: "In an action by the employee against the employer for defamation, should the court find for the employee?",
        opts: [
            "Yes, because the employer's statements were published to the employee's mother.",
            "Yes, only if the employer had reason to know that someone other than the employee would open and read the letter.",
            "No, because the statements contained in the letter were communicated only to the employee.",
            "No, because of the employer's privilege."
        ],
        ans: 1,
        exp: "There can be no liability for defamation unless the defendant intentionally or negligently communicated the defamatory statement to a person other than the plaintiff. Communication of the accusation to the employee's mother would satisfy this requirement only if the employer knew or should have known that she would see the letter that contained them.\n\nA is therefore incorrect. C is incorrect because the statements actually were communicated to the employee's mother, who read the letter. Courts have sometimes held that an employer who defames a former employee in a communication with a prospective employer of that former employee is privileged if he or she believes reasonably and in good faith that his or her statements are true. This reasoning does not apply to the facts given, however, because the employer's statements were not being made to a prospective employer of the employee. D is therefore incorrect."
    },
    {
        id: 9,
        topic: "Strict Products Liability / Proper Defendants",
        fp: "A pilot was injured when the helicopter that he was flying ran out of fuel and fell from the air. The day after the pilot purchased the helicopter, he noticed that the fuel gauge gave incorrect readings. He complained to an officer of the helicopter maker, who told him to have it fixed and to send the helicopter maker the bill. A week before the accident, the pilot hired an independent mechanic to repair the fuel gauge. The mechanic worked on the gauge but failed to repair it properly. The day before the accident, the pilot's partner flew the helicopter, using most of the fuel in the tank. Although the pilot's partner noticed that the fuel gauge continued to indicate that the tank was full, he neither mentioned it to the pilot nor replaced the fuel in the tank. On the day of the accident, the fuel gauge indicated that the tank was full, although it was actually almost empty.",
        q: "If the pilot wishes to assert a claim for damages on a theory of strict liability in tort, whom is he most likely to recover against?",
        opts: [
            "The helicopter maker only.",
            "The helicopter maker and the pilot's partner only.",
            "The helicopter maker and the mechanic only.",
            "The helicopter maker, the pilot's partner, and the mechanic."
        ],
        ans: 0,
        exp: "Strict liability is imposed on the professional seller of a product that is in defective condition when sold. Neither the pilot's partner nor the mechanic sold the helicopter, so B, C, and D are incorrect."
    },
    {
        id: 10,
        topic: "Negligence / Duty to Child Trespassers",
        fp: "A gravel pit owner was aware of the fact that neighborhood children used a steep slope on his realty for sledding during the snow season, and he feared that one of the children would be injured by sledding onto the public road adjacent to the property. Although he could have prevented this from happening by erecting a small fence at a cost of under $200, the gravel pit owner was unwilling to expend that sum. Instead, he posted a sign that read, \"No Sledding, Keep Out.\" Three weeks later, an eight-year-old boy was sledding down the hill on the gravel pit owner's property when his sled coasted onto the adjacent public road. The boy sustained serious injuries when he was struck by a car.",
        q: "If the boy asserts a negligence claim against the gravel pit owner, should the court find in the boy's favor?",
        opts: [
            "Yes, because danger invites rescue.",
            "Yes, if the gravel pit owner's failure to erect a fence to prevent the accident was unreasonable.",
            "No, because the car driver had the last clear chance to avoid injuring the boy.",
            "No, if the car driver's conduct was an intervening cause of harm."
        ],
        ans: 1,
        exp: "A trespassing child is entitled to reasonable care if it was foreseeable that a child would trespass and be injured, and if the child's age made it likely that he or she would fail to recognize the danger. Thus, although the boy was a trespasser, the fact that the gravel pit owner could foresee his presence and foresee that he would be injured by the proximity of the hill to the road imposed upon the gravel pit owner the duty to act reasonably and to keep the premises reasonably safe. If the gravel pit owner's failure to erect a fence was unreasonable, the gravel pit owner was negligent and probably is liable to the boy.\n\nThe phrase \"danger invites rescue\" is usually used to explain why a person who created a danger to another owed a duty of reasonable care to a rescuer who came to the aid of that other. A is incorrect because it has no application to these facts. \"Last clear chance\" is a doctrine that accomplishes only one thing: Under the proper circumstances, it negates the effect of a plaintiff's contributory negligence. Only the plaintiff raises it, and only for the purpose of negating the effect of his or her own negligence. C is incorrect because it would put the argument at the disposal of a defendant. An intervening cause does not free an antecedent wrongdoer from liability unless its occurrence was unforeseeable. Thus, the mere fact that the car driver's conduct was an intervening cause would not lead to a judgment for the gravel pit owner. D is therefore incorrect."
    },
    {
        id: 11,
        topic: "Misrepresentation / Reliance",
        fp: "The seller knew that his car's engine was cracked. Because he wanted to sell the car, he filled the crack with putty and painted it so that the crack would not show. Then he brought the car to the buyer, a used car dealer, and offered to sell it for $1,000 cash. The buyer placed the car on a lift so that he could inspect it from underneath. He noticed the filled crack but thought that he would be able to resell the car in spite of it. The buyer offered $500, which the seller accepted. The next day, the buyer was showing the car to a customer when the crack caused the engine to explode, necessitating $500 in repairs and injuring the customer.",
        q: "If the buyer institutes an action against the seller for misrepresentation, which of the following would be the seller's most effective argument in defense?",
        opts: [
            "The seller made no representation concerning the engine.",
            "The buyer did not rely on the seller's representations concerning the engine.",
            "The buyer was not justified in relying on the seller's representations concerning the engine.",
            "The buyer did not sustain damage."
        ],
        ans: 1,
        exp: "A misrepresentation is a false assertion of material fact made for the purpose of inducing the plaintiff's reliance. If the defendant knows that the assertion is false, and damages result from the plaintiff's justified reliance on it, the defendant may be held liable. It may be argued successfully that by concealing the crack, the seller falsely asserted that it did not exist. No liability will result from that assertion, however, unless the buyer relied on it. A plaintiff relies on a misrepresentation when it is a significant factor in the plaintiff's decision. Since the buyer discovered the crack, the assertion that it did not exist could not have been a factor in his decision to buy the car. For that reason, he did not rely on it and is not entitled to recover damages.\n\nA is incorrect because a court would probably hold that the affirmative act of concealing the crack was an assertion that it did not exist. Since the buyer did not rely on the seller's representation, it does not matter whether such reliance would have been justified. C is therefore incorrect. Since the facts indicate that the buyer was required to spend $500 on repairs, D is an inaccurate statement of fact and is therefore incorrect."
    },
    {
        id: 12,
        topic: "Negligence / Defenses",
        fp: "A driver stepped on his brake pedal. Because the brakes were not working properly, he could not stop, and he continued into an intersection. A second driver saw the first driver go through the red light. Because the light was green in his favor, however, the second driver did not stop; he continued into the intersection, believing that he could avoid striking the first driver by steering around him. The two vehicles collided in the intersection. The jurisdiction has a statute that prohibits entering an intersection against a red traffic signal light and another statute that adopts the all-or-nothing rule of contributory negligence.",
        q: "In an action by the second driver against the first driver, should the court find in the second driver's favor?",
        opts: [
            "No, because the second driver had the last clear chance to avoid the accident.",
            "No, because it was unreasonable for the second driver to enter the intersection when he did.",
            "Yes, because the first driver's violation of statute was a substantial factor in producing the damage.",
            "Yes, because the first driver's conduct was negligence per se."
        ],
        ans: 1,
        exp: "Under the all-or-nothing rule of contributory negligence, a plaintiff is completely barred from recovering damages if his or her own unreasonable conduct contributed to the occurrence. Since the second driver saw the first driver in the intersection, it was probably unreasonable, and therefore contributorily negligent, for him to enter the intersection when he did.\n\nThe doctrine of last clear chance does no more than negate the effect of a plaintiff's contributory negligence. If a defendant had \"the last clear chance\" to avoid injuring the plaintiff, the defendant might be held liable in spite of the plaintiff's negligence. The plaintiff never loses a case, however, simply because that plaintiff had \"the last clear chance\" to avoid being injured. A is therefore incorrect. C and D are incorrect for two reasons: First, the presumption that results from a defendant's violation of a statute (sometimes called negligence per se) may ordinarily be rebutted by proof that the violation resulted from circumstances beyond the defendant's control, and second, even if the first driver could not rebut the presumption that he was negligent, the second driver's contributory negligence is still available to him as a defense."
    },
    {
        id: 13,
        topic: "Negligence / Disclaimers",
        fp: "A store owner wrote on a refrigerator \"AS IS-$25.\" A customer bought the refrigerator. As she was loading it onto the customer's pickup truck, the store owner said, \"I hope you know that this refrigerator doesn't work.\" The customer said that he did. When the customer got the refrigerator home, he plugged it in and received a severe electrical shock while attempting to open its door.",
        q: "In an action by the customer against the store owner for damages resulting from his injury, should the court find for the customer?",
        opts: [
            "Yes, because it was unreasonable for the store owner to sell the refrigerator without warning him about the wiring defect.",
            "Yes, because the refrigerator was unfit for ordinary use.",
            "No, because the customer purchased the refrigerator \"AS IS.\"",
            "No, because the customer had the \"last clear chance\" to avoid being injured."
        ],
        ans: 0,
        exp: "Although the phrase \"AS IS\" disclaims implied warranties of merchantability or fitness for a particular purpose, it does not free a seller from the duty of acting reasonably. Since it probably was foreseeable that the purchaser of a refrigerator would plug it in even after being advised that it did not work, the store owner had a duty to take reasonable precautions against the harm that might result. If her failure to warn the customer was unreasonable, it was negligence that was a proximate cause of harm and would result in liability.\n\nB is incorrect because the phrase \"AS IS\" is an effective disclaimer of the implied warranty of merchantability (i.e., fitness for ordinary use). C is incorrect because the store owner is still liable under a negligence theory. D is based on a misinterpretation of the doctrine of last clear chance, which accomplishes nothing more than undoing the effect of a plaintiff's contributory negligence. (If a defendant had \"the last clear chance\" to avoid injuring the plaintiff, the defendant might be liable in spite of the plaintiff's negligence. The plaintiff never loses a case, however, simply because that plaintiff had \"the last clear chance\" to avoid being injured.)"
    },
    {
        id: 14,
        topic: "Battery / Self-Defense",
        fp: "The plaintiff was hunting on the defendant's land. The defendant told the plaintiff to leave, but the plaintiff refused to do so. The defendant then placed his hand on the plaintiff's chest and pushed him gently backward, repeating his demand that the plaintiff leave. The plaintiff shoved the defendant away from him and pointed his shotgun at the defendant. The defendant immediately drew a pistol and fired at the plaintiff, striking him in the arm and causing him to drop his shotgun.",
        q: "If the plaintiff asserts a claim against the defendant for battery, should the court find for the plaintiff?",
        opts: [
            "No, because the defendant fired at the plaintiff to defend his realty against a trespass.",
            "No, because the defendant fired at the plaintiff to defend himself against the plaintiff's threat with the shotgun.",
            "Yes, because the defendant struck the first blow.",
            "Yes, because the defendant did not use force against him until his entry onto the realty was complete."
        ],
        ans: 1,
        exp: "Self-defense is a privilege to use reasonable force to defend oneself against a threatened contact. Reasonable force is that force that would appear necessary to the reasonable person. Courts generally hold that it is reasonable to use deadly force in defense against what reasonably appears to be a threat of deadly force.\n\nA is incorrect because it is never reasonable to use deadly force for the sole purpose of preventing a trespass to land or chattel. C is incorrect because the defendant's initial use of gentle force was privileged in defense of property, making the plaintiff's response to it a threatened battery. The plaintiff's trespass did not end when he completed his entry but continued so long as he refused to leave in response to the defendant's demand. D is therefore incorrect."
    },
    {
        id: 15,
        topic: "Strict Liability / Wild Animals",
        fp: "A man kept a wildcat he had tamed as a pet. His neighbor was walking past the man's house when the wildcat tore through a window screen, jumped into the street, and attacked the neighbor, seriously injuring him. The neighbor subsequently asserted a claim against the man for his damages.",
        q: "If the neighbor is successful in his claim against the man, what is the likely reason?",
        opts: [
            "The neighbor's damages resulted from the man's keeping a wild animal.",
            "It was foreseeable that the wildcat would do something unforeseeable.",
            "The thing speaks for itself (res ipsa loquitur).",
            "The man's keeping the wildcat amounted to a private nuisance."
        ],
        ans: 0,
        exp: "One who keeps a wild animal is strictly liable for harm that proximately results from keeping it. An animal is \"wild\" if it comes from a species that cannot ordinarily be kept safely without special training or restraint. For this purpose, the wildcat was a wild animal even though it had been tamed.\n\nThe terms \"foreseeable\" and \"unforeseeable\" are mutually exclusive. Thus, if the cat's behavior was unforeseeable, it could not have been foreseeable. B is incorrect for this reason, and because the foreseeability of harm is not in itself sufficient to result in liability. C is incorrect for several reasons: First, res ipsa does not apply in strict liability cases; second, there is no reason to believe that the injury would not ordinarily have occurred without negligence; and third, res ipsa does not apply when there is direct evidence of the defendant's conduct. D is incorrect because private nuisance is an interference with the plaintiff's right to use and enjoy realty, and there was no interference with the plaintiff's right to use or enjoy realty."
    },
    {
        id: 16,
        topic: "Strict Products Liability / Express Warranty",
        fp: "A company manufactured a safety helmet in hopes of selling it to the military for general utility purposes, but it was unsuccessful in doing so. Instead, it sold the helmets to the general public. The helmets were packaged in boxes that showed pictures of three persons wearing the helmet: one riding a horse, one riding a motorcycle, and one doing construction work. A motorcyclist found a helmet that someone had discarded in its original box. He wore it the next day while riding his motorcycle and sustained a severe head injury when he fell.\n\nThe motorcyclist asserted a claim against the company for his injuries in a jurisdiction that has adopted a rule of \"pure comparative negligence.\" At the trial, the motorcyclist proved that the helmet was not suitable for use as a motorcycle helmet, and that if it had been, he would not have sustained injury.",
        q: "Should the court rule in the motorcyclist's favor?",
        opts: [
            "No, because the motorcyclist found the helmet.",
            "No, if the helmets were not designed or intended for use as motorcycle helmets.",
            "Yes, unless his fall from the motorcycle resulted from his own unreasonable conduct.",
            "Yes, because the box in which the helmet was sold contained a picture of a person wearing the helmet while riding a motorcycle."
        ],
        ans: 3,
        exp: "If a product fails to live up to an express assertion of fact that a supplier made about it, the supplier may be liable without regard to fault on theories of breach of express warranty and misrepresentation. For this purpose, an assertion of fact may be made by the use of models or pictures. The photo on the box probably was an express assertion that the helmet was suitable for use as a motorcycle helmet. Since it was not suitable for such use, the company is liable for breach of express warranty and misrepresentation. In addition, strict products liability may be imposed for damage that results from a defect in a product supplied by a defendant. For this purpose, a product is defective if its condition would defeat the reasonable expectations of the reasonable consumer. Since the photo on the box showed the helmet being used as a motorcycle helmet, the reasonable person probably would have expected it to be suitable for such use. Since it was not, the company is strictly liable for damage.\n\nA is incorrect because the misrepresentation and strict products liability theories discussed above do not require privity between defendant and plaintiff, and because under the express warranty theory, it has been held that the necessary privity exists between anyone who made the express assertion and anyone who relied on it. B is incorrect because even if the product was not intended for use as a motorcycle helmet, the photo on the box probably was an assertion that it was suitable for such use. C is incorrect for three reasons: First, the jurisdiction's \"pure comparative negligence\" system would diminish the plaintiff's recovery in proportion to his own fault, but it would not completely bar that recovery; second, since the purpose of a motorcycle helmet is to protect the user in an accident, the defendant's assertion and the reasonable person's expectation might have been that the helmet would be effective even if the accident was the wearer's own fault; and third, most jurisdictions hold that comparative negligence is not a defense to actions that are not based on fault (i.e., breach of warranty, misrepresentation, or strict products liability)."
    },
    {
        id: 17,
        topic: "Vicarious Liability",
        fp: "When the owner brought his car to the mechanic's shop for repairs, the mechanic told him that he would test-drive the car after repairing it. While the mechanic was test-driving the car, he struck a pedestrian. A statute in the jurisdiction provides as follows: \"The owner of any motor vehicle operated on the roads of this state shall be vicariously liable for the negligence of any person operating said motor vehicle with said owner's permission.\" The pedestrian instituted an action against the owner and the mechanic and obtained a judgment against both of them for $10,000.",
        q: "If the owner pays the judgment in full, which of the following is correct regarding the owner's rights against the mechanic?",
        opts: [
            "The owner may recover $10,000 from the mechanic.",
            "The owner may recover $5,000 from the mechanic.",
            "The owner may recover $7,500 from the mechanic.",
            "The owner may not recover from the mechanic."
        ],
        ans: 0,
        exp: "The statute given is typical of the \"owner-consent\" statute that exists in a number of jurisdictions. It requires the owner to pay for the tort committed by the driver. Whenever the law imposes vicarious liability on one for damage that another has caused, the one who pays is entitled to complete indemnity from the one who should have paid.\n\nB would be correct if the accident resulted from some fault by the owner in addition to that of the mechanic, but it is incorrect because there is no indication that the owner acted unreasonably. C is incorrect because there is no factual basis for determining that the owner is himself responsible for any portion of the loss. D is incorrect because of the owner's right of indemnity."
    },
    {
        id: 18,
        topic: "Strict Products Liability",
        fp: "A breeder of exotic birds preferred to mix feed for his birds according to his own formula instead of using commercially available mixes. For this purpose, he purchased a sealed 50-pound package of seeds from the dealer, who was in the business of selling supplies for bird and livestock breeders. The dealer had bought the sealed package from the wholesaler, a wholesaler of seed and grain. Because of negligence at the wholesaler's plant, the seeds in the package were poisonous. The breeder fed the seeds to several of his birds, which died as a result.",
        q: "If the breeder brings an action in strict liability against the wholesaler for the value of the birds that died, should the court find for the breeder?",
        opts: [
            "Yes, because the poisonous nature of the seeds was a defect.",
            "Yes, because it was reasonable for the dealer to resell the seeds without inspection.",
            "No, because the wholesaler had no contractual relationship with the breeder.",
            "No, because the breeder will be unable to recover damages from the dealer."
        ],
        ans: 0,
        exp: "Commercial suppliers, such as the wholesaler, are strictly liable if they sell a defective product that injures a foreseeable plaintiff, such as a purchaser. Here, the seeds were defective since they were poisonous, and the breeder was a foreseeable plaintiff.\n\nSince the dealer sold the seeds in the same package in which they came, the dealer's failure to inspect them was foreseeable whether or not it was reasonable. B is incorrect because a foreseeable intervention, even if unreasonable, does not free an antecedent wrongdoer from liability. Although liability for breach of warranty may require privity, the theories of negligence and strict liability in tort do not. C is therefore incorrect. D is incorrect because strict liability is imposed on the seller of a product that is in a defective condition when sold, without regard to the possibility that some other seller of the same product might be liable. Thus, a manufacturer and retailer of a defective product may be jointly and severally liable as joint tortfeasors."
    },
    {
        id: 19,
        topic: "Negligence / Rescuers",
        fp: "Although he had been warned that swimming within one hour after eating was likely to cause a cramp, a swimmer went swimming in the lake immediately after lunch. He had been swimming for a few minutes when he developed severe cramps. Finding himself unable to swim any further, he began calling for help. The swimmer's cries attracted the attention of a rescuer, who happened to be walking near the lake. The rescuer jumped into the water, swam to the swimmer's side, and, grabbing the swimmer by the hair, towed him to safety. In getting out of the lake, however, the rescuer cut his leg on a fragment of glass that was embedded in the lake bottom.",
        q: "If the rescuer asserts an action against the swimmer for personal injuries, should the court find in the rescuer's favor?",
        opts: [
            "Yes, because it was negligent for the swimmer to swim so soon after eating.",
            "Yes, because his injury occurred while he was attempting to rescue the swimmer.",
            "No, because danger invites rescue.",
            "No, because the glass fragment is an intervening cause of the rescuer's injury."
        ],
        ans: 0,
        exp: "Since the coming of a rescuer is generally viewed as a foreseeable result of peril, negligence that causes peril is often held to be a breach of a duty owed to a rescuer. Thus, if the swimmer's negligence caused the need for the rescuer to rescue him, it was a breach of duty owed to the rescuer.\n\nB is incorrect because if the swimmer had not acted negligently, there would be no basis for holding him liable to the rescuer. The phrase \"danger invites rescue\" is often used to explain why one who imperils another owes a duty of reasonable care to a rescuer attracted by that peril. If that principle had any application to these facts, it would be to establish liability, not to free the swimmer from such liability. C is therefore incorrect. An intervening cause does not prevent an antecedent wrongdoer from being liable unless the intervention was unforeseeable. D is therefore incorrect."
    },
    {
        id: 20,
        topic: "Defamation",
        fp: "The company was a manufacturer of computer hardware. The defendant was a retailer who purchased products from the company. At an industrial convention, the defendant told the company that he heard that their mutual friend, the plaintiff, was about to go into personal bankruptcy. The company did not believe what the defendant was telling him and resolved to mention it to the plaintiff as soon as the opportunity presented itself. The following day, the plaintiff called the company to discuss computer hardware. The company told the plaintiff what the defendant had said at the party. The plaintiff laughed, assured the company that he was in excellent financial condition, and they both laughed at the rumor.",
        q: "If the plaintiff asserts a defamation claim against the defendant, which of the following would be the defendant's most effective argument in defense?",
        opts: [
            "The plaintiff did not experience mental suffering.",
            "The plaintiff did not sustain damage to his reputation as a result of the statement.",
            "The defendant was only repeating what he had heard.",
            "The defendant did not publish any statement about the plaintiff."
        ],
        ans: 1,
        exp: "There is some question about whether it is defamatory to say that a person is impoverished or on the verge of bankruptcy. But even if the defendant's statement was defamatory, it was oral and, therefore, classified as slander. Ordinarily, there is no liability for slander unless the plaintiff establishes actual damage to his or her reputation. Since the company did not believe what the defendant told him, there was no damage to the plaintiff's reputation, and the defendant will not be held liable for saying it.\n\nA is incorrect because mental suffering is not an essential element of defamation. Since liability for defamation is imposed on the publisher of a defamatory statement, the fact that the defendant was only repeating what he heard would not in itself protect him against liability. C is therefore incorrect. Since publication is defined as communication to any person other than the plaintiff, D is incorrect."
    },
    {
        id: 21,
        topic: "Negligence / Breach of Duty",
        fp: "The plaintiff was employed as an insulation installer by various builders and general contractors for a period of 35 years. During that time, he was repeatedly exposed to an insulating material manufactured by the defendant. Last year, it was discovered for the first time that exposure to the material is a cause of cancer and that the plaintiff had contracted cancer as a result of his contact with the product.",
        q: "In a jurisdiction that applies the all-or-nothing rule of contributory negligence, if the plaintiff asserts a negligence claim against the defendant for damages resulting from the plaintiff's exposure to the material, what is the defendant's most effective defense?",
        opts: [
            "The plaintiff assumed the risk.",
            "The defendant did not know that contact with the material would result in cancer.",
            "The reasonable person in the defendant's situation would not have anticipated that exposure to the material would result in cancer.",
            "The plaintiff's only remedy is that created by workers' compensation statutes."
        ],
        ans: 2,
        exp: "Since negligence is defined as a failure to act reasonably in the face of a foreseeable risk, the defendant cannot be called negligent if the reasonable person in the defendants' situation would not have acted any differently than the defendant did.\n\nAssumption of the risk requires that the plaintiff have knowledge of the risk that he or she is voluntarily encountering. Since there is no indication that the plaintiff knew of the risks associated with exposure to the material, A is incorrect. B is incorrect because the defendant's lack of knowledge would not prevent liability if the reasonable person in the defendant's situation would have known. Workers' compensation may be the exclusive remedy against an injured party's employer, but since the plaintiff did not work for the defendant, D is incorrect."
    },
    {
        id: 22,
        topic: "Private Nuisance",
        fp: "A gardener's flower and plant shop was located across the street from a factory, in a building that the gardener rented from a landlord. Gases from the factory caused some of the potted plants that the gardener had for sale in his shop to die. One of the gardener's employees suffered from allergies. As a result, he found the gases so irritating to his eyes that he was unable to continue working at the gardener's shop and had to quit his job.",
        q: "Who may successfully assert a private nuisance claim against the factory?",
        opts: [
            "The landlord only.",
            "The landlord and the gardener only.",
            "The gardener and the employee only.",
            "The landlord, the gardener, and the employee."
        ],
        ans: 1,
        exp: "A claim for private nuisance can be asserted only by a plaintiff who claims that the defendant's conduct interfered with his or her use and enjoyment of realty in which he or she has a present or future possessory interest. Since the gardener held a leasehold interest and the landlord a reversion, they can successfully assert a private nuisance claim.\n\nA is incorrect because as a tenant, the gardener had sufficient interest in the realty. C and D are incorrect because, since the employee was only an employee of the gardener, he lacked the property interest necessary to the assertion of the claim."
    },
    {
        id: 23,
        topic: "Trespass to Chattels",
        fp: "When the defendant entered a restaurant for lunch, she hung her coat on the coatrack. When she was leaving, she removed from the rack a coat that looked like hers, but which actually belonged to the plaintiff. At the time she took it, the defendant believed it to be her coat, but when she had driven two miles from the restaurant, she realized that it was not hers. She turned around and was driving back to the restaurant when she was involved in an automobile accident. The accident occurred because the defendant was not paying close attention to her driving. The plaintiff's coat was completely destroyed in the accident.",
        q: "If the plaintiff asserts a claim against the defendant for trespass to chattel, should the court find in the plaintiff's favor?",
        opts: [
            "Yes, because the coat was completely destroyed after the defendant took it.",
            "Yes, because the automobile accident in which the coat was destroyed was the defendant's fault.",
            "No, because the defendant believed the coat to be her own when she took it.",
            "No, because the defendant was making a reasonable effort to return the coat when it was destroyed."
        ],
        ans: 0,
        exp: "Trespass to chattel is intentional interference with the plaintiff's chattel resulting in damage. For this purpose, intent consists of a desire or knowledge that the chattel will be involved, without regard to whether the defendant knows that the chattel is the plaintiff's or that the plaintiff's rights are being violated. Interference can consist of any act regarding the chattel that only its rightful possessor is entitled to perform. Since the defendant desired to take that particular coat, she had the necessary intent, regardless of her belief that the coat was her own. Since only the plaintiff was entitled to take the coat, the defendant interfered with it. Since the coat was destroyed while the defendant possessed it, her interference resulted in damage to the plaintiff. The defendant is therefore liable to the plaintiff for trespass to chattel.\n\nB is incorrect because the tort was committed when the defendant took the coat and the tort led to the coat's destruction. In trespass to chattel, intent does not require knowledge that the chattel belongs to another, or that the defendant's act will affect the rights of another. C is therefore incorrect. Trespass to chattel was committed when the defendant took the coat. If she had succeeded in returning the coat, damages might have been mitigated (i.e., reduced), but the tort would not have been undone. D is incorrect because her unsuccessful attempt to return the coat could not even mitigate damages."
    },
    {
        id: 24,
        topic: "Negligence / Bailments",
        fp: "A guitarist asked his friend if he could borrow the friend's amplifier for a show. The friend agreed, saying that he owed the guitarist for listening to him complain about his career. When the friend loaned the amplifier to the guitarist, he failed to tell the guitarist that there was an electrical short in the amplifier that could electrocute someone. The friend thought about telling the guitarist, but he couldn't reach him on the phone. Additionally, the electrical short was only a problem if the amplifier wasn't plugged into a surge protector. The friend had seen the guitarist play hundreds of times, and he had always plugged any amplifier into a surge protector that he carried in his guitar case. That night, as the guitarist was setting up for the show, he realized he had negligently left his surge protector on the roof of his car. When the guitarist plugged the amplifier directly into the wall outlet, he was electrocuted and suffered serious burns to his hand.",
        q: "The guitarist sued his friend for his injuries. Should the court find in the guitarist's favor?",
        opts: [
            "No, because the friend loaned him the amplifier for free.",
            "No, because he negligently left his surge protector on the roof of his car.",
            "Yes, because the friend didn't tell the guitarist about the electrical short.",
            "Yes, because the friend loaned the amplifier in return for the guitarist listening to him complain."
        ],
        ans: 2,
        exp: "A gratuitous bailment occurs when the bailment is done for the bailor's sole benefit. Here, this was a gratuitous bailment because the friend simply lent the amplifier to the guitarist for free. In the case of a gratuitous bailment, the bailor has a duty to warn the bailee of any known dangerous defects. Because the friend failed to warn the guitarist about the electrical short, he may be found liable for the guitarist's injuries.\n\nA is incorrect because the friend has a duty to warn the guitarist even if he loaned him the amplifier for free. B is incorrect because the guitarist leaving the surge protector on the roof of his car would not free the friend of liability. D is incorrect because this is still a gratuitous bailment, even if the friend said he owed the guitarist for listening to him complain."
    },
    {
        id: 25,
        topic: "Breach of Warranty",
        fp: "A homeowner went to a garden supply store to purchase fertilizer for the apple trees that grew in his backyard. Since he did not know what brand was best for his purposes, he asked the store's owner to recommend a fertilizer that was especially good for apple trees. The store owner suggested a product that he said was good for all fruit trees. The homeowner purchased the product and applied it as the label directed. While doing so, he got some of the product on his hands. Because of an allergy that he had, the product irritated his skin, causing him considerable pain and disabling him for a period of time.",
        q: "In an action by the homeowner against the store owner for damages resulting from breach of warranty, which of the following comments is most correct?",
        opts: [
            "There was no implied warranty that the product was fit for the homeowner's particular purpose because his purpose was the same as the product's ordinary use.",
            "There was no implied warranty of merchantability since the homeowner relied on the store owner's recommendation in purchasing the product.",
            "There was neither an implied warranty that the product was fit for a particular purpose nor an implied warranty of merchantability.",
            "There was an implied warranty that the product was fit for the homeowner's particular use and there was an implied warranty of merchantability."
        ],
        ans: 3,
        exp: "If the seller of a product knows the buyer's purpose in buying it, and he knows also that the buyer is relying on the seller's skill in selecting a product to suit that purpose, the sale is accompanied by an implied warranty that the product is fit for the buyer's particular purpose (UCC §2-315), even where that purpose is identical to the ordinary use of such a product. Similarly, even where the implied warranty of fitness for the buyer's particular purpose is present, the implied warranty of merchantability accompanies every sale by a merchant (UCC §2-314) unless it is effectively disclaimed."
    }
];