const examData = [
    {
        id: 1,
        topic: "Strict Products Liability / Intervening Causes",
        fp: "The owner of a supermarket purchased an automatic door-opener from its manufacturer. The device included rubber step-plates that were to be installed on the floor on both sides of the door. When a person stepped on one of the step-plates, the machine was designed to swing the door away from him or her.\n\nThe store owner hired a contractor to install the automatic door-opener while the store was closed for the night. The contractor read the instructions furnished by the manufacturer but disregarded a warning regarding testing the step-plates. When he finished installing the device, he did not test it by stepping on one of the step-plates, but advised the store's night manager that the job was complete. The following morning, a customer was injured by the door.",
        q: "The customer asserted a claim against the manufacturer on the ground that the step-plate was defective when sold by the manufacturer. Which of the following would be the manufacturer's most effective argument in defense?",
        opts: [
            "It was not foreseeable that a person installing the automatic door-opener would disregard the warning contained in the instructions.",
            "The manufacturer did not act unreasonably in designing or manufacturing the automatic door opener or in furnishing the instructions that came with them.",
            "The customer was not a purchaser of the automatic door-opener.",
            "The store owner was negligent in selecting the contractor to install the automatic door-opener."
        ],
        ans: 0,
        exp: "A manufacturer can defend against a strict products liability claim by arguing that an unforeseeable misuse, alteration, or disregard of safety instructions was the sole proximate cause of the injury. If the contractor's complete disregard of the installation warnings and testing procedures was unforeseeable, it acts as a superseding cause, breaking the chain of causation and relieving the manufacturer of liability. Thus, A is the manufacturer's most effective argument.\n\nB is incorrect because strict liability applies regardless of whether the manufacturer acted reasonably. C is incorrect because strict products liability protects foreseeable bystanders and users, not just purchasers. D is incorrect because the store owner's negligence in selecting a contractor would not necessarily relieve the manufacturer of liability if the product was actually defective and the defect contributed to the harm."
    },
    {
        id: 2,
        topic: "Battery / Consent in Sports",
        fp: "A lawyer and a doctor were both members of a boxing gym. They decided it would be fun to spar each other in the ring. The two put on headgear and heavy gloves and told their trainer to ring the bell. The two sprinted to the middle of the ring and started raining blows down on each other. The doctor tried to duck under the lawyer's jab, and the lawyer accidentally stuck the doctor in the eye, blinding him. Because of the injury, the doctor could no longer conduct surgery. The doctor sued the lawyer for his injury.",
        q: "Should the court rule in the doctor's favor?",
        opts: [
            "Yes, because the lawyer breached his duty of care.",
            "Yes, because the doctor's blindness was unforeseeable.",
            "No, because the doctor impliedly consented to the injury.",
            "No, because the injury was the result of the doctor's ducking the jab."
        ],
        ans: 2,
        exp: "By voluntarily engaging in a physical combat sport like boxing, participants impliedly consent to the ordinary physical contacts and inherent risks associated with the activity, including accidental blows resulting from standard gameplay (like being struck while ducking a jab). Because the doctor impliedly consented to this inherent risk of physical contact, the lawyer is not liable for battery.\n\nA is incorrect because this is a claim for an intentional tort (battery), not negligence. B is incorrect because foreseeability is a negligence concept, and in any event, serious injury is a known risk of boxing. D is incorrect because the specific action of ducking does not negate liability; it is the overall consent to the sporting activity that provides the defense."
    },
    {
        id: 3,
        topic: "Negligence / Open and Obvious Hazard",
        fp: "A homeowner hired a painter to paint the outside of the homeowner's house. While doing so, the painter left his ladder unattended on the front lawn.\n\nTwo days later, a government employee was walking across the homeowner's lawn while delivering mail. The homeowner saw the employee walking toward the painter's ladder on his lawn but did not warn the employee because he believed that she saw it. Although the lawn had recently been mowed and the ladder was in plain view, the employee did not see the ladder and tripped over it, injuring her knee.\n\nThe jurisdiction applies the all-or-nothing rule of contributory negligence.",
        q: "If the government employee asserts a negligence claim against the painter for damages resulting from her injury, which of the following would be the painter's most effective argument in defense?",
        opts: [
            "The ladder was in plain view.",
            "The employee was trespassing at the time the accident occurred.",
            "The painter owed no duty to licensees of the homeowner.",
            "The homeowner was negligent in not warning the employee about the ladder."
        ],
        ans: 0,
        exp: "In a negligence action, a defendant's duty of care generally does not require warning or protecting a plaintiff from hazards that are \"open and obvious.\" If the ladder was in plain view and clearly visible to a reasonable person, the painter breached no duty of care because the risk was obvious and one that an ordinary person would avoid. Thus, A is the most effective defense.\n\nB is incorrect because the mail carrier was entering the property on official business and is generally treated as a licensee or invitee, not a trespasser. C is incorrect because contractors working on the land owe a duty of reasonable care to foreseeable entrants. D is incorrect because the homeowner's negligence would not automatically absolve the painter of his own concurrent negligence."
    },
    {
        id: 4,
        topic: "Negligence / Concurrent Causes",
        fp: "The plaintiff was involved in an accident after he was hit by a drunk driver. The amount of alcohol that one defendant sold the driver would have made her intoxicated even if a second defendant sold the driver no alcohol at all, and the amount of alcohol that the second defendant sold the driver would have made the driver intoxicated even if the first defendant sold the driver no alcohol at all.",
        q: "Which of the following statements is most correct?",
        opts: [
            "The first defendant did not cause the plaintiff's injury because the second defendant subsequently sold the driver enough alcohol to make her intoxicated.",
            "The second defendant did not cause the plaintiff's injury because the first defendant had previously sold the driver enough alcohol to make her intoxicated.",
            "Neither defendant caused the injury.",
            "Both defendants caused the injury."
        ],
        ans: 3,
        exp: "Under the \"substantial factor\" test for causation, when two or more independent negligent acts occur and either one alone would have been sufficient to cause the harm, both defendants are considered actual causes of the injury. Since the alcohol sold by each tavern independently would have caused the intoxication and resulting crash, both defendants are deemed to have caused the injury.\n\nA and B are incorrect because they misapply the \"but-for\" test in a situation where concurrent independent sufficient causes exist. C is incorrect because it would absurdly allow both tortfeasors to escape liability despite each fully contributing to the harm."
    },
    {
        id: 5,
        topic: "Negligence / Standard of Care",
        fp: "A landowner hired a professional architect to draw plans for a two-story residence to be constructed on the landowner's realty. The plans that the architect prepared called for a staircase to be supported by a single concrete pillar. The landowner then hired a licensed building contractor to construct a house in accordance with the architect's design. Upon examining the plans, the contractor told the landowner that she did not think that one pillar would provide sufficient support for the staircase. When the landowner discussed the contractor's objection with the architect, however, the architect insisted that one pillar would be sufficient. The landowner told this to the contractor and convinced the contractor to rely on the architect's plan.\n\nThe contractor completed the building as agreed and turned it over to the landowner on April 1. Two weeks later, the landowner hired a mover to move a piano onto the second floor of the house. While the mover was carrying the piano up the staircase, the staircase collapsed, causing the mover to sustain injury. If the staircase had been supported by two columns, it would not have collapsed.",
        q: "If the mover asserts a negligence claim against the architect, which of the following would be the architect's most effective argument in defense?",
        opts: [
            "It was reasonable to support the staircase with only one pillar.",
            "The architect owed the mover no duty since the architect was employed by the landowner.",
            "The contractor had the last clear chance to avoid the accident.",
            "The use of a single pillar to support the staircase was a matter exclusively within the architect's professional judgment as an architect."
        ],
        ans: 0,
        exp: "A negligence claim requires proof that the defendant breached the applicable standard of care. For a professional architect, the standard is the degree of care and skill commonly possessed by members of the profession. If it was factually reasonable to support the staircase with only one pillar (meaning the architect did not fall below the standard of care), the architect breached no professional duty and is not liable. Thus, A is the best defense.\n\nB is incorrect because professionals owe a duty of care to foreseeable third parties who might be injured by their negligent designs. C is incorrect because the last clear chance doctrine is used by plaintiffs to overcome their own contributory negligence, not by co-defendants to shift blame. D is incorrect because a professional's judgment is not immune from liability if that judgment is unreasonable and falls below the professional standard of care."
    },
    {
        id: 6,
        topic: "Negligence Per Se / Causation",
        fp: "A man was obviously intoxicated when he entered a bartender's tavern one night and ordered a drink. A statute made it unlawful to serve liquor to any intoxicated person. Even so, the bartender served the man. After drinking the liquor, the man left the tavern and began driving home.\n\nBefore the liquor left the manufacturer's factory, an angry employee added a poison to it that could not have been discovered by reasonable inspection. While the man was driving in a reasonable manner, the poison caused him to die. As a result, the man's car struck a pedestrian, injuring her.",
        q: "If the pedestrian asserts a claim against the bartender based on the bartender's violation of the above statute, which of the following would be the bartender's most effective argument in defense against that claim?",
        opts: [
            "The bartender did not serve the man enough liquor to make him intoxicated.",
            "The statute was not meant to prevent people from drinking liquor that had been poisoned.",
            "Serving the liquor to the man was not a cause of the pedestrian's injuries.",
            "The angry employee's conduct was a superseding cause of the pedestrian's injuries."
        ],
        ans: 2,
        exp: "For a statutory violation to constitute negligence per se, the violation must be the actual and proximate cause of the plaintiff's injuries. Here, the man's death and the subsequent crash were caused by the poison added by the angry employee, not by the man's intoxication from the illegally served liquor (the facts state he was \"driving in a reasonable manner\" until the poison killed him). Because the serving of the liquor did not cause the pedestrian's injuries, the bartender is not liable.\n\nA is incorrect because he served an already intoxicated person, violating the statute. B is a valid point regarding the scope of the risk, but C is the most absolute defense because it directly negates causation entirely. D is a strong argument, but C fundamentally undermines the necessary actual cause link required for any tort liability."
    },
    {
        id: 7,
        topic: "Negligence / Contributory Negligence",
        fp: "An airline went out of business and sold a belt truck to a second airline. An independent contractor hired by the second airline to maintain the second airline's equipment set the truck's belt idle above 25. Due to a mistake at the factory, the belt truck was not equipped with an acceleration suppressor. An acceleration suppressor would keep the truck from lurching no matter where the idle was set. Subsequently, an employee of the second airline attempted to activate the belt while standing beside the belt truck. Because the idle was set above 25, she was injured when the belt truck lurched forward and struck her.",
        q: "The employee asserted a negligence claim against the independent contractor. Which one of the following additional facts or inferences, if it were the only one true, would be most likely to result in a judgment for the independent contractor in a jurisdiction that applies the all-or-nothing rule of contributory negligence?",
        opts: [
            "Belt trucks are usually equipped with acceleration suppressors.",
            "If the employee had been in the driver's seat when she started the belt truck, she would not have been injured.",
            "The omission of an acceleration suppressor was a manufacturing defect in the belt truck.",
            "The first airline failed to notify the second airline about the need for an acceleration suppressor."
        ],
        ans: 1,
        exp: "In a jurisdiction applying the all-or-nothing rule of contributory negligence, any negligence on the part of the plaintiff that contributes to her injury serves as a complete bar to recovery. If the employee acted unreasonably for her own safety by starting the truck while standing beside it rather than in the driver's seat, she is contributorily negligent, which completely bars her claim against the contractor.\n\nA, C, and D all point to the negligence or strict liability of other parties in the chain of distribution, but under joint and several liability, the contractor would still be liable for his portion of the harm unless the plaintiff was contributorily negligent. Thus, B is the only fact that completely exonerates the contractor in a contributory negligence jurisdiction."
    },
    {
        id: 8,
        topic: "Public Nuisance / Special Injury",
        fp: "A company operated a manufacturing plant just outside the town. Breezes frequently carried fumes from the company's plant into the town.\n\nA homeowner's son developed a respiratory illness as the result of an unusual reaction to the fumes. The homeowner complained to the company about his son's illness. When the company responded by offering to buy the homeowner's house, the homeowner refused.\n\nThe homeowner asserted a public nuisance claim on behalf of his son in which he sought an order directing the company to eliminate the fumes.",
        q: "Which of the following would be the company's most effective argument in response to this claim?",
        opts: [
            "The claim is not for special damages.",
            "The son's illness was the result of an unusually sensitive reaction to the fumes.",
            "The homeowner assumed the risk by refusing to sell the property to the company.",
            "The fumes did not violate state pollution laws."
        ],
        ans: 1,
        exp: "Nuisance requires a substantial and unreasonable interference with a protected right. The interference is judged by the standard of a normal, ordinary person in the community. If the son's illness resulted from an unusually sensitive or idiosyncratic reaction, the fumes do not constitute a nuisance because they would not be offensive or harmful to an ordinary, reasonable person.\n\nA is incorrect because personal injury (respiratory illness) generally qualifies as a \"special injury\" distinct from the public at large in a public nuisance claim. C is incorrect because refusing to sell one's home is not a voluntary assumption of the risk of toxic fumes. D is incorrect because compliance with zoning or pollution laws is evidence of reasonableness but does not preclude a common law nuisance claim."
    },
    {
        id: 9,
        topic: "Strict Products Liability / Retailer Warranty",
        fp: "The manufacturer made a product that was sold over the counter for the treatment of dandruff and dry scalp conditions. A doctor purchased a bottle at a drugstore. A statement on the label read, \"This product will not harm normal scalp or hair.\" The doctor used the product as directed. Because of a scalp condition making him allergic to one of the ingredients, the product irritated his scalp, causing him much pain and discomfort.",
        q: "In an action by the doctor against the drugstore, which of the following would be the doctor's most effective argument?",
        opts: [
            "Any negligence by the manufacturer is imputed to the drugstore.",
            "The product was defective as labeled.",
            "The drugstore breached an express warranty.",
            "A drugstore is under a special duty to be aware of possible allergic reactions to products that it sells."
        ],
        ans: 2,
        exp: "A retailer that sells a product bearing an express factual assertion about its safety (e.g., \"will not harm normal scalp\") adopts that express warranty in the sale to the consumer. The doctor's most effective argument against the drugstore without proving negligence is that the drugstore breached this express warranty, as the product caused harm despite the label's explicit promise.\n\nA is incorrect because a manufacturer's negligence is not imputed to a retailer. B is incorrect because if the reaction was due to a unique personal allergy rather than a general danger, the product may not be \"defective.\" D is incorrect because retailers do not owe a special duty to foresee every idiosyncratic allergic reaction."
    },
    {
        id: 10,
        topic: "Comparative Negligence / Joint and Several Liability",
        fp: "After the plaintiff sued the defendants for injuries caused in an auto accident, the jury found that the accident was 60 percent the fault of the first defendant and 40 percent the fault of the second defendant. The court ruled that the defendants were jointly and severally liable for the plaintiff's injuries, which amounted to $100,000.\n\nThe jurisdiction had a statute that provided as follows: \"In any negligence action, a plaintiff's recovery shall not be barred by that plaintiff's fault, but the recovery of said plaintiff shall be diminished in proportion to such plaintiff's fault unless that plaintiff's fault shall be greater than that of the defendant, and in such event the plaintiff's recovery shall be barred.\"",
        q: "Which of the following correctly states the sum that the plaintiff is entitled to receive from the second defendant?",
        opts: [
            "$60,000 (60 percent of $100,000).",
            "$40,000 (40 percent of $100,000).",
            "$100,000.",
            "$0."
        ],
        ans: 2,
        exp: "In a comparative negligence system, a plaintiff's recovery is reduced by their own percentage of fault. Here, the plaintiff's fault was 0%, so there is no reduction. Because the court ruled the defendants are jointly and severally liable, the plaintiff can recover the full amount of his damages ($100,000) from either defendant, regardless of their individual fault allocations.\n\nA and B incorrectly limit the plaintiff's recovery to the individual defendant's percentage of fault, which contradicts the doctrine of joint and several liability. D is incorrect because the plaintiff is entitled to recovery."
    },
    {
        id: 11,
        topic: "Defamation / Defamation Per Se",
        fp: "A daily newspaper printed an article about a minister's speech. The article referred to the minister's speech as \"inspiring, considering the fact that the minister suffers from leprosy.\" After seeing the article, the minister sued the newspaper for defamation.\n\nThe newspaper moved to dismiss the minister's action on the grounds that his complaint contained no allegation of damage.",
        q: "Which of the following additional facts or inferences, if it were the only one true, would be most helpful to the minister in opposing the motion to dismiss?",
        opts: [
            "Leprosy is a loathsome disease.",
            "The minister was so upset upon reading the newspaper's statement about him that he became physically ill.",
            "Editors of the newspaper disliked the minister.",
            "The minister is neither a public official nor a public figure."
        ],
        ans: 0,
        exp: "Normally, a plaintiff must prove special (pecuniary) damages to maintain a slander or defamation action without obvious financial harm. However, a statement imputing a \"loathsome disease\" (such as leprosy or a venereal disease) falls into the category of defamation per se, where general damages are presumed. Thus, asserting that leprosy is a loathsome disease negates the need to plead special damages and defeats the motion to dismiss.\n\nB is incorrect because physical illness from emotional distress does not satisfy the pecuniary damage requirement. C is incorrect because common law ill will does not substitute for the damages element. D is incorrect because public figure status affects the fault standard, not the damages requirement."
    },
    {
        id: 12,
        topic: "Strict Products Liability / Damages",
        fp: "A man was eating one of the company's pre-packaged desserts when he found a cockroach in it.",
        q: "In an action by the man against the company, which of the following additional facts or inferences, if it were the only one true, would provide the company with its most effective defense?",
        opts: [
            "The company did not act unreasonably in manufacturing, packaging, or marketing the product purchased by the man.",
            "The man sustained no injury as a result of the presence of a cockroach in the product.",
            "The company complied with all statutory requirements for quality control in the production of the product.",
            "The man purchased the product on the recommendation of a sales clerk at the grocery store."
        ],
        ans: 1,
        exp: "Actual damages or injury are an essential element of a strict products liability or negligence claim. If the plaintiff sustained no physical harm, illness, or property damage as a result of discovering the cockroach (e.g., he simply saw it and threw it away), he cannot satisfy the damages element of his prima facie case, barring recovery.\n\nA is incorrect because strict liability applies regardless of the manufacturer's reasonable care. C is incorrect because regulatory compliance is not an absolute defense to strict liability. D is incorrect because a clerk's recommendation does not relieve the manufacturer of liability for a defective product."
    },
    {
        id: 13,
        topic: "Private Necessity / Privilege",
        fp: "A pilot was flying his airplane when one of its engines stopped working. Although the pilot thought he could probably make it back to the airport, he decided it would be safer to make an emergency landing in a farmer's field. The plane ended up causing $500 worth of damage to the farmer's crops, although the pilot's actual landing of the plane was done in accordance with federal aviation rules and was not negligent.",
        q: "The farmer sued the pilot to recover his $500. Should the court rule in the farmer's favor?",
        opts: [
            "No, because the broken engine created a private necessity.",
            "No, because the pilot was not negligent.",
            "Yes, because the pilot damaged his crops.",
            "Yes, because the pilot probably could have made it back to the airport."
        ],
        ans: 2,
        exp: "Under the doctrine of private necessity, a person is privileged to enter another's land to protect themselves or their property from serious harm. However, this privilege is \"incomplete\"; while the landowner cannot use force to eject the person, the person asserting the privilege must still pay for any actual property damage caused during the entry (Vincent v. Lake Erie). Thus, the farmer can recover the $500 for the damaged crops.\n\nA is incorrect because private necessity only protects against liability for the trespass itself (nominal/punitive damages), not actual damages. B is incorrect because liability for actual damage under private necessity exists regardless of negligence. D is incorrect because the pilot's safety decision was privileged, but he must still pay for the damage."
    },
    {
        id: 14,
        topic: "Intentional Infliction of Emotional Distress",
        fp: "Two political candidates were known for insulting and playing pranks on each other. During a nationally televised debate, the defendant lit a firecracker as a joke and tossed it onto the plaintiff's podium right as the plaintiff was making a speech regarding his toughness and bravery in foreign policy. When the firecracker went off, the plaintiff covered his head and fell onto the floor. Although the plaintiff sustained no physical injury, the audience laughed and he was embarrassed by the incident.\n\nThe plaintiff filed a claim against the defendant for intentional infliction of emotional distress.",
        q: "Should the court rule in the plaintiff's favor?",
        opts: [
            "No, because the plaintiff was only embarrassed.",
            "No, because the defendant was only joking.",
            "Yes, because he fell onto the floor.",
            "Yes, because throwing a firecracker at someone is outrageous."
        ],
        ans: 0,
        exp: "To recover for intentional infliction of emotional distress (IIED), a plaintiff must prove \"severe emotional distress.\" Mere embarrassment, annoyance, or hurt feelings are insufficient to meet the high threshold of severe emotional suffering required for this tort.\n\nB is incorrect because a \"joke\" can still be actionable if it causes severe distress. C is incorrect because falling to the floor does not constitute severe emotional trauma. D is incorrect because even if the conduct is outrageous, the plaintiff must still prove severe emotional distress to recover."
    },
    {
        id: 15,
        topic: "Negligence / Independent Contractors",
        fp: "A store owner hired a contractor to install an automatic door-opener while the store was closed for the night. The contractor read the instructions furnished by the manufacturer but disregarded a warning related to its installation. The following morning, a customer was injured by the door when it short-circuited.",
        q: "In a claim by the customer against the contractor, which of the following would be the customer's most effective argument?",
        opts: [
            "The contractor's liability is established by res ipsa loquitur.",
            "It was unreasonable for the contractor to disregard the warning contained in the instructions furnished by the manufacturer.",
            "The automatic door-opener was installed in a way that made it unfit for ordinary use.",
            "The short circuit made the automatic door-opener defective."
        ],
        ans: 1,
        exp: "A negligence claim requires proof that the defendant breached a duty of reasonable care. It is generally unreasonable for an installation contractor to disregard explicit safety warnings and testing instructions provided by the manufacturer. Showing this unreasonable conduct is the most direct way to establish the contractor's negligence.\n\nA is incorrect because res ipsa loquitur is unnecessary when there is direct evidence of a specific negligent act (disregarding instructions). C and D sound in strict products liability, but a contractor providing installation services is generally subject to negligence standards, not strict products liability for the sale of defective goods."
    },
    {
        id: 16,
        topic: "Negligence / Defenses",
        fp: "A driver was driving her automobile in the rain when she rounded a bend and saw a cow standing directly in her path. She immediately jammed on her brakes and pulled the steering wheel to the right in an attempt to avoid striking the cow. As a result, she lost control of her car, which skidded off the road and into the homeowner's yard.",
        q: "In an action by the homeowner against the driver for negligence, which of the following arguments would be most effective as a defense for the driver?",
        opts: [
            "Her conduct did not result in damage.",
            "She was not required to act reasonably because she was confronted by an emergency.",
            "She was privileged by the doctrine of necessity.",
            "It was foreseeable that users of the road would deviate onto adjacent private land in connection with their use of the road."
        ],
        ans: 1,
        exp: "Under the sudden emergency doctrine, a person facing an emergency not of her own making is judged by the standard of a reasonable person facing the same emergency. Option B points to the emergency doctrine as a defense to the negligence claim, arguing her evasive actions were justified under the circumstances.\n\nA is incorrect because property damage likely occurred. C is incorrect because private necessity applies to intentional torts (like trespass), not negligence. D supports the homeowner's claim, not the driver's defense."
    },
    {
        id: 17,
        topic: "Negligence / Concurrent Causes",
        fp: "A doctor owned a large machine for putting patients to sleep during surgery. The doctor sent the machine to the manufacturer for repairs. While making the repairs, the manufacturer accidentally filled the anesthetic gas can with plain oxygen and the plain oxygen can with anesthetic. During a surgery, the doctor wanted to administer pure oxygen to the patient. However, because of the mistake in the cans, the patient got pure anesthetic instead. As a result, the patient died.\n\nThe patient's family sued the doctor for damages resulting from the death of the patient. During trial, the court found the doctor acted unreasonably in her treatment of the patient.",
        q: "Is the doctor liable?",
        opts: [
            "Yes, because the doctor was unreasonable in her treatment of the patient.",
            "Yes, because of res ipsa loquitur.",
            "No, because the death was caused by the manufacturer's negligence.",
            "No, because the negligence occurred while the machine was in the care of the manufacturer."
        ],
        ans: 0,
        exp: "A physician is liable in medical malpractice if they fail to act as a reasonably prudent physician under the circumstances. The court found that the doctor acted unreasonably in her treatment, establishing her negligence. This negligence was a concurrent proximate cause of the patient's death, making the doctor jointly and severally liable regardless of the manufacturer's initial error.\n\nB is incorrect because res ipsa loquitur is unnecessary when there is a specific finding of unreasonable conduct. C and D are incorrect because the manufacturer's negligence does not absolve the doctor of liability for her own concurrent negligence."
    },
    {
        id: 18,
        topic: "Strict Products Liability / Retailer Liability",
        fp: "A homeowner was injured when an automatic cutoff switch failed to function on a snowblower he was using. The cutoff switch had functioned well for a year after he purchased the snowblower but failed after the machine had been improperly repaired by a mechanic. The snowblower's operating manual contained a clear and prominent warning against making the very alteration to the switch mechanism that was made by the mechanic. The mechanic, however, did not have a manual available when he repaired the snowblower.",
        q: "Does the homeowner have a viable claim against the manufacturer of the snowblower for damages?",
        opts: [
            "No, because the homeowner was contributorily negligent in failing to furnish the snowblower's manual to the mechanic.",
            "No, because the injury resulted from a substantial alteration of the snowblower by a third party.",
            "Yes, because a defect in the snowblower caused the homeowner's injury.",
            "Yes, because the manufacturer should have made the manual available to repair personnel."
        ],
        ans: 1,
        exp: "A manufacturer is not strictly liable for injuries caused by a product if the product has undergone a substantial, unforeseeable alteration or modification after leaving its control. The mechanic's improper repair, which directly contradicted clear warnings in the manual, constitutes a substantial alteration that acts as a superseding cause, breaking the chain of causation and relieving the manufacturer of liability.\n\nA is incorrect because the primary reason for non-liability is the third-party alteration, not necessarily the homeowner's contributory negligence. C is incorrect because the snowblower was not defective when sold. D is incorrect because the manufacturer's duty to warn is generally satisfied by including the manual at the time of sale."
    },
    {
        id: 19,
        topic: "Negligence / Child Standard of Care",
        fp: "A 13-year-old girl was operating a high-speed motorboat. The boat was towing a 9-year-old boy in an inner tube tied to the rear of the motorboat by a rope. The rope became tangled around the boy's foot, causing him to suffer severe injuries.\n\nIn a suit brought on the boy's behalf against the girl, the boy has introduced uncontroverted evidence that the girl drove carelessly in such a way as to entangle the boy in the rope.",
        q: "Is the boy likely to prevail?",
        opts: [
            "No, because the boy assumed the risk.",
            "No, because the girl was too young to be expected to appreciate and avoid the risk she exposed the boy to.",
            "Yes, because children of the girl's age should have the capacity to operate motorboats.",
            "Yes, because the girl will be held to an adult standard of care."
        ],
        ans: 3,
        exp: "Normally, children are held to the standard of a reasonable child of similar age, intelligence, and experience. However, when a child engages in an inherently dangerous activity that is characteristically undertaken by adults (such as operating a high-speed motorboat or driving a car), the child is held to an adult standard of care. Because the girl drove carelessly by adult standards, the boy will prevail.\n\nA is incorrect because a 9-year-old would not fully appreciate or consent to the risk of careless driving. B is incorrect because she is held to an adult standard. C relies on the incorrect premise that children have such capacity, rather than the correct legal rule that the adult standard applies regardless of typical child capacity."
    },
    {
        id: 20,
        topic: "Intentional Misrepresentation (Fraud)",
        fp: "A seller sold his boat to a buyer. During negotiations, the buyer said that he planned to sail the boat on the open seas. The seller told the buyer that the boat was seaworthy and had never sustained any significant damage. In fact, the hull of the boat had been badly damaged when the seller had run the boat aground. The seller had then done a cosmetic repair to the hull rather than a structural repair.\n\nThe buyer relied on the seller's representations and paid a fair price for a boat in good repair, only to discover after the sale was completed that the hull was in fact badly damaged and in a dangerous condition. The seller has refused to refund any of the buyer's money, and the buyer is contemplating suing the seller.",
        q: "Under what theory would the buyer be most likely to recover?",
        opts: [
            "Fraud.",
            "Intentional endangerment.",
            "Negligent misrepresentation.",
            "Strict products liability."
        ],
        ans: 0,
        exp: "The seller intentionally made false statements of material fact (that the boat was seaworthy and never damaged) to induce the buyer to purchase the boat. The buyer justifiably relied on these statements and suffered pecuniary loss. This satisfies all elements of intentional misrepresentation (fraud/deceit).\n\nB is incorrect as there is no specific tort of intentional endangerment. C is incorrect because the misrepresentation was intentional, not merely negligent. D is incorrect because strict products liability applies to commercial sellers of goods in the business of selling such products, and generally does not cover pure economic loss for the value of the product itself."
    },
    {
        id: 21,
        topic: "Premises Liability / Undiscovered Trespassers",
        fp: "A farmer owns a large farm on which he allows his friends to hunt during quail-hunting season. He does not provide his friends with any instructions about gun safety. The neighbor who owns property adjacent to the farm knows of the friends' use of the property during the hunting season. One day during the hunting season, without the farmer's knowledge or permission, the neighbor took a shortcut across the farm to visit an acquaintance. The neighbor was wounded by a shot fired by one of the farmer's friends, who was shooting at quail and carelessly failed to see the neighbor.\n\nTraditional rules of landowners' and occupiers' liability apply.",
        q: "In an action by the neighbor against the farmer to recover for the injuries, will the neighbor be likely to prevail?",
        opts: [
            "No, because the farmer is not responsible for his friends' conduct.",
            "No, because the neighbor was trespassing.",
            "Yes, because the careless friend was permitted to hunt without safety training.",
            "Yes, because the use of firearms is an abnormally dangerous activity."
        ],
        ans: 1,
        exp: "Under traditional premises liability rules, a landowner owes no duty of care to an undiscovered trespasser to make the land safe or to warn of dangerous activities. Because the neighbor entered the property without permission or knowledge of the farmer, he was an undiscovered trespasser, and the farmer breached no duty to him.\n\nA is incorrect because the farmer could be responsible if a duty was owed. C is incorrect because there was no duty owed to the undiscovered trespasser. D is incorrect because hunting with firearms is generally not considered an abnormally dangerous activity that triggers strict liability."
    },
    {
        id: 22,
        topic: "Invasion of Privacy / Intrusion upon Seclusion",
        fp: "A 15-year-old boy was killed during a gang fight. Two days after his funeral, the boy's mother saw a television program about gang violence and was shocked to see video of herself weeping over the boy's body. The video had been shot by the television reporting team while the boy's body was still lying on a public street. The mother suffered severe emotional distress as a result of seeing the video.",
        q: "If the mother sues the television station for invasion of her privacy and that of her son, will the mother be likely to prevail?",
        opts: [
            "No, because a person has no right to privacy after his or her death.",
            "No, because the street was open to the public and the subject was newsworthy.",
            "Yes, because the mother did not give permission to have the video used in the program.",
            "Yes, because the mother suffered severe emotional distress as a result of viewing the video."
        ],
        ans: 1,
        exp: "To recover for invasion of privacy (specifically public disclosure of private facts or intrusion upon seclusion), the matter must be private and not of legitimate public concern. The incident occurred on a public street in plain view, and a gang-related killing is a highly newsworthy event. Because the event was public and newsworthy, the publication is protected by the First Amendment, barring the privacy claim.\n\nA is a true statement regarding the son, but does not address the mother's own privacy claim. C is incorrect because permission is not required to film public, newsworthy events. D is incorrect because emotional distress alone does not overcome the constitutional protection for broadcasting public, newsworthy information."
    },
    {
        id: 23,
        topic: "Res Ipsa Loquitur",
        fp: "A patient in a hospital was placed in a wheelchair with his broken leg extended straight out in front of him. As a nurse employed by the hospital was pushing the wheelchair through a set of automatic doors at a normal pace, the doors closed on the patient's foot, injuring it. The nurse attempted to pull the wheelchair back through the doors. This action caused the doors to close more tightly on the patient's foot, injuring it further.\n\nThe patient sued the hospital, alleging improper maintenance of the doors. The patient has produced no evidence of specific conduct or neglect on the part of the hospital that would have caused the automatic doors to malfunction. The hospital has moved for summary judgment.",
        q: "Should the court grant the hospital's motion?",
        opts: [
            "No, because a jury could find that there was a latent defect in the doors.",
            "No, because a jury could find the hospital liable for negligence based on res ipsa loquitur.",
            "Yes, because proof of an accident, by itself, does not establish that an injured person was a victim of negligence.",
            "Yes, because the nurse's action was a superseding cause of the injury."
        ],
        ans: 1,
        exp: "Res ipsa loquitur permits an inference of negligence when the event is of a kind that ordinarily does not occur in the absence of negligence, and the instrumentality causing the injury was in the exclusive control of the defendant. Automatic doors do not ordinarily close on people if they are properly maintained. Because the hospital had exclusive control over the maintenance of the doors, the jury could infer negligence, precluding summary judgment.\n\nA is incorrect because a latent defect (a products liability concept) would actually defeat a negligence claim against the hospital by suggesting the manufacturer was at fault. C states a true general principle but ignores the application of res ipsa loquitur here. D is incorrect because the nurse's action was an immediate response to the door malfunction and would not be a superseding cause."
    },
    {
        id: 24,
        topic: "Defense of Others",
        fp: "In a tavern, an intoxicated woman threatened to slash a man with a broken beer bottle. Another customer, who had not been threatened by the woman, forcefully grabbed the woman and locked her in the tavern's storeroom until the police could arrive. In the process, although the customer used reasonable force, the customer badly sprained the woman's wrist.",
        q: "Is the woman likely to recover in an action against the customer?",
        opts: [
            "No, because the customer's conduct was privileged as a defense of others.",
            "Yes, based on battery only.",
            "Yes, based on false imprisonment only.",
            "Yes, based on both battery and false imprisonment."
        ],
        ans: 0,
        exp: "A person is privileged to use reasonable force to defend a third person from imminent unlawful physical harm. The customer reasonably believed the man was in danger of being slashed and used reasonable force (grabbing and locking up the woman) to neutralize the threat. This privilege serves as a complete defense to both battery and false imprisonment claims.\n\nB, C, and D are incorrect because the privilege of defense of others entirely negates liability for the intentional torts that occurred during the rescue."
    },
    {
        id: 25,
        topic: "Negligence / Industry Custom",
        fp: "A longshoreman fell to his death through an open hatch on the deck of a ship. The longshoreman was an employee of a company that had contracted with the ship's owner to load and unload the ship. The fall occurred at night, when loading work was over for the day, and there was no reason for the longshoreman to have been near the hatch.\n\nA negligence action was filed against the ship's owner for the death of the longshoreman. In that action, the owner has moved for summary judgment and has provided unrebutted evidence that it is customary for the crews of ships to open the hatches for ventilation after the longshoremen have left the ships.",
        q: "How should the court respond to the motion?",
        opts: [
            "Deny the motion and submit the case to the jury with instructions that the custom is relevant but not conclusive on the issue of negligence.",
            "Deny the motion and submit the case to the jury with instructions that the ship's owner should win if the longshoreman was improperly near the hatch.",
            "Deny the motion, because the probability of serious injury caused by falling down an open hatch clearly outweighs the burden of keeping the hatch closed.",
            "Grant the motion, because the custom should be considered conclusive on the issue of negligence."
        ],
        ans: 0,
        exp: "Evidence of industry custom is admissible to show what a reasonable person would do, but it is not conclusive. An entire industry may be acting negligently. Therefore, the court must deny summary judgment and let the jury decide if following the custom constituted reasonable care under the circumstances.\n\nB is incorrect because the longshoreman's contributory negligence would generally only reduce damages (comparative negligence) rather than completely bar recovery. C is incorrect because the court does not weigh the probability and burden on a summary judgment motion; that is the jury's role. D is incorrect because industry custom is never conclusive proof of reasonable care."
    }
];