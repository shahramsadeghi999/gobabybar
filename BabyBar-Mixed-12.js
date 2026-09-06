// BabyBar-Mixed-12.js
// Distribution: 9 Torts, 8 Contracts, 8 Criminal Law
const examData = [
    {
        id: 1,
        topic: "Mixed",
        fp: "A manufacturer of high-end mountain bikes displayed a newly designed trail bike at a trade show. A retail bicycle dealer examined the bike and expressed interest. The manufacturer sent the dealer a signed written proposal: 'We offer to sell you 50 Apex Trail Bikes at $800 each, net 30 days. Delivery at your retail warehouse on or before April 1. This offer will remain open until March 1.' On February 10, the dealer mailed a signed letter stating: 'I accept your offer for 50 Apex Trail Bikes at $800 each. Shipment must include manufacturer assembly manuals for each unit.' Under prevailing trade usage in the bicycle industry, assembly manuals are customarily included with all wholesale bike shipments. The manufacturer received the letter on February 12 but remained silent. On March 15, the manufacturer notified the dealer that it had sold its entire inventory of Apex bikes to a national competitor and would not deliver any bikes to the dealer.",
        q: "In an action by the dealer against the manufacturer for breach of contract, which of the following statements is most accurate?",
        opts: [
            "A valid contract was formed because the dealer's letter operated as an acceptance under UCC § 2-207, and the manual requirement became part of the contract.",
            "No contract was formed because the dealer's request for assembly manuals constituted a conditional acceptance and counteroffer.",
            "A valid contract was formed, but the term regarding assembly manuals dropped out because it materially altered the bargain.",
            "No contract was formed because the manufacturer never assented in writing to the additional term regarding assembly manuals."
        ],
        ans: 0,
        exp: "Rule: Under UCC § 2-207(1), a definite and seasonable expression of acceptance operates as an acceptance even though it states terms additional to or different from those offered, unless acceptance is expressly made conditional on assent to the additional or different terms. Under UCC § 2-207(2), between merchants, additional terms automatically become part of the contract unless: (a) the offer expressly limits acceptance to the terms of the offer; (b) they materially alter it; or (c) notification of objection to them has already been given or is given within a reasonable time. A term does not materially alter a contract if it results in no unreasonable surprise or hardship, particularly where it reflects established trade usage (such as customarily including manufacturer assembly manuals). Therefore, the dealer's letter formed a binding contract upon receipt/dispatch, and the manual term was incorporated into the agreement (Option A). Option B is incorrect because the acceptance was not expressly made conditional on assent to the added term. Option C is incorrect because trade usage demonstrates that the term was not a material alteration. Option D is incorrect because between merchants, non-material additional terms enter automatically without requiring an express affirmative writing from the offeror."
    },
    {
        id: 2,
        topic: "Mixed",
        fp: "A homeowner engaged a commercial tree service to fell a dead 60-foot oak tree standing in his front yard. The tree service brought heavy felling equipment and established a marked drop zone. A neighbor walked past the warning cones and onto the homeowner's driveway to ask the tree crew what time they expected to finish. While the crew was using a winch to direct the fall, a crew member negligently failed to secure an anchor pin. The winch cable snapped, whipped across the driveway, and struck the neighbor, fracturing his arm. The neighbor sued both the homeowner and the tree service for negligence.",
        q: "Who is liable to the neighbor for his injuries?",
        opts: [
            "Both the homeowner and the tree service, because removing a massive dead tree is an inherently dangerous activity imposing non-delegable duties on a landowner.",
            "The tree service only, because it committed active operational negligence, while the homeowner is not vicariously liable for the torts of an independent contractor.",
            "The homeowner only, because the neighbor was a licensee on the premises to whom the homeowner owed an absolute duty of inspection and warning.",
            "Neither, because the neighbor assumed the risk by walking past the warning cones into an active work area."
        ],
        ans: 1,
        exp: "Rule: An independent contractor is solely liable for its own collateral or operational negligence. A property owner is generally not vicariously liable for the torts of an independent contractor unless the activity is inherently dangerous (carrying an unavoidable, high risk of harm requiring special precautions even when done carefully, such as blasting) or involves a non-delegable duty. Standard tree felling by a professional service is an ordinary construction/maintenance activity, not an inherently dangerous activity that triggers vicarious liability for the employer. Therefore, the homeowner is not vicariously liable for the crew's failure to secure the pin. However, the tree service owed a general duty of reasonable care to foreseeable persons in the vicinity and breached that duty through operational negligence (Option B). Option A is incorrect because routine tree trimming and felling is not classified as an inherently dangerous activity imposing non-delegable liability on residential landowners. Option C is incorrect because the harm arose from an independent contractor's dynamic operational acts, not a static concealed condition of the land under the owner's control. Option D is incorrect because crossing warning cones may raise comparative negligence, but it does not completely bar recovery under modern comparative fault principles."
    },
    {
        id: 3,
        topic: "Mixed",
        fp: "A man believed his coworker had stolen his bespoke leather jacket. Late one evening, intending to retrieve his property, the man pried open the back window of the coworker's suburban residence with a screwdriver while the coworker was away. Once inside, the man searched the closets and discovered his leather jacket hanging in the master bedroom. The man took the jacket and departed through the back door. The jurisdiction adheres strictly to traditional common law definitions of all crimes.",
        q: "What is the most serious common law crime of which the man can properly be convicted?",
        opts: [
            "Common law burglary.",
            "Larceny.",
            "Attempted larceny.",
            "Trespass to land only."
        ],
        ans: 3,
        exp: "Rule: At common law, burglary requires: (1) breaking, (2) entering, (3) the dwelling house of another, (4) in the nighttime, (5) with the intent to commit a felony therein. Larceny requires the trespassory taking and carrying away of the personal property of another with the intent to permanently deprive the owner thereof. Under the claim-of-right doctrine, a defendant who takes property under an honest, bona fide belief that the property belongs to him lacks the felonious intent (animus furandi) required for larceny, even if that belief is mistaken or unreasonable. Because the man entered solely to recover property he honestly believed was his own, he lacked the intent to commit a felony (larceny) at the moment of entry. Thus, he did not commit common law burglary. Because he lacked animus furandi, he also did not commit larceny or attempted larceny. He committed only a civil/criminal trespass to land (Option D). Options A, B, and C are incorrect because the absence of felonious intent negates both larceny and the felony element essential to common law burglary."
    },
    {
        id: 4,
        topic: "Mixed",
        fp: "An avid art collector visited a gallery and fell in love with a painting titled 'Crimson Dusk' by a prominent modern artist. The gallery owner and the collector entered into a signed written contract whereby the collector agreed to buy 'Crimson Dusk' for $45,000, payable on delivery scheduled for July 1. On June 20, the gallery owner received an unsolicited offer of $70,000 for the same painting from an overseas museum. The gallery owner immediately sold and delivered 'Crimson Dusk' to the overseas museum and telephoned the collector to state that the gallery was repudiating their agreement and would refund any administrative deposits. The collector immediately filed an action against the gallery owner seeking specific performance.",
        q: "Will the court grant the collector's request for specific performance?",
        opts: [
            "No, because the collector has an adequate remedy at law to recover market expectation damages from the gallery owner.",
            "No, because the painting has already been transferred to a bona fide purchaser, rendering specific performance impossible.",
            "Yes, because contracts for the sale of unique personal property are presumptively entitled to equitable enforcement.",
            "Yes, because the gallery owner's deliberate, bad-faith breach estops him from asserting equitable defenses."
        ],
        ans: 1,
        exp: "Rule: Specific performance is an equitable remedy available when the legal remedy (damages) is inadequate, which is presumptively true for unique chattels, works of art, and heirlooms under UCC § 2-716. However, equity will not order an impossibility: where the subject matter of a contract for personal property has already been sold and physically delivered to a third-party bona fide purchaser who takes without notice of the prior contract, specific performance cannot be decreed because the court cannot compel the defendant to transfer title to property he no longer owns or controls (Option B). Option A is incorrect because original paintings are unique, making damages historically inadequate in principle. Option C is incorrect because while unique goods ordinarily support specific performance, the transfer of possession and title to an overseas purchaser makes the decree legally and physically impossible to enforce. Option D is incorrect because bad faith does not grant a court power to order an impossible conveyance of property owned by a third party."
    },
    {
        id: 5,
        topic: "Mixed",
        fp: "A restaurant patron ordered a bowl of classic New England clam chowder at a seafood establishment. While chewing a mouthful of soup, the patron bit forcefully down on a sharp, one-inch piece of natural clam shell that had not been removed during the shucking process. The fragment fractured two of the patron's molars and lacerated his gums, necessitating oral surgery. The patron brought a strict products liability action against the restaurant, alleging that the clam chowder was a defective and unreasonably dangerous food product.",
        q: "If the court applies the modern 'reasonable expectation' test for food products liability, will the patron prevail?",
        opts: [
            "No, because a clam shell is natural to clams and therefore cannot constitute a manufacturing defect as a matter of law under the foreign-natural doctrine.",
            "No, unless the patron can affirmatively establish that the restaurant staff failed to exercise reasonable care in inspecting and straining the chowder.",
            "Yes, if a reasonable consumer eating clam chowder would not expect to encounter a one-inch jagged shell fragment capable of causing dental injury.",
            "Yes, because commercial restaurants are strictly liable as insurers of the safety of all food items served on their premises."
        ],
        ans: 2,
        exp: "Rule: In products liability for food products, modern jurisdictions have largely abandoned the rigid 'foreign-natural' test (which barred recovery if the harmful substance was natural to the food) in favor of the 'reasonable expectation' test. Under the reasonable expectation test, a food product is defective if a reasonable consumer would not expect the ingredient or object to be present in the prepared dish, regardless of whether it is natural to one of the ingredients. A consumer ordering processed chowder does not reasonably expect a large, jagged, dangerous shell fragment capable of breaking teeth (Option C). Option A is incorrect because it states the obsolete 'foreign-natural' rule that the modern reasonable expectation test rejects. Option B is incorrect because strict products liability does not require proof of negligent inspection; the focus is solely on whether the product was defective. Option D is incorrect because sellers of food are not absolute insurers under strict liability; they are liable only for defective, unreasonably dangerous conditions."
    },
    {
        id: 6,
        topic: "Mixed",
        fp: "Defendant was furious after learning that a rival contractor had won a lucrative municipal building project. Defendant met with an acquaintance who had a criminal record for arson and said: 'I'll pay you $10,000 if you burn down that contractor's lumber warehouse tonight.' The acquaintance immediately replied: 'Count me in. Give me $2,000 upfront for materials, and I'll torch the place at midnight.' Defendant handed over $2,000 in cash. Unknown to Defendant, the acquaintance had recently become a paid informant for the municipal police department. The acquaintance never intended to set the fire, and he immediately delivered the $2,000 to his police handler. Defendant was arrested two hours later. The jurisdiction adheres to traditional common law principles for all crimes.",
        q: "Which of the following offenses has Defendant committed?",
        opts: [
            "Conspiracy to commit arson and solicitation to commit arson.",
            "Conspiracy to commit arson only.",
            "Solicitation to commit arson only.",
            "Attempted arson only."
        ],
        ans: 2,
        exp: "Rule: Under traditional common law, conspiracy requires a bilateral agreement—a genuine meeting of two or more guilty minds intending to achieve an unlawful objective. An agreement with a government agent or informant who only feigns agreement cannot constitute a common law conspiracy because there is no genuine second party. Solicitation occurs when an actor urges, advises, incites, or requests another to commit a felony with the specific intent that the felony be committed; the crime is complete the moment the solicitation is uttered. While solicitation ordinarily merges into conspiracy once an agreement is formed, here no bilateral conspiracy was ever formed because the informant feigned assent. Therefore, the solicitation did not merge and Defendant is guilty of solicitation only (Option C). Options A and B are incorrect because the common law bilateral requirement was not met. Option D is incorrect because Defendant did not commit an overt act close enough to the commission of the arson to satisfy the common law proximity test for attempt."
    },
    {
        id: 7,
        topic: "Mixed",
        fp: "A commercial developer engaged a general contractor to construct a five-story office building according to detailed architectural blueprints for a contract price of $2,000,000. When the building was 90 percent complete, a severe thunderstorm struck the area. A bolt of lightning struck the unfinished roof, igniting a fire that burned the entire building to the ground without fault by either party. The contractor demanded that the developer pay for the work completed to date ($1,800,000) or provide additional funds to reconstruct the building. The developer refused, demanding that the contractor rebuild the structure for the remaining unpaid contract price. The contractor walked off the job, and the developer sued for breach.",
        q: "What is the legal effect of the building's destruction on the parties' contractual obligations?",
        opts: [
            "The contractor's duty to build was discharged by objective impossibility, and the contractor may recover $1,800,000 in quantum meruit.",
            "The contractor remains obligated to rebuild the structure for the original contract price, and the fire does not excuse performance.",
            "Both parties are discharged from further performance, but the developer must reimburse the contractor for reasonable material costs incurred before the fire.",
            "The contract was frustrated in purpose, discharging both parties with no liability or restitutionary recovery on either side."
        ],
        ans: 1,
        exp: "Rule: In construction contracts, a critical legal distinction exists between contracts to construct an entirely *new* building and contracts to repair or remodel an *existing* building. Under the common law, if a new structure is destroyed during construction by an act of nature without the fault of either party, performance is NOT excused by impossibility because it is still physically possible to rebuild the structure from the ground up. The contractor bears the risk of loss prior to completion and delivery and remains bound to complete the building for the agreed contract price (Option B). Option A is incorrect because impossibility applies only where the subject matter cannot be replaced; a contractor can erect another new building on the lot. Option C is incorrect because restitution for partially completed work prior to destruction is available only in *repair/remodel* contracts (where the destruction of the preexisting owner-owned building makes completion impossible), not new construction. Option D is incorrect because the basic purpose of the transaction (erecting an office building on the land) has not been frustrated."
    },
    {
        id: 8,
        topic: "Mixed",
        fp: "An eccentric millionaire hosted an evening dinner party at his secluded country estate. During dinner, the host announced that he believed one of the eight guests had stolen an antique gold watch from his study. The host quietly locked the heavy front door, which was the only readily visible exit from the mansion. In fact, a rear servant door and an unlocked sliding patio door on the ground floor were completely unlatched and provided immediate, safe, and unobstructed access to the estate gardens and driveway. None of the guests attempted to look for another door or tried to leave for two hours until the host found the watch in his own coat pocket and unlocked the front door. One of the guests subsequently sued the host for false imprisonment.",
        q: "Will the guest prevail in an action for false imprisonment against the host?",
        opts: [
            "Yes, because the host intentionally confined the guests by locking the primary exit to the premises.",
            "Yes, unless the host had probable cause to detain the guests under a shopkeeper's privilege analogy.",
            "No, if a reasonable person in the guest's position would have discovered the available, safe, and reasonable means of escape.",
            "No, because the guest did not suffer any physical harm or economic damages during the two hours."
        ],
        ans: 2,
        exp: "Rule: False imprisonment requires: (1) an intentional act by the defendant, (2) resulting in the unlawful confinement of the plaintiff within a bounded area, and (3) awareness of the confinement or physical harm resulting from it. Confinement is not present if there is a known, safe, and reasonable means of escape. If an exit is readily discoverable by a reasonable person without danger or humiliation, the area is not bounded in the legal sense. A plaintiff cannot establish false imprisonment if a reasonable and completely safe alternative exit was readily available and discoverable (Option C). Option A is incorrect because locking one door does not constitute actionable confinement if another safe, readily accessible door exists and could be found upon reasonable inspection. Option B is incorrect because private dinner hosts possess no common law shopkeeper's privilege, but confinement itself is lacking. Option D is incorrect because false imprisonment is an intentional tort where nominal damages are recoverable without proof of physical injury or economic loss."
    },
    {
        id: 9,
        topic: "Mixed",
        fp: "Defendant was walking through a dimly lit commercial alleyway late at night when a stranger stepped from behind a dumpster holding what appeared to be a large metal pipe. The stranger raised the pipe, stepped toward Defendant, and shouted: 'Empty your pockets right now or I'll smash your skull in!' Believing his life was in immediate peril, Defendant drew a licensed concealed firearm and shot the stranger in the chest, killing him instantly. Subsequent investigation revealed that the stranger was an avant-garde performance artist executing an unannounced piece of guerrilla street theater, and the 'pipe' was a lightweight prop made of silver-painted foam. Defendant was charged with common law murder.",
        q: "Which of the following best describes the validity of Defendant's claim of self-defense?",
        opts: [
            "Invalid, because the use of deadly force is never justified against non-deadly force, even if the mistake was reasonable.",
            "Invalid, because Defendant had a legal duty to retreat before using deadly force in a public alleyway.",
            "Valid, because an actor may use deadly force if he reasonably believes that deadly force is being threatened against him, even if that belief is based on a reasonable mistake of fact.",
            "Valid, because self-defense is evaluated under an entirely subjective standard regarding the actor's actual, honest state of mind."
        ],
        ans: 2,
        exp: "Rule: An individual is privileged to use deadly force in self-defense if he is without fault and reasonably believes that he is threatened with imminent death or serious bodily harm. A reasonable mistake of fact does not destroy the privilege: if a reasonable person in the defendant's position would have believed that the attacker had a weapon and threatened lethal force, the use of deadly force is fully justified (Option C). Option A is incorrect because self-defense does not require actual, objective danger in hindsight; a reasonable appearance of lethal peril justifies deadly force. Option B is incorrect because even in jurisdictions adhering to the minority retreat rule, retreat is not required unless it can be accomplished with complete safety, which is not possible when an armed aggressor is stepping forward in close quarters. Option D is incorrect because common law self-defense requires both subjective good faith AND objective reasonableness; it is not evaluated under a purely subjective standard."
    },
    {
        id: 10,
        topic: "Mixed",
        fp: "A pharmaceutical sales representative parked his car on a steep residential hill. The representative applied the mechanical emergency brake but carelessly neglected to curb the front wheels toward the street curb, as explicitly required by a municipal traffic safety ordinance enacted to prevent runaway vehicles. Five minutes later, a heavy commercial delivery truck struck the rear bumper of the representative's parked car with extraordinary force. The impact severed the emergency brake cable, and the representative's car rolled down the hill, crashing through a homeowner's living room window. The homeowner sued the representative for negligence, invoking the doctrine of negligence per se.",
        q: "What is the representative's most effective argument against liability based on negligence per se?",
        opts: [
            "The municipal ordinance was intended to protect pedestrians, not real property owners.",
            "The violent collision by the delivery truck was an unforeseeable superseding cause that broke the chain of proximate causation.",
            "Negligence per se cannot be established without proving that the representative had actual knowledge of the municipal ordinance.",
            "The violation of a municipal parking ordinance creates merely a rebuttable presumption of negligence rather than conclusive negligence."
        ],
        ans: 1,
        exp: "Rule: While the violation of an applicable safety statute or ordinance establishes duty and breach (negligence per se) if the plaintiff is within the class of persons intended to be protected and suffers the type of harm the statute was designed to prevent, the plaintiff must still prove proximate (legal) causation. An unforeseeable, highly extraordinary intervening force (such as a parked car being violently struck with extraordinary force by a third party's heavy truck) operates as a superseding cause that cuts off the defendant's liability (Option B). Option A is incorrect because anti-runaway curbing ordinances are intended to protect all persons and property located downhill in the path of rolling vehicles. Option C is incorrect because ignorance of the law is no defense; actors are presumed to know safety statutes. Option D is incorrect because while some states treat ordinance violations as mere evidence of negligence, asserting a total break in proximate causation via a superseding cause is a complete defense that defeats liability under any standard."
    },
    {
        id: 11,
        topic: "Mixed",
        fp: "A homeowner engaged an electrical contractor in writing to completely rewire his home for $12,000, payable upon completion on September 1. After the contractor had completed 50 percent of the rewiring, the contractor suffered an acute cash flow crisis and assigned 'all rights to the $12,000 payment under the contract' to a local finance company in exchange for an immediate cash advance of $10,000. The finance company immediately mailed written notice of the assignment to the homeowner, who received it on August 10. Thereafter, the contractor completely abandoned the project without justification. The homeowner was forced to hire a replacement electrician, who charged $8,000 to complete the rewiring in accordance with the original specifications. The finance company then sued the homeowner for $12,000.",
        q: "How much is the finance company entitled to recover from the homeowner?",
        opts: [
            "$12,000, because an assignee for value is not subject to personal defenses arising between the assignor and the obligor after notice of assignment.",
            "$10,000, representing the actual value advanced by the assignee in good faith.",
            "$4,000, representing the original contract price less the reasonable cost incurred by the homeowner to complete performance.",
            "Nothing, because the contractor's material breach excused the homeowner from any duty to pay the contract price."
        ],
        ans: 2,
        exp: "Rule: An assignee stands in the shoes of the assignor and takes the assignment subject to all defenses, setoffs, and counterclaims that the obligor has against the assignor arising out of the underlying contract, regardless of whether the defense accrued before or after notice of the assignment. Under standard contract expectation damages, when a builder breaches by partial performance, the owner is entitled to deduct the reasonable cost of completion from the contract price. The total contract price was $12,000. The homeowner paid $8,000 to complete the job. The remaining value earned under the contract is $12,000 - $8,000 = $4,000. Because the contractor would have been entitled to recover $4,000 (contract price minus cost of completion), the finance company as assignee is entitled to recover that exact net amount, $4,000 (Option C). Options A and B are incorrect because an assignee takes subject to all defenses arising from the original transaction and cannot recover more than the assignor could have recovered. Option D is incorrect because the homeowner received the benefit of 50% of the work and the net calculation ($12,000 - $8,000) prevents unjust enrichment while fully protecting the owner's expectation interest."
    },
    {
        id: 12,
        topic: "Mixed",
        fp: "A nurse working in a hospital pharmacy decided to steal expensive narcotics to sell on the street. Late at night, using her authorized employee keycard, she entered the pharmacy supply room during her normal work shift. She placed 20 vials of morphine into her personal tote bag, intending to carry them home. While walking toward the hospital exit, she was stopped by hospital security for a routine bag inspection, and the narcotics were discovered. The jurisdiction retains traditional common law property offenses.",
        q: "What crime did the nurse commit?",
        opts: [
            "Embezzlement.",
            "Larceny.",
            "Common law burglary.",
            "False pretenses."
        ],
        ans: 1,
        exp: "Rule: Larceny is the trespassory taking and carrying away (asportation) of the personal property of another with the intent to permanently deprive. Embezzlement is the fraudulent conversion of property by an individual who is already in *lawful possession* of the property. A crucial common law distinction governs employees: an employee who has mere access to, or physical control over, employer property on the employer's premises has mere *custody*, not lawful possession; possession remains constructively in the employer. When an employee takes property from the employer's custody and converts it with animus furandi, the taking is trespassory, constituting larceny rather than embezzlement (Option B). Option A is incorrect because low- or mid-level employees exercising handling duties have mere custody, not lawful possession; embezzlement requires high-level trust or independent bailment possession. Option C is incorrect because the nurse was authorized to enter the hospital pharmacy room during her shift, negating the trespassory 'breaking' element of burglary. Option D is incorrect because the nurse did not obtain title to the drugs through false representations."
    },
    {
        id: 13,
        topic: "Mixed",
        fp: "A customer walked into a department store on a rainy afternoon. Another customer had tracked water onto the smooth marble floor near the store entrance five minutes earlier. The store maintained a policy of mopping entryways every 15 minutes during rainstorms, and a janitor was in the process of gathering cleaning supplies nearby. The customer slipped on the puddle of water, fell, and fractured her hip. The customer sued the store for negligence. The evidence established that store employees were unaware of the specific puddle and that it had existed for only five minutes.",
        q: "Is the store liable to the customer for negligence?",
        opts: [
            "Yes, because business owners owe invitees a non-delegable duty to maintain completely dry and slip-free entryways during wet weather.",
            "Yes, under the doctrine of res ipsa loquitur, because slippery water puddles do not ordinarily occur in entryways without negligence.",
            "No, because the customer was contributorily negligent for failing to observe the wet floor during rainy conditions.",
            "No, because the puddle had not existed for a sufficient period of time to charge the store with constructive notice of the hazard."
        ],
        ans: 3,
        exp: "Rule: A business owner owes invitees a duty to exercise reasonable care to inspect the premises and keep them reasonably safe from concealed dangerous conditions. However, for slip-and-fall hazards caused by transitory substances (like tracked-in rainwater), the plaintiff must prove that the store either caused the condition, had actual notice of it, or had constructive notice (meaning the hazard existed for a sufficient length of time that a reasonable business owner would have discovered and rectified it). A puddle existing for only five minutes on a rainy day does not establish constructive notice, especially where the store maintained a reasonable 15-minute inspection protocol (Option D). Option A is incorrect because business owners are not strictly liable insurers of invitee safety; they owe only reasonable care. Option B is incorrect because res ipsa loquitur does not apply to tracked-in rainwater, which frequently occurs without any breach by the premises owner. Option C is incorrect because invitees are entitled to assume floors are reasonably safe, and a five-minute puddle creates an issue of defendant's notice rather than absolute plaintiff fault."
    },
    {
        id: 14,
        topic: "Mixed",
        fp: "A grain merchant orally agreed over the telephone to sell 2,000 bushels of wheat to a bakery at a price of $6 per bushel ($12,000 total), with delivery in 30 days. Two days later, the merchant mailed to the bakery a written confirmation of the sale, printed on the merchant's official letterhead and signed by the merchant's sales manager, setting forth all the agreed terms including quantity, quality, price, and delivery dates. The purchasing manager of the bakery received the confirmation letter the following morning, read it, and placed it in a desk folder. The bakery sent no response or communication of any kind to the merchant. Twenty days later, the market price of wheat plummeted to $3 per bushel. When the merchant tendered delivery of the wheat, the bakery rejected the shipment, asserting that the oral agreement was unenforceable under the Statute of Frauds.",
        q: "Is the bakery's Statute of Frauds defense valid?",
        opts: [
            "Yes, because the bakery never signed any written contract or memorandum agreeing to the transaction.",
            "Yes, because the merchant's confirmatory memorandum cannot satisfy the Statute of Frauds against a recipient who did not dispatch an acceptance.",
            "No, because under the merchant's confirmatory memo rule, the bakery's failure to object in writing within 10 days satisfied the Statute of Frauds.",
            "No, because contracts for the sale of agricultural commodities are wholly exempt from the provisions of UCC Article 2."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-201(2) (the Merchant's Exception / Confirmatory Memo Rule), between merchants, if within a reasonable time a writing in confirmation of the contract and sufficient against the sender is received, and the party receiving it has reason to know its contents, it satisfies the requirements of the Statute of Frauds against such receiving merchant unless written notice of objection to its contents is given within 10 days after it is received. Both parties are merchants dealing in grain and bakery supplies. The signed confirmatory memo bound the merchant, and the bakery's complete failure to object within 10 days removed the Statute of Frauds defense (Option C). Option A is incorrect because the merchant's memo exception specifically overrides the signature requirement against the receiving merchant. Option B is incorrect because the memo satisfies the Statute of Frauds, not as an offer requiring acceptance, but as an evidentiary memorandum of an existing oral contract. Option D is incorrect because agricultural crops (wheat) are 'goods' governed by UCC Article 2."
    },
    {
        id: 15,
        topic: "Mixed",
        fp: "A man became intensely jealous of his former business partner. Seeking revenge, the man waited in the shadows outside the partner's house at night, brandishing an iron bar. When a figure emerged from the doorway in the dark, the man sprang forward and struck the person violently over the head with the bar, fracturing the victim's skull. Upon turning the victim over, the man was horrified to discover that he had struck his own brother, who had arrived unexpectedly to visit the partner. The brother suffered permanent brain damage. The man was charged with assault with a deadly weapon with intent to commit murder.",
        q: "Can the man properly be convicted of assault with a deadly weapon with intent to commit murder against his brother?",
        opts: [
            "No, because the man had no intent to cause any injury to his brother, and his mistake was genuine.",
            "No, because the doctrine of transferred intent applies only when the unintended victim actually dies.",
            "Yes, because the man's specific intent to kill the partner transfers to the actual victim he struck.",
            "Yes, because assault with a deadly weapon is a strict liability offense requiring no proof of mens rea."
        ],
        ans: 2,
        exp: "Rule: Under the doctrine of transferred intent, when an actor intends to commit a specific crime against one person (e.g., intending to kill his business partner with a deadly weapon), but through mistake or bad aim directs the physical act against another unintended person, the mental state (intent) transfers to the actual victim. The man intended to kill the person emerging from the house with a deadly weapon; under transferred intent, that homicidal intent attaches to the brother whom he struck (Option C). Option A is incorrect because a mistake of victim identity does not negate criminal intent under transferred intent principles. Option B is incorrect because transferred intent applies to completed non-fatal crimes (like battery, assault with a deadly weapon, and attempted homicide against the struck victim) as well as completed homicides. Option D is incorrect because assault with a deadly weapon with intent to commit murder is a specific intent crime requiring proof of intent, which is provided here by transferred intent."
    },
    {
        id: 16,
        topic: "Mixed",
        fp: "A manufacturer of high-precision laboratory glassware entered into a written contract to produce and deliver 500 customized glass condensers to a chemical research laboratory for $25,000. The contract specified: 'Delivery must be made on or before October 1. Time is of the essence.' The contract was completely silent regarding any right to cure nonconforming deliveries. On September 15, the manufacturer delivered 500 condensers to the laboratory. Upon inspection on September 16, the laboratory discovered that the condenser joint ground glass was slightly rougher than required by the technical specifications, although functional. The laboratory immediately notified the manufacturer in writing that it was rejecting the entire shipment due to the nonconformity. On September 17, the manufacturer notified the laboratory that it had modified its production polishing line and would deliver 500 fully conforming condensers on September 30. The laboratory replied that the contract was terminated and refused to allow the manufacturer to tender a substitute shipment.",
        q: "Did the laboratory have the legal right to reject the manufacturer's tender of cure on September 30?",
        opts: [
            "Yes, because under the UCC perfect tender rule, the buyer's rejection of nonconforming goods gives the buyer the absolute right to cancel the contract.",
            "Yes, because the contract contained a 'time is of the essence' clause that eliminated any statutory right to cure.",
            "No, because the manufacturer had an absolute statutory right to cure by tendering conforming goods within the original contract time.",
            "No, because the defect was minor and did not constitute a material breach under standard commercial standards."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-508(1), where any tender or delivery by the seller is rejected because it is nonconforming, and the agreed time for performance has not yet expired, the seller may seasonably notify the buyer of his intention to cure and may then within the contract time make a conforming delivery. The contract delivery deadline was October 1. The rejection occurred on September 16. The manufacturer seasonably gave notice on September 17 of its intention to cure and tendered conforming goods on September 30—before the contractual deadline of October 1 expired. The manufacturer had an absolute right to cure, and the laboratory breached by refusing to allow it (Option C). Option A is incorrect because the perfect tender rule (UCC § 2-601) is explicitly subject to the seller's right to cure under § 2-508. Option B is incorrect because a 'time is of the essence' clause enforces performance by the agreed date (October 1); it does not abrogate the statutory right to cure prior to that date. Option D is incorrect because the perfect tender rule applies to single-delivery sales of goods; the laboratory had the right to reject the initial tender, but could not reject a timely, conforming cure."
    },
    {
        id: 17,
        topic: "Mixed",
        fp: "A professional window washer was cleaning the exterior tenth-story windows of a high-rise office building while standing on a suspended scaffold platform. The scaffold had been manufactured by an equipment company. The company had installed safety guardrails secured by standard steel retaining pins. However, the company failed to install secondary safety cotter pins—an inexpensive, standard feature in the scaffolding industry designed to prevent primary pins from vibrating loose. While the washer was working, normal wind turbulence caused a primary pin to slide out, collapsing the left side of the platform. The washer plunged to the ground and was killed. The washer's safety harness was securely attached to his body, but the washer had negligently failed to tie off his harness lanyard to the building's independent roof lifeline, in clear violation of state occupational safety regulations. The washer's estate brought a strict products liability design defect action against the scaffold manufacturer in a pure comparative fault jurisdiction.",
        q: "What is the legal effect of the window washer's failure to tie off his safety harness?",
        opts: [
            "It is a complete defense that bars the estate from any recovery against the manufacturer.",
            "It constitutes ordinary comparative fault that reduces the estate's damage recovery proportionately.",
            "It is completely inadmissible because contributory negligence is never a defense to strict products liability.",
            "It operates as an unforeseeable superseding cause that severs proximate causation as a matter of law."
        ],
        ans: 1,
        exp: "Rule: In modern tort law and under Restatement (Third) of Torts: Products Liability § 17, pure comparative fault principles apply to strict products liability actions. While a consumer's mere failure to discover or guard against a product defect is not a defense, a plaintiff's affirmative negligent conduct or misuse—such as violating safety rules by failing to tie off a lifeline—constitutes comparative negligence that proportionately reduces, but does not completely bar, recovery in a pure comparative fault jurisdiction (Option B). Option A is incorrect because pure comparative fault reduces damages rather than barring recovery. Option C is incorrect because modern jurisdictions apply comparative fault to strict products liability when the plaintiff's negligence consists of unreasonable conduct beyond mere failure to inspect. Option D is incorrect because user safety failures (like unclipped harnesses) are a foreseeable risk of high-rise window washing and do not constitute an extraordinary superseding cause that cuts off liability for a defectively designed scaffold."
    },
    {
        id: 18,
        topic: "Mixed",
        fp: "A doctor was treating an elderly patient suffering from severe terminal bone cancer. The patient was in agonizing, uncontrollable pain that could no longer be managed with standard pain medication. The patient repeatedly and lucidly begged the doctor to administer a lethal dose of medication to end her suffering. Moved by deep compassion and wishing only to relieve the patient's unbearable agony, the doctor prepared and injected a massive overdose of potassium chloride, which caused instantaneous cardiac arrest and death. The doctor immediately documented his actions in the hospital records. When charged with common law murder, the doctor asserted that he acted without malice aforethought because his sole motive was mercy and the patient had consented.",
        q: "Is the doctor guilty of common law murder?",
        opts: [
            "No, because the consent of a competent, terminally ill patient negates the element of unlawful killing.",
            "No, because the doctor acted out of genuine compassion and lacked malice aforethought.",
            "Yes, because voluntary euthanasia is an intentional killing without lawful justification or excuse, establishing malice aforethought.",
            "Yes, but only of voluntary manslaughter under the doctrine of imperfect necessity."
        ],
        ans: 2,
        exp: "Rule: At common law, murder is the unlawful killing of a human being with malice aforethought. Malice aforethought is established by: (1) intent to kill, (2) intent to inflict serious bodily harm, (3) depraved-heart recklessness, or (4) felony murder. Benevolent motive, compassion, or 'mercy killing' (euthanasia) does not negate malice aforethought. Furthermore, consent of the victim is never a defense to homicide. The doctor acted with the express, premeditated intent to cause death, which constitutes malice aforethought as a matter of law (Option C). Option A is incorrect because victim consent is legally void as a defense to murder. Option B is incorrect because motive is legally distinct from intent; an actor can possess an admirable motive while harboring the specific intent to kill. Option D is incorrect because necessity is never a defense to an intentional homicide at common law, and 'imperfect necessity' does not reduce murder to voluntary manslaughter."
    },
    {
        id: 19,
        topic: "Mixed",
        fp: "A high school biology teacher placed an online order with a biological supply company for 30 preserved bullfrogs for dissection, at a price of $15 per frog ($450 total), specifying delivery to the school by March 15. The contract provided for payment 30 days after delivery. On March 10, the company delivered 30 preserved bullfrogs. The teacher unpacked the specimens and immediately noticed that while all 30 frogs were well preserved and suitable for dissection, 10 of them were grass frogs (a smaller species) rather than bullfrogs. The teacher placed the 10 grass frogs back in their shipping carton and set them beside the laboratory door, while keeping the 20 bullfrogs in the classroom storage cabinet. On March 12, the teacher telephoned the supply company and stated: 'Ten of the frogs you sent were grass frogs, which do not conform to our order. I have accepted the 20 bullfrogs and will pay $15 each for them, but I am rejecting the 10 grass frogs. They are boxed and ready for your courier to pick up.' The company refused to accept the return, insisting that the teacher had to either accept the entire shipment or reject all of it.",
        q: "What were the teacher's rights regarding the nonconforming shipment under UCC Article 2?",
        opts: [
            "The teacher was required to reject the entire shipment because commercial units of goods cannot be accepted in part.",
            "The teacher had the right to accept any commercial units and reject the rest.",
            "The teacher was required to accept the entire shipment because the substitution of grass frogs did not substantially impair the value of the order.",
            "The teacher's acceptance of the 20 bullfrogs operated as an acceptance of the entire shipment as a matter of law."
        ],
        ans: 1,
        exp: "Rule: Under UCC § 2-601 (the Perfect Tender Rule), if the goods or the tender of delivery fail in any respect to conform to the contract, the buyer may: (a) reject the whole; (b) accept the whole; or (c) accept any commercial unit or units and reject the rest. A preserved specimen frog is a standard commercial unit. The teacher was fully within her statutory rights under UCC § 2-601(c) to accept conforming commercial units (the 20 bullfrogs) and reject nonconforming commercial units (the 10 grass frogs) (Option B). Option A is incorrect because commercial units can be accepted in part, provided the buyer does not divide a single indivisible unit. Option C is incorrect because the substantial impairment standard applies to installment contracts under UCC § 2-612 or revocation of acceptance under § 2-608, not to initial tender in a single-delivery sales contract. Option D is incorrect because partial acceptance is explicitly authorized by UCC § 2-601."
    },
    {
        id: 20,
        topic: "Mixed",
        fp: "A security guard was patrolling an industrial shipping yard at night. The guard observed a man walking near a stack of shipping containers marked with high-voltage warning placards. Believing the man was a trespasser attempting to steal copper wiring, the guard approached with his flashlight, drew his baton, and shouted: 'Freeze, security!' The man, who was actually an authorized independent safety inspector conducting a nighttime acoustic audit, turned toward the guard. The guard ordered the man to place his hands on top of his head and sit on the ground. The inspector complied, showing his official photo identification badge and state inspection permit. The guard examined the badge, realized the inspector was fully authorized to be on the premises, and apologized, allowing the inspector to leave immediately. The entire encounter lasted approximately 90 seconds. The inspector brought an action for false imprisonment against the security company employing the guard.",
        q: "Is the security company liable to the inspector for false imprisonment?",
        opts: [
            "Yes, because the guard intentionally confined the inspector without actual legal authority, and lack of malice is not a defense.",
            "Yes, because the inspector was an invitee on the property and had committed no unlawful acts.",
            "No, if the guard reasonably believed that the inspector was trespassing and the detention was reasonable in duration and manner.",
            "No, because a temporary detention lasting under two minutes is insufficient as a matter of law to constitute confinement."
        ],
        ans: 2,
        exp: "Rule: Under the common law shopkeeper's privilege and private security privileges (Restatement (Second) of Torts § 120A), a property owner or its authorized agent (security guard) is privileged to detain an individual for a reasonable investigation if: (1) there is a reasonable belief that the person is committing an unauthorized intrusion (trespass) or theft; (2) the detention is conducted in a reasonable manner; and (3) the detention lasts for a reasonable period of time necessary to verify identity. Because the guard observed an unidentified person in a restricted area at night, reasonably investigated, and immediately released the inspector upon inspecting his credentials within 90 seconds, the detention was privileged (Option C). Option A is incorrect because a reasonable, good-faith mistake regarding privilege does not impose liability if the criteria for protective detention are met. Option B is incorrect because invitee status does not destroy a security guard's privilege to investigate suspicious circumstances. Option D is incorrect because false imprisonment has no minimum time duration; any confinement, even for seconds, is actionable unless privileged."
    },
    {
        id: 21,
        topic: "Mixed",
        fp: "Defendant and an accomplice planned to rob a jewelry store. Defendant handed the accomplice an unloaded revolver, instructing him: 'Use this only to scare the clerk. Do not hurt anyone.' Defendant remained in the alley behind the store as a lookout. Inside the store, the accomplice pointed the revolver at the clerk and demanded diamond rings. The clerk reached under the counter to hit a panic button. The accomplice, panicked by the clerk's sudden movement, struck the clerk forcefully on the temple with the heavy barrel of the revolver. The blow fractured the clerk's skull, causing a fatal brain hemorrhage. The accomplice grabbed several rings, ran into the alley, and fled with Defendant. The jurisdiction adheres to common law felony murder rules and accomplice liability doctrines.",
        q: "What is Defendant's liability regarding the clerk's death?",
        opts: [
            "Defendant is not guilty of felony murder because he explicitly instructed the accomplice not to harm anyone.",
            "Defendant is guilty of involuntary manslaughter only, because Defendant's conduct was criminally negligent rather than malicious.",
            "Defendant is guilty of felony murder because the killing occurred during the commission of an inherently dangerous felony in which Defendant participated as an accomplice.",
            "Defendant is not guilty of any homicide offense because the accomplice's violent assault was an unexpected deviation that severed accomplice liability."
        ],
        ans: 2,
        exp: "Rule: Under the felony murder rule and accomplice liability (the Pinkerton doctrine), an accomplice to an inherently dangerous felony (such as robbery) is liable for all foreseeable crimes committed by a co-felon in furtherance of the common criminal design. A fatal assault upon a victim during an armed robbery is an entirely foreseeable risk of the felony. Private instructions or agreements among co-felons to refrain from violence do not insulate an accomplice from liability if a killing in fact occurs during the felony or immediate flight therefrom. Defendant is an accomplice to the robbery and is therefore guilty of felony murder (Option C). Option A is incorrect because co-felon instructions to avoid violence are legally ineffective to prevent felony murder liability. Option B is incorrect because felony murder requires no proof of criminal negligence or personal malice; the intent to commit the underlying felony supplies the malice aforethought for murder. Option D is incorrect because violence during an armed robbery is a natural and probable consequence, not an unexpected superseding deviation."
    },
    {
        id: 22,
        topic: "Mixed",
        fp: "An avid art enthusiast read a profile in a national arts magazine about an emerging landscape painter who was having a gallery opening. The magazine stated that the painter had completed a breathtaking oil painting of the Grand Canyon titled 'Morning Splendor,' which would be sold at the gallery on Saturday for $10,000. Excited, the enthusiast sent a signed telegram to the painter on Friday morning: 'I hereby accept your offer to sell Morning Splendor for $10,000 as stated in the magazine profile. Will wire funds upon receipt of delivery confirmation.' The enthusiast also hired an interior decorator for $1,500 to re-hang the lighting in her living room specifically to showcase the painting. When the enthusiast arrived at the gallery on Saturday, the painter informed her that 'Morning Splendor' had already been sold to another buyer for $15,000. The enthusiast sued the painter for breach of contract, seeking to enforce the sale or recover reliance damages for the decorator's fee.",
        q: "Was an enforceable contract formed between the enthusiast and the painter?",
        opts: [
            "Yes, because the enthusiast's telegram constituted a valid acceptance of the painter's specific offer in the magazine.",
            "Yes, because the enthusiast foreseeably relied on the magazine announcement to her financial detriment.",
            "No, because the magazine profile was merely an invitation to deal and not an operative offer.",
            "No, because contracts for the sale of original artwork must be negotiated in person to satisfy mutual assent."
        ],
        ans: 2,
        exp: "Rule: Advertisements, catalogs, price lists, and media profiles are generally construed as preliminary invitations to negotiate (invitations to deal), rather than legal offers. An advertisement constitutes an offer only if it contains clear, definite, and explicit terms leaving nothing open for negotiation and specifies *who* can accept (such as 'first come, first served' for a specific item, as in *Lefkowitz*). A magazine profile mentioning a price is an invitation to deal. Thus, the enthusiast's telegram was an offer to buy, not an acceptance, and no contract was formed (Option C). Option A is incorrect because the magazine article was not an offer. Option B is incorrect because promissory estoppel requires a definite promise; reliance on a mere advertisement or magazine feature is unreasonable as a matter of law. Option D is incorrect because artwork can be sold via written correspondence; in-person negotiation is not legally required."
    },
    {
        id: 23,
        topic: "Mixed",
        fp: "A pedestrian was walking past an active construction excavation on a public sidewalk. The general contractor had failed to erect protective barricades or warning tape around an eight-foot-deep trench, leaving the hazard open and exposed to pedestrian traffic. As the pedestrian walked near the edge of the trench, a third-party skateboarder negligently collided with the pedestrian, knocking the pedestrian off his feet. The pedestrian tumbled into the trench, sustaining severe orthopedic injuries. Medical testimony established that had the pedestrian fallen onto ordinary flat sidewalk pavement, he would have suffered only minor bruises; his severe injuries resulted directly from falling into the eight-foot trench. The pedestrian sued the general contractor for negligence. The contractor moved for summary judgment, asserting that the skateboarder's negligent collision was an independent intervening cause that absolved the contractor of liability.",
        q: "Should the court grant the contractor's motion?",
        opts: [
            "Yes, because the skateboarder's active negligence was the immediate initiating cause of the pedestrian's fall.",
            "Yes, because an open excavation is an obvious danger, and the contractor owed no duty to guard against third-party collisions.",
            "No, because the danger of an entrant falling into an unbarricaded trench is the precise hazard that made the contractor's failure to barricade negligent.",
            "No, because general contractors are strictly liable for hazardous trench conditions adjacent to public walkways."
        ],
        ans: 2,
        exp: "Rule: An intervening force does not sever proximate causation if it was foreseeable, or if the resulting harm is the very risk that made the defendant's conduct negligent in the first place. When a contractor negligently leaves a deep excavation open next to a crowded public sidewalk, the precise foreseeable risk created by that negligence is that a pedestrian might fall into the trench—whether due to stumbling, wind, distraction, or being bumped by a third party. The skateboarder's collision was a concurrent intervening cause, not an extraordinary superseding cause (Option C). Option A is incorrect because an intervening negligent act does not cut off liability if the resulting injury was within the scope of the original foreseeable risk. Option B is incorrect because possessors of land creating artificial hazards adjacent to public rights-of-way owe a duty of reasonable care to protect the traveling public. Option D is incorrect because an excavation trench is evaluated under negligence, not strict liability."
    },
    {
        id: 24,
        topic: "Mixed",
        fp: "Defendant and an acquaintance spent an afternoon drinking heavily at a tavern. Both men became severely intoxicated, exhibiting slurred speech and unsteady gait. After an argument over sports trivia, the acquaintance punched Defendant in the shoulder. Enraged, Defendant pulled a hunting knife from his belt and slashed the acquaintance across the throat, severing his carotid artery and killing him within minutes. At his trial for common law murder, Defendant presented uncontradicted expert medical evidence that his blood-alcohol concentration was 0.24 percent, and that he was so severely intoxicated that he was physically and mentally incapable of forming a specific intent to kill or engaging in premeditation and deliberation. The jurisdiction follows common law homicide rules.",
        q: "What is the most serious homicide offense of which Defendant can properly be convicted?",
        opts: [
            "First-degree premeditated murder.",
            "Second-degree murder.",
            "Voluntary manslaughter.",
            "Involuntary manslaughter."
        ],
        ans: 1,
        exp: "Rule: Voluntary intoxication is a defense only to *specific intent* crimes; it is NOT a defense to *general intent* crimes or crimes requiring recklessness (malice aforethought). Common law murder requires malice aforethought, which includes acting with a wanton and willful disregard of an unreasonable human risk (depraved-heart murder). Depraved-heart murder is a general malice/recklessness crime, not a specific intent crime. Voluntary intoxication cannot negate depraved-heart malice. Slashing an individual across the throat with a hunting knife during a bar brawl is an act exhibiting extreme, wanton indifference to human life. While voluntary intoxication negates specific intent to kill (first-degree premeditated murder), it does not negate depraved-heart malice; thus, Defendant remains guilty of second-degree murder (Option B). Option A is incorrect because severe intoxication negates premeditation and deliberation. Options C and D are incorrect because voluntary intoxication does not reduce murder to voluntary or involuntary manslaughter when the underlying act demonstrates depraved-heart malice."
    },
    {
        id: 25,
        topic: "Mixed",
        fp: "A dairy farmer entered into a written contract with an artisan cheese manufacturer to sell and deliver 1,000 gallons of Grade A raw milk per week for a period of one year, at an agreed price of $4.00 per gallon. The contract provided that payments would be made on the first day of each month for milk delivered during the preceding month. For the first eight months, both parties performed smoothly. In the ninth month, an unexpected regional drought caused cattle feed prices to increase by 40 percent. The farmer telephoned the cheese maker and explained that his feed costs had escalated significantly, stating that he would lose money unless the cheese maker agreed to increase the price to $4.50 per gallon for the remainder of the contract term. The cheese maker orally agreed to the 50-cent price increase. The farmer delivered 4,000 gallons during the ninth month, and the cheese maker accepted the delivery without objection. However, when the monthly invoice arrived, the cheese maker paid the farmer at the original rate of $4.00 per gallon ($16,000) and refused to pay the additional $2,000 ($0.50 per gallon). The farmer sued for breach of contract to recover the $2,000.",
        q: "Is the farmer entitled to recover the additional $2,000 from the cheese maker?",
        opts: [
            "No, because the oral modification was unsupported by new consideration under the pre-existing duty rule.",
            "No, because the contract as modified was for the sale of goods priced at $500 or more and violated the Statute of Frauds.",
            "Yes, because good-faith modifications under UCC Article 2 do not require consideration, and the cheese maker received and accepted the goods.",
            "Yes, because an unexpected 40 percent increase in feed prices constituted legal commercial impracticability that discharged the farmer's initial duty."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-209(1), a good-faith agreement modifying a contract for the sale of goods needs no consideration to be binding. While UCC § 2-209(3) provides that the requirements of the Statute of Frauds must be satisfied if the contract as modified is within its provisions, under UCC § 2-201(3)(c), an oral contract (or modification) is fully enforceable without a writing 'with respect to goods for which payment has been made and accepted or which have been received and accepted.' Because the cheese maker received and accepted the 4,000 gallons of milk delivered pursuant to the good-faith oral modification, the Statute of Frauds was satisfied by receipt and acceptance, making the modification enforceable for those delivered goods (Option C). Option A is incorrect because UCC § 2-209(1) abolished the pre-existing duty rule for sales of goods. Option B is incorrect because receipt and acceptance of the goods provides a complete statutory exception to the Statute of Frauds. Option D is incorrect because a 40 percent price increase in feed is an ordinary market fluctuation that does not rise to the level of objective commercial impracticability."
    }
];