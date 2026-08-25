const examData = [
    {
        id: 1,
        topic: "Negligence / Duty of Day Care",
        fp: "A bright nine-year-old child attended a day care center after school. The day care center was located near a man-made duck pond on the property of a corporation. During the winter, the pond was used for ice skating when conditions were suitable. At a time when the pond was only partially frozen, the child sneaked away from the center and walked out onto the ice covering the pond. The ice gave way, and the child fell into the cold water. He suffered shock and would have drowned had he not been rescued by a passerby. At the time of the incident, the pond was clearly marked with signs that stated, \"THIN ICE-NO SKATING.\" When the child left the day care center, the center was staffed with a reasonable number of qualified personnel, and the center's employees were exercising reasonable care to ensure that the children in their charge did not leave the premises. The jurisdiction follows a rule of pure comparative negligence.",
        q: "In a suit brought on the child's behalf against the day care center, who is likely to prevail?",
        opts: [
            "The child, because he left the center while he was under the center's care.",
            "The child, because the day care center is located near a pond.",
            "The day care center, because it was not negligent.",
            "The day care center, because the child was a trespasser."
        ],
        ans: 2,
        exp: "(C) is the best response, because all the facts point to the conclusion that the day care center exercised reasonable care.\n\nWe know that a \"bright nine-year old child\" chose to \"sneak[]\" away from his day care center. Furthermore, we know there were a \"reasonable number of qualified personnel\" at the day care center who exercised \"reasonable care\" to ensure the safety of the children. In this context, the day care center did not violate its duty of care, even though the child was injured.\n\n(A) is not the best response because it incorrectly implies that the day care center can be strictly liable just because the child left while under its care. Day care centers are held to a negligence standard. (B) is not the best response because the location near a pond is not by itself sufficient to establish liability. (D) is not the best response because the day care center was not the owner or possessor of the land on which the child trespassed, so the child's status as a trespasser is irrelevant to a lawsuit against the center."
    },
    {
        id: 2,
        topic: "Defamation / Publication Element",
        fp: "The owner of a truck leasing company asked a salesman who worked at the company to deliver $1,000 to the company's main office. The following week, as a result of a dispute over whether the money had been delivered, the owner instructed the salesman to come to the office to submit to a lie detector test.\n\nWhen the salesman reported to the owner's office for the test, it was not administered. Instead, without hearing the salesman's story, the owner shouted at him, \"You're a thief,\" and fired him. The owner's shout was overheard by several other employees who were in another office, which was separated from the owner's office by a thin partition. The next day, the salesman accepted another job at a higher salary. Several weeks later, upon discovering that the money had not been stolen, the owner offered to rehire the salesman.",
        q: "In a suit for slander by the salesman against the owner, the salesman will",
        opts: [
            "prevail, because the salesman was fraudulently induced to go to the office for a lie detector test, which was not, in fact, given.",
            "prevail, if the owner should have foreseen that the statement would be overheard by other employees.",
            "not prevail, if the owner made the charge in good faith, believing it to be true.",
            "not prevail, because the statement was made to the salesman alone and intended for his ears only."
        ],
        ans: 1,
        exp: "(B) is the best response, because the publication requirement for defamation is satisfied if the defendant negligently failed to foresee that the statement would be overheard by someone other than the plaintiff.\n\nOne of the elements of a defamation claim is \"publication\": the plaintiff must prove that the defamatory statement was communicated to at least one person other than the plaintiff. If the defendant had reason to foresee such an overhearing, then the requirement is satisfied. Therefore, if the owner should have foreseen that another employee would overhear the statement through the thin partition, that fact satisfies the publication element.\n\n(A) is not the best response because whether or not the salesman was fraudulently induced into the office is irrelevant to the determination of his slander suit. (C) is not the best response because where the plaintiff is not a public figure, the defendant's merely-negligent belief that the statement was true will suffice for liability. (D) is not the best response because intent that only the plaintiff hear the statement is not enough to block liability if the defendant was negligent regarding the risk that someone else would overhear it."
    },
    {
        id: 3,
        topic: "Negligence / Causation",
        fp: "A patron ate a spicy dinner at a restaurant on Sunday night. He enjoyed the food and noticed nothing unusual about the dinner.\n\nLater that evening, the patron had an upset stomach. He slept well through the night, went to work the next day, and ate three meals. His stomach discomfort persisted, and by Tuesday morning he was too ill to go to work.\n\nEventually, the patron consulted his doctor, who found that the patron was infected with a bacterium that can be contracted from contaminated food. Food can be contaminated when those who prepare it do not adequately wash their hands.\n\nThe patron sued the restaurant for damages. He introduced testimony from a health department official that various health code violations had been found at the restaurant both before and after the patron's dinner, but that none of the restaurant's employees had signs of bacterial infection when they were tested one month after the incident.",
        q: "The restaurant's best argument in response to the patron's suit would be that",
        opts: [
            "No one else who ate at the restaurant on Sunday complained about stomach discomfort.",
            "The restaurant instructs its employees to wash their hands carefully and is not responsible if any employee fails to follow these instructions.",
            "The patron has failed to establish that the restaurant's food caused his illness.",
            "The patron assumed the risk of an upset stomach by choosing to eat spicy food."
        ],
        ans: 2,
        exp: "(C) is the best response, because the plaintiff cannot prove the defendant restaurant actually caused him to get sick.\n\nA plaintiff bears the burden of proving by a preponderance of the evidence that a defendant actually caused his injury. Under these facts, the plaintiff cannot produce any real evidence that the dinner caused him to become sick, but only that he had an upset stomach later and that violations were found at the restaurant. Because the plaintiff had three meals after eating at the restaurant, any of which could have caused the infection, the patron has failed to carry his burden on causation.\n\n(A) is not the best response because the fact that no one else became ill creates only an inference that the restaurant was not the cause, which is less comprehensive than the argument that the plaintiff has entirely failed his burden of proof. (B) is not the best response because the restaurant is responsible for the acts of its employees under respondeat superior, even if they disregard instructions. (D) is not the best response because the plaintiff sued for a bacterial infection, not merely an upset stomach from spicy food, and one does not assume the risk of foodborne bacteria simply by eating spicy food."
    },
    {
        id: 4,
        topic: "Premises Liability / Defense of Property",
        fp: "As an encyclopedia salesman approached the grounds on which a house was situated, he saw a sign that said, \"No salesmen. Trespassers will be prosecuted. Proceed at your own risk.\" Although the salesman had not been invited to enter, he ignored the sign and drove up the driveway toward the house. As he rounded a curve, a powerful explosive charge buried in the driveway exploded, and the salesman was injured.",
        q: "Can the salesman recover damages from the homeowner for his injuries?",
        opts: [
            "Yes, if the homeowner was responsible for the explosive charge under the driveway.",
            "Yes, unless the homeowner, when he planted the charge, intended only to deter, not to harm, a possible intruder.",
            "No, because the salesman ignored the sign, which warned him against proceeding further.",
            "No, if the homeowner reasonably feared that intruders would come and harm him or his family."
        ],
        ans: 0,
        exp: "(A) is the best response, because a landowner may not use deadly force to defend property.\n\nDefense of property is a defense to an intentional tort—one may use reasonable force to prevent trespass. However, deadly force cannot be used except to prevent an intrusion that is likely to cause death or serious injury to the inhabitants. When a property owner uses force indirectly, by means of an automatic mechanical device, the case is judged by the same standards as if the owner were acting directly. Even though the salesman was an outright trespasser, because he did not pose a threat of death or serious bodily harm, the homeowner was only entitled to use reasonable, non-deadly force to deter him.\n\n(B) is not the best response because even if the intent is only to deter, deadly force cannot be used against trespassers who do not pose a threat of death or serious injury. (C) is not the best response because deadly force cannot be used against non-dangerous trespassers even if a warning is given. (D) is not the best response because even if the homeowner reasonably feared intruders in general, the salesman himself did not pose a threat of death or serious injury, and mechanical devices are judged based on whether the owner would have been privileged to use the force against the specific intruder."
    },
    {
        id: 5,
        topic: "Negligent Misrepresentation / Damages",
        fp: "The personnel director of an investment company told a job applicant during an interview that the company was worth millions of dollars and that the company's portfolio would triple in the next several months. The applicant was very excited about the company's prospects and accepted an offer to work for the company. Two days later, the applicant read in the newspaper that the investment company had filed for bankruptcy reorganization. As a result of reading this news, the applicant suffered severe emotional distress but he immediately found another comparable position.",
        q: "Is the applicant likely to prevail in his action for negligent misrepresentation?",
        opts: [
            "No, because the applicant did not suffer any physical injury or pecuniary loss.",
            "No, because the personnel director's statement was purely speculative.",
            "Yes, because the applicant relied on the personnel director's misrepresentations about the investment company.",
            "Yes, because the personnel director should have foreseen that his misrepresentations would cause the applicant to be upset."
        ],
        ans: 0,
        exp: "(A) is the best response, because the plaintiff did not suffer the appropriate damages.\n\nFor a claim of negligent misrepresentation, recovery is usually limited to pecuniary loss (or physical harm, if the misrepresentation involves a risk of physical harm). Here, the applicant did not face any risk of physical harm, and he \"immediately found another comparable position,\" negating pecuniary loss. His emotional distress, standing alone, is not sufficient to assert a claim for negligent misrepresentation.\n\n(B) is not the best response because the statement was not \"purely\" speculative, as specific facts were mentioned (e.g., that the company was currently worth millions). (C) is not the best response because even if he justifiably relied, he lacked the appropriate damages. (D) is not the best response because recovery for negligent misrepresentation does not extend to pure emotional distress."
    },
    {
        id: 6,
        topic: "Battery / Consent",
        fp: "A bus passenger was seated next to a woman whom he did not know. The woman stood to exit the bus, leaving a package on the seat. The passenger lightly tapped the woman on the back to get her attention and to inform her that she had forgotten the package. Because the woman had recently had back surgery, the tap was painful and caused her to twist and seriously injure her back.",
        q: "If the woman sues the passenger to recover for the back injury, will she prevail?",
        opts: [
            "No, because she is presumed to have consented to the ordinary contacts of daily life.",
            "No, because she was not put in apprehension because of the touching.",
            "Yes, because the passenger intentionally touched her.",
            "Yes, because the passenger's intentional touching seriously injured her."
        ],
        ans: 0,
        exp: "(A) is the best response, because the passenger's touch was neither unreasonable nor inconsistent with ordinary social norms privileging such contacts.\n\nIn crowded society, people are presumed to consent to ordinary, non-harmful, and non-offensive contacts, such as a light tap to get someone's attention. Because the passenger merely lightly tapped her back for a helpful purpose, and the woman gave no indication that she did not want to be subjected to such ordinary contact, the passenger is not liable for battery despite her unforeseen injury.\n\n(B) is not the best response because while it would prohibit a claim for assault (which requires apprehension), it would not prohibit a claim for battery (which only requires harmful or offensive contact). (C) and (D) are not the best responses because even if the touching was intentional and caused injury, the presumed consent to ordinary daily contacts acts as a complete defense."
    },
    {
        id: 7,
        topic: "Battery / Elements",
        fp: "A smoker and a nonsmoker were seated at adjoining tables in a small restaurant. The smoker's table was in the smoking section, and the nonsmoker's table was in the nonsmoking section. When the smoker lit a cigarette, the nonsmoker politely requested that he not smoke, explaining that she had a severe allergy to cigarette smoke. The smoker ignored the nonsmoker's request and continued to smoke. As a result, the nonsmoker was hospitalized with a severe allergic reaction to the smoke.\n\nThe nonsmoker brought a battery action against the smoker.",
        q: "Which of the following questions will NOT be an issue in the battery action?",
        opts: [
            "Did the smoker intend to cause the nonsmoker's contact with the cigarette smoke?",
            "Does smoke have the physical properties necessary for making the kind of contact required for battery?",
            "Is contact with cigarette smoke from a lawful smoking section in a restaurant the kind of contact one must endure as a voluntary restaurant patron?",
            "Was the smoker's conduct unreasonable under the circumstances?"
        ],
        ans: 3,
        exp: "(D) is the best response, because the reasonableness of the defendant's conduct is irrelevant to a battery claim.\n\nBattery is the intentional infliction of a harmful or offensive bodily contact. Reasonableness is the standard for a negligence action. In an intentional tort like battery, the focus is on intent and the nature of the contact, not whether the conduct was \"unreasonable under the circumstances.\"\n\n(A) will be an issue, because the plaintiff must establish the smoker's intent to cause contact. (B) will be an issue, because the plaintiff must prove that smoke constitutes a physical contact. (C) will be an issue, because the plaintiff must establish that the contact was offensive (and the lawful nature of the smoking section goes to whether a patron implicitly consents to such contact)."
    },
    {
        id: 8,
        topic: "Premises Liability / Undiscovered Trespasser",
        fp: "A hiker sustained a head injury when he was struck by a limb that fell from a tree. At the time of his injury, the hiker was walking through a forest on private property without the property owner's knowledge or permission. It was determined that the limb fell because the tree was infested with termites.",
        q: "In an action by the hiker against the property owner to recover for his head injury, will the hiker prevail?",
        opts: [
            "No, because the property owner could not foresee that anyone would be injured.",
            "No, because the property owner breached no duty to the hiker, who was a trespasser.",
            "Yes, because the property owner had a duty to prevent the trees on his property from becoming dangerous.",
            "Yes, because the property owner is liable for hidden dangers on his property."
        ],
        ans: 1,
        exp: "(B) is the best response, because the trespasser was owed no duty.\n\nThe general rule is that a landowner owes no duty to an undiscovered trespasser to make the land safe, to warn of dangers on it, or to protect the trespasser in any way. Because the hiker was on the property \"without the property owner's knowledge or permission,\" the hiker was an undiscovered trespasser, and the property owner breached no duty.\n\n(A) is not the best response because the issue is not primarily foreseeability, but the lack of duty owed to an undiscovered trespasser. (C) and (D) are not the best responses because the property owner did not owe these duties to an undiscovered trespasser."
    },
    {
        id: 9,
        topic: "Strict Liability / Wild Animals",
        fp: "A homeowner resented the fact that joggers and walkers would sometimes come onto his property just beside the sidewalk in order to enjoy the feel of walking or running on grass. He put up a \"No Trespassing\" sign, but it did not stop the practice. He then put up a \"Beware of Skunk\" sign and bought a young skunk. He took the skunk to a vet to have its scent gland removed. Unfortunately, the vet did not perform the operation properly, and the scent gland was not removed. The homeowner was unaware that it had not been removed.\n\nOne day a walker was out for a stroll. When she came to the homeowner's property, she walked on the grass alongside the sidewalk on the homeowner's property. The skunk came up behind the walker and sprayed her with its scent. The smell was overpowering, and she fainted. She struck her head on the sidewalk and suffered serious injuries.",
        q: "The probable result of the walker's claim against the homeowner is that she will",
        opts: [
            "recover, because the skunk was a private nuisance.",
            "recover, because the skunk was not a domesticated animal.",
            "not recover, because the walker was a trespasser.",
            "not recover, because the vet was the cause of the injury."
        ],
        ans: 1,
        exp: "(B) is the best response, because it identifies the key reason the homeowner will be liable: a skunk is a wild animal.\n\nThe rule is that the owner of a wild animal is strictly liable for the animal's conduct creating damage, even if the owner takes precautions (like having a scent gland removed). Because a skunk is not a domesticated animal, the homeowner is strictly liable for the harm caused by its wild characteristics (spraying), regardless of his lack of fault.\n\n(A) is not the best response because a private nuisance requires an interference with the plaintiff's use and enjoyment of her own land, which does not apply to a trespasser on another's land. (C) is not the best response because strict liability for wild animals generally extends to foreseeable trespassers or those on the periphery of the land, overriding normal trespasser duty limits. (D) is not the best response because the vet's negligence does not relieve the owner of a wild animal from strict liability to the injured party."
    },
    {
        id: 10,
        topic: "Negligent Infliction of Emotional Distress / Bystander",
        fp: "A driver negligently ran over a pedestrian. A bystander witnessed the accident from across the street. The bystander ran to the pedestrian, whom he did not know, and administered first aid, but the pedestrian died in the bystander's arms. The bystander suffered serious emotional distress as a result of his failure to save the pedestrian's life, but he experienced no resulting physical manifestations. The bystander brought a negligence action against the driver.",
        q: "Is the bystander likely to prevail?",
        opts: [
            "No, because the bystander assumed the risk.",
            "No, because the bystander had no familial or other pre-existing relationship with the pedestrian.",
            "Yes, because danger invites rescue.",
            "Yes, because the bystander was in the zone of danger."
        ],
        ans: 1,
        exp: "(B) is the best response, because courts limit recovery for bystander emotional distress to those who are closely related to the injured person.\n\nTo recover for negligent infliction of emotional distress as a bystander outside the zone of danger, the plaintiff must be closely related to the injury victim, be present at the scene, and suffer serious emotional distress. Because the bystander did not know the pedestrian, he fails the \"closely related\" requirement.\n\n(A) is not the best response because the rescue doctrine generally overrides assumption of risk for rescuers, but the suit here fails due to the limits of NIED, not assumption of risk. (C) is not the best response because while danger invites rescue (allowing physically injured rescuers to recover), it does not bypass the strict familial relationship requirements for pure emotional distress bystander claims. (D) is not the best response because the bystander was across the street when the accident happened, so he was not in the zone of danger."
    },
    {
        id: 11,
        topic: "Negligence / Child Standard of Care",
        fp: "An 11-year-old boy was driving a full-size motorcycle on a private road, where the boy was a trespasser. The motorcycle hit a tire that had fallen off a truck driven by a delivery company employee who was making a delivery to an address on the private road. The boy was injured when his motorcycle went out of control after striking the tire.\n\nIn a negligence action brought on behalf of the boy against the delivery company, the company contends that the boy was contributorily negligent and that his damages, if any, should be reduced in conformance with the jurisdiction's comparative negligence statute. The boy argues that his conduct should be judged according to the standard of a reasonable child of like age, intelligence, and experience under the circumstances.",
        q: "Is the boy entitled to be judged according to the standard of care that he has argued for?",
        opts: [
            "No, because the boy was driving a motorcycle.",
            "No, because the boy was trespassing on the private road.",
            "Yes, because comparative negligence applies.",
            "Yes, because the boy was 11 years old at the time."
        ],
        ans: 0,
        exp: "(A) is the best response, because driving a motorcycle is an adult activity.\n\nWhere a child is a party to a negligence suit, the standard of care is normally that of a reasonable child of the same age, intelligence, and experience. But there is a key exception: where a child is engaging in a dangerous activity characteristically undertaken by adults (like driving a car, tractor, or motorcycle), the adult standard of care applies. Therefore, the boy will be judged by an adult standard.\n\n(B) is not the best response because the boy's status as a trespasser does not affect the standard of care by which his own contributory negligence is measured. (C) is not the best response because the application of comparative negligence does not change the underlying standard used to determine if he was negligent. (D) is not the best response because age is overridden by his engagement in an adult activity."
    },
    {
        id: 12,
        topic: "Strict Products Liability / Design Defect",
        fp: "A company manufactured metal stamping presses that were usually sold with an installed safety device that made it impossible for a press to close on a worker's hands. The safety device produced a substantially safer machine without affecting the machine's ease of use, and cost the manufacturer little. The company strongly recommended that its presses be purchased with the safety device installed, but would sell a press without the safety device at a slightly reduced price. This alternative model included a warning that the press created a risk of closing on the operator's hand and crushing it.\n\nRejecting the company's advice, a worker's employer purchased a stamping press without the safety device. The press closed on the worker's hand, crushing it.",
        q: "In an action brought by the worker against the company, will the worker prevail?",
        opts: [
            "Yes, because the company's press was the cause in fact of the worker's injury.",
            "Yes, because the company sold the press to the worker's employer without an installed safety device.",
            "No, because the failure of the worker's employer to purchase the press with a safety device was a superseding intervening cause of the worker's injury.",
            "No, because the company strongly recommended that the worker's employer purchase the press with the safety device."
        ],
        ans: 1,
        exp: "(B) is the best response, because a product is defective if it fails to include a feasible safety device that would prevent injuries foreseeably incurred in ordinary use.\n\nA plaintiff can prove a design defect by showing a reasonable alternative design that is safer without being significantly more expensive or less useful. The manufacturer had such a design but chose to sell an alternative without it. If a product is unreasonably dangerous due to a design defect, a manufacturer cannot escape liability simply by offering a warning or giving the buyer the choice to purchase a safer version.\n\n(A) is not the best response because cause in fact alone is not enough; the product must also be defective. (C) is not the best response because the employer's decision to buy the cheaper press was highly foreseeable (the manufacturer literally created it for that purpose), so it is not a superseding cause. (D) is not the best response because warnings and recommendations do not absolve a manufacturer from liability for selling a defectively designed product."
    },
    {
        id: 13,
        topic: "Negligence / Landlord Duty",
        fp: "A child was bitten by a dog while playing in a fenced-in common area of an apartment complex owned by a landlord. The child was the guest of a tenant living in the complex, and the dog was owned by another tenant. The owner of the dog knew that the dog had a propensity to bite, but the landlord did not have any notice of the dog's vicious propensities.",
        q: "In an action by the child against the landlord, will the child prevail?",
        opts: [
            "Yes, because in these circumstances a landlord is strictly liable.",
            "Yes, because a landlord's duty to protect a tenant's guests from dangerous conditions is non-delegable.",
            "No, because the landlord did not have any notice of the dog's vicious propensities.",
            "No, because a landlord owes no duty to a tenant's gratuitous guests."
        ],
        ans: 2,
        exp: "(C) is the best response, because due to his lack of notice of the dog's propensities, the landlord acted reasonably.\n\nA landlord's duty regarding common areas is to exercise reasonable care to keep them safe. If the landlord had no reason to know that the dog posed a risk to those on his property, his failure to take precautions against that risk was not negligent.\n\n(A) is not the best response because strict liability for a vicious animal falls on the owner or possessor of the animal, not the landlord who merely owns the property where it happened. (B) is not the best response because the presence of the dog is not a \"condition\" of the premises subject to non-delegable duty rules, and even so, liability requires notice of the danger. (D) is not the best response because a landlord does owe a duty of reasonable care in common areas to foreseeable entrants, including guests of tenants."
    },
    {
        id: 14,
        topic: "Negligence / Firefighter's Rule",
        fp: "A driver, returning from a long shift at a factory, fell asleep at the wheel and lost control of his car. As a result, his car collided with a police car driven by an officer who was returning to the station after having responded to an emergency. The police officer was injured in the accident. The police officer sued the driver in negligence for her injuries. The driver moved for summary judgment, arguing that the common-law firefighters' rule barred the suit.",
        q: "Should the court grant the motion?",
        opts: [
            "No, because the firefighters' rule does not apply to police officers.",
            "No, because the police officer's injuries were not related to any special dangers of her job.",
            "Yes, because the accident would not have occurred but for the emergency.",
            "Yes, because the police officer was injured on the job."
        ],
        ans: 1,
        exp: "(B) is the best response, because it correctly applies the firefighters' rule to the facts.\n\nThe firefighters' rule generally bars emergency responders from recovering from the person whose negligence created the emergency to which they are responding, or for risks inherent in their dangerous occupation. Here, the officer was struck by a sleepy driver in normal traffic while returning to the station. Being struck in ordinary traffic is not a special, unique risk inherent to police work, nor was she responding to an emergency caused by this driver. Therefore, the rule does not apply.\n\n(A) is not the best response because the firefighters' rule does apply to police officers. (C) is not the best response because but-for causation related to the initial emergency is insufficient; the injury must stem from the special risks of the job. (D) is not the best response because merely being injured on the job does not automatically trigger the rule; the injury must result from the special hazards inherent in the emergency responder's duties."
    },
    {
        id: 15,
        topic: "Assault and Battery",
        fp: "A golfer was annoyed that his caddie was joking about the golfer's bad last shot. The golfer swung his newly-purchased golf club in the direction of the caddie's head, intending to frighten the caddie but not to hit him. The caddie started to duck to avoid the blow. The golfer stopped his swing so that the club would not have hit the caddie, except that due to the club manufacturer's negligence the club head flew off and hit the caddie in the top of the head, seriously injuring him.",
        q: "The caddie will be able to recover for:",
        opts: [
            "assault but not battery.",
            "battery but not assault.",
            "assault and battery.",
            "neither battery nor assault."
        ],
        ans: 2,
        exp: "Choice (C) is correct. This is both assault and battery.\n\nBattery occurs when the defendant, with the intention of causing either a harmful or offensive contact or an imminent apprehension of such a contact, causes a harmful contact with the plaintiff. The golfer had the requisite intention to induce apprehension of an imminent harmful or offensive contact (which also satisfies the intent requirement for assault). Since a harmful contact with the caddie's person resulted, the required result for battery also occurred. The fact that the club manufacturer's negligence was a but-for cause of the contact is not a superseding cause; an intervening act of negligence does not supersede intentional torts unless it is totally bizarre and unforeseeable. Since the caddie saw the club coming and ducked, he suffered imminent apprehension (assault), and because he was hit, he suffered a battery."
    },
    {
        id: 16,
        topic: "Battery / Proximate Cause",
        fp: "Peter and Donald were in the habit of playing practical jokes on each other on their respective birthdays. On Peter's birthday, Donald sent Peter a cake containing an ingredient that he knew had, in the past, made Peter very ill. After Peter had eaten a piece of the cake, he suffered severe stomach pains and had to be taken to the hospital by ambulance. On the way to the hospital, the ambulance driver suffered a heart attack, which caused the ambulance to swerve from the road and hit a tree. As a result of the collision, Peter suffered a broken leg.",
        q: "In a suit by Peter against Donald to recover damages for Peter's broken leg, Peter will",
        opts: [
            "prevail, because Donald knew that the cake would be harmful or offensive to Peter.",
            "prevail, only if the ambulance driver was negligent.",
            "not prevail, because Donald could not reasonably be expected to foresee injury to Peter's leg.",
            "not prevail, because the ambulance driver's heart attack was a superseding cause of Peter's broken leg."
        ],
        ans: 0,
        exp: "Choice (A) is correct. Battery is the intentional infliction of a harmful or offensive bodily contact. Donald intended to cause Peter a harmful contact (illness) by sending the tainted cake. Once it is established that the defendant intended to commit a harmful or offensive touching and such a contact occurred, the defendant is liable for any consequences which ensue, even though he did not intend them and could not reasonably have foreseen them. Extended proximate cause analysis generally holds an initial tortfeasor liable for injuries sustained during subsequent medical transport and treatment, as these are foreseeable consequences of needing medical care.\n\nChoice (B) is wrong because the ambulance driver's negligence is not a prerequisite to Donald's liability. Choice (C) is wrong because foreseeability of the specific injury is not required for intentional torts; the tortfeasor is liable for virtually all direct consequences. Choice (D) is wrong because a medical transport accident is not a bizarre, unforeseeable superseding cause that severs liability."
    },
    {
        id: 17,
        topic: "Battery / Intent in Sports",
        fp: "Plaintiff, a jockey, was seriously injured in a race when another jockey, Daring, cut too sharply in front of her without adequate clearance. The two horses collided, causing Plaintiff to fall to the ground, sustaining injury. The State Racetrack Commission ruled that, by cutting in too sharply, Daring committed a foul in violation of racetrack rules requiring adequate clearance for crossing lanes. Plaintiff has brought an action against Daring for damages in which one count is based on battery.",
        q: "Will Plaintiff prevail on the battery claim?",
        opts: [
            "Yes, if Daring was reckless in cutting across in front of Plaintiff's horse.",
            "Yes, because the State Racetrack Commission determined that Daring committed a foul in violation of rules applicable to racing.",
            "No, unless Daring intended to cause impermissible contact between the two horses or apprehension of such contact by Plaintiff.",
            "No, because Plaintiff assumed the risk of accidental injury inherent in riding as a jockey in a horse race."
        ],
        ans: 2,
        exp: "Choice (C) is correct. Battery is the intentional infliction of a harmful or offensive bodily contact. An assault is the intentional causing of an apprehension of harmful or offensive contact. The intent necessary for a battery is the intent to make contact with the plaintiff or the intent to commit an assault with a resulting accidental \"harmful or offensive contact.\" Therefore, Plaintiff will not prevail on the battery claim unless Daring intended to cause either contact between the horses or apprehension of such by Plaintiff.\n\nChoice (A) is wrong because a reckless intent is not sufficient to be liable for battery. Choice (B) is wrong because violating a rule does not necessarily establish the specific intent required for battery. Choice (D) is wrong because the doctrine of assumption of risk does not apply to intentional torts like battery."
    },
    {
        id: 18,
        topic: "Battery / Mental Illness",
        fp: "Peavey was walking peacefully along a public street when he encountered Dorwin, whom he had never seen before. Without provocation or warning, Dorwin picked up a rock and struck Peavey with it. It was later established that Dorwin was mentally ill and suffered recurrent hallucinations.",
        q: "If Peavey asserts a claim against Dorwin based on battery, which of the following, if supported by evidence, will be Dorwin's best defense?",
        opts: [
            "Dorwin did not understand that his act was wrongful.",
            "Dorwin did not desire to cause harm to Peavey.",
            "Dorwin did not know that he was striking a person.",
            "Dorwin thought Peavey was about to attack him."
        ],
        ans: 2,
        exp: "Choice (C) is correct. Battery is the intentional infliction of a harmful or offensive bodily contact. An insane person is capable of forming the intent to do a harmful act, and the fact that the insanity may have been the cause of the intent is irrelevant. However, if Dorwin didn't know he was striking a person, then he in fact did not have the requisite intent to inflict a harmful or offensive bodily contact on Peavey.\n\nChoice (A) is wrong because it is irrelevant whether or not Dorwin understood that his act was wrongful. Choice (B) is wrong because it is not required that Dorwin wished to cause harm, only that he intended an offensive contact. Choice (D) is wrong because an unreasonable mistake (based on hallucinations) about the need for self-defense is not a valid defense to battery."
    },
    {
        id: 19,
        topic: "Battery / Scope of Consent",
        fp: "A professional football player signed a written consent for his team's physician to perform a knee operation. After the player was under a general anesthetic, the physician asked a world-famous orthopedic surgeon to perform the operation. The surgeon's skills were superior to the physician's, and the operation was successful.",
        q: "In an action for battery by the player against the surgeon, the player will",
        opts: [
            "prevail, because the player did not agree to allow the surgeon to perform the operation.",
            "prevail, because the consent form was in writing.",
            "not prevail, because the surgeon's skills were superior to the physician's.",
            "not prevail, because the operation was successful."
        ],
        ans: 0,
        exp: "Choice (A) is correct. The essence of battery is lack of consent, and the plaintiff did not consent to the surgeon's performing the operation. Even if the plaintiff gives actual consent to some type of invasion of his interests, the defendant will not be privileged if she goes substantially beyond the scope of consent. Here, the plaintiff specifically consented to having the operation performed by the team physician. The surgeon performing the surgery exceeded the scope of the consent, establishing battery.\n\nChoices (B), (C), and (D) are incorrect because the skill of the surgeon and the success of the operation are completely irrelevant to the intentional tort of battery, which is established the moment an unconsented touching occurs."
    },
    {
        id: 20,
        topic: "Assault / Imminent Apprehension",
        fp: "A host pointed an unloaded revolver at her guest, threatening to shoot him. The guest knew that the revolver was not loaded, and that the ammunition for the revolver was stored in a locked basement closet, two stories below where the two were then standing.",
        q: "In an action brought by the guest against the host for assault, will the guest prevail?",
        opts: [
            "No, because the host did not intend to shoot her guest.",
            "No, because the host did not put her guest in apprehension of an imminent contact.",
            "Yes, because the ammunition was accessible to the host.",
            "Yes, because the host threatened her guest with a revolver."
        ],
        ans: 1,
        exp: "Choice (B) is correct because the plaintiff did not have apprehension of imminent bodily contact. Assault requires that the plaintiff be put in immediate apprehension of a harmful or offensive contact. Because the guest knew the gun was unloaded and the ammunition was far away, the guest lacked the required imminent apprehension of being shot.\n\nChoice (A) is wrong because an intent to cause apprehension (rather than intent to shoot) is sufficient for assault, but the element of actual imminent apprehension in the plaintiff is missing. Choices (C) and (D) are incorrect because the threat was not imminent given the plaintiff's knowledge."
    },
    {
        id: 21,
        topic: "Assault / Imminence",
        fp: "Pocket, a bank vice president, took substantial kickbacks to approve certain loans that later proved worthless. Upon learning of the kickbacks, Dudd, the bank's president, fired Pocket, telling him, \"If you are not out of this bank in ten minutes, I will have the guards throw you out bodily.\" Pocket left at once.",
        q: "If Pocket asserts a claim against Dudd based on assault, will Pocket prevail?",
        opts: [
            "No, because the guards never touched Pocket.",
            "No, because Dudd gave Pocket ten minutes to leave.",
            "Yes, if Dudd intended to cause Pocket severe emotional distress.",
            "Yes, because Dudd threatened Pocket with a harmful or offensive bodily contact."
        ],
        ans: 1,
        exp: "Choice (B) is correct. An assault is the intentional causing of an apprehension of harmful or offensive contact. It must appear to the plaintiff that the harm being threatened is imminent. Threats of future harm cannot constitute assaults. A threatened harm ten minutes later is considered a future conditional harm, not an imminent threat.\n\nChoice (A) is wrong because an assault results in an apprehension of contact, not actual touching. Choice (C) is wrong because intent to cause severe emotional distress relates to IIED, not assault. Choice (D) is wrong because a conditional threat of future harm lacks imminence."
    },
    {
        id: 22,
        topic: "Intentional Infliction of Emotional Distress / Outrageous Conduct",
        fp: "The warden of a state prison prohibits the photographing of the face of any prisoner without the prisoner's consent. A news photographer wanted to photograph a mobster, a notorious organized crime figure incarcerated at the state prison. To circumvent the warden's prohibition, the photographer flew over the prison exercise yard and photographed the mobster. Another prisoner, who was imprisoned for a technical violation of a regulatory statute, happened to be standing next to the mobster when the photograph was taken.\n\nWhen the picture appeared in the press, the prisoner suffered severe emotional distress because he believed that his business associates and friends would think he was consorting with gangsters. The prisoner suffered no physical harm as the result of his emotional distress. The prisoner brought an action against the photographer for intentional or reckless infliction of emotional distress.",
        q: "What is the best argument that the photographer can make in support of a motion for summary judgment?",
        opts: [
            "No reasonable person could conclude that the photographer intended to photograph the prisoner.",
            "The prisoner did not suffer any physical injury arising from the emotional distress.",
            "As a news photographer, the photographer was privileged to take photographs that others could not.",
            "No reasonable person could conclude that the photographer's conduct was extreme and outrageous as to the prisoner."
        ],
        ans: 3,
        exp: "Choice (D) is correct because this argument correctly states a requirement for the tort of intentional infliction of emotional distress and shows that the requirement is not met. To establish a prima facie case for IIED, the plaintiff must prove that the defendant's act amounted to \"extreme and outrageous\" conduct. Photographing a public figure in a prison yard from the air does not meet the standard of being \"beyond all possible bounds of decency.\"\n\nChoice (A) is wrong because recklessness suffices for IIED; specific intent to photograph the prisoner is not required. Choice (B) is wrong because physical injury is not an element of IIED; severe emotional distress alone is sufficient. Choice (C) is wrong because news photographers do not possess a special privilege exempting them from tort liability."
    },
    {
        id: 23,
        topic: "Intentional Infliction of Emotional Distress / Severe Distress",
        fp: "Dumont, a real estate developer, was trying to purchase land on which he intended to build a large commercial development. Perkins, an elderly widow, had rejected all of Dumont's offers to buy her ancestral home, where she had lived all her life and which was located in the middle of Dumont's planned development. Finally, Dumont offered her $250,000. He told her that it was his last offer and that if she rejected it, state law authorized him to have her property condemned.\n\nPerkins then consulted her nephew, a law student, who researched the question and advised her that Dumont had no power of condemnation under state law. Perkins had been badly frightened by Dumont's threat, and was outraged when she learned that Dumont had lied to her.",
        q: "If Perkins sues Dumont for damages for emotional distress, will she prevail?",
        opts: [
            "Yes, if Dumont's action was extreme and outrageous.",
            "Yes, because Perkins was frightened and outraged.",
            "No, if Perkins did not suffer emotional distress that was severe.",
            "No, if it was not Dumont's purpose to cause emotional distress."
        ],
        ans: 2,
        exp: "Choice (C) is correct. In order to prevail in a case of intentional infliction of emotional distress, the plaintiff must show that the defendant's conduct was extreme and outrageous and that she, in fact, suffered *severe* emotional distress. If Perkins did not suffer emotional distress that was severe, she will not prevail.\n\nChoice (A) is wrong because the plaintiff must show both extreme and outrageous conduct AND severe emotional distress. Choice (B) is wrong because being \"frightened and outraged\" does not automatically meet the high threshold of severe emotional distress. Choice (D) is wrong because recklessness (deliberate disregard of a high probability that emotional distress will follow) is a sufficient mental state for IIED; the specific purpose to cause it is not required."
    },
    {
        id: 24,
        topic: "Intentional Infliction of Emotional Distress",
        fp: "Dayton operates a collection agency. He was trying to collect a $400 bill for medical services rendered to Pratt by Doctor.\n\nDayton went to Pratt's house and when Martina, Pratt's mother, answered the door, Dayton told Martina he was there to collect a bill owed by Pratt. Martina told Dayton that because of her illness, Pratt had been unemployed for six months, that she was still ill and unable to work, and that she would pay the bill as soon as she could. Dayton, in a loud voice, demanded to see Pratt and said that if he did not receive payment immediately, he would file a criminal complaint charging her with fraud. Pratt, hearing the conversation, came to the door. Dayton, in a loud voice, repeated his demand for immediate payment and his threat to use criminal process.",
        q: "If Pratt asserts a claim against Dayton, based on infliction of emotional distress, will Pratt prevail?",
        opts: [
            "Yes, if Pratt suffered severe emotional distress as a result of Dayton's conduct.",
            "Yes, unless the bill for medical services was valid and past due.",
            "No, unless Pratt suffered physical harm as a result of Dayton's conduct.",
            "No, if Dayton's conduct created no risk of physical harm to Pratt."
        ],
        ans: 0,
        exp: "Choice (A) is correct. In order to prevail in a case of intentional infliction of emotional distress, the plaintiff must show that the defendant's conduct was extreme and outrageous and that she, in fact, suffered severe emotional distress. Repeatedly screaming at an ill debtor and threatening criminal fraud charges while aware of her poor state of health rises to the level of extreme and outrageous conduct. Therefore, if she suffered severe emotional distress as a result, she will prevail.\n\nChoice (B) is wrong because the validity of the debt does not excuse extreme and outrageous debt collection tactics. Choices (C) and (D) are wrong because physical harm (or the risk of physical harm) is not a required element for intentional infliction of emotional distress."
    },
    {
        id: 25,
        topic: "Intentional Infliction of Emotional Distress / Public Figures",
        fp: "Doe, the governor of State, signed a death warrant for Rend, a convicted murderer. Able and Baker are active opponents of the death penalty. At a demonstration protesting the execution of Rend, Able and Baker carried large signs that stated, \"Governor Doe, Murderer.\"\n\nTelevision station XYZ broadcast news coverage of the demonstration, including pictures of the signs carried by Able and Baker.",
        q: "If Doe asserts against XYZ a claim for damages for intentional infliction of emotional distress, will Doe prevail?",
        opts: [
            "Yes, if the broadcast showing the signs caused Doe to suffer severe emotional distress.",
            "Yes, because the assertion on the signs was extreme and outrageous.",
            "No, unless Doe suffered physical harm as a consequence of the emotional distress caused by the signs.",
            "No, because XYZ did not publish a false statement of fact with \"actual malice.\""
        ],
        ans: 3,
        exp: "Choice (D) is correct. The Supreme Court has made the New York Times v. Sullivan standard applicable to actions against public figures for intentional infliction of emotional distress: The defendant must have acted with \"actual malice\" (knowledge of falsity or reckless disregard of truth) with respect to a provably false statement of fact. Because the sign was clear rhetorical hyperbole in a political protest, it was not a provably false statement of fact, and therefore the TV station cannot be liable.\n\nChoices (A) and (B) are wrong because a public figure cannot circumvent the First Amendment requirements for defamation by suing for IIED instead. Choice (C) is wrong because physical harm is not the deciding factor; the lack of a provably false statement made with actual malice bars the claim entirely."
    }
];