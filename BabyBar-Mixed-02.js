const examData = [
    {
        id: 26,
        topic: "Mixed",
        fp: "For Son's seventh birthday, Father bought Son a small bicycle at Hardware. The bicycle was manufactured by Bikeco.\n\nA week later, Son's sister, Sis, age 17, returned home from college for Thanksgiving vacation. Son asked Sis to get out his new bicycle so he could show her how well he could ride it. Sis went to the garage, sat on the bicycle seat and began to 'walk' the bicycle between the two family cars and out of the garage. As Sis neared the doorway of the garage, the rod on which the seat was mounted snapped, causing Sis to fall backward over the bicycle and to suffer severe injuries. Friend, standing a few feet from Sis, was horrified and sickened as he saw what happened to Sis, but suffered no other harm.\n\nMost bicycle manufacturers make the supporting rods for seats from a metal which is much stronger for that purpose than the metal used by Bikeco. The use of the stronger metal increases the cost of manufacture by about $1.50 a bicycle.",
        q: "If Friend asserts a claim against Bikeco based on strict liability in tort, is it likely that Friend will prevail?",
        opts: [
            "Yes, if the bicycle was inherently dangerous.",
            "Yes, because Friend was within a few feet of Sis when she was injured.",
            "No, because Friend was not using the product when the accident occurred.",
            "No, because Friend was horrified and sickened, but suffered no other harm."
        ],
        ans: 3,
        exp: "Rule: Under strict products liability (Restatement (Second) of Torts § 402A), a plaintiff can recover only for physical harm (bodily injury or property damage). Pure emotional distress unaccompanied by physical injury or objective physical manifestation is not recoverable under strict products liability. Because Friend was merely horrified and sickened without suffering physical impact, physical injury, or physical manifestations, Friend cannot recover (Option D). Option A is incorrect because inherent danger does not dispense with the physical injury requirement. Option B is incorrect because close physical proximity alone does not establish a claim for purely emotional distress in strict products liability. Option C is incorrect because bystanders may recover in strict liability if they suffer actual physical harm."
    },
    {
        id: 27,
        topic: "Mixed",
        fp: "Al arranged with Bob to have Bob kill Vic by shooting him. Bob, in turn, paid Tom to do the killing. Tom went to Vic's home late one evening. Vic had gone to bed and had left his bedroom window open. Tom found a long stick and set fire to the end of it. He inserted the stick through the open bedroom window and started a smoldering fire in the covering on Vic's bed. Vic died of smoke inhalation, but the fire was discovered and extinguished by Vic's son. The only damage to the home was smoke discoloration to the walls next to the bed.",
        q: "Did Al commit the murder of Vic?",
        opts: [
            "Yes, because Al and Tom were co-conspirators.",
            "Yes, because he arranged for the killing of Vic.",
            "No, because his arrangement was with Bob and not Tom.",
            "No, because Vic was killed in a different manner than Al had contemplated."
        ],
        ans: 1,
        exp: "Rule: An accessory before the fact (or accomplice) is one who solicits, encourages, commands, or counsels another to commit a crime with the intent that the crime be committed. An accomplice is criminally liable for the contemplated crime even if the hired perpetrator delegates or subcontracts the commission of the act to a third person, as the target offense (homicide) was intended and directly procured by the instigator. Al arranged for Vic's murder and is therefore guilty of murder as an accomplice/mastermind (Option B). Option A is less precise because accomplice/accessory liability attaches directly to the solicitation and procurement of the target offense, regardless of whether a formal three-way conspiracy is proven. Option C is incorrect because an accomplice cannot escape liability simply because the agent employed a sub-agent to carry out the agreed crime. Option D is incorrect because the difference in the specific mechanism used to kill (fire/smoke instead of a bullet) does not negate liability where the intended result—the death of the specific victim—was accomplished."
    },
    {
        id: 28,
        topic: "Mixed",
        fp: "Al arranged with Bob to have Bob kill Vic by shooting him. Bob, in turn, paid Tom to do the killing. Tom went to Vic's home late one evening. Vic had gone to bed and had left his bedroom window open. Tom found a long stick and set fire to the end of it. He inserted the stick through the open bedroom window and started a smoldering fire in the covering on Vic's bed. Vic died of smoke inhalation, but the fire was discovered and extinguished by Vic's son. The only damage to the home was smoke discoloration to the walls next to the bed.",
        q: "Is Tom guilty of common law burglary of Vic's house?",
        opts: [
            "Yes, because he committed a felony within the home of another during the nighttime.",
            "Yes, because he inserted the lighted stick through the open window.",
            "No, because he did not commit a breaking.",
            "No, because no part of his body entered the house."
        ],
        ans: 2,
        exp: "Rule: Common law burglary requires a breaking and entering of the dwelling house of another at nighttime with the intent to commit a felony therein. 'Breaking' requires the creation or enlargement of an opening (e.g., opening a closed door, turning a latch, or raising an open window further). Entering through an open window that was already left open does not satisfy the common law requirement of a breaking (Option C). Option A is incorrect because nighttime felony commission alone does not establish burglary without the requisite breaking and entry. Option B is incorrect because inserting an instrument into an open aperture constitutes entry, but fails to supply the essential element of breaking. Option D is incorrect because entry by an instrument used to commit the felony satisfies the entry requirement, making the lack of breaking the dispositive defect."
    },
    {
        id: 29,
        topic: "Mixed",
        fp: "Al arranged with Bob to have Bob kill Vic by shooting him. Bob, in turn, paid Tom to do the killing. Tom went to Vic's home late one evening. Vic had gone to bed and had left his bedroom window open. Tom found a long stick and set fire to the end of it. He inserted the stick through the open bedroom window and started a smoldering fire in the covering on Vic's bed. Vic died of smoke inhalation, but the fire was discovered and extinguished by Vic's son. The only damage to the home was smoke discoloration to the walls next to the bed.",
        q: "Is Tom guilty of arson of Vic's house?",
        opts: [
            "Yes, because there was smoke damage to the walls.",
            "Yes, because a burning occurred in the commission of an inherently dangerous felony.",
            "No, because arson is a specific intent crime.",
            "No, because there was no burning of any part of the house."
        ],
        ans: 3,
        exp: "Rule: Common law arson requires the malicious burning of the dwelling house of another. 'Burning' requires some charring or fiber consumption of the structure or building fabric itself; mere smoke discoloration, scorching, or blackening does not constitute a burning, nor does the burning of personal property/furnishings within the home (Option D). Option A is incorrect because smoke damage without structural fiber charring does not satisfy common law burning. Option B is incorrect because felony-arson is not an existing doctrine; the physical element of structural burning must still occur. Option C is incorrect because common law arson is a malice crime, not a specific intent crime."
    },
    {
        id: 30,
        topic: "Mixed",
        fp: "Ed told Pete, an auto mechanic, that he had stolen a car and that the engine had to be rebuilt before it could be sold. Pete agreed to perform the work under the following terms: Pete would receive $300 upon completion of the job, even though his normal fee was $600 and he would receive an additional $600 when Ed sold the car. After rebuilding the engine, and before the car was sold, Pete and Ed were arrested.",
        q: "Did Pete commit the crime of conspiracy to sell the stolen car?",
        opts: [
            "Yes, because he agreed to rebuild the engine, knowing the car was stolen.",
            "Yes, because of the profit he agreed to receive on the sale of the car.",
            "No, because Ed was the person who was going to sell the car.",
            "No, because Pete's rebuilding of the engine was not per se illegal."
        ],
        ans: 1,
        exp: "Rule: A supplier of goods or services becomes a co-conspirator in an unlawful venture if they provide services with knowledge of the illegal purpose and have an intent to further that venture. Intent can be inferred when the supplier acquires a 'stake in the venture'—such as conditioning part of their compensation or earning an inflated profit directly from the illicit enterprise's success. By deferring part of his fee in exchange for a substantial profit contingent upon the sale of the stolen vehicle, Pete obtained an active stake in the venture (Option B). Option A is incorrect because mere knowledge of illegal activity without an intent to advance it (or a stake in it) is generally insufficient for conspiracy. Option C is incorrect because a co-conspirator does not need to personally execute every target offense. Option D is incorrect because otherwise lawful acts done to facilitate an unlawful enterprise with a stake in its profits establish conspiratorial liability."
    },
    {
        id: 31,
        topic: "Mixed",
        fp: "Paul was nine years old and a third-grade student in school. While playing in the school yard during the recess period, Paul became involved in a fight with David, ten years old and a student in the fourth grade. David kicked Paul in the leg during the fight and, as a result, Paul suffered a fracture of a bone in the leg.\n\nPaul, through an appropriate legal representative, has asserted claims for damages against David and against the school district.",
        q: "Will Paul prevail on his claim against David?",
        opts: [
            "Yes, because David kicked Paul.",
            "Yes, if David started the fight.",
            "No, unless David used excessive force.",
            "No, if Paul's bones were unusually brittle."
        ],
        ans: 2,
        exp: "Rule: Voluntarily participating in a mutual fight or sporting scuffle implies consent to physical contacts that are normal and reasonably anticipated under the circumstances. A participant cannot recover for battery resulting from mutual combat unless the defendant used excessive, disproportionate, or unreasonable force outside the scope of implied consent (Option C). Option A is incorrect because mutual combat implies consent to customary physical blows. Option B is incorrect because mutual consent to fight defeats the battery claim regardless of who initiated the dispute, unless excessive force was employed. Option D is incorrect because under the 'eggshell skull' doctrine, a tortfeasor takes the victim as found, so brittle bones would not be a defense if battery were established."
    },
    {
        id: 32,
        topic: "Mixed",
        fp: "Paul was nine years old and a third-grade student in school. While playing in the school yard during the recess period, Paul became involved in a fight with David, ten years old and a student in the fourth grade. David kicked Paul in the leg during the fight and, as a result, Paul suffered a fracture of a bone in the leg.\n\nPaul, through an appropriate legal representative, has asserted claims for damages against David and against the school district.",
        q: "Will Paul prevail on his claim against the school district?",
        opts: [
            "Yes, because the fight took place during the recess period.",
            "Yes, because the fight took place on school premises.",
            "No, if Paul was the person who actually started the fight.",
            "No, unless the school failed to use reasonable care in supervising the school premises."
        ],
        ans: 3,
        exp: "Rule: A school district is not an absolute insurer of student safety and is not strictly liable for torts committed by pupils. The school owes a duty of ordinary, reasonable care under the circumstances to provide adequate supervision on school grounds. To prevail, a plaintiff must prove that school personnel breached that standard of reasonable care (Option D). Options A and B are incorrect because time and location do not establish strict liability for a school district. Option C is incorrect because a child's initiation of a playground dispute does not automatically negate school liability if school authorities were negligent in supervising the yard."
    },
    {
        id: 33,
        topic: "Mixed",
        fp: "Actor, a well-known film star, was photographed by a freelance photographer, while sitting at a sidewalk cafe, drinking beer and with a bottle of Foamus Light Beer on the table in front of him. The picture was reproduced in Magazine, a publication containing stories and articles about the film industry, in connection with a story about the eating and drinking tastes of film stars. The label on the beer bottle was clearly visible in the picture.\n\nThe following month, advertisements for Foamus Light Beer appeared in other publications and carried a reproduction of the page from Magazine on which Actor's picture appeared, with the heading 'Drink the beer that movie stars drink.'",
        q: "If Actor asserts a claim against Magazine, will Actor prevail?",
        opts: [
            "Yes, if Actor had not authorized any use of the picture.",
            "Yes, because Magazine was using Actor's picture for its commercial purposes.",
            "No, because Actor's picture was taken in a public place.",
            "No, if Actor's career was advanced by the publicity."
        ],
        ans: 2,
        exp: "Rule: The tort of invasion of privacy protects individuals from intrusion upon seclusion, false light, public disclosure of private facts, and commercial appropriation. Photographing a celebrity in an open, public place (such as a sidewalk cafe) does not constitute intrusion upon seclusion because there is no reasonable expectation of privacy. Furthermore, publishing the photo in connection with a newsworthy or entertainment-related article does not constitute commercial misappropriation, which applies only to unauthorized advertising or trade promotion (Option C). Option A is incorrect because media publications do not require prior consent to publish newsworthy photographs taken in public. Option B is incorrect because selling news or entertainment magazines is not 'commercial use' under misappropriation rules. Option D is incorrect because lack of reputational harm does not determine liability for privacy torts."
    },
    {
        id: 34,
        topic: "Mixed",
        fp: "Actor, a well-known film star, was photographed by a freelance photographer, while sitting at a sidewalk cafe, drinking beer and with a bottle of Foamus Light Beer on the table in front of him. The picture was reproduced in Magazine, a publication containing stories and articles about the film industry, in connection with a story about the eating and drinking tastes of film stars. The label on the beer bottle was clearly visible in the picture.\n\nThe following month, advertisements for Foamus Light Beer appeared in other publications and carried a reproduction of the page from Magazine on which Actor's picture appeared, with the heading 'Drink the beer that movie stars drink.'",
        q: "If Actor asserts a claim against Foamus Light Beer based on the advertisements in the other publications, will Actor prevail?",
        opts: [
            "Yes, if Actor had not consented to having his picture taken.",
            "Yes, if Actor had not consented to Foamus Light Beer using Actor's picture for commercial purposes.",
            "No, because Actor's picture had already appeared in Magazine.",
            "No, if Actor was already a public figure."
        ],
        ans: 1,
        exp: "Rule: Commercial appropriation (part of the right of publicity / privacy) occurs when a defendant uses the plaintiff's name, image, or likeness for commercial advantage or advertising purposes without obtaining the plaintiff's consent. Foamus Light Beer used Actor's image in commercial advertisements endorsing their product without permission, making Foamus liable for commercial appropriation (Option B). Option A is incorrect because consent to take the original photo does not grant commercial advertising rights. Option C is incorrect because lawful publication in a newsworthy magazine does not grant third-party commercial entities the right to exploit the photograph in product advertising. Option D is incorrect because public figures retain the right of publicity over the commercial exploitation of their likeness."
    },
    {
        id: 35,
        topic: "Mixed",
        fp: "Vee loaned Dan her car when Dan told Vee that he needed the car in order to get some groceries. In fact Dan intended to drive 100 miles to apply for a job in City and return the same day. However, when Dan reached City and obtained a job he decided to remain in City permanently. Dan did not inform Vee of where he was and he did not return to car to Vee.",
        q: "Did Dan commit larceny?",
        opts: [
            "Yes, because Dan did not return the car to Vee.",
            "Yes, because Dan unlawfully converted property to which he had lawfully obtained possession.",
            "No, because there was no concurrence of actus reus and mens rea.",
            "No, because Vee voluntarily loaned Dan her car."
        ],
        ans: 0,
        exp: "Rule: Larceny requires a trespassory taking and carrying away of the personal property of another with the intent to permanently deprive. Dan committed a trespassory taking at the outset through fraud/misrepresentation (larceny by trick) when he deceived Vee about his intended trip. Under the doctrine of continuing trespass, because the original taking was trespassory/wrongful, the trespassory nature continues until the actor forms the intent to permanently deprive, satisfying the concurrence requirement when he decides to keep the vehicle. Thus, Dan committed larceny (Option A). Option B is incorrect because converting property after obtaining lawful possession defines embezzlement, not larceny. Option C is incorrect because the doctrine of continuing trespass satisfies concurrence. Option D is incorrect because consent obtained by fraud is vitiated, rendering the initial taking trespassory."
    },
    {
        id: 36,
        topic: "Mixed",
        fp: "Anna, the owner of a nightclub, booked Sam, a famous entertainer, for the week beginning Sunday, July 1. On June 20 Sam was stricken by appendicitis and according to his surgeon would not be able to perform until August 1. On June 21, Anna sent the following telegrams to Ella and to two other performers. The contents of all three telegrams were identical.\n\n'Sam ill and unable to perform during the July 1 week. Desperately need replacement act. You must arrive no later than June 29 to give the band time to rehearse with you. Money no object as all performances already sold out. /s/ Anna.'\n\nAssume that Ella received her wire on June 22 and immediately wired back: 'On my way. Hope I get a better room than you provided last time. /s/ Ella.' After Ella sent her wire, but before Anna received it, Anna learned from Sam's surgeon that Sam had recovered and could perform July 1. Anna immediately telephone Ella and said that Ella was not needed because Sam had recovered.",
        q: "If Ella asserts a claim against Anna and Anna defends on the ground that there was no effective acceptance of her offer, who will prevail?",
        opts: [
            "Ella, because her acceptance was dispatched prior to Anna's revocation of her offer.",
            "Ella, because Anna's revocation was not communicated in the same form as Anna's offer.",
            "Anna, because Ella's response failed to specify any salary.",
            "Anna, because Ella's response, added a term to the offer, which Anna was free to reject."
        ],
        ans: 0,
        exp: "Rule: Under the mailbox rule, an acceptance of an offer is effective upon proper dispatch (e.g., deposited into the post or handed to the telegraph agency), creating an immediate binding contract. Conversely, a revocation is effective only upon actual receipt by the offeree. Because Ella dispatched her acceptance wire on June 22 before Anna communicated her revocation, an enforceable contract was formed at the moment of dispatch (Option A). Option B is incorrect because a revocation need not match the exact medium of the offer; it simply must be received prior to acceptance. Option C is incorrect because 'money no object' in the context of professional booking acts allows a court to imply a reasonable value / market rate. Option D is incorrect because Ella's statement ('Hope I get a better room') was a mere expression of hope or 'grumbling acceptance,' which does not defeat acceptance or create a counteroffer."
    },
    {
        id: 37,
        topic: "Mixed",
        fp: "Anna, the owner of a nightclub, booked Sam, a famous entertainer, for the week beginning Sunday, July 1. On June 20 Sam was stricken by appendicitis and according to his surgeon would not be able to perform until August 1. On June 21, Anna sent the following telegrams to Ella and to two other performers. The contents of all three telegrams were identical.\n\n'Sam ill and unable to perform during the July 1 week. Desperately need replacement act. You must arrive no later than June 29 to give the band time to rehearse with you. Money no object as all performances already sold out. /s/ Anna.'\n\nAssume the same facts as in question 36.\nAnna defends on the ground that her wire was not intended as an offer, since it was sent to three people and she needed only one replacement act.",
        q: "Will this defense succeed?",
        opts: [
            "Yes, if Anna did not intend to be bound to more than one person.",
            "Yes, because, as creator of the purported 'offer,' Anna's intent not to make an offer prevails.",
            "No, if Ella did not know that identical wires were sent to others.",
            "No, because Anna would only be bound by the first acceptance she received."
        ],
        ans: 2,
        exp: "Rule: Contract formation is judged by the objective theory of contracts—how a reasonable person in the offeree's position would understand the communication. Secret subjective intentions or undisclosed transmissions of identical communications to other parties do not prevent a manifestation of assent from operating as a valid offer if the offeree reasonably understands that their assent binds the contract and has no reason to know of the multi-offeree communications (Option C). Options A and B are incorrect because subjective unexpressed intent does not govern over objective manifestations. Option D is incorrect because sending multiple unqualified offers to several parties exposes the offeror to liability on all acceptances if not properly qualified."
    },
    {
        id: 38,
        topic: "Mixed",
        fp: "Anna, the owner of a nightclub, booked Sam, a famous entertainer, for the week beginning Sunday, July 1. On June 20 Sam was stricken by appendicitis and according to his surgeon would not be able to perform until August 1. On June 21, Anna sent the following telegrams to Ella and to two other performers. The contents of all three telegrams were identical.\n\n'Sam ill and unable to perform during the July 1 week. Desperately need replacement act. You must arrive no later than June 29 to give the band time to rehearse with you. Money no object as all performances already sold out. /s/ Anna.'\n\nAssume the same facts as in previous question 36.\nAnna defends on the ground that Sam's recovery was a changed circumstance that excused her from liability on her contract with Ella.",
        q: "Will this defense succeed?",
        opts: [
            "Yes, because the risk of Sam's recovery was assumed by Ella.",
            "Yes, because illness in personal service contracts operates to excuse performance.",
            "No, because Anna was unilaterally mistaken as to whether Sam would recover in time to perform.",
            "No, because Anna did not condition her offer on Sam's continued incapacity and, therefore, the risk of his recovery was assumed by her."
        ],
        ans: 3,
        exp: "Rule: Impossibility, impracticability, or frustration of purpose discharges contractual duties only when an unforeseen event occurs, the non-occurrence of which was a basic assumption on which the contract was made, and the party seeking excuse did not assume the risk. When hiring a replacement entertainer without reserving the right to cancel if the primary performer recovers, the employer bears the business risk of the original employee's early recovery (Option D). Option A is incorrect because the hiring party, not the replacement artist, controls and bears the risk of an unconditioned employment commitment. Option B is incorrect because Sam's illness excused Sam from performing, but does not excuse Anna from honoring her independent contract with Ella. Option C is incorrect because Sam's recovery occurred after contract formation, making this an issue of changed circumstances/risk allocation rather than mutual/unilateral mistake at formation."
    },
    {
        id: 39,
        topic: "Mixed",
        fp: "Anna, the owner of a nightclub, booked Sam, a famous entertainer, for the week beginning Sunday, July 1. On June 20 Sam was stricken by appendicitis and according to his surgeon would not be able to perform until August 1. On June 21, Anna sent the following telegrams to Ella and to two other performers. The contents of all three telegrams were identical.\n\n'Sam ill and unable to perform during the July 1 week. Desperately need replacement act. You must arrive no later than June 29 to give the band time to rehearse with you. Money no object as all performances already sold out. /s/ Anna.'\n\nAssume for this question that there was a valid contract between Ella and Anna, and that Sam recovered. Assume further that Anna refused to allow Ella to perform as the featured star, but offered to employ Ella, at a salary of $3,000 for the week, to perform in a less popular nightclub which Anna also owned. Ella's usual salary for a one week engagement is $5,000 and this is the sum she expected to receive from Anna. Ella refused to perform in Anna's other nightclub and was unable to obtain another booking. Anna paid Sam $10,000 for his one week performance.",
        q: "How much is Ella entitled to recover from Anna?",
        opts: [
            "$2,000.",
            "$5,000.",
            "$10,000.",
            "Nothing."
        ],
        ans: 1,
        exp: "Rule: In employment contracts, an employee wrongfully discharged or repudiated is entitled to recover the full agreed contract price/expected earnings, minus any amount earned or that could have been earned through reasonable mitigation efforts. However, an employee is not required to mitigate damages by accepting employment that is inferior, different in kind, of lower status, or at a lesser compensation. Because performing as a secondary act in a less popular club is substantially inferior and offers lower pay, Ella had no duty to accept Anna's substitute offer. Since Ella was unable to find comparable work despite reasonable efforts, she is entitled to her full expected compensation of $5,000 (Option B). Option A is incorrect because Ella was under no duty to accept inferior work, so Anna cannot deduct the $3,000 offer. Option C is incorrect because damages protect Ella's expectation interest ($5,000), not the amount paid to another performer ($10,000). Option D is incorrect because a material breach occurred and Ella is entitled to expectation damages."
    },
    {
        id: 40,
        topic: "Mixed",
        fp: "Anna, the owner of a nightclub, booked Sam, a famous entertainer, for the week beginning Sunday, July 1. On June 20 Sam was stricken by appendicitis and according to his surgeon would not be able to perform until August 1. On June 21, Anna sent the following telegrams to Ella and to two other performers. The contents of all three telegrams were identical.\n\n'Sam ill and unable to perform during the July 1 week. Desperately need replacement act. You must arrive no later than June 29 to give the band time to rehearse with you. Money no object as all performances already sold out. /s/ Anna.'\n\nAssume that Frank, another performer, received one of the three wires sent by Anna on June 21. Without communicating with Anna, Frank cancelled his existing booking for the week of July 1 and appeared at Anna's nightclub on June 29, stating: 'Here I am. You knew you could count on me to help you out.' Anna said that Sam had recovered and was going to perform and that Anna did not expect Frank since she had heard nothing from him.",
        q: "If Frank sues Anna, who will prevail?",
        opts: [
            "Frank, because he could reasonably interpret Anna's wire as an offer permitting acceptance either by performance or a return promise.",
            "Frank, because he commenced performance prior to any attempted revocation by Anna.",
            "Anna, because her wire should reasonably have been understood as an offer requiring a timely return promise.",
            "Anna, because an offer can only be accepted by a return promise."
        ],
        ans: 2,
        exp: "Rule: The offeror is the master of the offer. Where an offer creates an urgent business scenario ('desperately need replacement act') and performance is set days into the future, a reasonable person would understand that the offeror needs prompt commitment (a return promise) rather than the uncertainty of waiting to see if an offeree silently appears a week later. Therefore, the wire reasonably required a timely return promise to accept, which Frank failed to provide (Option C). Option A is incorrect because in light of the urgent emergency circumstances, silence followed by physical appearance a week later is not a commercially reasonable mode of acceptance. Option B is incorrect because Frank did not notify Anna or commence actual performance with Anna's consent. Option D is incorrect because offers in general may invite acceptance by performance unless the language or circumstances indicate otherwise."
    },
    {
        id: 41,
        topic: "Mixed",
        fp: "Alma and Betty were patients in Hospital. Dr. Andrews was to operate on Alma for a back problem. Dr. Brown was to perform an appendectomy on Betty. Each doctor was performing her first operation in Hospital. Neither was familiar with the location of the operating rooms. Through some unexplained mistake, employees of Hospital took Dr. Andrews to the operating room where Betty was awaiting her operation and took Dr. Brown to the operating room where Alma was awaiting her operation. Each doctor commenced operating before the mistakes were discovered.",
        q: "If Alma asserts a claim against Dr. Brown, will Alma prevail?",
        opts: [
            "Yes, for battery.",
            "Yes, for negligence, relying on the doctrine of res ipsa loquitur.",
            "No, unless Alma can establish that Dr. Brown was negligent in not discovering her identity.",
            "No, because Hospital's employee took Dr. Brown to the wrong operating room."
        ],
        ans: 0,
        exp: "Rule: Battery is an intentional, non-consensual harmful or offensive contact with the person of another. In a medical context, performing surgery without the patient's consent constitutes battery as a matter of law. Mistake regarding patient identity—even if made in good faith or induced by hospital staff—does not negate the intent to make physical surgical contact, and the patient's lack of consent makes the contact an actionable battery (Option A). Option B is incorrect because surgical operations on the wrong patient constitute direct intentional contact (battery) rather than mere negligence. Option C is incorrect because battery does not require proof of negligence. Option D is incorrect because hospital error does not shield a physician from liability for direct, unauthorized physical intrusions."
    },
    {
        id: 42,
        topic: "Mixed",
        fp: "Alma and Betty were patients in Hospital. Dr. Andrews was to operate on Alma for a back problem. Dr. Brown was to perform an appendectomy on Betty. Each doctor was performing her first operation in Hospital. Neither was familiar with the location of the operating rooms. Through some unexplained mistake, employees of Hospital took Dr. Andrews to the operating room where Betty was awaiting her operation and took Dr. Brown to the operating room where Alma was awaiting her operation. Each doctor commenced operating before the mistakes were discovered.",
        q: "If Betty asserts a claim against Hospital will Betty prevail?",
        opts: [
            "Yes, for battery.",
            "Yes, for negligence relying on the doctrine of res ipsa loquitur.",
            "No, unless Dr. Andrews was an employee of Hospital.",
            "No, because Hospital is not strictly liable for harm to patients."
        ],
        ans: 1,
        exp: "Rule: Under the doctrine of res ipsa loquitur, negligence may be inferred where (1) the accident is of a kind that ordinarily does not occur in the absence of negligence, (2) the instrumentality causing the injury was under the defendant's exclusive control, and (3) the injury was not due to any voluntary action or contribution on the plaintiff's part. Delivering a surgeon to the wrong operating room and wrong patient is an event that does not occur in the absence of institutional administrative negligence, creating a prima facie inference of negligence against the hospital under res ipsa loquitur (Option B). Option A is incorrect because the hospital itself did not commit an intentional offensive touching; its liability sounds in administrative/institutional negligence. Option C is incorrect because the negligence was that of the hospital's direct employees who misdirected the physicians, not solely the doctors' employment status. Option D is incorrect because liability is based on actionable negligence, not strict liability."
    },
    {
        id: 43,
        topic: "Mixed",
        fp: "Owner brought his television set to Repairer for repair. Repairer sold the set to Buyer. Buyer believed that Repairer owned the set.",
        q: "If Owner asserts a claim based on conversion against Repairer and Buyer, Owner will prevail against",
        opts: [
            "Repairer but not Buyer, because Buyer was a good faith purchaser.",
            "Both Repairer and Buyer because each exercised dominion over the television set.",
            "Buyer but not Repairer because Repairer no longer has possession of the television set.",
            "Buyer but not Repairer because Repairer had lawful possession of the television set."
        ],
        ans: 1,
        exp: "Rule: Conversion is an intentional exercise of dominion or control over personal property that seriously interferes with the owner's right to control it. A bailee who wrongfully sells bailed property converts it. Furthermore, a purchaser of converted goods from someone with mere possession acquires no title and is likewise liable in tort for conversion upon asserting dominion, even if the purchaser acted in good faith (bona fide purchaser). Owner can prevail against both Repairer and Buyer in tort (Option B). (Note: While UCC § 2-403(2) provides that entrustment to a merchant dealing in goods of that kind can pass title to a buyer in ordinary course, in tort law, a conversion action lies against both the converter and the buyer who receives and exercises unauthorized dominion over the owner's chattel). Options A, C, and D are incorrect because neither lack of possession at the time of suit nor good faith prevents tortious dominion from constituting conversion."
    },
    {
        id: 44,
        topic: "Mixed",
        fp: "Boater owned a power boat which he was operating on Lake, a large body of water, on a clear calm day. He approached Sailer whose sailboat was disabled by a broken rudder. Sailer asked Boater to tow his sailboat to shore but Boater refused because he feared the tow might damage the paint on his power boat.\n\nIf Sailer was unable to bring his sailboat in and became severely ill as a result of exposure before he was rescued, and Sailer asserts a claim against Boater for damages based on Boater's refusal to provide assistance, will Sailer prevail?",
        q: "Will Sailer prevail?",
        opts: [
            "Yes, if Boater's failure to rescue made a bad situation worse.",
            "Yes, if the probability of harm to Sailer outweighed the probability of damage to Boater's property.",
            "No, unless there was some special relationship between Sailer and Boater.",
            "No, if Boater reasonably believed that towing Sailer's sailboat might damage the paint on Boater's power boat."
        ],
        ans: 2,
        exp: "Rule: Under common law tort principles, an individual owes no affirmative duty to rescue or assist a stranger in peril, absent a recognized special relationship (e.g., common carrier-passenger, innkeeper-guest, employer-employee), a statute imposing a duty, or conduct by the defendant that caused the peril. Because Boater did not create the disabled condition and shared no special relationship with Sailer, Boater had no legal duty to rescue (Option C). Option A is incorrect because mere failure to intervene is not an affirmative act that worsens peril. Option B is incorrect because cost-benefit balancing determines breach of duty only after an underlying affirmative legal duty is established. Option D is incorrect because Boater's refusal is privileged by the absence of a legal duty, regardless of whether his specific property concern was reasonable."
    },
    {
        id: 45,
        topic: "Mixed",
        fp: "Deft is being tried on an indictment charging him with burglary. Deft has introduced evidence, that, at the time he broke and entered, he was so intoxicated that he could not have formed an intent to commit a felony.",
        q: "On the issue of whether Deft was so intoxicated that his capacity to form the necessary intent was diminished, the jury should be instructed that the burden of proof is on the",
        opts: [
            "defendant to establish by a preponderance of the evidence that his capacity to form the necessary intent was diminished.",
            "defendant to establish by clear and convincing evidence that his capacity to form the necessary intent was diminished.",
            "prosecution to establish by clear and convincing evidence that Deft had the capacity to form the necessary intent.",
            "prosecution to establish beyond a reasonable doubt that Deft had the capacity to form the necessary intent."
        ],
        ans: 3,
        exp: "Rule: Under the Due Process Clause (In re Winship), the prosecution bears the constitutional burden of proving every essential element of the charged offense beyond a reasonable doubt. Burglary is a specific intent crime requiring proof of intent to commit a felony upon entry. Because voluntary intoxication can negate the specific intent element, the prosecution bears the ultimate burden of proving beyond a reasonable doubt that the defendant possessed the requisite intent and capacity despite evidence of intoxication (Option D). Options A and B are incorrect because affirmative defenses that directly negate an essential element of the crime cannot constitutionally have their burden shifted to the defendant. Option C is incorrect because the constitutional standard of proof for criminal elements is beyond a reasonable doubt, not clear and convincing evidence."
    },
    {
        id: 46,
        topic: "Mixed",
        fp: "On March 1, Seller and Buyer entered into a written contract under which Seller agreed to sell his home to Buyer, and Buyer agreed to purchase the home for the sum of $60,000. The contract specified July 1 as the closing day on which Seller was to deliver the deed and Buyer was to pay the price.\n\nAssume that on April 1, Seller conveyed his home to a third party. Buyer learned of the sale the following day and wants to cancel his contract with Seller and buy another home.",
        q: "May he do so without any risk that he will be obliged to perform his contract obligation to Seller?",
        opts: [
            "Yes, but only if he first demands assurance from Seller that Seller will perform on July 1, and Seller is unable to provide such assurance.",
            "Yes, if Seller, in connection with the sale to the third party, did nothing to preserve Buyer's rights to acquire the property.",
            "No, because Seller's performance is not due until July 1 and Buyer must remain in a position to perform his contract obligation up to that time.",
            "No, because there is a possibility that Seller could buy back the property and tender a deed to Buyer on July 1."
        ],
        ans: 1,
        exp: "Rule: When a seller of specific real property conveys that property to a third party without reserving or preserving the buyer's rights, the conveyance constitutes an anticipatory repudiation by conduct because the seller has voluntarily rendered their own performance impossible. Upon anticipatory repudiation, the aggrieved buyer is discharged from their duties, is free to treat the contract as broken, and may immediately seek cover or terminate the contract (Option B). Option A is incorrect because a definitive, disabling act is an outright repudiation, obviating the need to demand adequate assurances. Options C and D are incorrect because the speculative possibility that the seller might repurchase the land does not deprive the buyer of the immediate right to treat the conveyance as a repudiation."
    },
    {
        id: 47,
        topic: "Mixed",
        fp: "On March 1, Seller and Buyer entered into a written contract under which Seller agreed to sell his home to Buyer, and Buyer agreed to purchase the home for the sum of $60,000. The contract specified July 1 as the closing day on which Seller was to deliver the deed and Buyer was to pay the price.\n\nAssume that on April 1 Seller tells Buyer that he (Seller) has changed his mind and will not convey his home to Buyer.",
        q: "May Buyer immediately maintain an action for damages for breach of contract?",
        opts: [
            "Yes, but only if Seller has sold or contracted to sell the home to another party.",
            "Yes, because Seller's statement constituted a repudiation, giving rise to an immediate cause of action for breach of contract.",
            "No, because Seller's performance is not due until July 1 and thus there can be no breach of contract until that date.",
            "No, because Seller might retract his repudiation before July 1."
        ],
        ans: 1,
        exp: "Rule: Under the doctrine of anticipatory repudiation (Hochster v. De La Tour), an unequivocal and absolute statement by a party declaring that they will not perform their contractual obligations constitutes an immediate total breach. The non-repudiating party is not required to wait until the scheduled date of performance, but may file an action for breach of contract immediately (Option B). Option A is incorrect because an unequivocal oral or written refusal to perform is an anticipatory repudiation; third-party transfer is not required. Option C is incorrect because anticipatory repudiation permits immediate suit prior to the performance date. Option D is incorrect because the power to retract a repudiation terminates once the aggrieved party accepts the repudiation, brings suit, or materially changes position."
    },
    {
        id: 48,
        topic: "Mixed",
        fp: "On March 1, Seller and Buyer entered into a written contract under which Seller agreed to sell his home to Buyer, and Buyer agreed to purchase the home for the sum of $60,000. The contract specified July 1 as the closing day on which Seller was to deliver the deed and Buyer was to pay the price.\n\nAssume that on July 1 Seller fails to deliver or tender the deed.",
        q: "May Buyer successfully maintain an immediate action against Seller for damages for breach of contract?",
        opts: [
            "Yes, if Buyer tendered payment on July 1.",
            "Yes, but only if Buyer actually made the payment on July 1.",
            "Yes, whether or not Buyer tendered payment or actually paid on July 1.",
            "Yes, because payment of the price by Buyer was a condition subsequent to Seller's duty to tender the deed."
        ],
        ans: 0,
        exp: "Rule: In real estate transactions, delivery of the deed and payment of the purchase price are concurrent conditions. Neither party can put the other in actual breach of contract on the closing date without first tendering (or offering and being able to make) their own performance. Thus, Buyer must tender payment on July 1 to place Seller in default and maintain an action for damages (Option A). Option B is incorrect because actual delivery of funds into the hands of a breaching party who refuses to tender the deed is not required; tender (offering payment ready and willing) suffices. Option C is incorrect because without tender of payment, Seller's duty to convey does not become immediately enforceable. Option D is incorrect because payment is a concurrent condition, not a condition subsequent."
    },
    {
        id: 49,
        topic: "Mixed",
        fp: "Deft intended to kill Vic. With that in mind, Deft shot at Vic but missed Vic and hit Cal. Cal was wounded only slightly. Cal turned, saw Vic empty-handed standing nearby, but thought that Vic had shot him. Cal picked up an iron bar and beat Vic repeatedly over the head.",
        q: "Did Deft commit the attempted murder of Cal?",
        opts: [
            "Yes, because Deft attempted to kill Vic.",
            "Yes, because Deft acted with premeditation and malice towards Vic.",
            "No, because Cal was wounded only slightly.",
            "No, because Vic did not intend to kill Cal."
        ],
        ans: 3,
        exp: "Rule: Attempt requires the specific intent to commit the target crime (specific intent to kill). The doctrine of transferred intent applies to completed crimes (e.g., where an intended shot misses the intended victim and kills a bystander, making it murder), but transferred intent does not apply to inchoate attempts. Attempted murder requires a specific intent to kill the specific person actually harmed or attempted. Because Deft did not possess the specific intent to kill Cal, Deft cannot be convicted of attempted murder of Cal (Option D—which corresponds to Option D in the test key). Options A and B are incorrect because transferred intent cannot satisfy the specific intent requirement in attempted murder. Option C is incorrect because the severity of the wound does not determine whether an attempted murder occurred."
    },
    {
        id: 50,
        topic: "Mixed",
        fp: "Deft intended to kill Vic. With that in mind, Deft shot at Vic but missed Vic and hit Cal. Cal was wounded only slightly. Cal turned, saw Vic empty-handed standing nearby, but thought that Vic had shot him. Cal picked up an iron bar and beat Vic repeatedly over the head.",
        q: "Did Cal commit battery?",
        opts: [
            "Yes, because Cal intentionally beat Vic.",
            "Yes, because Vic had not committed an unlawful act.",
            "No, if Cal acted in the heat of passion.",
            "No, if Cal reasonably believed Vic had shot at him."
        ],
        ans: 0,
        exp: "Rule: Battery is the intentional, unlawful infliction of harmful or offensive bodily contact. While self-defense permits the use of reasonable force against an apparent assailant based on a reasonable mistake of fact, deadly or aggravated force (such as repeatedly beating an empty-handed person over the head with an iron bar) is excessive and disproportionate as a matter of law. Because Cal used excessive, deadly force against an unarmed victim, the defense of self-defense fails, rendering the intentional beating a battery (Option A). Option B is incorrect because self-defense can be valid even if the victim did not commit an unlawful act, provided the defendant's mistake of fact was reasonable and the force used was not excessive. Option C is incorrect because heat of passion can mitigate murder to manslaughter, but does not justify or excuse battery. Option D is incorrect because beating an unarmed person repeatedly over the head with an iron bar constitutes excessive force, precluding self-defense."
    }
];