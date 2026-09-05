const examData = [
    {
        id: 1,
        topic: "Mixed",
        fp: "When Dave saw his girlfriend Sally walking down the street holding hands with Abel, he was infuriated. Dave drove to Sally's house, hid in the bushes and waited. A short time later, Dave saw Abel and Sally sitting at the kitchen table drinking coffee. Still angry, Dave went to his car and got a pistol. When he returned, Abel and Sally were still seated at the kitchen table. Intending to scare Abel by shooting in his direction, Dave fired through the window.",
        q: "If the bullet from Dave's pistol missed Abel but struck the coffee cup Abel was holding, which of the following crimes did Dave commit?\nI. Battery.\nII. Assault with a deadly weapon.\nIII. Attempted murder.",
        opts: [
            "I only.",
            "I and II but not III.",
            "II and III but not I.",
            "I, II and III."
        ],
        ans: 1,
        exp: "Rule: Criminal battery is an unlawful application of force to the person of another, which extends to an object intimately connected to the victim's person (such as clothing or a cup held in hand). Dave committed Battery (I) when the bullet struck the cup held by Abel. Furthermore, Dave committed Assault with a deadly weapon (II) because common law assault includes intentionally placing another in reasonable apprehension of immediate bodily harm (or an attempted battery) through the use of a deadly weapon. However, Dave did not commit Attempted murder (III) because criminal attempt requires a specific intent to kill; Dave acted only with the intent to scare Abel, negating the specific intent to kill required for attempted murder. Therefore, Dave committed I and II, but not III (Option B). Options A, C, and D are incorrect because they fail to correctly pair Battery and Assault while excluding Attempted Murder."
    },
    {
        id: 2,
        topic: "Mixed",
        fp: "When Dave saw his girlfriend Sally walking down the street holding hands with Abel, he was infuriated. Dave drove to Sally's house, hid in the bushes and waited. A short time later, Dave saw Abel and Sally sitting at the kitchen table drinking coffee. Still angry, Dave went to his car and got a pistol. When he returned, Abel and Sally were still seated at the kitchen table. Intending to scare Abel by shooting in his direction, Dave fired through the window.",
        q: "If the bullet from Dave's pistol struck and killed Abel, the most serious crime Dave committed is:",
        opts: [
            "murder, first degree.",
            "murder, second degree.",
            "voluntary manslaughter.",
            "involuntary manslaughter."
        ],
        ans: 1,
        exp: "Rule: Murder is the unlawful killing of a human being with malice aforethought. Malice is established by (1) intent to kill, (2) intent to inflict grievous bodily harm, (3) depraved-heart murder (reckless indifference to an unjustifiably high risk to human life), or (4) felony murder. Firing a loaded firearm into an occupied room directly toward a person constitutes extreme recklessness manifesting a depraved heart. Under common law and statutory divisions, depraved-heart murder constitutes second-degree murder (Option B). Option A is incorrect because first-degree murder requires specific premeditated and deliberate intent to kill (or an enumerated felony), whereas Dave intended only to frighten Abel. Option C is incorrect because seeing a girlfriend hold hands does not constitute legally adequate provocation to reduce murder to voluntary manslaughter, and Dave had ample cooling-off time while driving, waiting in the bushes, and walking to his car. Option D is incorrect because discharging a firearm directly at an occupied room is far beyond criminal negligence, elevating malice to second-degree depraved-heart murder."
    },
    {
        id: 3,
        topic: "Mixed",
        fp: "Youth is a 17-year-old boy who has been buying and selling bicycles since he was eleven. Teller is a 25 year old bank teller who has never bought a bicycle before. Teller asked Youth if he had a bicycle to sell. Youth showed Teller a bicycle with a crack in the frame. Teller asked if the crack would impair the bicycle's utility, and Youth said, 'Not a bit.' In fact, the crack would probably cause the frame to collapse under very little strain. Youth knew this, but Teller did not. Teller said, 'Very well, I'll pay you $100 for the bicycle and pick it up tomorrow.' They signed a writing, prepared by Youth, that purported to memorialize the terms of their agreement. Later that day Teller learned that the crack would probably cause the frame to collapse under very little strain.",
        q: "If Teller told Youth he would not accept the bicycle and Youth asserted a claim against Teller for damages for breach of contract, who will prevail?",
        opts: [
            "Teller, because Youth is a minor and lacks capacity to contract.",
            "Teller, because he relied on a material misrepresentation.",
            "Youth, because the contract is voidable only at Youth's election.",
            "Youth, because Teller's reliance on Youth's statement was not reasonable."
        ],
        ans: 1,
        exp: "Rule: A contract is voidable by an adult buyer if the buyer's assent was induced by a fraudulent or material misrepresentation of fact upon which the buyer reasonably relied (Restatement (Second) of Contracts § 164). Youth falsely stated that the crack would not impair the bicycle's utility despite knowing it was on the verge of collapse. Because Teller relied on this material, fraudulent misrepresentation, Teller can avoid the contract and prevail against Youth's breach claim (Option B). Option A is incorrect because infancy is a defense personal to the minor; the adult party cannot avoid a contract solely on the grounds of the other party's minority. Option C is incorrect because, while infancy is the minor's defense, the minor's fraud provides the adult with an independent ground of avoidance. Option D is incorrect because reliance on an express factual assurance by an experienced seller is reasonable."
    },
    {
        id: 4,
        topic: "Mixed",
        fp: "Youth is a 17-year-old boy who has been buying and selling bicycles since he was eleven. Teller is a 25 year old bank teller who has never bought a bicycle before. Teller asked Youth if he had a bicycle to sell. Youth showed Teller a bicycle with a crack in the frame. Teller asked if the crack would impair the bicycle's utility, and Youth said, 'Not a bit.' In fact, the crack would probably cause the frame to collapse under very little strain. Youth knew this, but Teller did not. Teller said, 'Very well, I'll pay you $100 for the bicycle and pick it up tomorrow.' They signed a writing, prepared by Youth, that purported to memorialize the terms of their agreement. Later that day Teller learned that the crack would probably cause the frame to collapse under very little strain.\n\nAssume that Teller had said to Youth, 'I know the crack can cause a problem, but that's all right. I can have it welded and it will work well enough.' If Teller then demands the bicycle, but Youth refuses, saying he has changed his mind about selling, and Teller asserts a claim against Youth for damages for refusing to deliver the bicycle, who will prevail?",
        q: "Who will prevail?",
        opts: [
            "Teller, because he has waived his right to avoid the agreement.",
            "Teller, because even a minor is responsible for his misrepresentations.",
            "Youth, because as a minor he can avoid liability on an executory contract.",
            "Youth, because Teller could not waive his right to avoid the agreement."
        ],
        ans: 2,
        exp: "Rule: Contracts entered into by minors (infants) are voidable at the option of the minor before reaching the age of majority or within a reasonable time thereafter. In an executory contract for non-necessaries, a minor has an absolute right to disaffirm the agreement and avoid liability for non-performance (Option C). Option A is incorrect because Teller's waiver of misrepresentation does not extinguish Youth's independent infancy defense. Option B is incorrect because tort liability for minor deceit does not compel specific performance or contract-expectation damages on an executory sales contract. Option D is incorrect because an adult can waive an avoidance defense, but that waiver cannot bind the minor."
    },
    {
        id: 5,
        topic: "Mixed",
        fp: "Youth is a 17-year-old boy who has been buying and selling bicycles since he was eleven. Teller is a 25 year old bank teller who has never bought a bicycle before. Teller asked Youth if he had a bicycle to sell. Youth showed Teller a bicycle with a crack in the frame. Teller asked if the crack would impair the bicycle's utility, and Youth said, 'Not a bit.' In fact, the crack would probably cause the frame to collapse under very little strain. Youth knew this, but Teller did not. Teller said, 'Very well, I'll pay you $100 for the bicycle and pick it up tomorrow.' They signed a writing, prepared by Youth, that purported to memorialize the terms of their agreement. Later that day Teller learned that the crack would probably cause the frame to collapse under very little strain.\n\nAssume the writing purported to describe the bicycle by serial number, but Youth mistakenly inserted serial number 100B, the number of another bicycle in his possession, instead of number 100A, the number of the bicycle being sold. No one noticed the error until the time of delivery. The bicycle designated by serial number 100B is the same model as the one Teller agreed to buy, but does not have a cracked frame. Youth delivered the bicycle with the cracked frame, serial number 100A, but Teller refused to accept it. Thereupon Youth tendered the sound bicycle, serial number 100B, which Teller also refused to accept.\n\nIf Youth asserts a claim against Teller for damages for breach of contract to accept the bicycle with serial number 100B, who will prevail?",
        q: "Who will prevail?",
        opts: [
            "Youth, because the parol evidence rule bars evidence that the bicycle identified in the writing is not the one Teller agreed to accept.",
            "Youth, because the bicycle identified in the writing is a fair exchange for $100, while the bicycle with the cracked frame was not.",
            "Teller, because parol evidence is admissible to show that he never agreed to accept the bicycle identified as 100B.",
            "Teller, because the writing was not a sufficient memorandum to satisfy the statute of frauds."
        ],
        ans: 2,
        exp: "Rule: The parol evidence rule does not exclude extrinsic evidence offered to show mutual mistake, scriveners' errors, or that no contract was ever formed regarding a particular subject matter. Where the writing mistakenly describes chattel 100B due to a clerical drafting error, parol evidence is fully admissible to demonstrate that the parties bargained solely for 100A and never assented to purchase 100B (Option C). Option A is incorrect because parol evidence is universally admissible to show mutual mistake and defeat integration on an erroneously drafted subject matter. Option B is incorrect because objective fairness does not force a contract on parties who never agreed to that specific subject matter. Option D is incorrect because a writing identifying goods and signed by the parties satisfies the formal Statute of Frauds threshold, even though the contract fails on mutual assent."
    },
    {
        id: 6,
        topic: "Mixed",
        fp: "Youth is a 17-year-old boy who has been buying and selling bicycles since he was eleven. Teller is a 25 year old bank teller who has never bought a bicycle before. Teller asked Youth if he had a bicycle to sell. Youth showed Teller a bicycle with a crack in the frame. Teller asked if the crack would impair the bicycle's utility, and Youth said, 'Not a bit.' In fact, the crack would probably cause the frame to collapse under very little strain. Youth knew this, but Teller did not. Teller said, 'Very well, I'll pay you $100 for the bicycle and pick it up tomorrow.' They signed a writing, prepared by Youth, that purported to memorialize the terms of their agreement. Later that day Teller learned that the crack would probably cause the frame to collapse under very little strain.\n\nAssume the same facts as in the preceding item, except that at the time the writing was signed, Teller knew that the wrong serial number had been inserted in the writing. Teller demanded the bicycle identified in the writing as 100B, but Youth refused to deliver it.\n\nIf Teller asserts a claim against Youth for damages for breach of contract for refusing to deliver the bicycle with serial number 100B, who will prevail?",
        q: "Who will prevail?",
        opts: [
            "Youth, because there was a mutual mistake.",
            "Youth, because there was no agreement to sell the bicycle identified in the writing as serial number 100B.",
            "Teller, because the mistake was unilateral on Youth's part.",
            "Teller, because the parol evidence rule bars evidence that the bicycle identified in the writing as number 100B is not the one Youth agreed to sell."
        ],
        ans: 1,
        exp: "Rule: A meeting of the minds (mutual assent) on the essential terms—including the specific subject matter—is fundamental to contract formation. Where one party makes a clerical error in writing and the other party knows of the error and seeks to exploit it ('snapping up' an unagreed term), there is no true mutual agreement. Because the parties agreed only upon the cracked bicycle (100A) and never agreed to sell 100B, no contract exists for 100B (Option B). Option A is incorrect because the mistake was unilateral on Youth's part and known to Teller, rather than mutual. Option C is incorrect because unilateral mistake known to the other party permits avoidance or reformation in favor of the mistaken party, preventing the knowing party from enforcing the error. Option D is incorrect because parol evidence is admissible to show fraud or known unilateral mistake in transcription."
    },
    {
        id: 7,
        topic: "Mixed",
        fp: "Purchaser paid Vendor $50,000 for a deed to a parcel of land in reliance on Vendor's statement that the land was free from encumbrances. Vendor knew that the land was subject to a recorded and unsatisfied mortgage of $15,000. The land, subject to the encumbrance, was worth $55,000 and, if unencumbered, would have been worth $70,000.",
        q: "If Purchaser asserts a claim for damages against Vendor, will Purchaser prevail?",
        opts: [
            "Yes, because the land would have been worth $70,000 if unencumbered.",
            "Yes, unless a reasonable person in Purchaser's position could have discovered the mortgage before purchase.",
            "No, because the land, subject to the mortgage, was worth more than purchaser paid for it.",
            "No, if Vendor is willing to return Purchaser's money and cancel the transaction."
        ],
        ans: 0,
        exp: "Rule: In the tort of deceit (fraudulent misrepresentation), the majority measure of damages is the 'benefit-of-the-bargain' rule—the difference between the represented value of the property and its actual value at the time of transfer ($70,000 - $55,000 = $15,000). Because Purchaser did not receive what Vendor fraudulently represented the land to be, Purchaser prevails under the benefit-of-the-bargain rule (Option A). Option B is incorrect because contributory negligence or public recording records do not bar recovery for intentional fraudulent misrepresentation. Option C reflects the 'out-of-pocket' loss rule, but under the prevailing rule, Purchaser is entitled to the benefit of the bargain regardless of whether actual value exceeded the price paid. Option D is incorrect because an offer to rescind does not extinguish a tort claim for damages for fraud."
    },
    {
        id: 8,
        topic: "Mixed",
        fp: "Driver was operating his auto at a negligently excessive speed. As a result, he lost control and hit Walker, a pedestrian on the sidewalk along the road. Pat, age 13, arrived at the scene several minutes later. Pat saw that Walker was in obvious need of medical attention, so she ran into the ground floor lobby of Highrise, a nearby apartment building owned by Realty, to telephone for help. There was no telephone in the lobby, so Pat dashed through a door marked 'Stairs' and up a concrete stairway leading to the second floor. She did not see a skateboard lying on the second-floor landing. She tripped over the skateboard, fell and fractured an ankle. Prior to the accident, neither Realty's resident manager nor the maintenance staff employed by Realty at Highrise had known that the skateboard was on the landing.\n\nAssume Pat asserts a claim against Driver based on negligence and Driver does not raise the issue of contributory negligence.",
        q: "Will Pat prevail?",
        opts: [
            "Yes, because Pat's attempt to telephone for help was foreseeable.",
            "Yes, because the skateboard was a 'set stage.'",
            "No, because Pat was not in the zone of impact danger.",
            "No, because the presence of the skateboard on the landing was a superseding cause."
        ],
        ans: 0,
        exp: "Rule: Under the rescue doctrine ('danger invites rescue'), a tortfeasor who negligently creates a peril is legally liable for injuries sustained by a rescuer while attempting to render aid, provided the rescue effort is not wanton or reckless. Rescuers are foreseeable plaintiffs as a matter of law. Because Pat's attempt to obtain medical aid for the injured pedestrian was a foreseeable rescue response to Driver's negligence, Driver's original negligence is the proximate cause of Pat's fall (Option A). Option B is incorrect because 'set stage' is an inapplicable and imprecise legal catchphrase. Option C is incorrect because the zone of danger applies to emotional distress, whereas Pat suffered physical injury during a rescue. Option D is incorrect because normal hazards encountered during a rescue effort do not constitute superseding intervening causes unless extraordinary and unforeseeable."
    },
    {
        id: 9,
        topic: "Mixed",
        fp: "Driver was operating his auto at a negligently excessive speed. As a result, he lost control and hit Walker, a pedestrian on the sidewalk along the road. Pat, age 13, arrived at the scene several minutes later. Pat saw that Walker was in obvious need of medical attention, so she ran into the ground floor lobby of Highrise, a nearby apartment building owned by Realty, to telephone for help. There was no telephone in the lobby, so Pat dashed through a door marked 'Stairs' and up a concrete stairway leading to the second floor. She did not see a skateboard lying on the second-floor landing. She tripped over the skateboard, fell and fractured an ankle. Prior to the accident, neither Realty's resident manager nor the maintenance staff employed by Realty at Highrise had known that the skateboard was on the landing.",
        q: "If Pat asserts a claim against Driver based on negligence, and Driver claims Pat was contributorily negligent, which of the following facts should be taken into account in determining whether Driver will prevail on that issue?\nI. Pat was 13 years of age.\nII. Walker was in obvious need of medical attention.\nIII. Pat did not see the skateboard on the landing.",
        opts: [
            "I, II and III.",
            "I and II but not III.",
            "I and III but not II.",
            "II and III but not I."
        ],
        ans: 0,
        exp: "Rule: In evaluating a child's alleged contributory negligence, the jury must apply the special standard of care: that of a reasonable child of like age, intelligence, and experience (I). Furthermore, under the emergency and rescue doctrines, the urgency of the rescue context and the necessity of immediate medical assistance are directly relevant to whether dashing upstairs was reasonable under the circumstances (II). Finally, whether Pat saw or should have seen the physical hazard on the stairway is central to determining if her lookout was contributorily negligent (III). Thus, all three facts (I, II, and III) must be taken into account (Option A). Options B, C, and D are incorrect because each omits a legally relevant factor."
    },
    {
        id: 10,
        topic: "Mixed",
        fp: "Driver was operating his auto at a negligently excessive speed. As a result, he lost control and hit Walker, a pedestrian on the sidewalk along the road. Pat, age 13, arrived at the scene several minutes later. Pat saw that Walker was in obvious need of medical attention, so she ran into the ground floor lobby of Highrise, a nearby apartment building owned by Realty, to telephone for help. There was no telephone in the lobby, so Pat dashed through a door marked 'Stairs' and up a concrete stairway leading to the second floor. She did not see a skateboard lying on the second-floor landing. She tripped over the skateboard, fell and fractured an ankle. Prior to the accident, neither Realty's resident manager nor the maintenance staff employed by Realty at Highrise had known that the skateboard was on the landing.\n\nAssume Pat asserts a claim against Realty based on negligence and Realty does not raise the issue of assumption of risk.",
        q: "The likely result is Pat will",
        opts: [
            "prevail, because Realty's employees had a duty to discover and remove the skateboard.",
            "prevail, because the risk created by Realty's failing to provide a public telephone in the lobby of Highrise outweighed the utility of such conduct.",
            "not prevail, if a tenant of Highrise had left the skateboard on the landing just prior to Pat's fall.",
            "not prevail, because Pat was a trespasser on Realty's property when she fell."
        ],
        ans: 2,
        exp: "Rule: A landlord or premises owner is liable for dangerous conditions in common areas only if the owner had actual or constructive notice of the condition in time to correct it. If an object was left on the stairs by a tenant just moments before the fall, the landlord lacked sufficient constructive notice to discover and remedy the hazard through reasonable care, defeating liability (Option C). Option A is incorrect because premises owners are not strictly liable and do not possess an absolute, continuous duty to prevent all transient hazards without notice. Option B is incorrect because landlords have no common law duty to provide public payphones in residential lobbies. Option D is incorrect because Pat was privileged by private necessity to enter the lobby to summon aid, precluding absolute trespasser status."
    },
    {
        id: 11,
        topic: "Mixed",
        fp: "Driver was operating his auto at a negligently excessive speed. As a result, he lost control and hit Walker, a pedestrian on the sidewalk along the road. Pat, age 13, arrived at the scene several minutes later. Pat saw that Walker was in obvious need of medical attention, so she ran into the ground floor lobby of Highrise, a nearby apartment building owned by Realty, to telephone for help. There was no telephone in the lobby, so Pat dashed through a door marked 'Stairs' and up a concrete stairway leading to the second floor. She did not see a skateboard lying on the second-floor landing. She tripped over the skateboard, fell and fractured an ankle. Prior to the accident, neither Realty's resident manager nor the maintenance staff employed by Realty at Highrise had known that the skateboard was on the landing.",
        q: "If Pat asserts a claim against Realty based on negligence for failing to remove the skateboard and if Realty claims that Pat assumed the risk, will Realty prevail on that issue?",
        opts: [
            "Yes, because Pat dashed up the stairway.",
            "Yes, if Pat should have seen the skateboard.",
            "No, because Pat was 13 years of age.",
            "No, because Pat did not see the skateboard."
        ],
        ans: 3,
        exp: "Rule: Assumption of risk requires proof of two elements: (1) actual, subjective knowledge and appreciation of the specific risk/danger, and (2) voluntary encounter of that risk. Unlike contributory negligence (which is evaluated under an objective 'should have seen' standard), assumption of risk cannot be established without subjective awareness. Because Pat never saw the skateboard prior to falling, she did not subjectively know of the specific hazard, defeating assumption of the risk (Option D). Option A is incorrect because running up stairs may constitute contributory negligence, but does not establish subjective assumption of a hidden obstacle. Option B is incorrect because objective constructive notice ('should have seen') applies to contributory negligence, not assumption of risk. Option C is incorrect because a 13-year-old is legally capable of assuming risks if subjective knowledge is proven."
    },
    {
        id: 12,
        topic: "Mixed",
        fp: "Wimp wanted to punish Vic, his enemy. Wimp wrote a note, intended for Tough, reminding Tough he owed Wimp a favor and asking him to administer a beating to Vic, but cautioning him to be careful so as not to cause Vic's death. Wimp left the unaddressed note at Tough's apartment. Unknown to Wimp, Tough was out of town. Tough's roommate, Ready, discovered the note and read it. Because Ready also owed Wimp a favor, he thought the note was intended for him. He went out immediately to look for Vic. In the meanwhile, Tough telephone Wimp from a distant city and Wimp told Tough what he wanted done to Vic. Tough agreed to administer the beating when he returned a month later. That same night Ready found Vic and beat him viciously. The next day Vic died from the beating.",
        q: "Did Wimp commit the crime of soliciting Ready to do an unlawful act?",
        opts: [
            "Yes, because Wimp asked that a beating be administered to Vic.",
            "Yes, because Ready acted on the request in Wimp's note.",
            "No, because Wimp did not intend that Ready do the beating.",
            "No, unless Ready reasonably believed the note was intended for him."
        ],
        ans: 2,
        exp: "Rule: Criminal solicitation requires the specific intent to entice, induce, encourage, or command a specific individual to commit a felony or serious misdemeanor. Because Wimp's note and intent were exclusively directed toward Tough, Wimp possessed no intent to request, induce, or solicit Ready. Without specific intent directed toward the recipient, solicitation is not committed with respect to Ready (Option C). Options A and B are incorrect because a solicitation is an intentional inchoate crime that requires specific intent directed to the solicited party; an unintended reader cannot convert the communication into a solicitation of that reader. Option D is incorrect because Ready's subjective belief cannot supply the required mens rea in Wimp."
    },
    {
        id: 13,
        topic: "Mixed",
        fp: "Wimp wanted to punish Vic, his enemy. Wimp wrote a note, intended for Tough, reminding Tough he owed Wimp a favor and asking him to administer a beating to Vic, but cautioning him to be careful so as not to cause Vic's death. Wimp left the unaddressed note at Tough's apartment. Unknown to Wimp, Tough was out of town. Tough's roommate, Ready, discovered the note and read it. Because Ready also owed Wimp a favor, he thought the note was intended for him. He went out immediately to look for Vic. In the meanwhile, Tough telephone Wimp from a distant city and Wimp told Tough what he wanted done to Vic. Tough agreed to administer the beating when he returned a month later. That same night Ready found Vic and beat him viciously. The next day Vic died from the beating.",
        q: "Did Wimp commit the crime of soliciting Tough to do an unlawful act?",
        opts: [
            "Yes, because Wimp's note was intended for Tough.",
            "Yes, because in the telephone conversation Wimp told Tough what he wanted done.",
            "No, because at the time of the telephone conversation Tough was in a distant city.",
            "No, because Ready beat Vic before Tough returned to the city."
        ],
        ans: 0,
        exp: "Rule: Under the Model Penal Code and prevailing modern rules (and as keyed by the State Bar), the crime of solicitation is complete when the communication is sent or manifested with the specific intent that the crime be committed, even if the letter never reaches the intended recipient (MPC § 5.02(2)) (Option A). (Additionally, while Option B identifies the telephone conversation, under common law, when the solicited party agrees to the crime, the solicitation immediately merges into a conspiracy; thus, treating the written communication as the distinct offense of solicitation aligns with Option A). Options C and D are incorrect because neither geographic distance nor third-party intervention negates a completed solicitation."
    },
    {
        id: 14,
        topic: "Mixed",
        fp: "Wimp wanted to punish Vic, his enemy. Wimp wrote a note, intended for Tough, reminding Tough he owed Wimp a favor and asking him to administer a beating to Vic, but cautioning him to be careful so as not to cause Vic's death. Wimp left the unaddressed note at Tough's apartment. Unknown to Wimp, Tough was out of town. Tough's roommate, Ready, discovered the note and read it. Because Ready also owed Wimp a favor, he thought the note was intended for him. He went out immediately to look for Vic. In the meanwhile, Tough telephone Wimp from a distant city and Wimp told Tough what he wanted done to Vic. Tough agreed to administer the beating when he returned a month later. That same night Ready found Vic and beat him viciously. The next day Vic died from the beating.",
        q: "Was there a conspiracy to assault Vic?",
        opts: [
            "Yes, between Wimp and Tough.",
            "Yes, between Wimp and Ready.",
            "Yes, among Wimp, Tough and Ready.",
            "No."
        ],
        ans: 0,
        exp: "Rule: Conspiracy requires an agreement between two or more persons with the specific intent to achieve an unlawful objective. During the telephone call, Tough expressly agreed with Wimp to administer the beating to Vic. This mutual bilateral agreement formed a completed conspiracy to commit battery/assault between Wimp and Tough (Option A). Options B and C are incorrect because Wimp never entered into an agreement with Ready (there was neither communication nor mutual assent between them). Option D is incorrect because an enforceable criminal agreement was formed between Wimp and Tough on the phone."
    },
    {
        id: 15,
        topic: "Mixed",
        fp: "Wimp wanted to punish Vic, his enemy. Wimp wrote a note, intended for Tough, reminding Tough he owed Wimp a favor and asking him to administer a beating to Vic, but cautioning him to be careful so as not to cause Vic's death. Wimp left the unaddressed note at Tough's apartment. Unknown to Wimp, Tough was out of town. Tough's roommate, Ready, discovered the note and read it. Because Ready also owed Wimp a favor, he thought the note was intended for him. He went out immediately to look for Vic. In the meanwhile, Tough telephone Wimp from a distant city and Wimp told Tough what he wanted done to Vic. Tough agreed to administer the beating when he returned a month later. That same night Ready found Vic and beat him viciously. The next day Vic died from the beating.",
        q: "Is Wimp criminally liable for the death of Vic?",
        opts: [
            "Yes, because Wimp is vicariously liable for Ready's acts.",
            "Yes, because Wimp's acts were the cause in fact of Ready's beating of Vic.",
            "No, because Wimp did not intend that Ready administer the beating.",
            "No, because Wimp did not intend to cause Vic's death."
        ],
        ans: 1,
        exp: "Rule: In criminal homicide, causation requires both actual cause ('but-for' cause) and proximate cause. An actor whose criminal conduct sets in motion an unbroken chain of events that directly causes death is criminally liable for homicide (involuntary manslaughter or depraved-heart murder). Leaving an unaddressed demand for a vicious beating that predictably induced an occupant of the premises to carry out the beating makes Wimp a cause-in-fact of the homicide (Option B, conforming to the official State Bar key). Option A is incorrect because vicarious accomplice liability requires intentional procurement or agreement with Ready, which was absent. Option C is incorrect because lack of intent regarding the specific perpetrator does not negate homicide liability founded on reckless causation. Option D is incorrect because intent to kill is not required for manslaughter or reckless homicide."
    },
    {
        id: 16,
        topic: "Mixed",
        fp: "Alma, a well-known literary critic, wrote a review of the latest book written by Bessy, a well-known author. In the review, Alma said that Bessy did not know how to use the English language and was dishonest in her expression of political and social views. Bessy has not suffered any pecuniary loss.",
        q: "If Bessy asserts a claim against Alma based on defamation, Bessy will not recover",
        opts: [
            "because Bessy is a well-known author.",
            "because literary criticism is an expression of opinion.",
            "unless Alma acted with reckless disregard of the truth.",
            "if Bessy did not suffer any out-of-pocket loss."
        ],
        ans: 2,
        exp: "Rule: Under the First Amendment (New York Times Co. v. Sullivan; Gertz), a public figure or public official cannot recover damages for defamation without proving by clear and convincing evidence that the defendant published the statement with 'actual malice'—that is, with knowledge that it was false or with reckless disregard of whether it was true or false. Because Bessy is a well-known author, she qualifies as a public figure in the context of reviews of her published works, requiring her to prove reckless disregard of the truth (Option C). Option A is incorrect because public figures are not barred from recovery; they are simply subject to the higher actual malice burden. Option B is incorrect because asserting that a person is 'dishonest in expression of views' carries an implied, provably false assertion of fact. Option D is incorrect because libel and slander per se (injuring trade or profession) do not require out-of-pocket pecuniary damage."
    },
    {
        id: 17,
        topic: "Mixed",
        fp: "Caster, who conducted an evening news broadcast on television, reported on one of his evening broadcasts that Teacher, an instructor in a private school in the community, was being discharged for incompetence. The fact was that Teacher was not being discharged for incompetence but was leaving to accept a better position at another school.",
        q: "If Teacher asserts a claim against Caster based on defamation, Teacher will not prevail if Caster",
        opts: [
            "used reasonable care to investigate the statement prior to his broadcast.",
            "honestly believed the statement to be true at the time of his broadcast.",
            "promptly retracted the statement upon learning of its falsity.",
            "had no ill-will toward Teacher."
        ],
        ans: 0,
        exp: "Rule: Under the constitutional standard established in Gertz v. Robert Welch, Inc., a private figure plaintiff suing a media defendant over a matter of public interest must prove at least negligence (failure to exercise reasonable care in ascertaining the truth of the statement). If Caster exercised reasonable care by investigating the facts prior to broadcasting, Caster was not negligent and cannot be held liable for defamation (Option A). Option B is incorrect because an honest subjective belief does not protect a defendant if the belief was unreasonable or arrived at negligently. Option C is incorrect because a prompt retraction merely mitigates damages under state retraction statutes, but does not defeat the underlying cause of action. Option D is incorrect because common law ill-will/spite malice is not required in private figure defamation."
    },
    {
        id: 18,
        topic: "Mixed",
        fp: "Owner parked his car in a parking lot owned and operated by Parker. When Owner returned to get his car, he found that it had been damaged.",
        q: "If Owner asserts a claim against Parker for the damage to Owner's car, Owner will recover",
        opts: [
            "because Parker was a bailee for hire.",
            "on the theory of trespass to chattel.",
            "only if the car was damaged because of Parker's negligence.",
            "unless the damage was caused by the act of someone other than Parker."
        ],
        ans: 2,
        exp: "Rule: A commercial bailee for mutual benefit (a bailee for hire) is not an absolute insurer of the safety of bailed goods; the bailee owes only a duty of ordinary, reasonable care under the circumstances. The owner/bailor can recover damages against the bailee only if the property was damaged as a result of the bailee's negligence (Option C). Option A is incorrect because status as a bailee for hire establishes a duty of care, not strict liability. Option B is incorrect because trespass to chattels requires an intentional act of meddling or damage. Option D is incorrect because a bailee is not automatically liable for acts of third parties unless the bailee's own negligence permitted or enabled the third party's harm."
    },
    {
        id: 19,
        topic: "Mixed",
        fp: "Daniel and Paul were involved in an automobile accident. Paul sued Daniel for $10,000 alleging that Daniel was negligent. Daniel's liability depends on whether he had the green light at the time of the accident. Each party claims to have had the green light. Of the two other witnesses, one says that Paul had the green light. Before trial, Daniel offered Paul $5,000 to settle all claims arising from the accident. Paul accepted the offer.\n\nAssume that before payment of the $5,000 and before dismissal of the suit, Daniel repudiates his promise to pay Paul $5,000. Paul sues for $5,000.",
        q: "What result?",
        opts: [
            "Paul wins because the agreement was an enforceable compromise of a disputed claim.",
            "Paul wins because Daniel's promise to pay $5,000 was enforceable without consideration.",
            "Daniel wins because his promise was a mere executory accord.",
            "Daniel wins because his promise was void as against public policy."
        ],
        ans: 0,
        exp: "Rule: The compromise and settlement of a good-faith, disputed claim (or unliquidated tort action) constitutes valid consideration. An executory accord is a valid and binding contract; upon a debtor's anticipatory breach or repudiation of an accord, the creditor may elect either to sue on the accord itself or sue on the underlying original claim. Paul is entitled to enforce the settlement agreement and recover the agreed $5,000 compromise amount (Option A). Option B is incorrect because compromise contracts require consideration, which is provided by the surrender of a disputed, unliquidated claim. Option C is incorrect because an executory accord is enforceable by the non-breaching creditor. Option D is incorrect because public policy strongly favors settlement agreements."
    },
    {
        id: 20,
        topic: "Mixed",
        fp: "Daniel and Paul were involved in an automobile accident. Paul sued Daniel for $10,000 alleging that Daniel was negligent. Daniel's liability depends on whether he had the green light at the time of the accident. Each party claims to have had the green light. Of the two other witnesses, one says that Paul had the green light. Before trial, Daniel offered Paul $5,000 to settle all claims arising from the accident. Paul accepted the offer.\n\nAssume the same facts as in question 94 except that, instead of suing for $5,000, Paul prosecuted his $10,000 negligence action. Daniel defended on the ground that his liability, if any, has been replaced by his obligation on his $5,000 promise.",
        q: "What result on this defense?",
        opts: [
            "Paul wins because the promise to pay $5,000 was void from the outset.",
            "Paul wins because, after Daniel repudiated his promise, Paul had the option to sue on that promise or on the original claim.",
            "Daniel wins because his promise was made in compromise of a disputed claim.",
            "Daniel wins because his promise to pay $5,000 is enforceable without consideration."
        ],
        ans: 1,
        exp: "Rule: An executory accord merely suspends the right to enforce the underlying original claim until the satisfaction is tendered. If the debtor breaches or repudiates the accord prior to satisfaction, the suspension is lifted, and the non-breaching creditor has the election either to sue for breach of the accord or to revive and prosecute the original underlying claim. Because Daniel repudiated the $5,000 settlement, Paul is entitled to prosecute his original $10,000 negligence action (Option B). Option A is incorrect because the compromise was a valid contract, not void. Options C and D are incorrect because a breaching debtor cannot shield themselves behind an accord they repudiated."
    },
    {
        id: 21,
        topic: "Mixed",
        fp: "Daniel and Paul were involved in an automobile accident. Paul sued Daniel for $10,000 alleging that Daniel was negligent. Daniel's liability depends on whether he had the green light at the time of the accident. Each party claims to have had the green light. Of the two other witnesses, one says that Paul had the green light. Before trial, Daniel offered Paul $5,000 to settle all claims arising from the accident. Paul accepted the offer.\n\nAssume that after Daniel promised to pay $5,000, Paul dismissed the negligence suit. Paul's witness then admits to Daniel that he lied, and that the traffic light was green in Daniel's favor. Paul did not know that the witness had lied. Daniel refused to pay Paul and Paul sued Daniel for $5,000.",
        q: "What result?",
        opts: [
            "Daniel wins because his promise was a mere executory accord.",
            "Daniel wins because the new evidence shows there was no consideration for Daniel's promise to pay $5,000.",
            "Paul wins because the settlement was an accord and satisfaction.",
            "Paul wins because he did not know the witness was lying when he accepted Daniel's offer."
        ],
        ans: 3,
        exp: "Rule: Under the Restatement (Second) of Contracts § 74, the compromise of an unliquidated or disputed claim constitutes valid consideration if the settling party asserts the claim in good faith and with an honest subjective belief in its possible validity. Even if subsequent evidence conclusively establishes that the claim was factually groundless, the settlement remains binding so long as the claimant did not act fraudulently and had no knowledge of the underlying falsity at the time of settlement (Option D). Option A is incorrect because Paul dismissed the lawsuit in performance of his side of the accord. Option B is incorrect because consideration is measured at the time of agreement by good-faith dispute, not retrospective proof. Option C is technically flawed because satisfaction occurs when payment is executed; Paul wins because good-faith compromise is enforceable."
    },
    {
        id: 22,
        topic: "Mixed",
        fp: "Daniel and Paul were involved in an automobile accident. Paul sued Daniel for $10,000 alleging that Daniel was negligent. Daniel's liability depends on whether he had the green light at the time of the accident. Each party claims to have had the green light. Of the two other witnesses, one says that Paul had the green light. Before trial, Daniel offered Paul $5,000 to settle all claims arising from the accident. Paul accepted the offer.\n\nAssume that after Daniel promised to pay the $5,000, Paul dismissed the negligence suit. Daniel was unable to pay the $5,000 and Paul threatened to sue Daniel. Upon learning these facts, Ted told Paul: 'Daniel is an old friend of mine. If you will not sue him, I will pay you $5,000.' Paul said: 'Okay,' and did not file suit against Daniel. A week later, Ted repudiated his promise to Paul. Paul sued Ted for $5,000.",
        q: "What result?",
        opts: [
            "Ted wins because there was no consideration for his promise.",
            "Ted wins because Paul must sue Daniel before he can sue Ted.",
            "Paul wins because his agreement to forebear suing Daniel is sufficient consideration for Ted's promise.",
            "Paul wins because Ted's friendship with Daniel is sufficient consideration for Ted's promise."
        ],
        ans: 2,
        exp: "Rule: Consideration can be given by the promisee to a third party, or can consist of forbearance to assert a valid legal right or cause of action against a third person. Paul's promise and agreement to forbear bringing suit against Daniel constitutes valid legal detriment and consideration supporting Ted's independent promise to pay $5,000 (Option C). Option A is incorrect because forbearance to sue constitutes classic consideration. Option B is incorrect because the parties entered into a direct, primary bilateral contract, not a conditional guaranty requiring exhaustion of legal remedies. Option D is incorrect because mere friendship or moral motivation does not constitute legal consideration."
    },
    {
        id: 23,
        topic: "Mixed",
        fp: "Daniel and Paul were involved in an automobile accident. Paul sued Daniel for $10,000 alleging that Daniel was negligent. Daniel's liability depends on whether he had the green light at the time of the accident. Each party claims to have had the green light. Of the two other witnesses, one says that Paul had the green light. Before trial, Daniel offered Paul $5,000 to settle all claims arising from the accident. Paul accepted the offer.\n\nAssume the same facts as in question 97, except that Ted defended on the ground of the Statute of Frauds.",
        q: "What result on this defense?",
        opts: [
            "Ted wins because his promise was to pay an amount in excess of $500 and was not evidenced by a writing signed by Ted.",
            "Ted wins because his promise was to pay the debt of another and was not evidenced by a writing signed by Ted.",
            "Paul wins because Ted's promise was not one required to be evidenced by a writing signed by Ted.",
            "Paul wins because his forebearance to sue Daniel constituted part performance."
        ],
        ans: 2,
        exp: "Rule: Under the Statute of Frauds, the suretyship provision ('promise to answer for the debt of another') applies only where the promisor's obligation is collateral/secondary (e.g., 'If he doesn't pay, I will'). Where the promisor undertakes a direct, primary obligation in exchange for a separate consideration (forbearance to sue), or where the promise is made directly to discharge an obligation, it is an original promise that falls outside the suretyship provision and does not require a writing (Option C). Option A is incorrect because the $500 threshold applies to sales of goods under UCC Article 2, not to settlement promises. Option B is incorrect because Ted made an original, primary commitment rather than a collateral surety agreement. Option D is incorrect because forbearance is mere consideration, not part performance taking a surety pact out of the statute."
    },
    {
        id: 24,
        topic: "Mixed",
        fp: "Art talked Bob into giving him, Art, $200.00 to buy equipment to accomplish the burglary of a bakery and the theft of its receipts, in return for a one-quarter share of the proceeds. Art changed his mind after receiving the $200.00 from Bob and never bought the equipment or committed the burglary.",
        q: "Did Art commit the crime of conspiracy to commit burglary?",
        opts: [
            "Yes, when Art asked Bob for the money.",
            "Yes, when Bob furnished the money to buy the equipment.",
            "No, because Bob did not agree to take part in the burglary.",
            "No, because Art never bought the equipment."
        ],
        ans: 1,
        exp: "Rule: Criminal conspiracy requires an agreement between two or more persons with the specific intent to achieve an unlawful objective, and in most jurisdictions, an overt act in furtherance of the conspiracy. The overt act requirement is minimal and can be satisfied by any preparatory step committed by any member of the conspiracy. When Bob furnished the $200 financing in exchange for a one-quarter stake, mutual agreement and an overt act were accomplished, completing the crime of conspiracy (Option B). Option A is incorrect because asking for money was mere solicitation before mutual agreement was formed. Option C is incorrect because funding a criminal enterprise in exchange for a share of the stolen loot makes the financier a full co-conspirator. Option D is incorrect because withdrawal or subsequent change of mind after the agreement and overt act have occurred does not erase a completed conspiracy."
    },
    {
        id: 25,
        topic: "Mixed",
        fp: "Art talked Bob into giving him, Art, $200.00 to buy equipment to accomplish the burglary of a bakery and the theft of its receipts, in return for a one-quarter share of the proceeds. Art changed his mind after receiving the $200.00 from Bob and never bought the equipment or committed the burglary.",
        q: "If Art did not return the $200 to Bob, did he commit a crime?",
        opts: [
            "No, because the parties were in pari delictu.",
            "Yes, larceny.",
            "Yes, embezzlement.",
            "Yes, obtaining by false pretenses."
        ],
        ans: 2,
        exp: "Rule: Embezzlement is the fraudulent conversion of the personal property of another by one who is already in lawful possession of that property. Bob voluntarily handed over the $200 cash to Art for a designated purpose (to purchase equipment), placing Art in lawful possession. When Art decided not to buy the equipment but kept the money for himself, Art fraudulently converted funds entrusted to his possession, committing embezzlement (Option C). Option A is incorrect because the civil doctrine of in pari delicto does not protect criminal actors from state criminal prosecution for theft offenses. Option B is incorrect because Art obtained initial possession lawfully without a trespassory taking. Option D is incorrect because at the time he received the money Art did not possess a preexisting fraudulent intent to deceive Bob; his change of mind occurred after receiving possession."
    }
];