const examData = [
    {
        id: 1,
        topic: "Mixed",
        fp: "Upon inheriting her aunt's ranch, the seller subdivided it into 1,000 separate numbered parcels of realty and offered them for sale. After inspecting a parcel that had no building on it, the buyer and his attorney went to see the seller in her sales office. After negotiation, the seller accepted the buyer's offer to purchase the parcel for $15,000. At the buyer's request, the attorney prepared a contract of sale, using a printed form that the attorney had brought with her. While doing so, the attorney asked the seller how to identify the parcel involved. Although its correct identification was 'Parcel 241,' the seller inadvertently referred to it as 'Parcel 341.' None of them were aware of the seller's error. As soon as the attorney finished preparing it, the seller and the buyer signed a contract that described the realty as Parcel No. 341.\n\nAlthough Parcels No. 241 and No. 341 were the same size, Parcel No. 341 had a valuable building on it that made it worth $80,000. Prior to the date set for closing, the seller realized her mistake. She immediately informed the buyer of the error.",
        q: "If the buyer sues the seller for an order directing her to convey Parcel No. 341 to him for $15,000, which of the following would be the seller's most effective argument in defense?",
        opts: [
            "The buyer should have known that realty with a building on it was more valuable than realty without a building on it.",
            "The buyer selected the attorney to prepare the contract.",
            "Parcel No. 341 was substantially more valuable than Parcel No. 241.",
            "Both the seller and the buyer were mistaken about the identity of the parcel described in the contract."
        ],
        ans: 3,
        exp: "Rule: Under the doctrine of mutual mistake (Restatement (Second) of Contracts §§ 152, 155), where both parties are mistaken as to a basic assumption of fact or where there is a mutual mistake in transcription regarding the subject matter of the agreement, mutual assent is lacking and the contract is voidable or subject to reformation. Both parties intended to contract for the vacant parcel inspected (Parcel 241) and mistakenly executed an agreement describing Parcel 341. Because both parties shared this mistaken belief as to the parcel's identity, the seller can successfully defend against specific performance (Option D). Option A is incorrect because constructive knowledge does not cure the fundamental defect in mutual assent. Option B is incorrect because assigning the error to an intermediary does not override a shared mutual mistake of identity. Option C is incorrect because mere price or valuation disparity alone is insufficient without establishing the underlying mistake in identity."
    },
    {
        id: 2,
        topic: "Mixed",
        fp: "The victim, who was employed as a security guard, was required to carry a loaded pistol on the job. While traveling to and from his job, however, he kept the pistol unloaded. Driving to work one day, the victim's car was struck from behind by a car operated by the defendant. In the discussion that ensued, the defendant used language that the victim found offensive. At that point, the victim turned his back on the defendant and attempted to walk away. Angry, the defendant ran after the victim and slapped him in the face. Although the victim did not intend to shoot the defendant, he pulled his pistol from its holster and began loading it, hoping that the defendant would become frightened and leave him alone. When the defendant saw the victim loading the pistol, he thought of running away, but he was afraid that the victim would shoot him if he tried to do so. Drawing a knife from his pocket, the defendant stabbed the victim in the chest. The defendant was subsequently arrested and charged with assaulting the victim with a deadly weapon.",
        q: "If the defendant asserts the privilege of self-defense, should he be found guilty?",
        opts: [
            "Yes, because as the initial aggressor, the defendant had no privilege to use deadly force.",
            "Yes, because the defendant could have successfully escaped in his car without being shot by the victim.",
            "No, because the defendant's fear of being shot by the victim was reasonable.",
            "No, because the victim should have known that by loading his pistol, he was inviting the use of deadly force by the defendant."
        ],
        ans: 2,
        exp: "Rule: While an initial aggressor generally cannot claim self-defense, the privilege to use deadly force is restored if the other party escalates a non-deadly altercation by responding with sudden, unlawful deadly force, and the initial aggressor reasonably believes they are in imminent danger of death or great bodily harm and cannot safely retreat. Although the defendant struck first with non-deadly force (a slap), the victim escalated the conflict by brandishing and loading a firearm. Because the defendant reasonably believed his life was in imminent danger and feared he could not safely flee, his use of deadly defensive force was privileged (Option C). Option A is incorrect because escalation of force by the victim restores defensive rights to a non-deadly initial aggressor. Option B is incorrect because reasonableness is judged from the defendant's honest and reasonable perspective at the moment of perceived peril, not retrospective physical possibility. Option D is incorrect because justification focuses on the defendant's reasonable perception of imminent harm, not the victim's forethought."
    },
    {
        id: 3,
        topic: "Mixed",
        fp: "When the plaintiff applied for a job as a nurse at a hospital, the hospital's personnel department sent questionnaires to doctors on its staff, requesting information about the plaintiff. The defendant, a doctor on staff, knew the plaintiff from when they had both been employed at another clinic. Since the defendant had heard another doctor who was very well respected as a trainer and mentor of nurses at that clinic accuse the plaintiff of incompetence resulting in the death of a patient, the defendant disliked the plaintiff. In fact, however, the doctor who made the accusation had mistaken the plaintiff for another nurse, and the plaintiff had been cleared of blame by a clinic board of inquiry. Hoping that the plaintiff's job application would be rejected, the defendant wrote on the questionnaire, 'I once heard that the plaintiff's incompetence resulted in the death of a patient.' The hospital did not hire the plaintiff.",
        q: "If the plaintiff asserts a defamation claim against the defendant for the defendant's statement in the questionnaire, should the court find in the plaintiff's favor?",
        opts: [
            "No, because the defendant reasonably believed that the plaintiff's incompetence resulted in the death of a patient.",
            "No, because the statement clearly indicated that the defendant had heard the accusation from another.",
            "Yes, because the defendant's dislike of the plaintiff and the defendant's hope that the plaintiff's job application would be rejected amounted to actual malice.",
            "Yes, because the statement resulted in the hospital not hiring the plaintiff."
        ],
        ans: 0,
        exp: "Rule: A qualified or conditional privilege protects defamatory communications made in good faith on a matter in which the publisher has a legitimate interest or social duty (such as an employment reference or internal personnel inquiry). A qualified privilege is lost only if abused—such as publishing with reckless disregard for truth (actual malice) or outside the scope of the privileged occasion. Because the defendant based his report on a communication from a respected mentor/trainer, he reasonably believed the substance of what he had heard, and communicated it solely within the appropriate employment reference channel (Option A). Option B is incorrect because repeating defamatory rumors is not shielded simply by attributing the rumor to another. Option C is incorrect because common law spite or dislike does not constitute constitutional actual malice (knowledge of falsity or reckless disregard of truth). Option D is incorrect because proof of actual damage does not overcome a valid qualified privilege."
    },
    {
        id: 4,
        topic: "Mixed",
        fp: "The defendant operated a computer repair business, servicing the computers of several large organizations with the assistance of her daughter. When the defendant decided to retire, she sold the entire business to her daughter. As part of the sale, she assigned to her daughter a written contract to repair and service all the plaintiff's computers for a period of three years in return for a fixed monthly payment.\n\nThe day after her assignment to her daughter, the defendant notified the plaintiff about it by telephone. Because the plaintiff knew that the daughter had worked on his computers in the past, he consented to the assignment and orally agreed to release the defendant from all further obligation or liability under their contract. The plaintiff subsequently became dissatisfied with the daughter's service, however, and asserted a claim against the defendant for breach of contract.",
        q: "If the defendant's only defense is that the plaintiff agreed to release her from all further obligation or liability under their contract, which of the following would be the plaintiff's most effective argument in response to that defense?",
        opts: [
            "The defendant is attempting to use parol evidence to contradict or modify the terms of an unambiguous written agreement.",
            "There was no consideration for the plaintiff's agreement to release the defendant of further obligation or liability under the contract.",
            "The agreement to release the defendant of further obligation or liability under the contract was not in writing.",
            "The defendant's delegation to her daughter and the plaintiff's agreement to release the defendant constituted an accord and satisfaction."
        ],
        ans: 1,
        exp: "Rule: A valid novation completely discharges an original obligor when all three parties agree to substitute a new obligor. However, like any contract, an agreement of release requires consideration. In a standard novation, consideration is found in the contemporaneous mutual promises where the new obligor assumes the duty directly to the obligee in exchange for the release. Because the assignment and delegation between mother and daughter had already occurred the day before, the plaintiff's subsequent oral promise to release the mother was a gratuitous release unsupported by bargained-for consideration (Option B). Option A is incorrect because the parol evidence rule excludes prior or contemporaneous agreements, not subsequent oral modifications or releases. Option C is incorrect because a release taking immediate effect is not an agreement incapable of performance within one year under the Statute of Frauds. Option D is incorrect because an accord and satisfaction involves resolving an existing disputed claim or substituting a new performance obligation, which is not present here."
    },
    {
        id: 5,
        topic: "Mixed",
        fp: "The defendant was charged with violating a state law that made it a crime to knowingly issue a worthless check. On the presentation of its direct case at trial, the prosecution offered into evidence a properly authenticated judgment showing that the defendant had been convicted of violating the same law three years earlier. The defendant's counsel objected.",
        q: "Which of the following statements is correct about the judgment of conviction?",
        opts: [
            "It is admissible as substantive evidence of modus operandi.",
            "It is admissible to impeach the defendant's credibility.",
            "It is admissible both as substantive evidence of modus operandi and to impeach the defendant's credibility.",
            "It is inadmissible."
        ],
        ans: 3,
        exp: "Rule: Under general principles of evidence and criminal law, evidence of a person's character or prior crimes is inadmissible to prove that on a particular occasion the person acted in accordance with that character (propensity evidence). Prior crimes may be admissible for non-propensity purposes (e.g., MIMIC: Motive, Intent, Mistake, Identity/Modus Operandi, Common Scheme), but modus operandi requires a distinctive 'signature' or unusual methodology, which is absent in standard check fraud. Furthermore, prior convictions cannot be used to impeach a defendant who has not taken the witness stand. Because the prosecution offered the conviction on its direct case before the defendant testified, the evidence is inadmissible (Option D). Options A and C are incorrect because ordinary check fraud lacks unique signature characteristics. Option B is incorrect because character for truthfulness cannot be attacked until the defendant testifies as a witness."
    },
    {
        id: 6,
        topic: "Mixed",
        fp: "A riot broke out during a political rally in the town. Subsequently, a newspaper published an editorial about the rally and the ensuing disruption. The editorial stated that '[p]olice present at the rally beat and kicked innocent bystanders and engaged in other acts of senseless and unnecessary brutality.' Following publication of the editorial, the four police officers who were present at the rally asserted a defamation claim against the newspaper. The only argument raised by the newspaper in defense is that the statements contained in the editorial did not identify the plaintiffs.",
        q: "Should the court find in the plaintiffs' favor?",
        opts: [
            "Yes, because the number of police present at the rally was so small that readers who knew the plaintiffs would believe that the statement had been made about them.",
            "Yes, because they were engaged in their official duties as police officers.",
            "Yes, because the statement was slander per se.",
            "No, because the statement did not specifically name the plaintiffs."
        ],
        ans: 0,
        exp: "Rule: To establish defamation, the statement must be 'of and concerning' the plaintiff. Under the group defamation doctrine, if a defamatory statement is directed against a small group, each member of the group can establish that the defamatory statement was made of and concerning them if the group is so small that a reasonable listener/reader would understand that the statement refers to every member of the group. Because only four officers were present at the rally, the group was sufficiently small for readers who knew the officers to understand the defamatory statement as referring to each of them (Option A). Option B is incorrect because engaging in official duties does not determine group identification. Option C is incorrect because printed statements in newspapers are libel, not slander. Option D is incorrect because specific naming is not required where group size is sufficiently small."
    },
    {
        id: 7,
        topic: "Mixed",
        fp: "In December 2018, the seller, a manufacturer of packaging materials, entered into a written agreement with the buyer, a wholesaler of melons. The agreement provided that the buyer would purchase from the seller all the boxes required by the buyer for packaging melons in 2021, but that in no event would the number of boxes required be less than 2,000.\n\nAfter the agreement was executed, the price of melons fell from $1 per melon to $0.80 per melon. As a result, the buyer notified the seller in January 2021 that he intended to package melons in bags instead of boxes and that he would not order any boxes from the seller in 2021.\n\nIn January 2021, the seller instituted an action against the buyer for damages.",
        q: "If the buyer asks the court to dismiss the seller's action, should the court do so?",
        opts: [
            "Yes, because the buyer might still order 2,000 boxes by the end of 2021.",
            "Yes, because the provision that required the seller to furnish all the boxes required by the buyer in 2021 makes it impossible for the court to determine the seller's damages.",
            "No, because damages are presumed to result from every breach of contract.",
            "No, because the buyer has stated that he will not fulfill his obligations under the contract."
        ],
        ans: 3,
        exp: "Rule: Under UCC § 2-610, an anticipatory repudiation occurs when a party makes an unequivocal statement or manifestation of intent that they will not render a promised performance when due. The aggrieved party may immediately resort to any remedy for breach. Because the buyer expressly declared in advance that he would not order any boxes for the year 2021 despite a contractual minimum of 2,000 boxes, this constituted an anticipatory repudiation giving the seller an immediate cause of action for damages (Option D). Option A is incorrect because anticipatory repudiation creates an immediate cause of action; the non-breaching party is not required to wait until the end of the year. Option B is incorrect because the contract specified an express floor of 2,000 boxes, allowing damages to be calculated with certainty. Option C is incorrect because contract damages are compensatory and must be proven, not presumed."
    },
    {
        id: 8,
        topic: "Mixed",
        fp: "At the defendant's trial on criminal charges, undisputed evidence established that the defendant and his friend had planned to take a certain fur coat from the victim's fur shop by threatening the victim with a pistol carried by the friend; that when they did so, the victim began shooting at them; and that the friend shot back with his pistol, intentionally killing the victim.\n\nTestifying on behalf of the prosecution, the friend stated that the defendant knew that the friend's pistol would be loaded. He also stated that the victim had handed the defendant the coat; that the friend had returned his own gun to his pocket; and that he and the defendant were on their way out of the victim's shop when the victim began shooting at them.\n\nThe defendant testified that the coat in question had previously been stolen from her by the victim, and that she and the friend were trying to retrieve it.\n\nStatutes in the jurisdiction define first-degree murder as the intentional unlawful killing of a human being, and second-degree murder as the unintentional killing of a human being by the defendant or an accomplice during the course of a burglary, robbery, rape, kidnapping, or arson committed by the defendant.\n\nThe defendant is charged with first-degree murder on the ground that as a co-conspirator and accomplice, she is vicariously liable for the friend's shooting of the victim. If the jury does not believe the testimony of the friend or of the defendant, should the defendant be found guilty?",
        q: "Should the defendant be found guilty of first-degree murder?",
        opts: [
            "Yes, because she and the friend planned to take the coat by threatening the victim with the friend's pistol.",
            "Yes, because she was present when the friend shot the victim.",
            "No, because the victim shot first.",
            "No, because she did not aid or abet the friend in shooting the victim."
        ],
        ans: 0,
        exp: "Rule: Under the Pinkerton doctrine and principles of accomplice liability, a co-conspirator/accomplice is vicariously liable for all reasonably foreseeable crimes committed by a partner in furtherance of the unlawful conspiracy. Where co-conspirators plan an armed robbery with a firearm, an intentional lethal shooting of the resisting victim is a natural, probable, and foreseeable consequence of the armed robbery scheme, rendering the accomplice liable for the intentional killing (first-degree murder under the statute) (Option A). Option B is incorrect because mere presence without conspiratorial agreement or aiding and abetting does not establish liability. Option C is incorrect because an armed robber cannot claim self-defense against a storeowner privileged to resist with force. Option D is incorrect because vicarious liability attaches through the conspiracy and robbery assistance, obviating the need for separate aiding and abetting at the specific moment of the shooting."
    },
    {
        id: 9,
        topic: "Mixed",
        fp: "A woman purchased a food and beverage processing machine as a gift for her husband. The machine was manufactured by the company and was purchased by the woman from a store, a retailer. When the woman got home, she unpacked the machine, placed it on the kitchen counter, and plugged it into an electrical outlet. When she started the machine, however, she noticed a jarring vibration. She immediately switched the machine off and telephoned the store. After she described the vibration to a store employee, the employee said, 'If the processor vibrates like that, it is defective. Don't try to use it. It's inherently dangerous.'\n\nThe woman left the processing machine on the counter, still plugged in, and went out for the evening. The husband arrived home soon afterward. With him was a neighbor. When the husband saw the processing machine on the counter, he decided to use it to mix drinks for the neighbor and himself. After placing the necessary ingredients in the machine's glass container, the husband switched it on. The machine immediately began to vibrate, causing the glass container to shatter. The neighbor was seriously injured by flying glass.\n\nThe neighbor asserts a claim against the store for damages resulting from a defect in the processing machine.",
        q: "Which of the following would be the store's most effective argument in defense against that claim?",
        opts: [
            "The neighbor was a bystander.",
            "The woman had assumed the risk by leaving the processing machine plugged into the electrical outlet.",
            "The processing machine was defective at the time it left the company's factory.",
            "The woman's conduct in leaving the processing machine plugged into the electrical outlet was a superseding cause of harm."
        ],
        ans: 3,
        exp: "Rule: In strict products liability, a commercial distributor is liable for injuries caused by a defective product only if the defect was both the cause-in-fact and proximate (legal) cause of the injury. An intervening act that is extraordinary, unforeseeable, or highly reckless breaks the causal chain and constitutes a superseding cause that relieves the upstream seller of liability. Leaving a known 'inherently dangerous' defective machine plugged in on a counter where others would foreseeable operate it without warning can be argued to be a superseding intervening cause (Option D). Option A is incorrect because foreseeable bystanders can recover under strict products liability. Option B is incorrect because assumption of the risk is an affirmative defense asserted against the plaintiff, not a non-party buyer. Option C is incorrect because proof that the product was defective when it left the factory supports, rather than defeats, strict products liability."
    },
    {
        id: 10,
        topic: "Mixed",
        fp: "On January 10, the plaintiff, a builder, entered into a written contract with the defendant to construct a building on the defendant's realty. The contract required the plaintiff to build to specifications furnished by the architect and required the defendant to make periodic payments to the plaintiff during construction. A final payment of $30,000 was to be made when the building was complete. The contract provided, however, that 'In no event shall said final payment be required unless the plaintiff obtains and presents to the defendant prior to July 30 a Certificate of Satisfactory Completion issued by the architect following final inspection by the architect.'\n\nOn July 15, after making all periodic payments required by the contract, the defendant asked the architect to delay issuing a Certificate of Satisfactory Completion until after July 30. The architect agreed to do so. On July 20, the plaintiff notified the architect that the building was complete and requested final inspection. The architect did not inspect the building or issue a Certificate of Satisfactory Completion until August 15. On August 16, the plaintiff requested final payment from the defendant, presenting the Certificate. The defendant refused to make payment on the ground that the plaintiff did not obtain the Certificate prior to July 30, as required by the contract.",
        q: "In an action by the plaintiff against the defendant for breach of contract, which of the following would be the plaintiff's most effective argument?",
        opts: [
            "The contract between the plaintiff and the defendant imposed upon the architect an obligation to act reasonably in issuing the Certificate of Satisfactory Completion.",
            "The plaintiff substantially performed all conditions of the contract by completing the building prior to July 30.",
            "As a result of the defendant's request that the architect delay issuing the Certificate of Satisfactory Completion, the plaintiff was not required to obtain it prior to July 30.",
            "Applying an objective standard, satisfactory completion was achieved prior to July 30."
        ],
        ans: 2,
        exp: "Rule: Under the prevention doctrine, if a party wrongfully interferes with or prevents the occurrence of an express condition precedent, the condition is excused and the interfering party cannot avoid liability by asserting the failure of that condition. Because the defendant deliberately requested the architect to withhold and delay the inspection and certificate until after the deadline, the defendant's bad-faith interference excused the condition requiring presentation of the certificate by July 30 (Option C). Option A is incorrect because the architect was not a party to the construction agreement and could not be personally bound by it. Option B is incorrect because substantial performance applies to constructive/implied conditions, not express conditions. Option D is incorrect because the express condition explicitly required the certificate itself by a date certain, not merely general satisfactory completion."
    },
    {
        id: 11,
        topic: "Mixed",
        fp: "A boy and a girl were dating when they decided it was time for them to try sexual intercourse. The girl was 17 years old. A statute in the jurisdiction provided that any male who has sexual intercourse with a female whom he knows to be under the age of 18 shall be guilty of second-degree rape.",
        q: "If the boy is charged with second-degree rape under the above statute, which of the following facts or inferences, if it was the only one true, would provide the boy with his most effective defense to that charge?",
        opts: [
            "The boy was 17 years of age at the time of the alleged crime.",
            "The boy did not know that the girl was below the age of 18 years when he had sexual intercourse with her.",
            "The boy was intoxicated at the time he had sexual intercourse with the girl.",
            "The girl was not intoxicated, and, in fact, consented to having sexual intercourse with the boy."
        ],
        ans: 1,
        exp: "Rule: In criminal statutory interpretation, where a statute incorporates an express mens rea element—such as 'knowingly' or 'whom he knows to be under the age of 18'—the prosecution must prove that the defendant possessed that specific knowledge. A genuine lack of knowledge (or honest mistake of fact) negates the express statutory knowledge requirement, providing a complete defense (Option B). Option A is incorrect because the defendant's own minor age is not a defense to statutory rape unless the statute explicitly creates a peer exemption. Option C is incorrect because voluntary intoxication does not provide an excuse for general intent or statutory rape crimes. Option D is incorrect because consent is legally ineffective as a defense in statutory rape."
    },
    {
        id: 12,
        topic: "Mixed",
        fp: "The defendant was driving her truck across a bridge when the bridge collapsed, causing a car driven by the plaintiff to fall into the river. The plaintiff subsequently asserted a negligence claim against the defendant for injuries that he sustained in the fall.\n\nA statute in the jurisdiction prohibits the operation of a vehicle weighing more than 20,000 pounds at a speed in excess of 25 miles per hour on any bridge in the state. At the trial, it was proven that the defendant's truck weighed 30,000 pounds, and that the defendant was driving it at a speed of 40 miles per hour when the bridge collapsed. It was also proven that a truck weighing 30,000 pounds would have been more likely to cause the bridge to collapse if driven across it at a speed under 25 miles per hour than at a speed over 25 miles per hour.",
        q: "Should the court find in the plaintiff's favor?",
        opts: [
            "Yes, because the defendant's violation of the statute was negligence per se.",
            "Yes, because the defendant's violation of the statute raises a presumption that the defendant's negligence was a proximate cause of the plaintiff's injuries.",
            "No, because the defendant's violation of statute was not a factual cause of the plaintiff's injury.",
            "No, because the defendant did not violate a statute that was designed to protect a class of persons to which the plaintiff belonged."
        ],
        ans: 2,
        exp: "Rule: To recover in negligence, the plaintiff must prove both breach of duty and causation-in-fact ('but-for' causation). Even where negligence per se is established by statutory violation, the defendant is not liable unless the violation was a cause-in-fact of the harm. Because driving at the lawful statutory speed (under 25 mph) would have made the collapse even more likely to happen than speeding, the defendant's violation (excess speed) was not the 'but-for' cause of the bridge collapse (Option C). Option A is incorrect because negligence per se establishes breach of duty, not causation. Option B is incorrect because a statutory breach creates no presumption regarding causation. Option D is incorrect because traffic safety rules on public bridges are intended to protect other motorists."
    },
    {
        id: 13,
        topic: "Mixed",
        fp: "A sculptor and a famous architect entered into a contract to design a new studio for the sculptor. The sculptor told the architect that she was hiring her because she believed in her unique vision. The written contract also provided that 'neither party shall assign or delegate this contract without the other party's written approval.'\n\nThe sculptor subsequently hired a builder who began construction of the architect's design. As work progressed, the sculptor and the architect argued frequently. When the building was 85 percent complete, the architect refused to continue working for the sculptor and executed a document purporting to assign the contract to another architect. The architectural work that remained involved personal services. The sculptor immediately ordered the builder to stop construction and sued the architect for an order directing her to specifically perform her obligations under the contract.",
        q: "Should the court grant the relief requested by the sculptor?",
        opts: [
            "Yes, because the architectural work that remained to be completed at the time of the architect's assignment involved personal services.",
            "Yes, because the agreement between the sculptor and the architect prohibited assignment.",
            "No, because an agreement not to assign destroys the power but not the right to make a valid assignment.",
            "No, because the architectural work that remained to be completed at the time of the architect's assignment involved personal services."
        ],
        ans: 3,
        exp: "Rule: Courts of equity will not order specific performance of contracts for personal services. Enforcing personal service obligations by injunction or specific decree is unworkable due to difficulty of judicial supervision, and implicates public policy against involuntary servitude under the Thirteenth Amendment. Because the uncompleted architectural duties involved unique personal services, specific performance cannot be granted (Option D). Option A is incorrect because personal service nature precludes, rather than warrants, specific performance. Option B is incorrect because non-assignment clauses do not make personal service orders equitable remedies. Option C is incorrect because it misstates the assignment rule and fails to address the bar against specific performance of personal service agreements."
    },
    {
        id: 14,
        topic: "Mixed",
        fp: "The victim, who lived alone, was a collector of antiques. One day, the defendant followed the victim to work. Knowing that the victim's valuable antiques collection was stored in her home, the defendant phoned the victim at work and told her that he had placed a bomb in her home. He said that if she immediately paid him $1,000 in cash, he would give the police information necessary for them to defuse the bomb. If she did not pay him, he said would detonate the bomb, destroying her home and her collection of antiques. The victim paid the defendant as instructed. In reality, the defendant had not placed a bomb in the victim's home.",
        q: "What is the most serious offense of which the defendant is likely to be convicted?",
        opts: [
            "Robbery.",
            "Extortion.",
            "Larceny by trick.",
            "Embezzlement."
        ],
        ans: 1,
        exp: "Rule: Extortion (blackmail) consists of obtaining property from another by means of an unlawful threat of future harm to person, property, or economic interests. Because the defendant obtained $1,000 by threatening to detonate a bomb and destroy the victim's home and property in the future, the crime committed was extortion (Option B). Option A is incorrect because robbery requires a threat of immediate bodily harm directed against the victim's person or someone present. Option C is incorrect because the victim intended to part with full title/ownership of the cash due to coercion, not temporary custody. Option D is incorrect because the defendant was never in lawful entrusted possession of the money."
    },
    {
        id: 15,
        topic: "Mixed",
        fp: "The seller and the buyer entered into a valid written contract for the sale of the seller's home to the buyer. Subsequently, the seller's neighbor, the defendant, telephoned the seller and said, 'If you don't back out of your contract with the buyer, there's going to be an accident and one of your children is going to be seriously hurt. Understand?' Before the seller had a chance to answer, the defendant hung up. The seller became so frightened by the defendant's threat that he suffered an immediate heart attack.\n\nIf the seller asserts a claim against the defendant for assault, which of the following would be the defendant's LEAST effective argument in defense against that claim?",
        q: "Which of the following would be the defendant's LEAST effective argument in defense against that claim?",
        opts: [
            "The defendant's statement did not justify apprehension of immediate harm.",
            "The defendant told the seller that he could avoid harm by complying with a specified condition.",
            "The defendant's threat was not directed against the person of the seller.",
            "The defendant committed no physical act."
        ],
        ans: 1,
        exp: "Rule: Assault requires an intentional act causing reasonable apprehension of immediate harmful or offensive bodily contact to the plaintiff's own person. Words alone over the telephone without an overt physical act do not constitute assault, threats of future harm do not satisfy immediacy, and threats directed against third parties (even children) do not constitute assault of the parent; thus, Options A, C, and D are valid and effective defenses. However, attaching a conditional demand that the defendant has no right to impose ('back out of your contract') does not defeat assault where apprehension of imminent harm exists. Therefore, relying on the conditional nature of the unlawful threat is the defendant's LEAST effective defense (Option B)."
    },
    {
        id: 16,
        topic: "Mixed",
        fp: "The defendant was the manufacturer of a chemical used by photo processors. A professional photographer customarily used the chemical in his processing laboratory. On August 15, 2012, while working in his laboratory, the photographer read the label of a bottle of the chemical that he had purchased several months earlier. The label said, 'Best when used prior to June 1, 2012.' Although the manufacturer knew that the chemical's fumes were extremely toxic, the label contained no other statements. The photographer poured the contents of the bottle down a drain that emptied into a municipal sewer. Because the sewer was cracked, toxic fumes entered the home of the plaintiff, causing the plaintiff to become seriously ill. The plaintiff's home was located a half-mile from the photographer's laboratory.\n\nThe plaintiff subsequently asserted a claim for damages against the defendant manufacturer on the ground that the absence of a warning on the bottle made the product defective and unreasonably dangerous.",
        q: "Which of the following additional facts or inferences, if it was the only one true, would provide the defendant with its most effective defense to the plaintiff's claim?",
        opts: [
            "The reasonable person would not have anticipated that the plaintiff would come into contact with the chemical or its fumes.",
            "The photographer acted negligently in pouring the chemical down the drain.",
            "The plaintiff's damage would not have occurred but for the crack in the municipal sewer.",
            "The photographer had purchased the chemical from a retail store that had purchased it from a wholesaler that had purchased it from the defendant."
        ],
        ans: 0,
        exp: "Rule: In strict products liability for failure to warn, the product defect must be the proximate (legal) cause of the injury, and the plaintiff must be a foreseeable user or bystander within the scope of foreseeable risk (Palsgraf doctrine). If a reasonable person would not have anticipated that a resident half a mile away would come into contact with the chemical through a cracked sewer pipe, the plaintiff is an unforeseeable victim outside the scope of risk, defeating proximate cause (Option A). Option B is incorrect because third-party user negligence is often foreseeable and does not automatically insulate a manufacturer. Option C is incorrect because the presence of contributing causes does not relieve a tortfeasor unless extraordinary and unforeseeable. Option D is incorrect because lack of privity is no defense in strict products liability."
    },
    {
        id: 17,
        topic: "Mixed",
        fp: "The defendant was employed by an attorney to clean his office and to sweep the parking lot every night. While sweeping one evening, the defendant found the attorney's wallet where he had dropped it in the parking lot. The wallet contained $300. Planning to return it to the attorney the next morning, the defendant took the wallet home for safekeeping. That night, however, realizing that nobody knew that she had it, the defendant decided to keep the attorney's wallet. She went out and spent $4 of the attorney's money on ice cream. The following morning, the defendant felt guilty about keeping the attorney's money. She replaced what she had spent and returned the wallet and cash to the attorney.",
        q: "If the defendant is prosecuted for crimes resulting from the above incident, what crimes may she be convicted of?",
        opts: [
            "Larceny only.",
            "Embezzlement only.",
            "Neither larceny nor embezzlement.",
            "Larceny and embezzlement."
        ],
        ans: 1,
        exp: "Rule: Embezzlement is the fraudulent conversion of the personal property of another by one who is already in lawful possession of the property. The employee came into initial lawful possession of the lost wallet without trespassory intent (intending to return it). When she later formed the intent to keep it and exercised dominion by spending part of the money, she committed embezzlement (Option B). Larceny is not committed because larceny requires a trespassory taking at the time possession is acquired; since she took possession lawfully for safekeeping, no trespassory taking occurred. Subsequent restoration of the money does not erase a completed embezzlement. Option A is incorrect because the initial taking was non-trespassory. Option C is incorrect because converting lawful entrusted funds constitutes embezzlement. Option D is incorrect because larceny and embezzlement are mutually exclusive based on whether possession was obtained lawfully or trespassorily."
    },
    {
        id: 18,
        topic: "Mixed",
        fp: "The defendant purchased property in a popular resort area and constructed a restaurant on it. The defendant's restaurant was equipped with a walk-up window so that people who chose to do so could purchase food and soft drinks without entering the restaurant. The defendant kept his restaurant and walk-up window open every night until 2 A.M. Soon, large noisy crowds of young people began congregating in front of the defendant's restaurant, making occasional purchases at the walk-up window and remaining there until it closed. On many nights, members of the crowd openly smoked marijuana and used profane language in loud voices. The plaintiff, who resided in a house next to the restaurant, telephoned the defendant. The plaintiff complained that the value of his home was being diminished by the walk-up window and by noise from the restaurant. He asked the defendant to close the restaurant each night at 11 P.M., but the defendant refused.",
        q: "If the plaintiff subsequently asserts a claim against the defendant for damages resulting from the reduction of his home's value, which of the following theories would be most likely to result in a judgment for the plaintiff?",
        opts: [
            "Trespass to land.",
            "Intentional infliction of emotional distress.",
            "Private nuisance.",
            "Invasion of privacy."
        ],
        ans: 2,
        exp: "Rule: A private nuisance is a substantial, unreasonable interference with the plaintiff's use and enjoyment of real property. Interference is intentional if the defendant creates or continues the condition with knowledge to a substantial certainty that it is interfering with the neighbor's quiet enjoyment. Operating a late-night walk-up window causing loud, disruptive crowds to congregate outside until 2 A.M. constitutes an actionable private nuisance (Option C). Option A is incorrect because trespass to land requires a physical, tangible invasion of the plaintiff's property boundaries, whereas noise and odors sound in nuisance. Option B is incorrect because operating a restaurant does not meet the threshold of extreme and outrageous conduct. Option D is incorrect because invasion of privacy requires an intrusion into private seclusion or personal affairs."
    },
    {
        id: 19,
        topic: "Mixed",
        fp: "The seller owned a 10-acre parcel of realty. On March 6, the seller offered to sell the land to the buyer for $80,000. The buyer said that he might be interested but that he would not be in a position to make up his mind until July. The seller said that she would hold the realty for the buyer until then and signed a paper on which she wrote: 'I hereby offer to sell Blackacre to the buyer for $80,000 cash. In return for $1 that I have on this date received, I promise to hold this offer open until July 15.'\n\nOn July 1, the buyer told the seller that he was ready to purchase the land, but the seller told him that she had changed her mind and did not want to sell. The buyer asserted a claim against the seller based on her written promise to keep the offer open until July 15. At the trial, the seller proved that she never actually received $1 from the buyer in return for her promise.",
        q: "In deciding the buyer's claim, should the court rule in favor of the buyer?",
        opts: [
            "Yes, because the parol evidence rule prevents the seller from relying on oral evidence that she did not actually receive $1.",
            "Yes, because the buyer detrimentally relied on the seller's promise to keep the offer open until July 15.",
            "No, because the realty is obviously worth more than $1.",
            "No, because nothing was bargained for or given in exchange for the seller's promise to keep the offer open until July 15."
        ],
        ans: 3,
        exp: "Rule: At common law, an option contract to keep an offer open is unenforceable unless supported by actual consideration. While courts do not generally inquire into the adequacy of consideration, the consideration must be bargained for and actually given. Where a recited consideration was never paid or bargained for, the promise to hold the offer open is a nudum pactum (gratuitous promise), allowing the offeror to revoke at will prior to acceptance (Option D). Option A is incorrect because recitals of fact regarding receipt of consideration can be contradicted by parol evidence. Option B is incorrect because there is no showing of substantial, foreseeable detrimental reliance. Option C is incorrect because consideration need not equal the market value of the underlying subject matter."
    },
    {
        id: 20,
        topic: "Mixed",
        fp: "The defendant, the owner of a gasoline delivery service, operated a tank truck for delivering gasoline. The defendant's truck was 35 feet in length and had the words 'DANGER-GASOLINE' printed on it. One day, while on the way to a gasoline delivery, the defendant stopped at a bank. Although she saw an official sign that prohibited parking in that location, the defendant parked her truck directly in front of the bank. A statute in the jurisdiction prohibited parking any vehicle longer than 30 feet on a city street. Another statute prohibited parking any vehicle directly in front of a bank. The defendant was aware of both statutes.\n\nWhile the defendant was in the bank, a driver, who was driving down the street, lost control of her car and struck the defendant's truck. As a result, a large quantity of gasoline in the defendant's delivery tank exploded, injuring the driver. The plaintiff, a bank employee who was sitting at his desk inside the bank, was also injured in the explosion.",
        q: "The plaintiff asserts a claim against the defendant for his injuries. If the plaintiff's claim is successful, what is the most likely reason?",
        opts: [
            "The statute that prohibited parking vehicles longer than 30 feet on a city street was a traffic safety statute.",
            "The defendant was aware that a statute prohibited parking any vehicle in front of a bank.",
            "The reasonable person would not park a vehicle in violation of an official sign that prohibits parking.",
            "Transporting large quantities of gasoline is an abnormally dangerous activity."
        ],
        ans: 3,
        exp: "Rule: One who carries on an abnormally dangerous (ultra-hazardous) activity is strictly liable for harm resulting from the dangerous propensity of that activity, regardless of whether reasonable care was exercised. Storing and transporting bulk quantities of highly volatile and combustible gasoline through municipal thoroughfares is widely classified as an abnormally dangerous activity imposing strict liability for resulting explosions (Option D). Options A, B, and C are incorrect because parking length limits and no-parking zones are designed to manage curb space and traffic congestion, not to guard against explosive hazards, precluding statutory negligence per se."
    },
    {
        id: 21,
        topic: "Mixed",
        fp: "The defendant and his friend agreed to rob a bank and planned the robbery for several weeks. According to their plan, the defendant's car would be used as the getaway vehicle. The defendant was to drive to and from the robbery and wait in the car while his friend went into the bank to hold it up. While driving to the bank with his friend on the day the robbery was to take place, however, the defendant began to have second thoughts. After a brief conversation with his friend, the defendant stopped the car. Taking his car keys with him, he told his friend he wasn't going through with it and went into a store, where he telephoned the police and told them about the planned robbery. While the defendant was in the store, his friend left and robbed the bank himself. The information provided by the defendant's call led to the apprehension and conviction of his friend.",
        q: "If the defendant is subsequently arrested and prosecuted for conspiracy to commit bank robbery, should he be found guilty?",
        opts: [
            "No, because he removed his keys from the car when he got out to phone the police.",
            "No, because he notified his friend that he had changed his mind about going through with the plan.",
            "No, because the defendant's telephone call to the police led to the apprehension and conviction of his friend.",
            "Yes."
        ],
        ans: 3,
        exp: "Rule: Under the common law, the crime of conspiracy is complete the moment the agreement is formed (and, where required, an overt act in furtherance is committed). Once a conspiracy has been completed, a conspirator cannot avoid liability for the conspiracy itself by subsequent withdrawal or abandonment. While effective withdrawal and notifying the police may insulate a co-conspirator from liability for subsequent substantive crimes committed by partners, it does not erase the already completed conspiracy (Option D). Options A, B, and C are incorrect because timely renunciation or calling the police does not provide an affirmative defense to the completed crime of conspiracy."
    },
    {
        id: 22,
        topic: "Mixed",
        fp: "The defendant was the owner and operator of a hotel. Because electrical wiring in the hotel was beginning to deteriorate, the defendant hired a licensed electrician to repair it. The electrician was hired as an independent contractor. If the defendant had done any investigation regarding the electrician, he would have discovered many complaints and citations regarding poor work done by the electrician. While repairing the wiring, the electrician negligently connected the wiring in Room 201 to a dangerous high-voltage supply line instead of to a safe low-voltage supply line. Reasonable inspection by the defendant would not have disclosed the error. The following day, when the plaintiff registered at the hotel, the defendant assigned him to Room 201. That evening, while the plaintiff was attempting to adjust the electric heater in Room 201, he received a severe electric shock as a result of the fact that the room had been connected to a high-voltage supply line.",
        q: "If the plaintiff asserts a claim against the defendant for damage resulting from the electric shock, should the court find in the plaintiff's favor?",
        opts: [
            "No, because the defendant hired the electrician as an independent contractor.",
            "No, because reasonable inspection by the defendant would have failed to disclose the electrician's error.",
            "Yes, because the defendant failed to use adequate care in hiring the electrician.",
            "Yes, because the electrician's error made the wiring in room 201 ultra-hazardous."
        ],
        ans: 2,
        exp: "Rule: While a principal is generally not vicariously liable for the torts of an independent contractor, an employer is directly liable for its own negligence in hiring, selecting, or retaining an incompetent or unfit contractor. If a minimal background investigation would have revealed extensive citations and complaints of substandard, dangerous work, the hotel owner breached its duty of reasonable care in hiring, rendering the hotel owner liable for injuries directly resulting from the incompetent contractor's error (Option C). Option A is incorrect because independent contractor status does not shield an employer from liability for its own negligent hiring. Option B is incorrect because the absence of post-repair discovery does not negate the initial negligent hiring. Option D is incorrect because ordinary electrical wiring is not an abnormally dangerous activity."
    },
    {
        id: 23,
        topic: "Mixed",
        fp: "A newspaper published an article stating that the plaintiff had once been convicted of armed robbery. In fact, the plaintiff had never been convicted of any crime.",
        q: "If the plaintiff asserts a defamation claim against the newspaper, which one of the following additional facts or inferences, if it was the only one true, would be most likely to result in a judgment for the newspaper?",
        opts: [
            "Official government records indicating that the plaintiff had never been convicted of robbery were available for public inspection.",
            "Officials of the newspaper responsible for publishing the article reasonably believed the statement to be true.",
            "The plaintiff was a public figure.",
            "The plaintiff failed to prove that damage resulted from the statement."
        ],
        ans: 1,
        exp: "Rule: Under the constitutional standards of the First Amendment (Gertz v. Robert Welch, Inc.), a private figure plaintiff cannot recover against a media defendant for defamation without proving at least negligence (failure to exercise reasonable care regarding truth). If the newspaper officials reasonably believed the statement to be true after exercising reasonable care, the newspaper was not negligent, defeating defamation liability (Option B). Option A is incorrect because the existence of contrary public records tends to prove negligence rather than disprove it. Option C is incorrect because public figure status requires proving actual malice, but does not grant blanket immunity to the press. Option D is incorrect because false accusations of serious crime constitute libel/slander per se, where general damages are presumed."
    },
    {
        id: 24,
        topic: "Mixed",
        fp: "After negotiation, the buyer and the seller entered into a valid written contract for the sale to the buyer of the seller's realty. The contract provided for closing of title 'on or before June 15' because the buyer was moving into the area on June 15 and needed to move into the realty immediately. The contract also stated that 'time is of the essence.' On June 12, the seller informed the buyer that she would not be able to close until June 16. On June 16, the seller tendered a conveyance. Although the seller complied with the requirements of the contract in all other respects, the buyer refused to accept the conveyance on the ground that the date for performance had passed.",
        q: "If the seller asserts a claim against the buyer as a result of the buyer's refusal to accept the seller's conveyance on June 16, should the court find in the seller's favor?",
        opts: [
            "No, because circumstances contemplated by the parties at the time the contract was formed made it essential that the conveyance occur on or before June 15.",
            "No, because the contract contained the phrase 'time is of the essence.'",
            "Yes, because there was no indication that a conveyance after June 15 would cause damages to the buyer.",
            "Yes, because she made a reasonable effort to comply with the terms of the contract."
        ],
        ans: 0,
        exp: "Rule: While slight delays in performance are typically considered non-material breaches in real estate contracts allowing a reasonable time to cure, an express 'time is of the essence' clause coupled with surrounding circumstances known to both parties demonstrating that punctual performance was essential makes timely performance a strict condition precedent. Failure to close on the agreed date constitutes a total material breach discharging the buyer from the duty to perform (Option A). Option B is incorrect because the phrase alone is evidence, but the substantive legal basis is the mutual understanding that punctual performance was essential under the circumstances. Option C is incorrect because damages are irrelevant when an essential express condition fails. Option D is incorrect because contract duties are strict and good-faith effort does not cure failure of an express condition."
    },
    {
        id: 25,
        topic: "Mixed",
        fp: "The defendant was the manufacturer of a gas sold for commercial use. The defendant produced the gas at its factory and stored it in a large tank located behind the factory building. Although the defendant made reasonable inspections of its storage tank at reasonable intervals, a leak in the tank allowed some gas to escape. A wind carried the escaped gas to the home of the plaintiff, located a half-mile from the defendant's factory. The plaintiff died as a result of his exposure to the gas.",
        q: "In a strict liability claim against the defendant for damages resulting from the plaintiff's exposure to gas, which of the following must the plaintiff's personal representative prove to prevail?",
        opts: [
            "The tank in which the defendant stored the gas was defective.",
            "The gas was defectively designed.",
            "The gas was defectively manufactured.",
            "The gas is extremely deadly."
        ],
        ans: 3,
        exp: "Rule: Under the doctrine of strict liability for abnormally dangerous (ultra-hazardous) activities (Rylands v. Fletcher; Restatement (Second) of Torts §§ 519–520), a defendant is strictly liable for harm resulting from an activity that creates a foreseeable, highly significant risk of physical harm even when reasonable care is exercised, and is not a matter of common usage. The bulk storage of lethal or toxic gas requires proof of its extremely deadly and hazardous nature to qualify as an abnormally dangerous activity (Option D). Options A, B, and C are incorrect because the plaintiff was injured by bulk industrial storage on real property, not by a commercial product placed into the stream of commerce under products liability doctrines."
    },
    {
        id: 26,
        topic: "Mixed",
        fp: "The defendant kept a pet cougar in a yard that was surrounded by a wire chain-link fence. The plaintiff, who lived in the vicinity, frequently walked on the public sidewalk adjacent to the defendant's yard. One day, while the plaintiff was standing on the public sidewalk looking at the cougar through the defendant's fence, the cougar sprang toward the plaintiff. Because the fence was badly deteriorated, it collapsed under the cougar's weight and fell on the plaintiff, inflicting serious injuries. The defendant knew the fence was in need of repair.",
        q: "If the plaintiff asserts a negligence claim against the defendant as a result of her injuries, should the court find for the plaintiff?",
        opts: [
            "Yes, because the keeping of a wild animal is prima facie negligent.",
            "Yes, because a reasonable person in the defendant's position would have repaired the fence.",
            "Yes, because the defendant knew that the fence was in need of repair.",
            "No, because the plaintiff assumed the risk by standing by the fence and looking at the cougar."
        ],
        ans: 1,
        exp: "Rule: Under general negligence principles, a plaintiff must establish that the defendant owed a duty of care, that the defendant breached that duty by failing to act as a reasonably prudent person would under similar circumstances, and that this breach caused the plaintiff's damages. Here, the plaintiff asserted a claim based strictly on negligence rather than strict liability for wild animals. The standard for breach in negligence is objective: whether a reasonable person in the defendant's position would have repaired the deteriorated fence to prevent it from collapsing onto pedestrians on a public sidewalk (Option B). Option A is incorrect because keeping a wild animal gives rise to strict liability, but does not make the act prima facie negligent as a matter of law. Option C is incorrect because subjective knowledge alone is mere evidence; negligence requires showing that the failure to repair fell below the objective reasonable person standard. Option D is incorrect because standing on a public sidewalk observing an animal behind a fence is not a voluntary assumption of the risk of a collapsing fence."
    },
    {
        id: 27,
        topic: "Mixed",
        fp: "On March 1, a farmer entered into a written contract with the worker. By its terms, the worker agreed to plow the farmer's fields by April 1, using the worker's own tractor. In return, the farmer promised to pay $2,000 upon completion of the work. On March 25, while the worker was plowing the farmer's field, her tractor broke down. The worker informed the farmer that because the tractor needed extensive repairs, it would be impossible to finish the job by April 1 unless she rented another tractor. The worker said that she could rent one for $600, but she would not do so unless the farmer agreed to add the rental charge to the worker's fee for preparing the field. The farmer agreed without complaint, afraid that the value of his crop would be reduced if the field was not plowed in time. The worker returned to work after renting a tractor for $600. After the worker finished plowing the farmer's field, however, the farmer refused to pay her any more than $2,000.",
        q: "If the worker asserts a claim against the farmer on account of the farmer's promise to pay an additional $600 for the rental of a tractor, which of the following would be the farmer's most effective argument in defense?",
        opts: [
            "The farmer's promise to pay for the tractor rental was not in writing.",
            "The farmer's promise to pay for the tractor rental was unsupported by consideration.",
            "The farmer's promise to pay for the tractor rental was induced by economic duress.",
            "The farmer detrimentally relied on the worker's original promise to complete plowing of the field by April 1 at a price of $2,000."
        ],
        ans: 1,
        exp: "Rule: Under the common law pre-existing duty rule, doing or promising to do what one is already legally bound to do does not constitute valid consideration to support a modification. The contract was for services (governed by the common law, not the UCC). The worker was already obligated under the March 1 agreement to plow the field by April 1 for $2,000. Renting a substitute tractor when her own machine broke down was simply a means of fulfilling her pre-existing duty. Therefore, the farmer's promise to pay an extra $600 lacked new, independent consideration (Option B). Option A is incorrect because service contracts that can be performed within one year are not within the Statute of Frauds. Option C is incorrect because economic duress requires wrongful or unlawful coercive conduct that leaves the victim with no reasonable alternative; ordinary contract disputes or equipment breakdowns rarely rise to actionable duress, making lack of consideration far stronger. Option D is incorrect because promissory estoppel / reliance is used by a promisee seeking to enforce a promise, not as a defense by a promisor refusing to pay."
    },
    {
        id: 28,
        topic: "Mixed",
        fp: "A man went to a car dealer. The dealer showed him a car that he said was 'brand new.' The man checked the odometer, which showed it had been driven 10 miles, and checked the interior and engine, which looked new. After the man bought the car for $2,000 less than the suggested list price, he discovered the car was actually a used car that had been completely submerged in a flood. On further investigation, he learned the car dealer had rolled back the odometer from 10,000 miles and had covered up the flood damage with paint.",
        q: "What crime, if any, can the car dealer be charged with?",
        opts: [
            "Larceny by trick.",
            "False pretenses.",
            "Embezzlement.",
            "No crime."
        ],
        ans: 1,
        exp: "Rule: The crime of obtaining property by false pretenses requires: (1) obtaining title to the property of another, (2) by an intentional or knowing false statement of past or existing material fact, (3) with the intent to defraud. Here, the dealer knowingly misrepresented an existing material fact (that the car was brand new, concealing flood damage and rolling back the odometer) to induce the buyer to part with title to the purchase money. Because title to the money passed to the dealer, the crime is false pretenses (Option B). Option A is incorrect because larceny by trick occurs when the defendant obtains mere possession/custody rather than title through fraud. Option C is incorrect because embezzlement requires conversion of property by someone who is already in lawful possession. Option D is incorrect because the fraudulent misrepresentation used to acquire title to the buyer's money is a criminal theft offense."
    },
    {
        id: 29,
        topic: "Mixed",
        fp: "A lumber supplier entered into a contract with a new home builder. The contract stated that the builder would purchase all the wood required by the builder for new homes he was building in 2019, but that in no event would the amount be less than 20,000 board-feet of wood. In making the agreement, neither party contemplated a decline in new home starts. After the agreement, new home starts fell dramatically. As a result, the builder informed the supplier he would not be ordering any wood in 2019. The supplier sued the builder for damages. At trial, the builder tried to testify that in the home-building industry it was generally understood that minimum requirements set forth in contracts for the supply of wood were of no effect when new home starts fell dramatically. The supplier objected.",
        q: "Should the builder's testimony be admitted?",
        opts: [
            "Yes, because evidence of a regularly observed business practice may be offered to explain the terms of a written agreement.",
            "No, because the written agreement was intended by the parties to be a final expression of their agreement.",
            "No, because the parties did not contemplate a decline in new home starts.",
            "No, because the fact that the parties specified a minimum requirement of 20,000 board-feet shows that they did not intend to be bound by any preexisting industry standards."
        ],
        ans: 0,
        exp: "Rule: Under UCC § 1-303 (and former § 1-205) and § 2-202, written contractual terms may be explained or supplemented by course of dealing, usage of trade, or course of performance, even if the writing is a fully integrated agreement. Usage of trade encompasses any practice or method of dealing having such regularity of observance in a place, vocation, or trade as to justify an expectation that it will be observed with respect to the transaction in question. The builder is offering testimony of an established trade usage to explain the application of minimum requirement terms during economic downturns (Option A). Option B is incorrect because trade usage is admissible even against a final integrated writing under the UCC parol evidence rule. Option C is incorrect because lack of contemplation does not preclude the application of customary trade background understandings. Option D is incorrect because trade usage can explain or qualify express terms unless utterly impossible to reconcile."
    },
    {
        id: 30,
        topic: "Mixed",
        fp: "A local newspaper published an editorial claiming that the majority of firefighters at the local fire department were dangerously out of shape and had recently failed their physicals. Following publication, several firefighters sued the newspaper for defamation. All parties agree that the newspaper lacked actual malice in making the statement and that this is the only defense raised by the newspaper.",
        q: "Which of the following arguments would be most likely to result in a judgment for the newspaper?",
        opts: [
            "There is no such thing as a false idea.",
            "The plaintiffs were in a position of apparent control over public affairs.",
            "The editorial and resulting lawsuit made the public familiar with the plaintiffs.",
            "The plaintiffs were public employees."
        ],
        ans: 1,
        exp: "Rule: Under the First Amendment (New York Times Co. v. Sullivan; Rosenblatt v. Baer), a public official cannot recover for defamation without proving by clear and convincing evidence that the statement was made with 'actual malice' (knowledge of falsity or reckless disregard of the truth). The Supreme Court has defined a 'public official' as a government employee whose position in government has such apparent importance that the public has an independent interest in the qualifications and performance of the person who holds it, beyond the general public interest in the qualifications and performance of all government employees—namely, someone who appears to have substantial responsibility for or control over the conduct of governmental affairs. If the firefighters can be classified as public officials on the basis that they exercise apparent control/responsibility over public safety affairs, the newspaper's admitted lack of actual malice shields it from liability (Option B). Option A is incorrect because claiming that firefighters 'failed their physicals' is an assertion of fact, not an idea or pure opinion. Option C is incorrect because a defendant cannot bootstrap a plaintiff into public figure status through its own defamatory publication. Option D is incorrect because mere public employment alone does not automatically make an employee a public official under First Amendment defamation rules."
    },
    {
        id: 31,
        topic: "Mixed",
        fp: "The plaintiff, a manufacturer of police equipment, obtained a patent for a bulletproof vest made entirely of recycled aluminum cans. On April 1, a police department entered into a written contract with the plaintiff providing for the purchase and sale of 30 of the plaintiff's bulletproof vests per month for the next year at a specified price. For the following three months, both parties performed as required by the agreement. On July 5, soon after the third delivery, the plaintiff's only factory burned completely to the ground without any fault on the part of the plaintiff. On July 10, officials of the police department wrote to the plaintiff, asking whether the plaintiff would continue to deliver as agreed. When the plaintiff failed to respond within a reasonable time, the police department entered into an agreement with another company for the purchase of 30 bulletproof vests per month. After the police department contracted with another company for the purchase of bulletproof vests, the plaintiff delivered 30 bulletproof vests to the police department, but the police department refused to accept them.",
        q: "If the plaintiff asserts a claim against the police department for breach of contract, which of the following would be the police department's most effective argument in defense against that claim?",
        opts: [
            "The destruction of the plaintiff's factory reasonably appeared to frustrate the purpose of the contract between the police department and the plaintiff.",
            "The plaintiff's failure to respond to the police department's letter of July 10 resulted in a prospective inability to perform.",
            "The plaintiff's contract with the police department was divisible.",
            "The police department's contract to purchase bulletproof vests from another company was a repudiation of its contract with the plaintiff."
        ],
        ans: 1,
        exp: "Rule: Under UCC § 2-609, when reasonable grounds for insecurity arise with respect to the performance of either party, the other party may in writing demand adequate assurance of due performance. A failure to provide such assurance within a reasonable time not exceeding 30 days operates as a repudiation of the contract. The destruction of the manufacturer's sole production facility gave the police department reasonable grounds for insecurity. The manufacturer's failure to respond to the written demand within a reasonable time amounted to a repudiation / prospective inability to perform, discharging the department and entitling it to secure cover elsewhere (Option B). Option A is incorrect because frustration of purpose applies when the buyer's principal purpose in contracting is destroyed, not when the seller experiences a supply/manufacturing disruption. Option C is incorrect because whether an installment contract is divisible does not excuse a failure to provide adequate assurances following catastrophic disruption. Option D is incorrect because the police department's cover agreement occurred after the plaintiff's statutory repudiation, meaning the department was exercising a valid remedy rather than committing a wrongful repudiation."
    },
    {
        id: 32,
        topic: "Mixed",
        fp: "A group of teenagers hired a stretch limousine for their prom. While driving to the prom, the limousine driver saw a dog crossing the road in front of the vehicle. He swerved to avoid it and ended up crashing into a tree. Several of the teenagers were injured. A state statute required that all limousine drivers carry at least a $100,000 minimum accident liability policy. The limousine driver was uninsured.",
        q: "If the limousine driver is found liable for the teenagers' injuries, what is the likely reason?",
        opts: [
            "Under the doctrine of res ipsa loquitur, because an accident like this would not normally occur without negligence.",
            "Under the doctrine of negligence per se, because the driver violated the state insurance statute.",
            "Because his conduct in swerving to avoid the dog was unreasonable.",
            "Because he owed a special duty to the teenagers in his care."
        ],
        ans: 2,
        exp: "Rule: The fundamental basis of liability in negligence is that the defendant breached the duty of care by acting unreasonably under the circumstances. If the limousine driver is held liable, it must be because swerving violently into a fixed object (a tree) to avoid a small animal rather than braking or maintaining course constituted unreasonable conduct under the emergency doctrine (Option C). Option A is incorrect because res ipsa loquitur applies when the exact cause of the accident is unknown; here, the driver's affirmative act of swerving to avoid the dog was fully known and witnessed. Option B is incorrect because negligence per se requires that the statutory violation be the cause-in-fact of the accident; operating without insurance does not cause a vehicle to crash. Option D is incorrect because, while common carriers historically owed a higher duty of care to passengers, liability still requires unreasonable or negligent conduct under the circumstances."
    },
    {
        id: 33,
        topic: "Mixed",
        fp: "At the defendant's trial on criminal charges, undisputed evidence established that the defendant and his friend had planned to take a certain coat from the victim's shop by threatening the victim with a pistol carried by the friend; that when they did so, the victim began shooting at them; and that the friend shot back with his pistol, intentionally killing the victim.\n\nTestifying on behalf of the prosecution, the friend stated that the defendant knew that the friend's pistol would be loaded. He also stated that the victim had handed the defendant the coat; that the friend had returned his own gun to his pocket; and that he and the defendant were on their way out of the victim's shop when the victim began shooting at them.\n\nThe defendant testified that the coat in question had previously been stolen from her by the victim, and that she and the friend were trying to retrieve it.\n\nStatutes in the jurisdiction define first-degree murder as the intentional unlawful killing of a human being, and second-degree murder as the unintentional killing of a human being by the defendant or an accomplice during the course of a burglary, robbery, rape, kidnapping, or arson committed by the defendant.\n\nThe jury believes the testimony of the defendant but does not believe the testimony of the friend.",
        q: "Which of the following would be the defendant's most effective argument in defense against a charge of second-degree murder?",
        opts: [
            "It was unforeseeable that the victim would begin shooting.",
            "The defendant did not know that the friend's pistol would be loaded.",
            "The victim's death did not occur during the course of one of the crimes specified in the applicable statute.",
            "The statute was not intended to impose criminal liability on one person for the acts of another."
        ],
        ans: 2,
        exp: "Rule: Under the statutory felony-murder rule specified, second-degree murder requires an unintentional killing committed during the course of an enumerated felony: burglary, robbery, rape, kidnapping, or arson. Robbery requires the trespassory taking of personal property belonging to another. Because the jury believed the defendant's testimony, the coat had previously been stolen from her, giving her a bona fide claim of right to her own property. A person who recaptures their own property lacks the intent to steal necessary for larceny, thereby defeating the underlying robbery charge. Because no robbery or other enumerated felony was committed, the killing did not occur during the course of an enumerated felony under the statute (Option C). Options A and B are incorrect because felony murder is a strict liability homicide doctrine that does not depend on foreseeability of lethal resistance or knowledge of loaded firearms. Option D is incorrect because the statute expressly encompasses killings committed by an accomplice."
    },
    {
        id: 34,
        topic: "Mixed",
        fp: "One night, the defendant looked out his window and saw a robber taking something from his garage. The defendant went outside with a pistol and saw that the robber was already backing down the defendant's driveway in his getaway car. The defendant yelled, 'Stop or I'll shoot you right through the windshield!' The robber stopped and started to get out of the car with a large axe in his hand. Before the robber could get to his feet, the defendant shot the robber in the head, killing him instantly. The defendant was charged with manslaughter. At trial, the defendant claimed he acted in self-defense.",
        q: "If the defendant is found guilty of manslaughter, what is the likely reason?",
        opts: [
            "The harm being defended against was not reasonably imminent.",
            "The defendant used more force than necessary.",
            "The robber had already withdrawn.",
            "The defendant provoked the robber."
        ],
        ans: 3,
        exp: "Rule: An initial aggressor or provoker forfeits the right to use deadly force in self-defense. One who threatens unlawful deadly force ('Stop or I'll shoot you right through the windshield!') without privilege becomes the initial aggressor in the confrontation. Because the defendant used a lethal threat to prevent the robber's escape after the theft had concluded (deadly force is never privileged solely to defend property or prevent the retreat of a non-violent thief), the defendant unlawfully provoked the confrontation, forfeiting the privilege of self-defense (Option D). Option A is incorrect because an assailant emerging with a large axe poses an imminent threat of deadly harm. Option B is incorrect because a firearm is proportional to an axe attack if the right to self-defense were available. Option C is incorrect because the robber stopped and emerged with an axe rather than continuing to withdraw."
    },
    {
        id: 35,
        topic: "Mixed",
        fp: "A boy decided to play a prank on his babysitter. He took one of his play swords and swung it at his babysitter's head, acting like he was going to hit her (although he had no intention of doing so). The babysitter raised her arms in defense. At the same moment, the boy's little sister walked out of the bathroom, saw her brother swinging the sword, and ducked, thinking she was about to be hit by the sword. Due to a manufacturing defect in the sword, the blade flew off and struck the babysitter in the head.",
        q: "Which statement is most correct?",
        opts: [
            "The boy could not be held liable for battery of the babysitter because he did not have the necessary intent.",
            "The boy's sister could claim assault under the doctrine of transferred intent.",
            "Since the boy only intended to frighten the babysitter, he did not have the necessary intent for assault.",
            "Because the boy did not bear malice or hostility toward the babysitter, he could not be held liable for battery."
        ],
        ans: 1,
        exp: "Rule: The doctrine of transferred intent applies across the intentional torts of assault, battery, false imprisonment, trespass to land, and trespass to chattels, as well as between different victims. Where an actor intends to commit an assault (intend to cause apprehension of imminent harmful contact in the babysitter) and an unintended third party (the sister) is placed in reasonable apprehension of imminent harmful contact, the intent transfers to the sister, supporting an assault claim by the sister (Option B). Option A is incorrect because intending an assault satisfies the intent requirement for battery when bodily contact ensues through transferred intent between torts. Option C is incorrect because the intent to cause apprehension of contact is the definition of assault intent. Option D is incorrect because hostile motive or malice is not an element of battery."
    },
    {
        id: 36,
        topic: "Mixed",
        fp: "On March 1, the buyer, a well-known collector of antique automobiles, mailed to a newspaper an advertisement that read, in part: 'I will pay $100 for information leading to purchase of an antique car.' On March 2, before the advertisement appeared in the newspaper and without knowing about it, the seller phoned the buyer collect and offered to sell him an antique car. The advertisement was published on March 3. On March 3, a man saw the advertisement and remembered meeting someone who owned an antique car. After calling a few friends, the man obtained the owner's name and address and mailed it to the buyer with a request for the $100 reward. On March 4, the buyer looked at the seller's antique car and purchased it. Later that day, the buyer mailed to the newspaper for publication a second advertisement that in part read: 'No reward for antique car. I hereby withdraw my previous request for information about an antique car.' The second advertisement did not appear in the newspaper until March 6. On March 5, the buyer received the man's letter, but discarded it because he had purchased the seller's antique car.",
        q: "If the man asserts a claim against the buyer for $100, should the court find in the man's favor?",
        opts: [
            "No, because the buyer mailed the second advertisement before receiving the man's letter.",
            "No, because the man's letter did not lead to the purchase of an antique car.",
            "Yes, because he mailed the letter to the buyer before the buyer purchased an antique car.",
            "Yes, because the buyer received the man's letter before the second advertisement was published."
        ],
        ans: 1,
        exp: "Rule: A unilateral contract offer requesting a specific act or result can be accepted only by full performance of the requested terms. The offer explicitly promised to pay $100 for information 'leading to purchase of an antique car.' Because the buyer had already been contacted by the seller on March 2 and purchased that seller's vehicle based on the seller's independent call, the man's letter received on March 5 did not lead to the purchase of the vehicle. Performance of the bargained-for condition was not satisfied (Option B). Option A is incorrect because revocation of a public offer by publication requires comparable publicity, which was not accomplished until March 6. Options C and D are incorrect because neither dispatch nor receipt of the letter constitutes acceptance when the substantive condition (furnishing information that actually leads to a purchase) never materialized."
    },
    {
        id: 37,
        topic: "Mixed",
        fp: "A man who suffered from severe skin allergies purchased a topical cream online. A statute required the drug manufacturer to insert into the cream's packaging a warning of its potential adverse side effects. The manufacturer failed to insert an appropriate warning of a particular side effect, skin discoloration, into the cream's packaging. The man used the cream for several months until his skin began to turn a dark blue color. Even though the man continued to use the cream, the man sued. At trial, the man testified that neither he nor anyone in his household ever read warnings that accompanied drugs.",
        q: "How should the court rule?",
        opts: [
            "In favor of the manufacturer, because no one in the man's household read drug warnings.",
            "In favor of the manufacturer, because the man continued to use the cream.",
            "In favor of the man, because the manufacturer violated the statute by failing to include the warning.",
            "In favor of the man, because the type of harm caused could have been avoided by an adequate warning."
        ],
        ans: 0,
        exp: "Rule: In a products liability action based on failure to warn (under both negligence and strict liability), the plaintiff must establish causation: that the absence of the warning was the cause-in-fact of the injury. While courts typically apply a rebuttable presumption that an adequate warning would have been read and heeded, this presumption is rebutted where the plaintiff affirmatively admits that he never reads warnings on medications. Because the plaintiff would not have read the warning even if properly included, the omission was not a cause-in-fact of his injury (Option A). Option B is incorrect because continuing to use the cream after the injury occurred speaks to mitigation of damages rather than initial liability. Option C is incorrect because negligence per se establishes breach of duty, but does not dispense with the requirement of proving causation-in-fact. Option D is incorrect because a warning cannot avoid harm if the consumer admits he never reads package warnings."
    },
    {
        id: 38,
        topic: "Mixed",
        fp: "A man was at the beach when he saw a small dog being washed out to sea. He jumped into the ocean and rescued the dog. As soon as the man and the dog were back on the beach, the dog's owner ran up to the man and said, 'That's my prize show dog! I promise to pay you $1,000 for rescuing him!' The man accepted. In celebration, the man bought himself a new motorcycle on credit based on his expected reward money. Several months passed, and the man called the dog's owner to ask when he might be paid so he could pay off the motorcycle. The dog owner refused to pay the $1,000 he had promised, claiming it was unsupported by any consideration.",
        q: "Which of the following would be the man's most effective argument in support of his claim?",
        opts: [
            "The dog owner's promise was given in exchange for the man's rescue of his dog.",
            "The dog owner was morally obligated to compensate the man for rescuing his dog.",
            "Allowing the dog owner to avoid compensating the man for rescuing the dog would unjustly enrich the dog owner.",
            "The man detrimentally relied on the dog owner's promise by buying the motorcycle."
        ],
        ans: 1,
        exp: "Rule: Under the traditional common law rule, past consideration is no consideration because the detriment was not bargained for in exchange for the promise. However, under the material benefit rule / moral obligation doctrine (Restatement (Second) of Contracts § 86; Webb v. McGowin), a promise made in recognition of a substantial benefit previously received by the promisor from the promisee is binding to the extent necessary to prevent injustice. Asserting that the owner incurred a moral obligation based on the receipt of a material benefit is the plaintiff's strongest available legal argument (Option B). Option A is incorrect because the rescue was completed before the promise was made, precluding a bargained-for exchange. Option C is incorrect because the man acted as a volunteer without an expectation of payment at the time of rescue, making quasi-contract restitution difficult to establish independently. Option D is incorrect because buying a motorcycle on credit was not an act that the dog owner should reasonably have expected to induce by promising a rescue reward."
    },
    {
        id: 39,
        topic: "Mixed",
        fp: "At the defendant's trial for murder, the prosecution proved that the defendant was driving while intoxicated when his car struck another car, killing all its occupants. The defendant appealed his conviction for voluntary manslaughter.",
        q: "Which of the cases below is most applicable as precedent?",
        opts: [
            "Believing that the victim was attacking her, the defendant swung a tennis racket at the victim, hoping to frighten the victim away but not meaning to strike the victim with it. The tennis racket struck the victim in the head, causing his death. At the defendant's trial, over the defendant's objection, the judge instructed the jury to find the defendant guilty of involuntary manslaughter if the force used by the defendant was excessive. The defendant's conviction for involuntary manslaughter was affirmed.",
            "The defendant's wife was admitted to the intensive care unit of a hospital following an automobile accident. While visiting her, the defendant overheard doctors saying that there was no hope of saving the life of a certain patient who would be in intense pain and paralyzed for as long as she lived. Mistakenly believing that they were talking about his wife, the defendant subsequently smothered her to death with a pillow while she was asleep in the hospital bed. The defendant was convicted of murder after the court refused to charge the jury that if the defendant believed that his wife was hopelessly ill and in intense pain, they could find him guilty of voluntary manslaughter. The defendant's conviction for murder was reversed.",
            "While the defendant was robbing a tavern, the bartender attempted to grab the defendant's gun. During the struggle, the gun accidentally went off, seriously injuring the bartender. At the defendant's trial for attempted murder, the court instructed the jury to return a verdict of not guilty if they found that the defendant did not intend to cause the bartender's death. The defendant's acquittal was affirmed.",
            "After the defendant quarreled with her lover, she fired a gun at him while he was with his wife. The bullet missed the defendant's lover but struck and killed his wife. At the defendant's trial, it was established that she fired with the intention of frightening both her lover and his wife, but that she did not mean to strike either of them. The defendant was convicted of murder after the court refused to charge the jury on involuntary manslaughter. The conviction was affirmed."
        ],
        ans: 3,
        exp: "Rule: Voluntary manslaughter requires an intentional homicide committed in the sudden heat of passion resulting from adequate provocation, or imperfect self-defense. Reckless homicides committed without intent to kill—such as drunk driving collisions—fall under involuntary manslaughter or depraved-heart second-degree murder. In Case D, the defendant acted with extreme recklessness without intending to kill; the court's refusal to instruct on voluntary manslaughter and the affirmance of murder established that an absence of intent to kill precludes voluntary manslaughter, making it the most directly applicable precedent on the mens rea boundaries of voluntary manslaughter (Option D). Option A addresses imperfect self-defense and involuntary manslaughter. Option B addresses mercy killings and adequate provocation. Option C addresses specific intent in attempted murder."
    },
    {
        id: 40,
        topic: "Mixed",
        fp: "A buyer signed a sales contract to buy a new house from the seller. The contract stated that it was 'subject to and conditional upon the buyer obtaining a 30-year mortgage from a bank or other lending institution in the amount of $200,000 at an interest rate of less than 2 percent.' The buyer went to several banks in the area, but no bank would lend him the money at an interest rate of less than 2 percent. The seller offered to set up a private financing plan between the two parties that would bring the interest rate down to less than 2 percent for the buyer over the course of the loan. The buyer refused to close the deal. The seller argued that with the private financing in place, the net result of the loan was the same and the contract should be enforced.",
        q: "What is the result of the buyer's failure to obtain an interest rate of less than 2 percent?",
        opts: [
            "The buyer is discharged from his duty to close the sale.",
            "Since the net result of the private financing is the same, the buyer is required to close the sale.",
            "The seller can sue the buyer for specific performance to complete the sale.",
            "The seller can sue the buyer for any damages he suffered under the contract due to the buyer's failure to obtain a loan at less than 2 percent interest."
        ],
        ans: 0,
        exp: "Rule: Express conditions in a contract must be strictly complied with. Where a purchase contract contains a financing contingency specifying that the buyer's obligation to close is conditional upon obtaining a mortgage from a bank or lending institution at a specified rate, the failure of that condition precedent—despite the buyer's good-faith efforts—excuses the buyer's duty to perform and discharges the contract. The buyer is not required to accept private seller financing or an alternative arrangement not specified in the contract (Option A). Option B is incorrect because strict compliance applies to express conditions; substantial equivalence cannot force a party to accept an unbargained-for financing source. Options C and D are incorrect because the non-occurrence of an express condition precedent is not a breach and creates no liability for damages or specific performance."
    },
    {
        id: 41,
        topic: "Mixed",
        fp: "The company was a major corporation with shares of stock traded on several stock exchanges. When rumors began to circulate that the company was experiencing financial difficulties, the price of the company stock fell drastically. The reporter was a journalist who wrote a financial news column for a daily newspaper. One day, while the reporter was discussing the company rumor with her friend, the friend said, 'I wouldn't be surprised if the whole thing was some kind of stunt to manipulate the price of stock.' The reporter was aware that the friend knew nothing about the stock market or about the company. The following day, based solely upon what she had heard from the friend, the reporter made the following statement in her column: 'Don't be fooled by rumors that the company is in trouble. Insiders say that the whole thing is a stunt to manipulate the price of the stock. I say the company is still a good investment.' After reading the column, the plaintiff invested in the company's stock in reliance on the reporter's statement. Two days later, the company filed a petition in bankruptcy, and its stock became worthless.",
        q: "If the plaintiff asserts a claim against the reporter for misrepresentation, which one of the following facts or inferences, if it were the only one true, would be most likely to result in a judgment for the reporter?",
        opts: [
            "At the time the plaintiff purchased the company's stock, the company's financial condition was a matter of public record.",
            "The reporter's statement 'I think the company is a good investment' was an expression of opinion.",
            "The plaintiff did not purchase the edition of the newspaper that contained the reporter's statement, but read it after finding it on a bus.",
            "The reporter did not know that any person would rely on her statement."
        ],
        ans: 3,
        exp: "Rule: An action for intentional misrepresentation (fraud/deceit) requires: (1) a misrepresentation of a material fact, (2) scienter, (3) intent to induce reliance by the plaintiff or a class of persons to which the plaintiff belongs, (4) justifiable reliance, and (5) damages. If the reporter did not know or intend that anyone would rely on her statement in making stock investments, the essential element of intent to induce reliance is negated, defeating the fraud claim (Option D). Option A is incorrect because a plaintiff's failure to investigate public records is not a defense to intentional fraudulent misrepresentation. Option B is incorrect because stating that 'Insiders say' is a provable representation of existing fact, not mere opinion. Option C is incorrect because secondary acquisition of a public newspaper does not defeat the intended audience reach if the publication was intended to induce investor reliance generally."
    },
    {
        id: 42,
        topic: "Mixed",
        fp: "The defendant and the victim, who resided in the city, purchased rifles. Because neither of them had ever fired a rifle before, they decided to take them to the municipal dump to try them out. Although both believed that the dump was outside city limits, it was actually within city limits. At the dump, the defendant shot his rifle in the victim's direction, aiming slightly to the right to miss the victim. The bullet struck a rock and ricocheted, hitting the victim in the back and causing his death. A city ordinance provides that '[a]ny person who shall discharge a firearm knowing that he or she is within the municipal limits shall be guilty of a misdemeanor punishable by a maximum fine of $100.'",
        q: "Which of the following is the most serious crime of which the defendant may properly be convicted?",
        opts: [
            "Murder.",
            "Voluntary manslaughter.",
            "Attempted murder.",
            "Discharging a firearm within the municipal limits."
        ],
        ans: 0,
        exp: "Rule: Common law murder is the unlawful killing of a human being with malice aforethought. Malice is established by depraved-heart murder: conduct that exhibits a reckless and wanton indifference to an unjustifiably high risk to human life. Firing a high-powered rifle directly in the immediate direction of another person while having no prior experience handling firearms constitutes depraved-heart recklessness, supporting a conviction for second-degree murder (Option A). Option B is incorrect because voluntary manslaughter requires an intentional killing in the heat of passion or under imperfect self-defense, neither of which applies. Option C is incorrect because attempt requires a specific intent to kill, which the defendant lacked. Option D is incorrect because the defendant honestly believed they were outside city limits, negating the ordinance's express knowledge requirement."
    },
    {
        id: 43,
        topic: "Mixed",
        fp: "An author sent a text to her friend that said, 'Because you helped me get a $1 million advance for my new book, I'm going to give you my favorite Picasso drawing from my collection! I couldn't have done it without you!' The friend replied, 'Thank you so much! I'm going to give you one of my paintings of flowers that I did. I hope you like it!' The next day, the friend showed up with her painting at the author's house. The author thought the friend's painting was terrible and said, 'On second thought, I'm keeping the Picasso.' The friend sued the author for the Picasso.",
        q: "Should the court rule in the friend's favor?",
        opts: [
            "Yes, because the friend delivered her painting to the author.",
            "Yes, because the author received a $1 million advance due to the friend's help.",
            "No, because the author did not like the friend's painting.",
            "No, because there was no consideration."
        ],
        ans: 3,
        exp: "Rule: Enforceability of a contract requires bargained-for consideration. A promise made in recognition of past assistance is past consideration, which does not satisfy the requirement of an exchange. Furthermore, mutual gratuitous promises to make gifts (an exchange of gifts without bargaining) do not constitute consideration. The author promised the drawing out of gratitude for past help, and the friend offered a painting as a reciprocal gift; neither promise was bargained for as the price of the other. The promise was unenforceable for lack of consideration (Option D). Option A is incorrect because delivering an unbargained-for gift does not convert a gratuitous promise into a binding contract. Option B is incorrect because past services do not supply consideration for a subsequent promise. Option C is incorrect because subjective artistic approval is irrelevant where no underlying contract was formed."
    },
    {
        id: 44,
        topic: "Mixed",
        fp: "A woman sold her financial services business to a larger company for $50 million in cash. Pursuant to the sales contract, the company agreed to employ the woman for one year at $1 million per year. Three months after the sale, the company fired the woman without justification. The woman was angry. Although there were comparable jobs in her field available in the area, the woman decided to work as a bartender for a year to blow off some steam and then get back into financial services. At the end of the year, the woman had made $45,000 as a bartender. She then sued the company for the $750,000 it owed her from the original company sales contract.",
        q: "Should the court rule in the woman's favor?",
        opts: [
            "No, because the woman did not seek comparable employment.",
            "No, because the woman's employment was only a minor breach of the sales contract.",
            "Yes, because the woman was fired without justification.",
            "Yes, because the woman's bartending job paid much less than the salary promised by the company."
        ],
        ans: 0,
        exp: "Rule: In an action for breach of an employment contract, the employee is entitled to the agreed salary minus amounts earned or amounts that could have been earned with reasonable diligence in comparable or substantially similar employment. The doctrine of avoidable consequences (duty to mitigate damages) bars recovery for salary losses that the employee could have avoided by accepting available comparable employment in the same field and locality. Because the employee made no effort to obtain comparable financial services positions that were readily available, her recovery for the remaining salary is barred by failure to mitigate (Option A). Option B is incorrect because wrongful termination of an employment provision is an actionable material breach of that employment promise. Options C and D are incorrect because unjustified firing does not eliminate the affirmative requirement to mitigate damages through available comparable employment."
    },
    {
        id: 45,
        topic: "Mixed",
        fp: "A restaurant contracted to buy 20 kegs of beer at the beer distributor's listed price of $50. Due to a mistake in the beer distributor's warehouse, the distributor sent the restaurant only 12 kegs of beer. Because the restaurant knew it would be busy for football weekend, it accepted the 12 kegs and notified the distributor of the error. The distributor looked for more beer in its warehouse, but it realized it was sold out. Consequently, the distributor did not ship any more beer to the restaurant. The restaurant ended up running out of beer on football weekend, which caused a riot in the restaurant. The restaurant owner was so angry that he did not send payment to the distributor.",
        q: "May the restaurant owner refuse to pay the distributor?",
        opts: [
            "Yes, because the distributor failed to deliver 20 kegs of beer as contracted.",
            "Yes, because the distributor's mistake led to a riot in the restaurant.",
            "No, because the restaurant accepted 12 kegs of beer.",
            "No, because the distributor could not fulfill the original order."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-607(1), a buyer must pay at the contract rate for any goods accepted. While a buyer facing a non-conforming tender may reject the whole under UCC § 2-601, the buyer may also accept any commercial unit and reject the rest. Once goods are accepted, the buyer is legally obligated to pay the contract price for the units accepted, though the buyer retains a right to seek an offset or damages under UCC § 2-714 for the breach (Option C). Options A and B are incorrect because the restaurant owner cannot refuse to pay for accepted goods entirely; acceptance requires payment of the purchase price for the 12 kegs, subject to a counterclaim/deduction for breach damages. Option D is incorrect because the distributor's inventory shortage does not determine the buyer's statutory obligation to pay for accepted units."
    },
    {
        id: 46,
        topic: "Mixed",
        fp: "A man was at a crowded rock concert when he saw a $20 bill fall out of a woman's pocket. The man grabbed the $20 and put it in his pocket. The woman reached into her pocket, turned around, and asked the man if he had seen any money on the floor. The man said no and walked to the bar to buy himself beer with the $20.",
        q: "Of what crime is the man guilty?",
        opts: [
            "False pretenses.",
            "Larceny.",
            "Conversion.",
            "No crime because the woman dropped the $20."
        ],
        ans: 1,
        exp: "Rule: Common law larceny is the trespassory taking and carrying away of the personal property of another with the intent to permanently deprive. With respect to lost or mislaid property, a finder commits larceny if, at the time of taking, the finder knows the true owner or has immediate clues to the owner's identity, yet takes possession with the contemporaneous intent to permanently deprive. The man saw the bill fall directly from the woman's pocket, immediately knew its true owner, and took it intending to keep it for himself (Option B). Option A is incorrect because false pretenses requires that the victim be induced by false representations to transfer title; the woman did not pass title to the man in reliance on a lie. Option C is incorrect because conversion is a civil tort, not a common law crime. Option D is incorrect because dropped property whose owner is immediately identifiable remains the subject of larceny."
    },
    {
        id: 22,
        topic: "Mixed",
        fp: "A music store sent a famous musician a letter offering to sell a rare guitar to the musician for $20,000 so long as he accepted the offer within one week. Three days later, the musician sent a letter back accepting the offer so long as the guitar carried a warranty of merchantability. The musician liked the guitar so much that he planned to base his new record cover on it. Before the music store received the musician's letter, the music store sold the guitar to another man. The music store received the musician's letter six days later. Two days after that, the musician called the music store, which told him the guitar had been sold to someone else. The musician sued the music store for breach of contract.",
        q: "Should the court rule in the musician's favor?",
        opts: [
            "Yes, because the musician accepted the offer.",
            "Yes, based on promissory estoppel.",
            "No, because the store did not receive the musician's letter until nine days after the offer was made.",
            "No, because the musician added an additional term to his acceptance."
        ],
        ans: 0,
        exp: "Rule: Under the mailbox rule, an acceptance of an offer is effective upon dispatch. Under UCC § 2-207(1), a definite and seasonable expression of acceptance operates as an acceptance even though it states terms additional to or different from those offered. Furthermore, an express condition requiring an implied warranty of merchantability is not an additional or inconsistent term because the implied warranty of merchantability is automatically incorporated into every contract for the sale of goods by a merchant seller under UCC § 2-314. The musician dispatched his acceptance within the one-week window, forming a binding contract on the date of mailing before the store sold the instrument to another (Option A). Option B is incorrect because promissory estoppel is inapplicable where an actual contract was formed. Option C is incorrect because dispatch (mailing within 3 days) controls over receipt under the mailbox rule. Option D is incorrect because the UCC abolished the mirror-image rule, and the warranty of merchantability is implied by law."
    },
    {
        id: 48,
        topic: "Mixed",
        fp: "A man had embezzled $1 million from his company due to his crippling gambling addiction. To cover up the crime, he decided to kill his boss. One morning, the man took his boss's sandwich from the company refrigerator and laced it with poison. The man then went to his office and waited. By 12:30, the man felt so guilty that he ran to the boss's office and offered to take him out for pizza for lunch so he wouldn't eat the poisoned sandwich. While the man and his boss were away enjoying pizza, another worker took the sandwich from the refrigerator and ate it. The worker died instantly. The jurisdiction followed the common law.",
        q: "Out of the following, which crimes could the man be found guilty of?",
        opts: [
            "No crime because the worker's death was an accident.",
            "Manslaughter of the worker.",
            "Attempted murder of the boss.",
            "Attempted murder of the boss and murder or manslaughter of the worker."
        ],
        ans: 3,
        exp: "Rule: Attempt requires a specific intent to commit the target offense and an overt act in furtherance beyond mere preparation. Lacing the sandwich with poison and leaving it in the refrigerator for the boss constituted an attempt; at common law, subsequent voluntary abandonment is not a defense once the attempt is complete. For the co-worker's death, the doctrine of transferred intent transfers the man's intent to kill from the boss to the deceased co-worker, establishing murder. Alternatively, leaving a lethal, poisoned sandwich in a shared office refrigerator exhibits depraved-heart malice or criminal negligence, supporting murder or involuntary manslaughter. The man is liable for attempted murder of the boss and murder or manslaughter of the worker (Option D). Options A, B, and C are incorrect because they fail to account for the completed attempted murder and the homicide liability arising from transferred intent and depraved recklessness."
    },
    {
        id: 49,
        topic: "Mixed",
        fp: "The plaintiff showed his silver coins to the defendant and asked whether the defendant would be interested in trading them for chickens. After inspecting the coins, the defendant and the plaintiff placed them in a bag that they sealed together and left with a banker whom they both knew. Then, in a writing signed by both of them, they agreed to the trade. Pursuant to the terms of their agreement, the defendant was to deliver 6,000 fryer chickens to the plaintiff on July 1, at which time the bag of coins would be turned over to the defendant as payment in full. In May, weather conditions were such that the price of fryer chickens increased to three times what it had been when the agreement was signed. Although it was foreseeable that the market price for fryer chickens would change dramatically, neither party knew that the market price of fryer chickens would change. On July 1, the defendant refused to deliver 6,000 fryer chickens to the plaintiff.",
        q: "If the plaintiff asserts a claim against the defendant for breach of contract, should the court find in the plaintiff's favor?",
        opts: [
            "No, because neither party knew that the market price of fryer chickens would change.",
            "No, because the likelihood of fluctuation in the value of money makes this contract aleatory.",
            "Yes, because it was foreseeable that the market price of fryer chickens would change dramatically.",
            "Yes, because the transaction was not a sale as defined by the UCC."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-615, commercial impracticability excuses performance only where a supervening event occurs, the non-occurrence of which was a basic assumption on which the contract was made. Fluctuations in market price are normal, foreseeable business risks assumed by contracting parties. Where dramatic price changes are foreseeable, the party bearing the market risk is not excused by commercial impracticability or mutual mistake of fact. Because the price surge was foreseeable, the defendant remained obligated to deliver the chickens (Option C). Option A is incorrect because subjective lack of foresight regarding market shifts does not excuse performance when market fluctuations are objectively foreseeable. Option B is incorrect because contracts for future delivery at a fixed price are not aleatory contracts. Option D is incorrect because a barter/exchange of goods for consideration is governed by UCC Article 2 under § 2-304."
    },
    {
        id: 50,
        topic: "Mixed",
        fp: "The defendant was out walking when she saw the plaintiff, a seven-year-old child, suddenly chase a ball into the street in the path of a car driven by a driver. Afraid that the plaintiff would be hit by the car, the defendant ran into the roadway and pushed the plaintiff out of the way. The driver's car struck the defendant. The plaintiff was not hit by the driver's car, but he hurt his knees when he fell to the ground as a result of being pushed by the defendant. The jurisdiction applies the all-or-nothing rule of contributory negligence.",
        q: "If the plaintiff asserts a negligence claim against the defendant for the injuries to his knees, which one of the following additional facts or inferences, if it was the only one true, would be most likely to result in a judgment for the defendant?",
        opts: [
            "The plaintiff's injury was proximately caused by the negligence of the driver.",
            "If the defendant had not pushed him out of the way, the plaintiff would have been struck by the driver's car and killed.",
            "The defendant was severely injured as a result of being struck by the driver's car.",
            "The situation confronted the defendant with an emergency."
        ],
        ans: 3,
        exp: "Rule: Under the emergency doctrine in negligence, an actor confronted with a sudden, unexpected emergency not created by the actor's own misconduct is not held to the standard of calm contemplation applied in non-emergency settings, but rather to the standard of care of a reasonably prudent person facing that same sudden emergency. Rushing into the street to push a child out of the direct path of an ongoing automobile was an emergency response; showing that the situation was an emergency establishes that pushing the child out of harm's way was reasonable under the circumstances (Option D). Option A is incorrect because multiple tortfeasors can both be proximate causes of an injury. Option B is incorrect because necessity/lesser harm goes to justification, but the primary defense to negligence is that the defendant acted reasonably under emergency conditions. Option C is incorrect because injuries suffered by the defendant do not negate breach of duty toward the plaintiff."
    }
];