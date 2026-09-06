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
    }
];