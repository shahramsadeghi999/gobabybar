// BabyBar-Mixed-31.js
// Distribution: 9 Contracts, 8 Torts, 8 Criminal Law
// Tier: Advanced (Sets 31–35)
const examData = [
    {
        id: 1,
        topic: "Mixed",
        fp: "An auctioneer conducted an unreserved public estate auction. An authentic 18th-century antique grandfather clock was placed on the auction block. The auctioneer announced: 'This sale is explicitly without reserve. Bidding starts now.' A collector raised his paddle and made an opening bid of $1,000. No other person bid for thirty seconds. Sensing that the clock was worth at least $25,000, the auctioneer shouted: 'At $1,000, this is highway robbery; I am withdrawing this lot from the block.' The auctioneer directed the stagehands to haul the clock backstage. The collector immediately protested and demanded the clock for $1,000.",
        q: "What is the legal status of the transaction under UCC Article 2?",
        opts: [
            "No contract was formed, because in all auctions the auctioneer retains absolute discretion to withdraw goods at any time prior to the fall of the hammer.",
            "A binding contract was formed, because in an auction without reserve, once the auctioneer calls for bids on an article, that article cannot be withdrawn unless no bid is made within a reasonable time.",
            "No contract was formed, because an opening bid of $1,000 for a $25,000 clock is unconscionable per se under UCC § 2-302.",
            "A binding contract was formed, but only if the bidder pays the reasonable market value determined by court appraisal."
        ],
        ans: 1,
        exp: "Rule: Under UCC § 2-328(3), in an auction with reserve, the auctioneer may withdraw the goods at any time until he announces completion of the sale. In contrast, in an auction WITHOUT reserve, after the auctioneer calls for bids on an article or lot, that article or lot cannot be withdrawn by the auctioneer unless no bid is made within a reasonable time. Because the auctioneer explicitly put the clock up 'without reserve' and the collector submitted a bid within a reasonable time, the auctioneer was legally prohibited from withdrawing the lot. The collector's bid accepted the offer to sell to the highest timely bidder, forming a binding contract (Option B). Option A is incorrect because it describes an auction with reserve, not an auction without reserve. Option C is incorrect because inadequacy of price alone does not render an auction bid unconscionable where the seller elected to hold an unreserved sale. Option D is incorrect because the contract price is fixed by the bid ($1,000), not judicial gap-filling."
    },
    {
        id: 2,
        topic: "Mixed",
        fp: "A borrower owed a bank $20,000 on an unsecured promissory note that had fully matured on June 1. The borrower sent a check for $14,000 to the bank's central loan processing office. In the memo line of the check, the borrower typed in bold letters: 'Payment in full and complete satisfaction of all outstanding obligations.' Accompanying the check was an explanatory letter stating: 'I have suffered investment losses and believe this sum fairly settles my account.' There was zero dispute that the loan balance was exactly $20,000. The bank's automated processing system stamped, deposited, and credited the $14,000 check. Two weeks later, the bank sent a demand letter to the borrower for the remaining $6,000 balance. The borrower asserted the defense of accord and satisfaction under UCC § 3-311.",
        q: "Did the bank's cashing of the check discharge the borrower's remaining $6,000 debt?",
        opts: [
            "Yes, because depositing a negotiable instrument marked 'payment in full' operates as a conclusive statutory accord and satisfaction under modern commercial law.",
            "Yes, because the bank failed to return the tendered funds within 90 days of receipt.",
            "No, because an accord and satisfaction requires that the underlying claim be unliquidated or subject to a bona fide dispute.",
            "No, because negotiable instrument accords are void against commercial banking institutions."
        ],
        ans: 2,
        exp: "Rule: Under both common law and UCC § 3-311, an accord and satisfaction through the use of an instrument marked 'payment in full' (or accompanied by a full satisfaction communication) occurs ONLY IF: (1) the person against whom the claim is asserted tendered an instrument in good faith as full satisfaction of the claim; and (2) the amount of the claim was UNLIQUIDATED or subject to a BONA FIDE DISPUTE. Where a monetary debt is completely liquidated, certain in amount ($20,000), and undisputed, the debtor's payment of a lesser sum conveys no consideration under the pre-existing duty rule (Foakes v. Beer). Cashing a 'full satisfaction' check on an undisputed liquidated debt does not work an accord and satisfaction, and the creditor may collect the balance (Option C). Options A and B are incorrect because UCC § 3-311 explicitly requires a bona fide dispute or unliquidated debt as an absolute prerequisite; the 90-day return rule applies only when an accord could otherwise occur. Option D is incorrect because UCC § 3-311 applies to banks, but fails here due to the lack of a bona fide dispute."
    },
    {
        id: 3,
        topic: "Mixed",
        fp: "An investor approached an art dealer to purchase an original watercolor. The dealer produced a painting depicting a coastal harbor and stated: 'This is an authentic original watercolor by Winslow Homer, fully cataloged in his estate archives.' In reality, the dealer knew the painting was an imitation produced by an art student in 1980. The investor, lacking expertise in American realism, believed the dealer, relied on the statement, and bought the painting for $80,000. In fact, had the watercolor been an authentic Winslow Homer, its fair market value would have been $150,000. The fake imitation had an actual market value of only $2,000. The investor discovered the forgery and brought an action against the dealer for the tort of deceit (intentional misrepresentation) in a jurisdiction following the majority 'benefit-of-the-bargain' damages rule.",
        q: "How much is the investor entitled to recover in compensatory tort damages under the majority rule?",
        opts: [
            "$78,000, representing the out-of-pocket loss (the purchase price paid minus the actual value received).",
            "$148,000, representing the benefit-of-the-bargain loss (the value as represented minus the actual value received).",
            "$80,000, representing full restitution of the purchase price.",
            "$70,000, representing the unrealized profit margin."
        ],
        ans: 1,
        exp: "Rule: In actions for intentional misrepresentation (fraud/deceit), jurisdictions split on the measure of compensatory damages: (1) The minority 'out-of-pocket' rule awards the difference between the purchase price paid and the actual market value of the property received ($80,000 - $2,000 = $78,000). (2) The prevailing majority 'benefit-of-the-bargain' rule awards the difference between the fair market value of the property AS REPRESENTED and the ACTUAL market value received ($150,000 - $2,000 = $148,000). Because the jurisdiction follows the majority benefit-of-the-bargain rule, the investor recovers $148,000 (Option B). Option A is incorrect because $78,000 reflects the minority out-of-pocket rule. Options C and D are incorrect because they reflect rescissionary restitution or arbitrary profit splits rather than the benefit-of-the-bargain tort formula."
    },
    {
        id: 4,
        topic: "Mixed",
        fp: "Defendant approached an undercover police officer posing as a prostitute on a city street corner. Defendant offered to pay $100 in exchange for sexual acts. The officer agreed, took the $100, and immediately signaled backup officers, who arrested Defendant. The state criminal penal code classifies prostitution as a misdemeanor, defined as 'engaging in, or offering to engage in, sexual activity for valuable compensation.' The prosecutor charged Defendant with both: (1) solicitation of prostitution, and (2) conspiracy to commit prostitution. The jurisdiction follows traditional common law conspiracy principles, including Wharton's Rule.",
        q: "What is the effect of Wharton's Rule on the charge of conspiracy to commit prostitution?",
        opts: [
            "It has no effect, because prostitution involves moral turpitude which suspends common law conspiracy limitations.",
            "It bars the conspiracy conviction because the substantive crime of prostitution inherently requires the concerted criminal participation of two persons.",
            "It merges the solicitation charge into the conspiracy charge, but preserves both convictions.",
            "It requires the immediate acquittal of both charges because an agreement with an undercover officer lacks bilateral intent."
        ],
        ans: 1,
        exp: "Rule: Under common law Wharton's Rule, an agreement between two persons to commit a substantive crime cannot be prosecuted as a conspiracy if the substantive target offense itself logically and inherently requires the concerted participation of two people (e.g., adultery, dueling, bigamy, bribery, or prostitution). Where the underlying offense necessitates two actors, the law presumes the legislature took that dual participation into account when establishing the statutory penalty for the substantive offense; adding a conspiracy charge requires a third party beyond the necessary participants. Because prostitution inherently requires two actors, Wharton's Rule bars the conspiracy charge (Option B). (Additionally, an agreement with an undercover decoy fails common law bilateral conspiracy, but the call explicitly tests the substantive effect of Wharton's Rule). Option A is incorrect because moral turpitude does not suspend Wharton's Rule. Option C is incorrect because solicitation merges into attempt or conspiracy, but Wharton's Rule extinguishes the conspiracy charge entirely. Option D is incorrect because Wharton's Rule specifically targets the dual-actor requirement of the substantive crime."
    },
    {
        id: 5,
        topic: "Mixed",
        fp: "An environmental activist opposed a commercial chemical corporation's industrial river emissions. The activist authored and published a pamphlet distributed to community residents. The pamphlet truthfully reported that the corporation had discharged 5,000 pounds of permitted effluent into the river over the past year. However, across the front cover of the pamphlet, the activist placed a large, prominent photograph of the corporation's chief executive officer directly beneath bold, three-inch headlines stating: 'POISONING OUR CHILDREN FOR PROFIT: LOCAL ENVIRONMENTAL CRIMINALS EXPOSED.' The CEO had never been charged with, convicted of, or investigated for any environmental crime, and the plant operated under lawful government permits. The CEO brought an action against the activist for false light invasion of privacy.",
        q: "Will the CEO prevail in his false light claim against the activist?",
        opts: [
            "No, because truth is an absolute defense to all privacy-related tort actions as a matter of law.",
            "No, because corporate executives are public figures who must prove special pecuniary damages to recover for privacy invasions.",
            "Yes, if the publication placed the CEO before the public in a highly offensive false light, and the activist acted with actual malice.",
            "Yes, because the unauthorized use of an individual's photograph constitutes the tort of appropriation."
        ],
        ans: 2,
        exp: "Rule: The tort of false light invasion of privacy requires: (1) publication of facts regarding the plaintiff; (2) placing the plaintiff in a false light before the public; (3) the false light would be highly offensive to a reasonable person; and (4) if the plaintiff is a public figure or official (or the matter touches on public concern), the defendant acted with actual malice (knowledge of falsity or reckless disregard of the truth under Time, Inc. v. Hill). Unlike defamation, false light does not require technical falsehood of every underlying fact; juxtaposing true statements or a photograph with deceptive, inflammatory headlines ('Criminals Exposed') that conveys a highly offensive, false impression of criminal conduct satisfies false light (Option C). Option A is incorrect because technical literal truth of background facts does not defeat false light where the overall presentation creates a false, highly offensive implication. Option B is incorrect because special damages are not required for false light. Option D is incorrect because commercial appropriation requires exploiting the plaintiff's likeness for financial commercial gain (advertising), which is absent in political advocacy."
    },
    {
        id: 6,
        topic: "Mixed",
        fp: "A manufacturer of commercial solar thermal panels entered into an output contract with a utility project developer. The written agreement provided: 'Developer agrees to purchase, and Manufacturer agrees to sell, all solar thermal panels manufactured by Manufacturer at its plant during the calendar year, estimated in good faith at 10,000 units, at a fixed price of $200 per panel.' Six months into the contract, due to a massive unexpected worldwide spike in silicon wafer prices, the manufacturer's production costs rose from $150 per panel to $350 per panel, meaning producing panels would cause severe operational losses. The manufacturer decided to shut down panel manufacturing for the remainder of the year to avoid bankruptcy, and produced zero panels during the second half of the year, delivering only 4,000 panels total. The utility developer sued the manufacturer for breach of contract, asserting that the manufacturer had a mandatory legal duty to produce and deliver approximately 10,000 panels.",
        q: "Did the manufacturer breach the output contract under UCC Article 2 by reducing its production to zero?",
        opts: [
            "Yes, because under UCC § 2-306, an output seller cannot reduce its output to a quantity unreasonably disproportionate to any stated estimate.",
            "Yes, because the manufacturer assumed the absolute risk of market material price fluctuations under the output term.",
            "No, because an output seller may reduce or cease its output in good faith, and an operational shutdown to avoid bankruptcy satisfies the good-faith requirement.",
            "No, because all output contracts lacking a minimum guaranteed quantity are illusory and unenforceable for lack of mutuality."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-306(1), a term measuring quantity by the output of the seller means such actual output as may occur in good faith, except that no quantity unreasonably disproportionate to any stated estimate may be tendered or demanded. Official Comment 2 to UCC § 2-306 explicitly clarifies that while a seller cannot arbitrarily ramp UP production disproportionately to exploit market spikes, a seller may reduce its output, or even shut down production completely, provided the shutdown is done in GOOD FAITH. A legitimate business shutdown motivated by catastrophic market cost spikes threatening business survival (bankruptcy) satisfies commercial good faith; the disproportionality limitation applies to excessive increases, not good-faith business shutdowns to prevent insolvency (Option C). Option A is incorrect because the 'unreasonably disproportionate' limitation applies primarily to demands or tenders that exceed normal/estimated output, not to good-faith reductions. Option B is incorrect because output contracts measure quantity by good-faith actual output, not strict volume guarantees. Option D is incorrect because UCC § 2-306 expressly validates output contracts against illusory promise challenges."
    },
    {
        id: 7,
        topic: "Mixed",
        fp: "Defendant approached an acquaintance and stated: 'Your brother borrowed $5,000 from me six months ago and skipped town. If you do not pay me that $5,000 by 5:00 PM next Friday, I will file a criminal police complaint against you alleging that you helped him forge my signature on the loan documents, and I will make sure the district attorney indicts you.' In fact, Defendant knew that the acquaintance had zero involvement in the brother's loan and had forged nothing. Terrified of public criminal prosecution and arrest, the acquaintance went to his bank, withdrew $5,000 of his personal savings, and handed the cash to Defendant on Friday morning. The jurisdiction adheres to traditional common law property offenses and has a modern statutory crime of extortion.",
        q: "What crime did Defendant commit?",
        opts: [
            "Common law robbery.",
            "Extortion (blackmail).",
            "Larceny by trick.",
            "Common law embezzlement."
        ],
        ans: 1,
        exp: "Rule: Extortion (blackmail) consists of obtaining property from another with consent induced by the wrongful use of threats of FUTURE harm, including threats to: (1) accuse any person of a criminal offense, (2) expose a secret impairing reputation, or (3) inflict future physical harm or economic damage. In contrast, common law robbery requires obtaining property against the victim's will through the use or threat of IMMEDIATE physical violence. Because Defendant coerced the victim into handing over $5,000 via a threat of future criminal accusation and prosecution (not immediate physical violence), Defendant committed the crime of extortion (Option B). Option A is incorrect because robbery requires immediate physical force or fear of immediate bodily harm. Option C is incorrect because larceny by trick requires obtaining possession through fraud or deceit without threats of future exposure. Option D is incorrect because embezzlement requires fraudulent conversion of property already in the lawful entrusted possession of the defendant."
    },
    {
        id: 8,
        topic: "Mixed",
        fp: "A plaintiff visited a large municipal park to watch an amateur weekend baseball league game. The park was owned and maintained by the city recreation department. Along the third-base line, the city had installed an open wooden spectator bleacher set thirty feet behind a 12-foot-high chain-link backstop fence. During the fifth inning, a batter struck a sharply hit foul ball with high exit velocity. The foul ball curved over the top of the 12-foot fence, plummeting into the bleachers and striking the plaintiff in the eye, fracturing his orbital socket. The plaintiff brought a negligence action against the city. At trial, the plaintiff introduced architectural testimony that professional stadiums utilize 30-foot-high netting to screen foul balls along the lines. The city moved for summary judgment under the 'baseball rule' (primary assumption of the risk).",
        q: "Should the court grant the city's motion for summary judgment?",
        opts: [
            "No, because premises owners owe invitees a non-delegable duty to eliminate all projectile hazards along spectator seating.",
            "No, because the adequacy of a 12-foot fence compared to professional 30-foot netting is a question of comparative fault for the jury.",
            "Yes, because under the 'baseball rule' of primary assumption of the risk, stadium operators satisfy their duty of care by providing screened seating in the most dangerous area (behind home plate) and spectators in open bleachers assume the inherent risk of foul balls.",
            "Yes, because municipal recreation departments enjoy absolute sovereign immunity for sporting venue design choices."
        ],
        ans: 2,
        exp: "Rule: Under the traditional 'baseball rule' (a specialized application of primary assumption of the risk), stadium and ballpark operators owe a limited duty of care to spectators: the operator satisfies its legal duty if it provides screened or protected seating behind home plate (the zone of highest danger) sufficient to accommodate those spectators who reasonably request it, and is not negligent in maintaining the screens provided. Foul balls hit into open spectator bleachers along the baselines are an inherent risk of the sport of baseball that spectators open and obviously assume as a matter of law. Primary assumption of the risk completely negates the defendant's duty of care, requiring summary judgment (Option C). Option A is incorrect because ballpark operators are not strictly liable or required to encase entire fields in netting. Option B is incorrect because primary assumption of the risk bars the duty element entirely, precluding jury balancing. Option D is incorrect because operational maintenance of public parks is generally proprietary or operational, not shielded by absolute immunity."
    },
    {
        id: 9,
        topic: "Mixed",
        fp: "A homeowner contracted in writing with an industrial tree-clearing contractor to clear brush, fell dead trees, and grind stumps on his five-acre rural property for $12,000. Under the contract, the contractor was to complete the work by June 1. On May 20, after completing about 80% of the clearing, the contractor's industrial commercial wood chipper suffered an engine block crack. The contractor approached the homeowner and stated: 'I cannot finish chipping the remaining brush unless you agree to pay me an additional $2,000 so I can rent a replacement chipper.' The homeowner orally agreed. The contractor finished the job on June 1. The homeowner paid the original $12,000 contract price, but refused to pay the additional $2,000, asserting the common law pre-existing duty rule.",
        q: "Is the homeowner legally obligated to pay the additional $2,000?",
        opts: [
            "Yes, because under Restatement (Second) of Contracts § 89, a modification is binding if fair and equitable in light of unanticipated circumstances.",
            "Yes, because the contractor fully performed by the agreed June 1 deadline.",
            "No, because ordinary equipment breakdowns are normal commercial risks of performance that do not excuse the pre-existing duty rule.",
            "No, because service contracts involving real property cannot be modified without court approval."
        ],
        ans: 2,
        exp: "Rule: Under the common law pre-existing duty rule, doing or promising to do what one is already legally obligated to do does not constitute fresh consideration. While Restatement (Second) of Contracts § 89(a) recognizes an exception where a modification is fair and equitable in view of circumstances *not anticipated by the parties when the contract was made*, this exception applies strictly to extraordinary, unforeseen external contingencies (such as unknown subsurface rock or war), NOT to routine, foreseeable business risks. Routine equipment failure, mechanical breakdowns, or tool damage are standard risks inherent in contracting that the contractor assumes; they do not satisfy the unanticipated circumstance test. The modification was unsupported by consideration and is unenforceable (Option C). Option A is incorrect because mechanical breakdowns are ordinary operational risks, not unanticipated circumstances under § 89. Option B is incorrect because timely performance is merely satisfying the preexisting obligation. Option D is incorrect because court approval is not required for contract modifications."
    },
    {
        id: 10,
        topic: "Mixed",
        fp: "Defendant suffered from severe paranoid schizophrenia. One evening, while experiencing a psychotic episode, Defendant hallucinated that his roommate was a mechanical android sent by a foreign intelligence agency that was secretly recording his thoughts. Believing he was merely dismantling an inanimate piece of surveillance machinery to protect national security, Defendant took a heavy wrench and smashed the roommate's skull, killing him instantly. Uncontroverted psychiatric testimony established that due to his mental illness, Defendant did not know that his roommate was a living human being, but believed he was destroying an electronic robot. The jurisdiction strictly follows the M'Naghten test for legal insanity.",
        q: "Is Defendant likely to be found not guilty by reason of insanity?",
        opts: [
            "No, because Defendant intentionally struck the victim with a deadly weapon.",
            "No, because Defendant was aware that his physical actions involved using destructive violence.",
            "Yes, because due to his mental illness, Defendant did not know the nature and quality of the act he was performing.",
            "Yes, but only under the Model Penal Code's 'substantial capacity' test."
        ],
        ans: 2,
        exp: "Rule: Under the M'Naghten test for legal insanity, a defendant is not guilty by reason of insanity if, at the time of the committing of the act, he was laboring under such a defect of reason, from disease of the mind, as: (1) not to know the **nature and quality of the act** he was doing; OR (2) if he did know it, that he did not know he was doing what was wrong. A defendant who, due to a severe delusion, believes he is destroying an inanimate robot or an electronic machine rather than striking a human being does not know the physical nature and quality of his act (he does not know he is killing a human being). This satisfies the first prong of M'Naghten, establishing legal insanity (Option C). Options A and B are incorrect because physical intentional movement with a tool does not defeat insanity if the actor fails to understand the true physical reality of his action (the nature and quality of killing a human). Option D is incorrect because Defendant qualifies under the traditional M'Naghten rule."
    },
    {
        id: 11,
        topic: "Mixed",
        fp: "A manufacturer of high-end home audio speakers contracted in writing with an electronics supplier to purchase 5,000 audio amplifier modules for $50,000, with delivery on October 1. The contract contained the delivery term: 'F.O.B. Seller's factory loading dock, Seattle.' On September 20, the supplier packaged the 5,000 modules in standard cardboard shipping cartons, loaded them onto a flatbed commercial freight truck operated by an independent motor carrier, and obtained a commercial bill of lading. However, the supplier's warehouse crew carelessly failed to cover the load with a waterproof canvas tarpaulin, in direct violation of standard commercial freight shipping practices for moisture-sensitive electronic components. While the truck was traveling through the Cascade Mountains, an unexpected, moderate autumn rainstorm soaked the uncovered cartons. Moisture seeped into the amplifier circuitry, corroding internal solder joints and rendering all 5,000 units inoperable. The speaker manufacturer rejected the delivery upon arrival and refused to pay. The supplier sued the manufacturer for the $50,000 contract price, arguing that the risk of loss had shifted to the buyer under the F.O.B. shipment term.",
        q: "Who bears the risk of loss for the water-damaged amplifier modules under UCC Article 2?",
        opts: [
            "The speaker manufacturer, because under an F.O.B. place of shipment contract, the risk of loss passes to the buyer the moment goods are loaded aboard an independent carrier.",
            "The supplier, because the supplier failed to make a reasonable contract for the transportation of the goods having regard to their nature.",
            "The commercial freight motor carrier, because common carriers are strictly liable as insurers for all rain damage.",
            "The loss is split equally between the buyer and seller under the doctrine of commercial frustration."
        ],
        ans: 1,
        exp: "Rule: Under UCC § 2-509(1)(a), under a shipment contract (such as F.O.B. Seller's factory), the risk of loss passes to the buyer when the goods are delivered to the carrier ONLY IF the seller has satisfied the requirements of UCC § 2-504. Under UCC § 2-504(a), the seller must: 'put the goods in the possession of such a carrier and make such a contract for their transportation as may be reasonable having regard to the nature of the goods and other circumstances of the case.' Entrusting moisture-sensitive electronic circuit boards to an open flatbed truck without protective waterproof tarps is a failure to make a reasonable shipping arrangement under § 2-504. Because the seller breached its foundational shipping duty and material damage ensued, the risk of loss NEVER shifted to the buyer and remained with the supplier (Option B). Option A is incorrect because the passage of risk under § 2-509(1)(a) is explicitly conditioned on compliance with § 2-504 shipping duties. Option C is incorrect because as between buyer and seller, the seller holds the risk. Option D is incorrect because the UCC assigns the entire risk of loss to one party."
    },
    {
        id: 12,
        topic: "Mixed",
        fp: "An avid art enthusiast visited a commercial gallery and expressed interest in purchasing an oil painting titled 'Sunset over the Dunes.' The gallery owner and the enthusiast executed a signed written contract whereby the enthusiast agreed to buy the painting for $15,000, with payment and pickup scheduled for July 1. On June 20, the gallery owner received an unexpected cash offer of $22,000 for the same painting from an interior decorator. The gallery owner sold and physically delivered the painting to the decorator, who took without notice of the prior contract. The gallery owner called the enthusiast and repudiated the contract, offering to refund any administrative deposits. The enthusiast immediately filed a suit in equity against the gallery owner seeking an order of specific performance compelling delivery of the painting.",
        q: "Will the court grant the enthusiast's request for specific performance?",
        opts: [
            "Yes, because contracts for the sale of unique personal works of art are presumptively entitled to equitable enforcement.",
            "Yes, because the gallery owner's deliberate, bad-faith breach estops him from asserting equitable defenses.",
            "No, because specific performance cannot be decreed where the subject matter of the contract has already been conveyed to a bona fide purchaser.",
            "No, because the enthusiast has an adequate remedy at law in expectation damages under UCC § 2-713."
        ],
        ans: 2,
        exp: "Rule: Specific performance is an equitable remedy available when legal damages are inadequate, which is presumptively true for unique goods, heirlooms, and works of art under UCC § 2-716. However, equity will not order an impossibility: where the subject matter of a contract for personal property has already been sold and physically delivered to a third-party bona fide purchaser (BFP) who purchases for value without notice, the court cannot compel the defendant to transfer title and possession of property he no longer owns or controls. Specific performance against the seller is impossible, and the buyer is relegated to legal damages (Option C). Option A is incorrect because physical transfer to an innocent BFP renders specific performance impossible. Option B is incorrect because bad faith does not grant a court power to order an impossible conveyance of third-party property. Option D is incorrect because works of art are unique, making damages historically inadequate in principle."
    },
    {
        id: 13,
        topic: "Mixed",
        fp: "A plaintiff was operating an automobile on a municipal street on a clear afternoon. A delivery van operated by a parcel courier ran a red light at 30 mph and struck the driver's side of the plaintiff's car. The plaintiff suffered broken ribs and a shattered collarbone. While lying on a stretcher awaiting ambulance transport, the plaintiff overheard the delivery driver say to a police officer: 'I was looking down at my delivery GPS unit; this was 100% my fault.' The plaintiff was transported to a regional trauma center. In the emergency department, an attending orthopedic surgeon carelessly set the plaintiff's fractured collarbone using an unsterilized bone clamp that had been dropped on the floor and returned to the surgical tray by an orderly. The unsterilized tool introduced a violent, antibiotic-resistant MRSA bone infection (osteomyelitis), which destroyed the collarbone and required four reconstructive surgical debridements and permanent arm disability. The plaintiff brought a negligence action against the delivery company for all his injuries, including the bone infection.",
        q: "Is the delivery company legally responsible for the permanent arm disability caused by the hospital infection?",
        opts: [
            "No, because using an unsterilized surgical clamp dropped on a floor is an extraordinary, abnormal intervening medical act that constitutes a superseding cause.",
            "No, because a commercial delivery company cannot be held vicariously liable for the medical malpractice of independent hospital personnel.",
            "Yes, because subsequent negligent medical treatment and hospital-acquired infections are foreseeable risks of causing physical injury to a plaintiff.",
            "Yes, because commercial common carriers are subject to strict enterprise liability for all consequential injuries resulting from traffic collisions."
        ],
        ans: 2,
        exp: "Rule: Under Restatement (Second) of Torts § 457, an initial negligent tortfeasor is legally liable for any additional bodily harm resulting from normal efforts of third persons in rendering medical or surgical services, which the plaintiff's condition reasonably requires. Ordinary medical malpractice, surgical errors, instrument mishandling, and post-operative hospital-acquired infections (such as MRSA osteomyelitis) are deemed foreseeable intervening risks as a matter of law. The law regards subsequent medical complications as a natural and foreseeable risk within the scope of the original tortfeasor's liability. The delivery company remains jointly and severally liable for both the initial fractures and the aggravated infection injuries (Option C). Option A is incorrect because medical errors and hospital infections occurring during trauma care are deemed foreseeable intervening forces, not superseding causes. Option B is incorrect because liability rests on the defendant's primary liability as the initial tortfeasor, not vicarious liability for the hospital. Option D is incorrect because delivery vans sound in negligence, not strict liability."
    },
    {
        id: 14,
        topic: "Mixed",
        fp: "Defendant wanted to break into an occupied, single-family residential dwelling at night to steal jewelry. At 2:00 AM, Defendant approached the home wearing a dark ski mask and carrying an iron pry bar. Defendant found a ground-floor kitchen window standing open six inches from the bottom. Defendant placed his hands under the wooden sash, applied upward force, and lifted the sash an additional eighteen inches to create an opening large enough to admit his body. Defendant climbed through the opening, stepped onto the kitchen floor, and began opening drawers. The homeowner heard footsteps, walked into the kitchen with a handgun, and arrested Defendant at gunpoint. The jurisdiction defines all crimes strictly according to traditional common law definitions.",
        q: "Did Defendant's conduct in opening the window further satisfy the 'breaking' element of common law burglary?",
        opts: [
            "No, because the window was already partially open, meaning Defendant merely utilized an existing opening without creating a new breach.",
            "No, because climbing through an open window without damaging structural property constitutes a mere trespass.",
            "Yes, because lifting or moving further an already partially open window or door to enlarge the aperture to admit the body constitutes a common law breaking.",
            "Yes, but only under the doctrine of constructive breaking, because the entry occurred at night."
        ],
        ans: 2,
        exp: "Rule: At common law, burglary requires: (1) breaking, (2) entering, (3) the dwelling house, (4) of another, (5) in the nighttime, (6) with the intent to commit a felony therein. While entering through a fully open door or window without moving any fixture is NOT a breaking, the traditional common law rule and majority doctrine hold that **raising, opening, or pushing further a window or door that is already partially open**, so as to enlarge the aperture to admit the actor's body, constitutes an **actual physical breaking**. The application of physical force to move the sash and alter the structural enclosure of the dwelling house satisfies the breaking element (Option C). Option A is incorrect because enlarging a partial opening is a classic common law breaking. Option B is incorrect because actual physical structural damage is not required for a breaking; moving an unlatched closure suffices. Option D is incorrect because moving an actual window sash is an actual physical breaking, not a constructive breaking (which requires obtaining entry through fraud, threat, or collusion with a servant)."
    },
    {
        id: 15,
        topic: "Mixed",
        fp: "A commercial roofing company entered into a written contract with an auto dealership to install a multi-ply commercial roof on the dealership's showroom for $40,000, payable upon completion on August 1. The contract explicitly provided: 'The roofer shall use only Owens-Corning TruDefinition architectural fiberglass shingles in Estate Gray color.' The roofer completed the roof on July 28. However, due to a warehouse mix-up, the roofer inadvertently installed GAF Timberline HDZ architectural fiberglass shingles in Slate Gray color. Expert testimony at trial established that the GAF shingles were chemically and structurally identical to the Owens-Corning shingles, possessed the identical 30-year commercial warranty, and were indistinguishable in color and quality from the street. The fair market value of the building with the GAF roof was exactly identical to its value with the Owens-Corning roof ($1,200,000). To remove the GAF shingles and replace them with Owens-Corning shingles would cost $35,000 and require tearing off structural underlayment. The dealership refused to pay the roofer any part of the $40,000 contract price, asserting breach of an express specification.",
        q: "What amount is the roofer entitled to recover from the dealership?",
        opts: [
            "Nothing, because the roofer breached an express specification, and the dealership is entitled to insist on strict adherence to contract terms.",
            "$40,000 (the full contract price), because the doctrine of substantial performance applies, and the cost of replacement would involve unreasonable economic waste.",
            "$5,000, representing the contract price ($40,000) less the cost of replacement ($35,000).",
            "The reasonable value of the roofer's labor in quantum meruit, but not to exceed $20,000."
        ],
        ans: 1,
        exp: "Rule: Under the classic doctrine of Jacob & Youngs v. Kent, in construction contracts, where a contractor's breach is trivial and innocent (unintentional) and does not impair the structural integrity or functional utility of the building, the contractor has substantially performed. Where the cost of replacement would involve unreasonable economic waste (tearing off a perfectly functional, identical quality roof for $35,000), the proper measure of damages for the breach is the difference in value rather than the cost of completion. Here, the difference in value between the two roofs is $0. The roofer substantially performed and is entitled to the full contract price ($40,000) minus the diminution in market value ($0), yielding a full recovery of $40,000 (Option B). Option A is incorrect because specifications regarding brand names of equivalent materials are construed as promises/covenants rather than express conditions of forfeiture. Option C is incorrect because awarding the $35,000 cost of replacement would cause gross economic waste. Option D is incorrect because a contractor who has substantially performed sues on the contract, not in quasi-contract."
    },
    {
        id: 16,
        topic: "Mixed",
        fp: "Defendant wanted to rob a neighborhood bank. Defendant purchased a black polymer airsoft pistol that was an exact, weighted 1:1 replica of a 9mm police service firearm, firing plastic BBs. At 2:00 PM on a Friday, Defendant entered the bank wearing a dark hoodie. Defendant drew the airsoft pistol, pointed it directly at the head teller's face from three feet away, and shouted: 'Empty your cash drawers into this bag right now, or I'll blow your head off!' The teller, believing the gun was a real loaded firearm, became terrified, raised her hands, and handed over $10,000 in cash. Defendant grabbed the money and fled on foot before being arrested two blocks away. A search revealed that the gun was an airsoft pistol firing plastic BBs. The jurisdiction adheres to traditional common law criminal definitions and has an aggravated statutory offense of 'armed robbery' defined as 'committing common law robbery while armed with a dangerous or deadly weapon.'",
        q: "What is the most serious crime of which Defendant can properly be convicted?",
        opts: [
            "Armed robbery.",
            "Common law robbery.",
            "Larceny by trick.",
            "Extortion only."
        ],
        ans: 1,
        exp: "Rule: Common law robbery is the trespassory taking and carrying away of the personal property of another from the person or immediate presence of another, by force or the threat of immediate physical force (intimidation/fear), with the intent to permanently deprive the owner thereof. Threatening to shoot the teller while pointing a simulated weapon creates immediate reasonable apprehension and fear of lethal violence, fully satisfying the intimidation requirement for common law robbery. However, regarding the statutory offense of armed robbery, under strict traditional definitions, the defendant must in fact be armed with an actual dangerous or deadly weapon (capable of producing death or serious bodily injury); feigning a weapon with an inoperable plastic BB replica that is not used as a heavy bludgeon does not satisfy the armed element. Because Defendant was armed only with a non-lethal plastic replica, armed robbery fails, making common law robbery the highest offense committed (Option B). Option A is incorrect because Defendant was not armed with an actual dangerous or deadly weapon under strict definitions. Option C is incorrect because larceny by trick involves obtaining possession through fraud or deceit without force or fear, whereas Defendant obtained property through active threats of imminent death (robbery). Option D is incorrect because extortion requires threats of future harm, not immediate physical violence."
    },
    {
        id: 17,
        topic: "Mixed",
        fp: "A pedestrian was walking along a designated path in a municipal park when he noticed a swimmer struggling in a fast-moving river. The pedestrian, who was an off-duty professional lifeguard and an expert swimmer, had a commercial rescue flotation buoy in his backpack. However, the pedestrian was late for a job interview and decided to keep walking without throwing the buoy or calling emergency services. The swimmer drowned. The swimmer's estate sued the pedestrian for negligence.",
        q: "Is the pedestrian liable for the swimmer's death?",
        opts: [
            "Yes, because he was an expert swimmer and off-duty lifeguard with the means to easily effect a rescue.",
            "Yes, because his failure to act constituted a gross deviation from the standard of care expected of a reasonable person.",
            "No, because a bystander generally has no affirmative duty to rescue a stranger in peril.",
            "No, because the swimmer's estate cannot prove that the pedestrian's failure to act was the actual cause of the drowning."
        ],
        ans: 2,
        exp: "Rule: Under general tort law principles, there is no affirmative duty to rescue or assist a stranger in peril. The pedestrian did not create the peril, nor did he have a special relationship with the swimmer (such as parent-child or common carrier-passenger) that would impose an affirmative duty to act. Possessing the skills or means to rescue (even as an off-duty professional) does not create a legal duty to rescue a stranger (Option C). Option A is incorrect because professional skills do not create a legal duty to rescue strangers when off duty. Option B is incorrect because without an underlying legal duty to act, a failure to act cannot constitute actionable negligence, regardless of moral blameworthiness. Option D is incorrect because the issue is resolved on the element of duty, not causation."
    },
    {
        id: 18,
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
        id: 19,
        topic: "Mixed",
        fp: "Defendant and an accomplice agreed to commit an armed robbery of a convenience store. The accomplice entered the store carrying a loaded handgun and demanded cash from the clerk, while Defendant waited outside in the driver's seat of an idling getaway car. The clerk activated a silent alarm, and a police officer arrived just as the armed accomplice was exiting the store. A shootout ensued, and the armed accomplice accidentally shot and killed a pedestrian who was walking past the store. Defendant was apprehended blocks away in the car.",
        q: "Can Defendant properly be convicted of felony murder for the death of the pedestrian?",
        opts: [
            "No, because Defendant did not fire the fatal shot and was not present inside the store.",
            "No, because the killing of the pedestrian was accidental and lacked malice aforethought.",
            "Yes, because the killing occurred during the commission of an inherently dangerous felony in which Defendant was a participant.",
            "Yes, but only if the prosecution proves Defendant intended for the gun to be fired."
        ],
        ans: 2,
        exp: "Rule: The felony murder rule holds all participants in an inherently dangerous felony (such as robbery) strictly liable for any death that occurs during the commission of or immediate flight from the felony, provided the death is a foreseeable result. Defendant is a co-felon in the robbery, and the accidental shooting of a bystander during the escape is a foreseeable consequence of an armed robbery (Option C). Option A is incorrect because co-felons are vicariously liable for the acts of their partners during the felony, regardless of who pulled the trigger or physical proximity to the exact spot of the shooting. Option B is incorrect because felony murder substitutes the intent to commit the underlying felony for malice aforethought; accidental killings qualify. Option D is incorrect because the prosecution does not need to prove Defendant intended the gun to be fired, only that Defendant intended to participate in the underlying robbery."
    },
    {
        id: 20,
        topic: "Mixed",
        fp: "A demolition company was hired to implode an abandoned concrete building in a busy downtown commercial area. The company used state-of-the-art explosives, adhered strictly to all safety protocols, and exercised the utmost care to ensure the public's safety. Despite these precautions, a bizarre and unforeseeable wind draft caused a small piece of concrete debris to fly several blocks away, striking a pedestrian and causing severe injury.",
        q: "Is the demolition company liable to the pedestrian for his injuries?",
        opts: [
            "No, because the company exercised the utmost care and the wind draft was an unforeseeable superseding cause.",
            "No, because the pedestrian assumed the risk by walking in a downtown area where demolition was occurring.",
            "Yes, because blasting is an abnormally dangerous activity subject to strict liability.",
            "Yes, because the company breached its duty of care under the doctrine of res ipsa loquitur."
        ],
        ans: 2,
        exp: "Rule: Strict liability applies to abnormally dangerous activities, such as blasting or using explosives. A defendant engaged in such an activity is liable for injuries proximately caused by the dangerous propensity of the activity, regardless of the level of care exercised. Demolition by explosives is the classic example of an abnormally dangerous activity, and flying debris is exactly the type of harm that makes the activity dangerous (Option C). Option A is incorrect because no amount of reasonable care defeats a strict liability claim, and foreseeable weather variations or wind drafts are not superseding causes that cut off strict liability. Option B is incorrect because simply walking several blocks away does not constitute a knowing and voluntary assumption of the risk. Option D is incorrect because liability here is based on strict liability, not negligence (where res ipsa loquitur would apply)."
    },
    {
        id: 21,
        topic: "Mixed",
        fp: "A homeowner engaged a tree-trimming company to remove dead branches from a large tree in his front yard. While trimming branches, a heavy limb fell and landed across the homeowner's driveway, completely blocking vehicular access to the public street. The crew left for lunch without removing the branch. An hour later, the homeowner received an urgent phone call informing him that his elderly mother had suffered a heart attack and had been rushed to the hospital. The homeowner ran to his car, intending to drive to the hospital. Finding the driveway blocked, the homeowner attempted to back his car across his front lawn to bypass the obstruction. While driving over the lawn, the car struck an exposed boulder hidden in tall grass, disabling the vehicle. The homeowner called a taxi, arriving at the hospital 45 minutes late, shortly after his mother passed away. The homeowner sued the tree company for false imprisonment.",
        q: "Will the homeowner prevail in his false imprisonment action against the tree company?",
        opts: [
            "Yes, because blocking the homeowner's only vehicular driveway completely confined him to his real property.",
            "Yes, because the tree company's operational negligence created an actual physical barrier to egress.",
            "No, because blocking a driveway merely restricts a specific mode of travel (vehicular egress) rather than confining the person within a bounded area.",
            "No, because the homeowner was able to exit his property by hiring an alternative means of commercial transportation."
        ],
        ans: 2,
        exp: "Rule: False imprisonment requires: (1) an intentional act by the defendant, (2) resulting in the unlawful confinement of the plaintiff, (3) within a bounded area, and (4) awareness of the confinement or physical harm resulting from it. Confinement requires that the plaintiff's freedom of movement be restrained in all directions. Merely obstructing or blocking a specific mode of travel (such as vehicular access to a driveway) does NOT constitute false imprisonment if the plaintiff remains free to leave the premises on foot, by pedestrian path, or by other reasonable means of egress (Restatement (Second) of Torts § 36). The homeowner was not confined to a bounded area; his car was merely blocked, but his personal liberty of movement remained unrestricted (Option C). Options A and B are incorrect because interfering with vehicular egress does not constitute tortious confinement of the human person. Option D is incorrect because while alternative transportation is relevant, the dispositive legal defect is that the homeowner's person was never physically bounded."
    },
    {
        id: 22,
        topic: "Mixed",
        fp: "A commercial grain farmer entered into a written contract with an agricultural commodities broker to sell and deliver 10,000 bushels of No. 1 Yellow Corn at $5.00 per bushel ($50,000 total), with delivery to the broker's river elevator on or before November 15. The contract contained no force majeure clause. The farmer planted 200 acres of corn on his personal family farm, expecting a yield of 30,000 bushels. In late August, an unprecedented regional infestation of rare Asian armyworms swept through the county, completely devouring and destroying the farmer's entire 200-acre corn crop. However, corn of the identical grade was readily available on the open market from commercial grain elevators throughout the Midwest at the prevailing market price of $7.00 per bushel. The farmer telephoned the broker, stated that his crop had been completely wiped out by an act of nature, and claimed that his performance was discharged by commercial impracticability under UCC § 2-615. The broker demanded delivery, covered on the open market at $7.00 per bushel ($70,000 total), and sued the farmer for $20,000 in cover damages.",
        q: "Is the farmer's non-performance excused by commercial impracticability under UCC Article 2?",
        opts: [
            "Yes, because the total destruction of an agricultural crop by an unprecedented insect plague is an unforeseen casualty that excuses an agricultural seller as a matter of law.",
            "Yes, under the doctrine of subjective impossibility, because the farmer had no corn of his own to deliver.",
            "No, unless the written sales contract specifically identified the farmer's specific 200-acre tract as the exclusive source of the corn.",
            "No, because farmers are merchants under the UCC who are strictly liable as insurers for all delivery commitments."
        ],
        ans: 2,
        exp: "Rule: Under UCC § 2-615(a), non-performance is excused for commercial impracticability if performance as agreed has been made impracticable by the occurrence of a contingency the non-occurrence of which was a basic assumption on which the contract was made. In contracts for the sale of agricultural commodities, a critical distinction applies: if the contract is for unspecified agricultural goods (e.g., '10,000 bushels of No. 1 Yellow Corn') without specifying the land on which the crop is to be grown, the seller is not excused if his own crop is destroyed by weather or pests, because the seller can procure conforming goods on the open market to fulfill the contract. The contract is excused ONLY IF the contract explicitly specifies that the crops are to be grown on a specific, identified parcel of land (e.g., '10,000 bushels of corn to be grown on Farmer's Green Valley Farm') and that specific crop is destroyed without fault (UCC § 2-613). Because the contract did not designate the farmer's specific land as the exclusive source, the farmer bore the risk of procuring replacement corn on the market (Option C). Option A is incorrect because crop destruction excuses a seller only where the specific land was designated in the contract. Option B is incorrect because subjective impossibility ('I cannot do it') never excuses a sales contract when objective market cover is available. Option D is incorrect because farmers are not absolute insurers; liability turns on the failure to identify the source of the goods."
    },
    {
        id: 23,
        topic: "Mixed",
        fp: "Defendant was walking through a public park when he observed an unlocked, unattended bicycle leaning against a park bench. The bicycle belonged to a commuter who was resting under a nearby tree. Defendant decided to take the bicycle on a joyride around the lake. Defendant mounted the bicycle and rode along the paved path for two miles. While riding, Defendant ran over a hidden piece of broken glass that punctured the rear tire, causing it to go flat. Disgusted, Defendant wheeled the bicycle to a public bicycle rack outside a crowded park cafe, leaned it against the rack, and walked away, intending to leave it there for the owner or a park ranger to find. Three hours later, an unrelated thief saw the unlocked bicycle and stole it. The bicycle was never recovered. The jurisdiction adheres to traditional common law property offenses.",
        q: "Can Defendant properly be convicted of common law larceny?",
        opts: [
            "Yes, because unauthorized borrowing of personal property constitutes criminal conversion under the common law.",
            "Yes, because abandoning stolen property under circumstances that create a high risk of permanent loss supplies the requisite intent to permanently deprive.",
            "No, because Defendant lacked the specific intent to permanently deprive the owner of the bicycle at the time of the initial taking.",
            "No, because the subsequent theft by an independent third party was an unforeseeable superseding cause."
        ],
        ans: 1,
        exp: "Rule: At common law, larceny requires a trespassory taking and carrying away of personal property with the specific intent to permanently deprive the owner thereof (animus furandi). While a bona fide intent to borrow property temporarily with the capability and intent to return it negates larceny, a critical exception applies to abandonment: if an actor takes another's property without authorization and subsequently abandons it under circumstances that manifest a reckless indifference as to whether the owner ever recovers it, or creates a substantial risk of permanent loss (such as leaving an unlocked, flat-tired bicycle in a crowded public park miles away from where it was taken), the law treats the reckless abandonment as satisfying the intent to permanently deprive. Under the doctrine of continuing trespass, when Defendant abandoned the bicycle creating a high risk of theft, the concurrence of the continuing wrongful taking and the intent to abandon supplied the animus furandi for completed larceny (Option B). Option A is incorrect because mere unauthorized borrowing without intent to permanently deprive or reckless abandonment is civil conversion, not common law larceny. Option C is incorrect because it ignores the abandonment doctrine and continuing trespass. Option D is incorrect because intervening theft is the very risk created by the reckless abandonment."
    },
    {
        id: 24,
        topic: "Mixed",
        fp: "Defendant wanted to eliminate a business competitor. Defendant approached an acquaintance who had a reputation as a hired criminal enforcer and said: 'I will pay you $20,000 if you kill my business competitor.' The acquaintance agreed, stating: 'Give me $5,000 upfront for expenses, and I will take care of it this Friday.' Defendant handed the acquaintance $5,000 in cash. Unknown to Defendant, the acquaintance had been arrested on drug charges three weeks earlier and had signed a formal cooperation agreement with the state attorney general's office to act as an undercover informant. The acquaintance never intended to harm the competitor, and immediately handed the $5,000 over to state police detectives. Defendant was arrested two hours later and charged with: (1) conspiracy to commit murder, and (2) solicitation to commit murder. The jurisdiction adheres strictly to traditional common law criminal definitions.",
        q: "Of which of the charged offenses can Defendant properly be convicted?",
        opts: [
            "Both conspiracy to commit murder and solicitation to commit murder.",
            "Conspiracy to commit murder only, because the crime of solicitation merged into the completed conspiracy.",
            "Solicitation to commit murder only, because common law conspiracy requires a bilateral agreement of two guilty minds.",
            "Attempted murder only, because paying cash constitutes an overt act beyond mere preparation."
        ],
        ans: 2,
        exp: "Rule: Under traditional common law, conspiracy requires a bilateral agreement—a genuine meeting of two or more guilty minds intending to achieve an unlawful objective. An agreement between a defendant and a government agent or police informant who merely feigns agreement does not constitute a common law conspiracy because there is only one genuine guilty mind (the bilateral approach, in contrast to the unilateral approach of the Model Penal Code). Solicitation occurs when an actor urges, requests, commands, or hires another to commit a felony with the specific intent that the felony be committed; the offense is complete the instant the solicitation is uttered. While solicitation ordinarily merges into conspiracy once an agreement is formed, here no bilateral conspiracy was ever created because the informant feigned assent. Therefore, the solicitation did not merge, and Defendant is guilty of solicitation to commit murder only (Option C). Options A and B are incorrect because traditional common law rejects unilateral conspiracy, meaning conspiracy was never formed. Option D is incorrect because hiring a hitman who takes no physical steps toward the victim does not progress close enough to the victim to satisfy the common law proximity/equivocality tests for attempt."
    },
    {
        id: 25,
        topic: "Mixed",
        fp: "A manufacturer of high-precision laboratory centrifuges entered into a written contract with an export trading company to sell and deliver 50 centrifuges for $100,000. The contract contained the delivery term: 'F.O.B. Seller's factory loading dock, Chicago.' The contract specified delivery on or before October 1. On September 20, the manufacturer properly packaged the 50 centrifuges in reinforced shipping crates, loaded them securely aboard a common carrier commercial freight truck at its Chicago factory loading dock, and obtained a signed bill of lading from the carrier. The manufacturer immediately emailed a copy of the bill of lading and invoice to the export company. While the truck was en route through Indiana, a freak tornado struck the highway, overturning the truck and completely destroying the entire shipment of centrifuges. The export trading company refused to pay the $100,000 invoice, asserting that the goods were never delivered to its commercial warehouse.",
        q: "Who bears the risk of loss for the destroyed centrifuges under UCC Article 2?",
        opts: [
            "The export trading company, because under an F.O.B. shipment contract, the risk of loss passes to the buyer when the goods are properly delivered to the carrier.",
            "The manufacturer, because the risk of loss remains with the seller until the buyer physically receives and accepts conforming goods.",
            "The commercial freight carrier, because common carriers are strictly liable as insurers for all cargo destruction occurring in transit.",
            "The loss is split equally between the parties because the tornado was an unforeseeable Act of God."
        ],
        ans: 0,
        exp: "Rule: Under UCC § 2-319(1)(a) and UCC § 2-509(1)(a), the term 'F.O.B. [place of shipment]' (such as 'F.O.B. Seller's factory loading dock') creates a shipment contract. In a shipment contract, the risk of loss passes from the seller to the buyer when the seller: (1) properly puts the goods into the possession of a commercial carrier, (2) makes a reasonable contract for their transportation, and (3) promptly tenders necessary documents and notifies the buyer of shipment. The manufacturer fulfilled all shipment duties at its Chicago dock on September 20. Therefore, the risk of loss had already shifted to the export trading company before the tornado struck, and the buyer must pay the full contract price (Option A). Option B is incorrect because it describes an 'F.O.B. Destination' contract, not an F.O.B. shipment contract. Option C is incorrect because common carriers are legally excused from cargo liability when damage is caused by an unprecedented Act of God (tornado), and regardless, as between buyer and seller, the buyer held the contractual risk. Option D is incorrect because the UCC assigns the entire risk of loss to one party based on the delivery terms; it does not split losses."
    }
];