// BabyBar-Mixed-13.js
// Distribution: 9 Criminal Law, 8 Torts, 8 Contracts
const examData = [
    {
        id: 1,
        topic: "Mixed",
        fp: "An entrepreneur wished to open a luxury boutique in a downtown commercial district. She approached a commercial landlord who owned an empty ground-floor retail unit. The landlord handed her a signed letter stating: 'I offer to lease retail suite 101 to you for a term of five years commencing October 1, at $4,000 per month. In consideration of $100 paid this day, I promise to hold this offer open for your acceptance until September 1.' The entrepreneur handed the landlord a $100 bill, which the landlord deposited in his desk. On August 15, the landlord telephoned the entrepreneur and said, 'A national bank just offered me double that rent. I hereby revoke my offer to lease suite 101.' On August 20, the entrepreneur delivered a written notice of acceptance to the landlord along with the first month's rent check. The landlord rejected the check and refused to permit her to occupy the suite. The entrepreneur sued for breach of contract.",
        q: "Did the entrepreneur's delivery of notice on August 20 form a binding contract?",
        opts: [
            "No, because an offeror retains the inherent power to revoke any offer at any time prior to acceptance.",
            "No, because leases of real property for more than one year are governed by strict real covenant rules that bar informal option agreements.",
            "Yes, because the landlord's promise to keep the offer open was supported by valid consideration, creating an enforceable option contract.",
            "Yes, because the landlord was a commercial merchant making a firm offer under the Uniform Commercial Code."
        ],
        ans: 2,
        exp: "Rule: Under the common law, an option contract is formed when the offeror promises to hold an offer open for a specified period and that promise is supported by consideration. Once an option contract is created, the offer is irrevocable for the stated term; an attempted revocation by the offeror during the option period is legally ineffective. Because the entrepreneur paid $100 in exchange for the landlord's promise to hold the lease offer open until September 1, a valid option contract was formed. The landlord's August 15 phone call was ineffective to revoke the offer, and the entrepreneur's acceptance on August 20 formed a binding contract (Option C). Option A is incorrect because the power to revoke is suspended when an offer is held open by a valid option. Option B is incorrect because option contracts for real property leases are fully enforceable if supported by consideration. Option D is incorrect because real estate transactions are governed by common law, not the UCC firm offer provisions of Article 2."
    },
    {
        id: 2,
        topic: "Mixed",
        fp: "A homeowner maintained a large ornamental garden in his suburban backyard, which was enclosed by a four-foot wooden split-rail fence. Across the rear property line, the homeowner installed a three-foot-wide decorative garden pool that was four feet deep. The water was dark and murky due to decorative aquatic plants. A five-year-old child who lived next door was playing in her own yard when she saw a brightly colored, motorized toy boat floating in the homeowner's pool, which the homeowner had left there after testing it the previous afternoon. Attracted by the toy boat, the child climbed over the split-rail fence, reached for the boat, fell into the murky water, and sustained severe brain damage from near-drowning. The child's parents brought a negligence action on her behalf against the homeowner.",
        q: "Will the child prevail against the homeowner?",
        opts: [
            "Yes, if the homeowner knew or had reason to know that children were likely to trespass, and the burden of eliminating the danger was slight compared to the risk.",
            "Yes, because landowners are strictly liable for artificial water hazards under the doctrine of dangerous instrumentalities.",
            "No, because natural and artificial bodies of water are open and obvious hazards to which the attractive nuisance doctrine never applies.",
            "No, because the child was a trespasser who entered the property without the express or implied consent of the owner."
        ],
        ans: 0,
        exp: "Rule: Under the Attractive Nuisance Doctrine (Restatement (Second) of Torts § 339), a possessor of land is subject to liability for physical harm to child trespassers caused by an artificial condition if: (1) the possessor knows or has reason to know that children are likely to trespass; (2) the condition is one the possessor knows or has reason to know involves an unreasonable risk of death or serious bodily harm to such children; (3) the children because of their youth do not discover the condition or realize the risk involved in intermeddling with it; (4) the utility of maintaining the condition and the burden of eliminating the danger are slight compared to the risk; and (5) the possessor fails to exercise reasonable care to eliminate the danger or protect children. Leaving an enticing toy boat in a deep, murky pool enclosed only by an easily climbable rail fence satisfies these requirements (Option A). Option B is incorrect because attractive nuisance is a negligence doctrine requiring proof of unreasonable risk and failure to exercise reasonable care; it does not impose strict liability. Option C is incorrect because while ordinary swimming pools often present obvious hazards to older children, murky artificial pools containing attractive toys visible to very young children fall squarely within the attractive nuisance doctrine. Option D is incorrect because the doctrine is a specific exception created precisely to protect child trespassers."
    },
    {
        id: 3,
        topic: "Mixed",
        fp: "Defendant and an acquaintance agreed to break into an electronics store late Sunday night to steal laptops. When they arrived at the rear alley, they discovered that the store's rear security door was made of reinforced solid steel with a heavy commercial deadbolt. The acquaintance attempted to pick the lock with a set of tools, while Defendant stood watch. After working on the lock for twenty minutes, the lock mechanism jammed completely, bending the lockpick. The acquaintance said, 'This lock is impossible. We can't get in.' Defendant examined the door, kicked it in frustration, and replied, 'You're right, let's get out of here.' Both men abandoned the scene and walked toward Defendant's car, where they were immediately stopped and arrested by a police patrol unit. The jurisdiction follows common law principles.",
        q: "What is the most serious crime of which Defendant can properly be convicted?",
        opts: [
            "Conspiracy to commit burglary only.",
            "Conspiracy to commit burglary and attempted burglary.",
            "Attempted burglary only, because the conspiracy merged into the attempt.",
            "No crime, because the men completely and voluntarily abandoned their criminal purpose before completing the offense."
        ],
        ans: 1,
        exp: "Rule: Common law conspiracy requires an agreement between two or more persons to commit an unlawful act with the specific intent that the crime be committed. The crime of conspiracy is complete upon agreement (and an overt act under modern statutes, satisfied here by traveling to the scene). Attempt requires a specific intent to commit the target crime and an overt act beyond mere preparation that comes dangerously close to completion. Picking the lock of the target structure goes far beyond preparation and constitutes an attempt. Crucially, conspiracy does NOT merge into the substantive target offense or an attempt; a defendant can be convicted of both conspiracy and the target crime or attempt (Option B). Option A is incorrect because Defendant is also guilty of attempted burglary. Option C is incorrect because conspiracy does not merge. Option D is incorrect because at common law, voluntary abandonment is not a defense once the attempt has progressed past preparation; moreover, abandonment motivated by extraneous difficulties (a jammed lock) is involuntary."
    },
    {
        id: 4,
        topic: "Mixed",
        fp: "An avid art dealer visited a collector's private gallery and observed an unsigned oil portrait depicting an eighteenth-century naval battle. The dealer, who had extensive academic training in art history, immediately recognized the brushwork, pigment aging, and canvas weave as the distinctive work of a famous maritime master whose lost works command millions of dollars. The collector, who had inherited the painting without any provenance documentation, stated: 'I think it's a nice period piece, probably painted by an obscure nineteenth-century copyist. I'll take $2,500 for it.' The dealer, remaining silent about his discovery and opinion, immediately replied, 'Sold.' The parties executed a standard bill of sale and the dealer paid $2,500 in cash. Two weeks later, the dealer had the painting authenticated as an original masterwork worth $1,500,000. Upon learning of the authentication in an art journal, the collector sued to rescind the contract on the ground of mistake.",
        q: "Can the collector rescind the contract?",
        opts: [
            "Yes, because both parties were mistaken as to the basic assumption regarding the true identity and market value of the painting.",
            "Yes, because the dealer's conscious failure to disclose his expert knowledge constituted fraudulent concealment.",
            "No, because the dealer did not commit misrepresentation, and the collector bore the risk of his own lack of knowledge regarding the painting's authorship.",
            "No, because contracts for the sale of personal property cannot be rescinded for unilateral mistake under any circumstances."
        ],
        ans: 2,
        exp: "Rule: Rescission for mutual mistake requires that both parties were mistaken about a basic assumption of fact that materially affects the agreed exchange, and the party seeking avoidance did not bear the risk of the mistake. Where a seller sells property with limited knowledge or treats his limited knowledge as sufficient (conscious ignorance), he bears the risk of the mistake. Furthermore, in an arm's-length transaction, a knowledgeable buyer has no affirmative fiduciary duty to disclose his superior expert opinions or market assessments to an ordinary seller, provided the buyer makes no affirmative misrepresentations. Because the dealer made no false statements and the collector bore the risk of selling without obtaining an expert appraisal, the contract is fully enforceable (Option C). Option A is incorrect because the mistake was unilateral (the dealer was not mistaken), and the collector bore the risk. Option B is incorrect because silence does not equal fraudulent concealment absent a fiduciary or confidential relationship. Option D is incorrect because unilateral mistake can support rescission under narrow equitable rules (e.g., severe unconscionability or when the other party knew of an error in calculation), but not where an arm's-length seller simply undervalues his own goods."
    },
    {
        id: 5,
        topic: "Mixed",
        fp: "A pedestrian was lawfully crossing a four-way intersection inside a painted crosswalk with the pedestrian signal showing 'WALK.' A motorist approached the red light at 25 mph. As the motorist pressed the brake pedal, the hydraulic brake line suddenly and catastrophically ruptured due to an undetectable internal metallurgical flaw, causing the brakes to fail entirely. The car had been fully inspected and serviced at a licensed garage only two days earlier. The motorist swerved to avoid hitting a school bus, striking the pedestrian and fracturing both of the pedestrian's legs. The pedestrian sued the motorist for negligence, relying on the state traffic statute requiring drivers to stop at red lights and yield to pedestrians in crosswalks.",
        q: "Is the motorist liable to the pedestrian under the doctrine of negligence per se?",
        opts: [
            "Yes, because the violation of a statutory safety standard enacted to protect crosswalk pedestrians constitutes negligence per se as a matter of law.",
            "Yes, because the motorist made a conscious, intentional choice to swerve into the pedestrian rather than the school bus.",
            "No, because statutory violations are excused where the non-compliance is caused by an emergency beyond the actor's control and not due to his own misconduct.",
            "No, because motorists owe no legal duty of care to pedestrians when confronted with sudden mechanical failures."
        ],
        ans: 2,
        exp: "Rule: The violation of an applicable safety statute constitutes negligence per se only in the absence of a legally recognized excuse. Under Restatement (Third) of Torts: Liability for Physical and Emotional Harm § 15 (and Restatement (Second) of Torts § 288A), an actor's violation of a statute is excused when: (a) the violation is reasonable in light of the actor's childhood, physical disability, or physical incapacitation; (b) the actor exercises reasonable care in attempting to comply with the statute; or (c) the actor is confronted by an unexpected emergency not of his own making (such as a sudden, latent mechanical failure of brakes recently inspected without negligence). Because the brake failure was completely undetectable and unpreventable through reasonable care, the motorist's technical violation of the traffic light statute is excused, defeating negligence per se (Option C). Option A is incorrect because statutory negligence per se is not an absolute, unyielding rule; it is subject to standard emergency/latent impossibility excuses. Option B is incorrect because swerving away from a loaded school bus during a sudden mechanical crisis represents a reasonable emergency reaction, not actionable intentional wrongdoing. Option D is incorrect because drivers always owe a duty of care to pedestrians; liability is defeated here because the duty was not breached."
    },
    {
        id: 6,
        topic: "Mixed",
        fp: "Defendant was a cashier at an upscale electronics boutique. Late one evening, Defendant decided to steal a newly released virtual reality headset retailing for $1,200 from the store's locked glass display cabinet. Knowing that the store manager maintained the only key to the display cabinet on a hook behind the employee checkout counter, Defendant waited until the manager stepped outside for a fifteen-minute dinner break. Defendant walked over to the hook, removed the key, unlocked the display case, took the headset, and concealed it inside his backpack. Defendant then locked the display case, returned the key to the hook, and walked out the front exit at the end of his shift. The jurisdiction adheres to traditional common law property offenses.",
        q: "What crime did Defendant commit?",
        opts: [
            "Embezzlement only.",
            "Larceny only.",
            "Both larceny and common law burglary.",
            "False pretenses only."
        ],
        ans: 1,
        exp: "Rule: Larceny is the trespassory taking and carrying away of the personal property of another with the intent to permanently deprive. An employee who handles or has physical access to employer property on the employer's premises has mere *custody*, not *possession*; legal possession remains constructively in the employer. When an employee takes goods from the employer's custody with felonious intent, he converts custody into wrongful possession via a trespassory taking, committing larceny. Embezzlement occurs only when an individual who already has lawful, entrusted possession (such as a high-level fiduciary, trustee, or bailee) fraudulently converts the property. Because Defendant was a store cashier with mere access/custody, his taking was a completed common law larceny (Option B). Option A is incorrect because cashiers handling goods in a retail store lack lawful possessory rights independent of the employer. Option C is incorrect because common law burglary requires breaking and entering a *dwelling house of another* in the nighttime; an electronics boutique is a commercial retail establishment, not a dwelling. Option D is incorrect because false pretenses requires acquiring title through fraudulent misrepresentations; Defendant obtained possession through stealth."
    },
    {
        id: 7,
        topic: "Mixed",
        fp: "A custom cabinetmaker entered into a written contract with an interior designer to build 20 bespoke walnut credenzas for $20,000, with delivery scheduled for June 1. The contract contained an express clause stating: 'Time is of the essence. Strict adherence to delivery deadlines is an express condition precedent to the buyer's obligation to accept or pay.' On May 25, the cabinetmaker telephoned the designer and explained that due to a supplier delay, the walnut veneer had arrived late, meaning the credenzas would be finished on June 3. The cabinetmaker asked, 'Will it be alright if I deliver on June 3?' The designer replied orally, 'Don't worry about it; June 3 will be totally fine.' Relying on this conversation, the cabinetmaker worked at a normal pace and finished the credenzas on June 2. On June 3, the cabinetmaker tendered the 20 completed credenzas. The designer rejected the tender, pointing to the written 'time is of the essence' clause and asserting that the failure to deliver by June 1 discharged his duty to buy.",
        q: "Was the designer legally entitled to reject the credenzas on June 3?",
        opts: [
            "Yes, because the contract contained an express condition of timely performance that was not modified in a signed writing.",
            "Yes, because an oral waiver of an express condition precedent is void under the common law parol evidence rule.",
            "No, because the designer's oral statement operated as a waiver of the timing condition, which became irrevocable upon the cabinetmaker's detrimental reliance.",
            "No, because under the doctrine of substantial performance, a two-day delay in a manufacturing contract can never constitute a material breach."
        ],
        ans: 2,
        exp: "Rule: Under general contract law and Restatement (Second) of Contracts § 84 (as well as UCC § 2-209(5)), a party who is the beneficiary of an express condition (such as a delivery deadline or time-of-the-essence clause) may waive that condition by words or conduct. While an executory waiver made without consideration can ordinarily be retracted before the condition is due upon reasonable notice, a waiver cannot be retracted if the other party has materially changed his position in reliance on the waiver (e.g., pacing his work so as not to finish by the original date). The designer waived the June 1 condition, and the cabinetmaker foreseeably relied on that waiver by completing performance for tender on June 3 (Option C). Option A is incorrect because waivers of conditions can be made orally and become binding through detrimental reliance even where a signed writing is otherwise required for full contract modification. Option B is incorrect because the parol evidence rule applies only to negotiations occurring prior to or contemporaneous with the execution of the writing, not subsequent waivers. Option D is incorrect because the doctrine of substantial performance does not override express conditions; the cabinetmaker prevails based on *waiver*, not substantial performance."
    },
    {
        id: 8,
        topic: "Mixed",
        fp: "An industrial welder was hired by a manufacturing facility to inspect high-pressure steam pipes. While walking along an authorized catwalk, the welder stepped on an insulated section of pipe to reach an overhead valve. The facility owner had negligently installed substandard pipe insulation three years earlier, which had degraded into a brittle, slick crust. The insulation collapsed beneath the welder's foot, causing him to slip and fall off the catwalk. As he fell, the welder's hand struck an unshielded 480-volt electrical junction box that the facility's master electrician had left uncovered earlier that morning in violation of national electrical safety codes. The electric shock caused instantaneous ventricular fibrillation and death. Medical examiners testified that the physical fall from the catwalk alone would have resulted merely in a broken wrist. The welder's estate brought a wrongful death negligence action against the facility owner.",
        q: "What is the facility owner's best defense against proximate causation regarding the welder's death?",
        opts: [
            "The welder's act of stepping directly on the insulated pipe was an unforeseeable superseding misuse that severed causation.",
            "The uncovered 480-volt junction box was a superseding intervening cause that cut off liability for the defective catwalk pipe insulation.",
            "The welder assumed the risk because high-pressure welding and catwalk inspections are inherently dangerous professional activities.",
            "The facility owner cannot be held liable because the electric shock was an extraordinary, highly improbable consequence of slipping on pipe insulation."
        ],
        ans: 3,
        exp: "Rule: In negligence, proximate (legal) causation requires that the harm suffered by the plaintiff be a foreseeable consequence of the defendant's negligent conduct (the 'scope of the risk' test from *Palsgraf* and Restatement (Third) of Torts § 29). Where a defendant's negligence creates a risk of a specific type of minor injury (falling a short distance from a pipe), but an entirely different, extraordinary, and lethal hazard intervenes (electrocution from an uncovered high-voltage box), the defendant's strongest legal argument is that the fatal electrocution was outside the foreseeable scope of the risk generated by degraded pipe insulation (Option D). Option A is incorrect because stepping on pipes during maintenance inspections is an ordinary, foreseeable slip hazard, not an extraordinary superseding misuse. Option B is incorrect because the facility owner is vicariously liable for both conditions (the insulation and the electrician's uncovered box); an employer cannot claim that its own employee's concurrent negligence is an independent superseding cause. Option C is incorrect because professional rescuers and tradesmen do not assume the risk of hidden, unannounced violations of basic electrical safety codes."
    },
    {
        id: 9,
        topic: "Mixed",
        fp: "Defendant attended an outdoor professional football game in late December. Before entering the stadium, Defendant consumed numerous alcoholic beverages in the parking lot. By halftime, Defendant was severely intoxicated. As spectators stood to cheer after a touchdown, Defendant pushed his way down the aisle toward the concourse. An elderly spectator standing at the end of the row tapped Defendant on the arm and said, 'Please wait until the play ends, young man.' Enraged and losing all impulse control, Defendant shoved the elderly spectator backward down a steep flight of concrete stadium stairs. The spectator tumbled down twelve steps, fractured his skull on the concrete landing, and died several hours later. At his trial for involuntary manslaughter, Defendant introduced uncontradicted testimony that he was so drunk he could not comprehend that pushing someone near stairs could result in death.",
        q: "Is Defendant guilty of involuntary manslaughter?",
        opts: [
            "No, because his severe voluntary intoxication negated the mental state required for criminal negligence.",
            "No, because voluntary manslaughter requires adequate provocation, which was lacking here.",
            "Yes, because involuntary manslaughter requires only criminal negligence, and voluntary intoxication does not excuse or negate criminal negligence.",
            "Yes, because involuntary manslaughter is a strict liability homicide offense at common law."
        ],
        ans: 2,
        exp: "Rule: At common law, involuntary manslaughter is an unintentional killing caused by criminal negligence (a gross deviation from the standard of care that a reasonable person would exercise) or during the commission of an unlawful act (misdemeanor-manslaughter). Voluntary intoxication is a defense ONLY to specific intent crimes; it is NEVER a defense to general intent, malice, or criminal negligence offenses. An actor who voluntarily intoxicates himself cannot avoid culpability for criminal negligence by claiming that drunkenness prevented him from realizing the danger of his conduct. Pushing an elderly person down steep concrete stairs constitutes criminal negligence, establishing involuntary manslaughter (Option C). Option A is incorrect because voluntary intoxication does not negate criminal negligence. Option B is incorrect because the charge is *involuntary* manslaughter, which does not require provocation. Option D is incorrect because involuntary manslaughter is not a strict liability crime; it requires proof of criminal negligence or an unlawful act."
    },
    {
        id: 10,
        topic: "Mixed",
        fp: "A commercial roofing company entered into a written contract with an auto dealership to install a multi-ply commercial roof on the dealership's showroom for $40,000, payable upon completion on August 1. The contract explicitly provided: 'The roofer shall use only Owens-Corning TruDefinition architectural fiberglass shingles in Estate Gray color.' The roofer completed the roof on July 28. However, due to a warehouse mix-up, the roofer inadvertently installed GAF Timberline HDZ architectural fiberglass shingles in Slate Gray color. Expert testimony at trial established that the GAF shingles were chemically and structurally identical to the Owens-Corning shingles, possessed the identical 30-year commercial warranty, and were indistinguishable in color and quality from the street. The fair market value of the building with the GAF roof was exactly identical to its value with the Owens-Corning roof ($1,200,000). To remove the GAF shingles and replace them with Owens-Corning shingles would cost $35,000 and require tearing off structural underlayment. The dealership refused to pay the roofer any part of the $40,000 contract price, asserting breach of an express condition.",
        q: "What amount is the roofer entitled to recover from the dealership?",
        opts: [
            "Nothing, because the roofer breached an express specification, and the dealership is entitled to insist on strict adherence to contract terms.",
            "$40,000 (the full contract price), because the doctrine of substantial performance applies, and the cost of replacement would involve unreasonable economic waste.",
            "$5,000, representing the contract price ($40,000) less the cost of replacement ($35,000).",
            "The reasonable value of the roofer's labor in quantum meruit, but not to exceed $20,000."
        ],
        ans: 1,
        exp: "Rule: Under the classic doctrine of *Jacob & Youngs v. Kent*, in construction contracts, where a contractor's breach is trivial and innocent (unintentional) and does not impair the structural integrity or functional utility of the building, the contractor has substantially performed. Where the cost of replacement would involve unreasonable economic waste (tearing off a perfectly functional, identical quality roof for $35,000), the proper measure of damages for the breach is the difference in value rather than the cost of completion. Here, the difference in value between the two roofs is $0. The roofer substantially performed and is entitled to the full contract price ($40,000) minus the diminution in market value ($0), yielding a full recovery of $40,000 (Option B). Option A is incorrect because specifications regarding brand names of equivalent materials are construed as promises/covenants rather than express conditions of forfeiture. Option C is incorrect because awarding the $35,000 cost of replacement would cause gross economic waste. Option D is incorrect because a contractor who has substantially performed sues *on the contract*, not in quasi-contract."
    },
    {
        id: 11,
        topic: "Mixed",
        fp: "A certified personal fitness trainer entered a crowded public gym. The trainer saw a former client who had recently terminated their training contract and posted a negative review online. The trainer approached the client from behind while the client was resting on a bench between weight sets. Without speaking, the trainer raised a 10-pound steel dumbbell and swung it forcefully toward the back of the client's head, intending to knock the client unconscious. The client, who was looking down at his phone and wearing noise-canceling headphones, had no idea the trainer was behind him. An alert gym bystander lunged forward and deflected the trainer's arm mid-swing. The dumbbell missed the client's head by two inches. The client looked up only after the trainer was pinned to the floor by the bystander.",
        q: "Can the trainer be held liable to the client for common law assault?",
        opts: [
            "Yes, because the trainer acted with the specific intent to inflict battery and took an immediate overt step to carry it out.",
            "Yes, under the doctrine of transferred intent, because the attempt was witnessed by the third-party bystander.",
            "No, because the client did not experience apprehension of immediate harmful or offensive contact prior to the termination of the threat.",
            "No, because the client suffered no physical injury or impact."
        ],
        ans: 2,
        exp: "Rule: In tort law, assault requires: (1) an intentional act by the defendant, (2) causing reasonable apprehension in the plaintiff, (3) of immediate harmful or offensive bodily contact. Apprehension requires conscious awareness of the impending contact at the time it is threatened; a plaintiff cannot be placed in apprehension of a danger of which he is completely unaware. Because the client was wearing noise-canceling headphones, looking down at his phone, and did not see or sense the swing until after the threat was extinguished, he experienced no apprehension of immediate contact, defeating tort assault liability (Option C). (Note: While criminal assault under the attempted-battery branch does not require victim apprehension, civil tort assault strictly requires the plaintiff's conscious apprehension). Option A is incorrect because civil assault requires apprehension, unlike criminal attempted-battery assault. Option B is incorrect because transferred intent cannot supply the essential element of apprehension to a plaintiff who was completely unaware of the threat. Option D is incorrect because physical harm is not required for assault; the lack of apprehension is the fatal defect."
    },
    {
        id: 12,
        topic: "Mixed",
        fp: "A homeowner placed a valuable diamond ring on a bedside table before going to sleep. At 2:00 AM, Defendant approached the house, cut a screen window leading to the ground-floor living room, and climbed through. Defendant walked silently through the living room, up the stairs, and into the master bedroom. Defendant saw the ring on the table, picked it up, placed it in his coat pocket, and walked out the back door without waking the homeowner. The jurisdiction adheres to traditional common law criminal definitions.",
        q: "What is the most serious crime Defendant has committed?",
        opts: [
            "Common law burglary.",
            "Larceny.",
            "Robbery.",
            "Attempted burglary only."
        ],
        ans: 0,
        exp: "Rule: Common law burglary is defined as the: (1) breaking, (2) entering, (3) of the dwelling house, (4) of another, (5) in the nighttime, (6) with the intent to commit a felony therein (such as larceny). Cutting an exterior window screen and climbing through constitutes a breaking and entering. The structure was a dwelling house, the act occurred at 2:00 AM (nighttime), and Defendant entered with the intent to steal the ring (a common law felony). The crime of burglary is fully complete at the precise moment of unlawful entry with felonious intent; whether the intended felony is completed is irrelevant. Burglary is a felony ranking above misdemeanor or grand larceny (Option A). Option B is incorrect because while Defendant also completed larceny, burglary is the more serious offense. Option C is incorrect because robbery requires taking property from the person or immediate presence of another by force or fear; stealthy theft while the victim sleeps is larceny, not robbery. Option D is incorrect because the burglary was completed upon entry."
    },
    {
        id: 13,
        topic: "Mixed",
        fp: "A manufacturer of high-end consumer headphones contracted in writing with an electronics components supplier to buy 10,000 specialized micro-speakers at $2.00 each ($20,000 total), with delivery on May 1. On April 15, the supplier informed the manufacturer that a factory fire in Asia had destroyed its component line, and that the supplier would be unable to deliver any speakers. The manufacturer immediately contacted other domestic suppliers and discovered that equivalent micro-speakers were readily available on the open market for $2.50 each. However, the manufacturer's purchasing manager made no effort to purchase replacement speakers. On May 1, having received no micro-speakers, the manufacturer was forced to shut down its headphone assembly plant for ten days, incurring $15,000 in plant shutdown overhead costs and lost profits. The manufacturer sued the supplier for breach of contract, seeking $5,000 in direct expectation damages ($2.50 market price minus $2.00 contract price for 10,000 units) plus $15,000 in consequential damages for the factory shutdown.",
        q: "What damages is the manufacturer entitled to recover from the supplier?",
        opts: [
            "$20,000, consisting of both the $5,000 market-contract differential and the $15,000 consequential shutdown damages.",
            "$5,000 only, representing the market-contract differential, because consequential damages could have been prevented by cover.",
            "$15,000 only, representing the actual economic loss suffered by the assembly plant shutdown.",
            "Nothing, because the manufacturer's total failure to cover operated as a complete waiver of all breach remedies under UCC Article 2."
        ],
        ans: 1,
        exp: "Rule: Under UCC § 2-713, a buyer's direct expectation damages for non-delivery or repudiation equal the difference between the market price at the time the buyer learned of the breach and the contract price, plus incidentals and consequentials, less expenses saved. A buyer is not required to cover to recover market-contract differential damages under § 2-713. However, under UCC § 2-715(2)(a), consequential damages (such as plant shutdown losses) are recoverable ONLY if they could not reasonably be prevented by cover or otherwise. Because micro-speakers were readily available on the market for $2.50, the manufacturer could have completely prevented the $15,000 shutdown loss by purchasing substitute goods (cover). Thus, consequential damages are barred, but the manufacturer is fully entitled to recover the $5,000 market-contract differential (Option B). Option A is incorrect because failure to mitigate via available cover bars consequential damages. Option C is incorrect because the direct expectation damages are recoverable. Option D is incorrect because cover is permissive, not mandatory; failing to cover does not waive the right to direct damages under § 2-713."
    },
    {
        id: 14,
        topic: "Mixed",
        fp: "A professional pest control operator was hired to eradicate subterranean termites beneath a residential home. The operator brought several pressurized canisters of an odorless, toxic pesticide that had been approved by federal regulators for outdoor subterranean soil injection. The pesticide manufacturer's instruction label stated: 'DANGER: Highly toxic to mammals. Do not inject within 10 feet of interior foundation vents. Ensure all interior crawlspace ventilation dampers are closed before pressurized injection.' The operator failed to inspect the crawlspace dampers, which were open. The operator injected the chemical 3 feet from a main vent. Toxic fumes seeped through the vents into the living room, causing severe neurological injury to the homeowner's pet dog and temporary respiratory distress to the homeowner. In the homeowner's suit against the operator asserting strict liability for an abnormally dangerous activity, the operator moved to dismiss the strict liability count.",
        q: "Should the court grant the operator's motion to dismiss the strict liability claim?",
        opts: [
            "Yes, because the safe application of commercial pesticides is a matter of common usage and can be conducted safely through the exercise of reasonable care.",
            "Yes, because strict liability applies only to injuries to adjacent real property, not personal injury to occupants.",
            "No, because the distribution of toxic fumigation chemicals into residential soil is an abnormally dangerous activity as a matter of law.",
            "No, because the pesticide was an inherently dangerous instrumentality that caused physical injury."
        ],
        ans: 0,
        exp: "Rule: Under Restatement (Second) of Torts §§ 519-520, whether an activity is abnormally dangerous depends on factors including: (a) existence of a high degree of risk of harm; (b) likelihood that resulting harm will be great; (c) inability to eliminate the risk by the exercise of reasonable care; (d) extent to which the activity is not a matter of common usage; (e) inappropriateness of the activity to the place where it is carried on; and (f) value to the community. Routine residential pest extermination using approved chemicals is NOT an abnormally dangerous activity because the risk of chemical seepage can be entirely eliminated through the exercise of ordinary reasonable care (following label warnings and closing vents). Harm arising from the operator's careless application sounds in *negligence*, not strict liability (Option A). Option B is incorrect because strict liability, where applicable, encompasses personal injury as well as property damage. Option C is incorrect because residential pesticide application is not an abnormally dangerous activity under common law balancing. Option D is incorrect because the term 'inherently dangerous instrumentality' does not bypass the requirement that the risk must be unavoidable even with the exercise of reasonable care."
    },
    {
        id: 15,
        topic: "Mixed",
        fp: "Defendant was in a crowded tavern when a patron insulted Defendant's family. Enraged, Defendant pulled a heavy glass beer mug back and hurled it forcefully toward the patron's face from five feet away, intending to fracture the patron's jaw. The patron ducked, and the mug sailed past his ear. The mug struck a framed bar mirror mounted behind the patron. The heavy glass mirror shattered, and a large shard fell and severed the radial artery of an innocent bystander who was sitting at the bar. The bystander bled to death before emergency medical services arrived. The jurisdiction defines murder at common law.",
        q: "What is the most serious crime of which Defendant can properly be convicted regarding the bystander's death?",
        opts: [
            "First-degree premeditated murder.",
            "Second-degree murder.",
            "Voluntary manslaughter.",
            "Involuntary manslaughter."
        ],
        ans: 1,
        exp: "Rule: At common law, murder is the unlawful killing of a human being with malice aforethought. Malice aforethought is satisfied by: (1) intent to kill; (2) intent to inflict serious bodily harm; (3) depraved-heart recklessness (wanton disregard of an unreasonable human risk); or (4) felony murder. Under the doctrine of transferred intent, if a defendant acts with malice (such as the intent to inflict grievous bodily harm) toward one person, and that conduct proximately causes the death of an unintended third person, the malice transfers to the actual victim. Defendant threw a heavy glass mug at the patron's face with the specific intent to fracture his jaw (intent to inflict serious bodily injury). Under transferred intent, that intent satisfies malice aforethought for common law second-degree murder regarding the bystander's death (Option B). Option A is incorrect because Defendant did not act with premeditation and deliberation to kill. Option C is incorrect because words alone (insults to family) do not constitute adequate provocation to reduce murder to voluntary manslaughter at common law. Option D is incorrect because involuntary manslaughter applies to criminal negligence or misdemeanor-manslaughter, whereas Defendant possessed full common law malice (intent to inflict grievous bodily harm)."
    },
    {
        id: 16,
        topic: "Mixed",
        fp: "A homeowner engaged a roofing contractor to install a new slate roof on his house for $15,000. Under the terms of the signed agreement, the homeowner was to pay $5,000 on the start date, $5,000 when half the slate was laid, and $5,000 upon final completion. The roofer began work and laid half the slate, at which point the homeowner paid the second $5,000 installment. The roofer then unexpectedly abandoned the project to take a more lucrative commercial job in another town. The homeowner solicited bids from three licensed, reputable roofing contractors to finish laying the remaining slate; the lowest competitive bid was $7,000. The homeowner hired the replacement contractor, who completed the roof for $7,000. The original roofer sued the homeowner in quantum meruit, seeking $2,000, arguing that the half-finished roof had increased the market value of the home by $12,000, whereas the homeowner had paid only $10,000.",
        q: "How should the court resolve the claims between the homeowner and the original roofer?",
        opts: [
            "The roofer should recover $2,000 in restitution to prevent the homeowner from being unjustly enriched by the market value increase.",
            "The homeowner is entitled to recover $2,000 in expectation damages from the roofer, and the roofer takes nothing.",
            "Neither party should recover anything because each party performed half of a divisible contract.",
            "The homeowner should recover $7,000 from the roofer, representing the full cost of the replacement contractor."
        ],
        ans: 1,
        exp: "Rule: When a contractor breaches by abandoning performance, the non-breaching owner is entitled to expectation damages measured by the reasonable cost of completion minus any unpaid balance of the contract price. The total contract price was $15,000. The homeowner had paid $10,000, leaving an unpaid contract balance of $5,000. The homeowner had to pay $7,000 to complete the job. The homeowner's damages equal the cost of completion ($7,000) minus the unpaid balance ($5,000), which equals $2,000. A willfully breaching contractor cannot recover in quantum meruit where the owner's net cost exceeds the contract price. The homeowner recovers $2,000, and the roofer takes nothing (Option B). Option A is incorrect because quantum meruit cannot exceed the contract ceiling and is subordinated to the non-breaching party's expectation damages. Option C is incorrect because installment payment schedules tied to construction milestones do not make a construction contract divisible; building a roof is a single, integrated performance. Option D is incorrect because awarding the full $7,000 ignores the $5,000 the homeowner saved by not paying the final installment to the original roofer."
    },
    {
        id: 17,
        topic: "Mixed",
        fp: "A professional mountain guide led a group of amateur climbers on an ascent of a steep glaciated peak. The guide had traversed the specific glacier dozens of times. As the group approached an icefield, the guide observed a series of parallel linear surface fissures in the snow, a well-known indicator among mountaineers that a concealed, bridging crevasse lies immediately ahead. The guide had a rope and probe poles in his pack, which would have allowed him to test the snow bridge in thirty seconds. However, wanting to reach the summit before midday cloud cover set in, the guide instructed the climbers to unrope and walk briskly across the snow bridge. A climber stepped onto the bridge, the snow collapsed, and the climber fell 40 feet into a crevasse, sustaining multiple fractures. The climber sued the guide for negligence. In defense, the guide pointed to an exculpatory waiver signed by the climber before the climb, which stated: 'Climber hereby releases the guide from all liability for any and all claims, including injuries caused by the guide's ordinary negligence.'",
        q: "Is the exculpatory waiver enforceable against the climber's claim?",
        opts: [
            "Yes, because adults engaging in voluntary, hazardous recreational sports have absolute freedom of contract to release commercial guides from liability.",
            "Yes, because the waiver specifically and unambiguously named ordinary negligence as a released cause of action.",
            "No, if the guide's conduct in ordering the unroped crossing over known crevasse fissures constituted gross negligence or reckless disregard for safety.",
            "No, because exculpatory agreements in recreational sporting activities are void per se as against public policy in all jurisdictions."
        ],
        ans: 2,
        exp: "Rule: While exculpatory agreements releasing a defendant from liability for *ordinary negligence* in voluntary recreational activities are generally enforceable if clear and unambiguous, public policy universally prohibits exculpatory clauses from shielding an actor from liability for *gross negligence*, *recklessness*, or *intentional torts*. Ordering unroped amateur climbers across a visibly fractured snow bridge to save time exhibits a conscious, wanton indifference to an obvious risk of catastrophic injury (gross negligence or reckless disregard), rendering the exculpatory release legally void and unenforceable (Option C). Options A and B are incorrect because no exculpatory agreement can lawfully release an actor from gross negligence or recklessness, regardless of clarity or commercial context. Option D is incorrect because exculpatory clauses for ordinary negligence in recreational sports are not void per se; they are widely recognized when limited to ordinary negligence."
    },
    {
        id: 18,
        topic: "Mixed",
        fp: "Defendant observed an open, unattended convertible sports car parked outside a pharmacy. The keys were dangling in the ignition. Defendant jumped into the driver's seat, started the engine, and sped away, intending to take the car on an exhilarating joyride along the coast for an hour and then abandon it in a public parking lot near a bus stop. After driving for twenty miles, Defendant stopped at a red light. A police officer pulled behind Defendant and ran the license plate, discovering it had just been reported stolen. The officer arrested Defendant. The jurisdiction adheres to traditional common law property offenses.",
        q: "Can Defendant properly be convicted of common law larceny?",
        opts: [
            "Yes, because unauthorized borrowing of an automobile constitutes criminal conversion as a matter of law.",
            "Yes, because the intent to permanently deprive is conclusively presumed from the intentional taking of another's motor vehicle.",
            "No, because Defendant intended to abandon the vehicle in a public place where the owner was virtually certain to recover it.",
            "No, because Defendant lacked the intent to permanently deprive the owner of the vehicle at the time of the taking."
        ],
        ans: 3,
        exp: "Rule: At common law, larceny requires: (1) a trespassory taking, (2) and carrying away (asportation), (3) of the personal property of another, (4) with the specific intent to *permanently deprive* the owner of the property (animus furandi). An intent to temporarily use the property (a joyride) with the intent to return it, or to abandon it under circumstances where there is no substantial risk of permanent loss, negates the specific intent to permanently deprive. Because Defendant intended only a temporary one-hour joyride, he lacked animus furandi, defeating common law larceny (Option D). (Note: While modern statutes create specific 'joyriding' or 'unauthorized use of a motor vehicle' offenses, this question tests traditional common law larceny). Option A is incorrect because civil conversion or statutory joyriding does not equal common law larceny. Option B is incorrect because there is no conclusive presumption of an intent to permanently deprive. Option C is incorrect because while abandoning property in a remote location creating a high risk of permanent loss can supply intent to deprive, the primary defect in the prosecution's case is the absence of the specific intent to permanently deprive at formation."
    },
    {
        id: 19,
        topic: "Mixed",
        fp: "A homeowner entered into an oral agreement with a landscape contractor. The contractor agreed to regrade the homeowner's back lawn, install an automated sprinkler system, and lay premium sod for a total contract price of $4,500. The agreement specified that the contractor would begin work on May 1 and complete the entire job within four weeks. On April 28, the contractor called the homeowner and stated that he had taken a higher-paying municipal contract and would not perform any work on the homeowner's property. The homeowner had to hire another contractor to perform the identical landscaping work for $6,000. When the homeowner sued the original contractor for $1,500 in expectation damages, the contractor asserted that the agreement was unenforceable under the Statute of Frauds.",
        q: "Is the contractor's Statute of Frauds defense valid?",
        opts: [
            "Yes, because landscaping improvements to residential real estate constitute contracts creating an interest in land.",
            "Yes, because the contract price exceeded the $500 threshold under the Uniform Commercial Code.",
            "No, because the contract was capable of full performance within one year from the date of its making.",
            "No, because service contracts involving residential property are exempt from the one-year provision."
        ],
        ans: 2,
        exp: "Rule: Under the common law Statute of Frauds, a contract must be evidenced by a signed writing if it falls within one of the traditional categories (MYLEGS): Marriage, Year (cannot be performed within one year), Land, Executor, Goods ($500+), Suretyship. Under the one-year provision, a contract falls within the Statute of Frauds ONLY IF it is physically or legally impossible to fully perform the agreement within one year from the date of contract formation. Here, the contract called for landscaping services to be completed within four weeks—well under one year. Furthermore, a contract to perform landscaping work on land is a service contract, NOT a contract conveying or creating an 'interest in land' (which applies to sales of fee simple, leases over one year, easements, and mortgages). The contract was fully performable within one year and falls outside the Statute of Frauds (Option C). Option A is incorrect because performing labor on real estate does not convey an interest in land. Option B is incorrect because landscaping is primarily a service contract governed by common law, not a sale of goods under UCC Article 2. Option D is incorrect because the exception is based on the general one-year impossibility standard, not a residential property exemption."
    },
    {
        id: 20,
        topic: "Mixed",
        fp: "A pedestrian was walking past an upscale city hotel during a severe windstorm. High-speed wind gusts reached 55 mph. An ornate, 30-pound decorative stone cornice detached from the twelfth-floor exterior facade of the hotel, plummeted to the sidewalk, and struck the pedestrian on the shoulder, causing permanent spinal injuries. The pedestrian brought a negligence action against the hotel owner. At trial, the pedestrian was unable to point to any specific act of negligence or maintenance failure by the hotel, but introduced evidence that decorative stone facades do not fall from commercial buildings in 55-mph winds if properly anchored and maintained. The hotel proved that the building was inspected annually by independent architectural engineers, who had reported no loose stonework during an inspection six months prior to the incident. At the close of the evidence, the pedestrian requested a jury instruction on res ipsa loquitur.",
        q: "Should the trial judge grant the pedestrian's request for a res ipsa loquitur instruction?",
        opts: [
            "Yes, because falling building facades are events that ordinarily do not occur in the absence of negligence, and the hotel had exclusive control over the building exterior.",
            "Yes, because commercial innkeepers are strictly liable for injuries caused by structural collapses on their exterior premises.",
            "No, because the 55-mph wind gust was an Act of God that constituted an independent intervening cause.",
            "No, because the hotel's proof of an annual inspection six months earlier conclusively rebutted any inference of negligence."
        ],
        ans: 0,
        exp: "Rule: Under the doctrine of res ipsa loquitur, the plaintiff may establish an inference of negligence without proving specific faulty acts if: (1) the event is of a kind that ordinarily does not occur in the absence of someone's negligence; (2) the instrumentality causing the injury was within the exclusive control of the defendant; and (3) the injury was not due to any voluntary action or contribution on the part of the plaintiff. Heavy stone cornices properly anchored to modern commercial buildings do not detach in ordinary 55-mph windstorms unless improperly anchored or inspected, and the exterior facade is in the hotel's exclusive management (Option A). Option B is incorrect because innkeepers owe high or reasonable care, not strict liability for structural facade issues. Option C is incorrect because 55-mph wind gusts are normal, foreseeable weather events in city environments, not an unprecedented Act of God that relieves a landowner of maintaining exterior fixtures. Option D is incorrect because introducing evidence of routine inspections merely creates a factual question for the jury; it does not destroy the availability of a res ipsa loquitur instruction as a matter of law."
    },
    {
        id: 21,
        topic: "Mixed",
        fp: "Defendant wanted to eliminate a business competitor. Defendant bought a high-powered hunting rifle, drove to the competitor's rural retreat at night, and hid in the treeline 100 yards from the illuminated master bedroom. Defendant observed a human figure through the sheer curtains sitting upright in an armchair with a reading lamp on. Believing the figure to be his rival reading a book, Defendant aimed carefully at the head of the figure and fired a single shot, striking the figure directly between the eyes. Defendant fled into the woods. When police arrived, they discovered that the competitor had suffered a massive, fatal coronary thrombosis and had died in the armchair three hours prior to the gunshot. Medical examiners testified conclusively that the competitor was already dead when the bullet struck his body. Defendant was arrested and charged with attempted common law murder.",
        q: "Is Defendant guilty of attempted murder?",
        opts: [
            "No, because one cannot attempt to murder a corpse under the doctrine of legal impossibility.",
            "No, because the competitor's prior death from heart failure was a superseding cause that extinguished criminal culpability.",
            "Yes, because factual impossibility is not a defense to criminal attempt where the defendant possessed the specific intent to kill.",
            "Yes, but only of reckless endangerment because the target was an inanimate object."
        ],
        ans: 2,
        exp: "Rule: Criminal attempt requires: (1) the specific intent to commit the target offense, and (2) an overt act in furtherance of that intent that goes beyond mere preparation. A fundamental criminal law distinction exists between *factual impossibility* and *legal impossibility*. Factual impossibility arises when the defendant's intended end constitutes a crime, but he fails to consummate it because of a factual circumstance unknown to him (e.g., shooting into an armchair where the intended victim is already dead, shooting into an empty bed, or picking an empty pocket). Factual impossibility is NEVER a defense to attempt. Legal impossibility (where the actor completes everything he intends to do, but the completed act is not illegal) is a defense. Because Defendant intended to kill a living human being and took a substantial step (firing the rifle), his mistaken belief that the corpse was alive is mere factual impossibility, and he is guilty of attempted murder (Option C). Option A is incorrect because shooting a dead body believing it to be alive is the quintessential textbook example of *factual* impossibility, not legal impossibility. Option B is incorrect because causation rules apply to completed homicides, not attempt. Option D is incorrect because Defendant possessed the full specific intent and overt act for attempted murder."
    },
    {
        id: 22,
        topic: "Mixed",
        fp: "A homeowner hired an interior painting contractor to paint the interior of his four-bedroom residence for $4,000, with all work to be completed by June 15. The written contract contained the following clause: 'If the contractor fails to complete the work by June 15, the contractor shall pay to the homeowner, as liquidated damages and not as a penalty, the sum of $1,000 for each calendar day of delay.' At the time of contracting, prevailing market rental rates for comparable homes in the area were $100 per day. Due to poor scheduling on other jobs, the contractor did not complete painting the residence until June 18 (a three-day delay). The homeowner suffered no actual economic loss because he was living in the house throughout the painting process. When the contractor demanded payment of the $4,000 contract price, the homeowner deducted $3,000 based on the liquidated damages clause and tendered only $1,000. The contractor refused the tender and sued for the full $4,000.",
        q: "Is the liquidated damages clause enforceable against the contractor?",
        opts: [
            "Yes, because freedom of contract permits parties to stipulate to agreed damages for delay in construction agreements.",
            "Yes, because the clause explicitly stated that the stipulated sum was 'liquidated damages and not as a penalty.'",
            "No, because a stipulated damage amount of $1,000 per day for delay on a $4,000 residential painting contract is an unenforceable penalty.",
            "No, because liquidated damages clauses are invalid per se unless the non-breaching party proves actual economic damages at trial."
        ],
        ans: 2,
        exp: "Rule: Under the common law and Restatement (Second) of Contracts § 356, a liquidated damages clause is enforceable ONLY IF: (1) damages were difficult to estimate or ascertain at the time the contract was formed; and (2) the amount stipulated is a reasonable forecast of just compensation for the anticipated or actual harm caused by the breach. If the stipulated sum is grossly disproportionate to any conceivable actual harm, the clause is an unenforceable penalty designed to coerce performance. Here, fixing damages at $1,000 per day for delay on a modest $4,000 residential paint job—where daily rental value is only $100—is an egregious, grossly disproportionate penalty on its face (Option C). Option A is incorrect because freedom of contract does not permit private penal forfeitures. Option B is incorrect because courts look to the substantive economic operation of the clause, not the formalistic labels ('not as a penalty') used by the parties. Option D is incorrect because liquidated damages clauses are not invalid per se, and modern law allows enforcement without proof of actual loss if the clause was a reasonable prospective forecast at formation."
    },
    {
        id: 23,
        topic: "Mixed",
        fp: "A patron at a bowling alley was standing near the lane ball returns. Another bowler in an adjacent lane rolled a heavy 16-pound bowling ball down the wooden lane. Due to an oily patch on the lane that had been neglected by bowling alley maintenance for several hours, the ball veered sharply into the gutter, bounced off a damaged return rail, jumped the lane divider, and struck the patron's leg, causing a hairline fracture of the tibia. While the patron was lying on the floor in pain, a gym coach who was bowling in the next lane stepped forward and said, 'Lie still, I'm a certified athletic trainer, I'll stabilize your leg.' The coach grabbed the patron's fractured leg and forcefully pulled and twisted it in an attempt to realign the bone, in clear violation of basic first-aid protocols. The violent manipulation converted the hairline fracture into a displaced compound fracture, lacerating the anterior tibial artery and causing severe permanent nerve damage. The patron sued both the bowling alley and the coach.",
        q: "Is the bowling alley liable for the aggravated injuries caused by the coach's botched first-aid intervention?",
        opts: [
            "No, because the coach's gross negligence in attempting bone alignment was an extraordinary superseding cause that cut off the bowling alley's liability.",
            "No, because the coach was a voluntary Good Samaritan whose actions are protected by absolute common law immunity.",
            "Yes, because subsequent negligent medical or first-aid assistance is a foreseeable risk of causing physical injury to a plaintiff.",
            "Yes, because commercial bowling alleys are strictly liable for all physical injuries occurring on their bowling lanes."
        ],
        ans: 2,
        exp: "Rule: Under standard proximate cause principles (Restatement (Second) of Torts § 457), an initial tortfeasor whose negligence causes physical bodily harm to a plaintiff is liable for any subsequent bodily harm resulting from normal efforts of third persons in rendering aid or medical assistance, which the plaintiff's condition reasonably requires. Ordinary negligence or errors committed by physicians, nurses, or emergency rescuers who attempt to treat the injured victim are deemed foreseeable risks within the scope of the original tortfeasor's liability. The initial negligent actor remains liable for the aggravated injuries resulting from foreseeable medical or first-aid intervention (Option C). Option A is incorrect because while extraordinary, intentional, or bizarre malice by a doctor might sever liability, standard negligent emergency first aid rendered at an accident scene is a classic foreseeable intervening force that does not cut off proximate cause. Option B is incorrect because Good Samaritans have no absolute common law immunity, and Good Samaritan statutes typically protect against ordinary negligence in emergency rescue, not gross deviations from basic care. Option D is incorrect because bowling alleys are held to reasonable care (negligence), not strict liability."
    },
    {
        id: 24,
        topic: "Mixed",
        fp: "Defendant and an acquaintance broke into a jewelry boutique at 3:00 AM intending to steal diamonds. The accomplice carried a crowbar to pry open display cases, while Defendant was unarmed. While they were inside the store, an armed night watchman confronted them. The watchman drew his firearm and ordered them to freeze. The accomplice lunged at the watchman with the crowbar. The watchman fired a shot in lawful self-defense, intending to stop the accomplice. The bullet struck the accomplice in the chest, killing him instantly. Defendant immediately dropped to his knees and surrendered. The jurisdiction follows the common law 'agency theory' of felony murder.",
        q: "Can Defendant properly be convicted of felony murder for the death of his accomplice?",
        opts: [
            "Yes, because the death of the accomplice was a direct proximate result of the armed burglary in which Defendant participated.",
            "Yes, because co-felons are vicariously liable for all homicides committed during the course of an inherently dangerous felony.",
            "No, because under the agency theory of felony murder, the lethal shot must be fired by a felon or an agent of the criminal conspiracy.",
            "No, because common law felony murder does not apply to killings that occur inside commercial buildings."
        ],
        ans: 2,
        exp: "Rule: A critical split of authority governs felony murder when a non-felon (such as a police officer, security guard, or crime victim) fires the fatal shot. Under the majority **Agency Theory** of felony murder, the felony murder rule applies ONLY IF the lethal act is committed by one of the felons or an agent acting in furtherance of the common criminal conspiracy. If a police officer or victim kills a co-felon or bystander in self-defense, the surviving felon cannot be convicted of felony murder because the killer was not an 'agent' of the felony. (In contrast, under the minority *Proximate Cause Theory*, a felon is liable for any death proximately caused by the felony, even if fired by a police officer). Because this jurisdiction follows the agency theory, the fatal shot fired by the lawful watchman cannot support a felony murder conviction against Defendant (Option C). Option A is incorrect because it describes the proximate cause theory, which this jurisdiction explicitly rejects. Option B is incorrect because agency theory bars liability where a non-felon pulls the trigger. Option D is incorrect because felony murder applies to any inherently dangerous felony (burglary), regardless of commercial or residential status."
    },
    {
        id: 25,
        topic: "Mixed",
        fp: "An elderly woman was severely injured in an automobile accident caused by a negligent commercial truck driver. An orthopedic surgeon performed complex surgery on the woman's fractured pelvis. Following the surgery, the surgeon told the woman's adult son, 'Your mother is resting comfortably, but she will require extensive post-operative physical therapy.' Deeply moved and grateful for the surgeon's skill, the son stated to the surgeon: 'Doctor, you saved my mother's life. In consideration of the wonderful surgery you performed on her today, I promise to pay you $5,000 out of my personal bank account on the first of next month.' The son never paid the $5,000. When the surgeon sued the son for breach of contract, the son asserted lack of consideration.",
        q: "Is the son's promise to pay $5,000 enforceable?",
        opts: [
            "Yes, under the material benefit rule, because the surgeon conferred a substantial physical benefit on the son's mother.",
            "Yes, because a family member's moral obligation to pay for medical care rendered to an incapacitated parent supplies consideration.",
            "No, because past performance rendered without expectation of compensation from the promisor does not constitute valid consideration.",
            "No, because contracts for medical services must be evidenced by a signed writing under the Statute of Frauds."
        ],
        ans: 2,
        exp: "Rule: Under the traditional bargain theory of consideration, a promise is enforceable only if supported by consideration—a bargained-for exchange of legal value. Past consideration is no consideration at all: an act or service performed *before* a promise is made was not bargained for or given in exchange for that promise. While the modern 'material benefit rule' (*Webb v. McGowin*) recognizes an exception where a promisee confers a direct, substantial material benefit *on the promisor himself* in an emergency, it does NOT apply where the benefit was conferred on a third party (the mother) to whom the promisor owed no legal support duty. Because the surgery had already been performed and conferred a benefit on the mother, not the adult son, the son's promise was an unenforceable gratuitous moral promise (Option C). Option A is incorrect because the material benefit rule requires a direct benefit to the promisor, not an adult relative. Option B is incorrect because an adult child has no common law legal duty to pay for an adult parent's medical debts, and mere moral obligation does not substitute for consideration. Option D is incorrect because medical service contracts performable within one year fall outside the Statute of Frauds."
    }
];