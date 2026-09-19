// BabyBar-Contracts-46.js
// Total Questions: 25
// Subject: Contracts (Common Law & UCC Article 2) ONLY
// Standard: Master Tier 5 / First-Year Law Students' Examination (Baby Bar) Benchmark
const examData46 = [
    {
        id: 1,
        topic: "Formation / Mailbox Rule & Crossing Communications",
        fp: "On May 1, a collector mailed a signed, written offer to a gallery owner: 'I offer to buy your antique desk for $4,000 cash. This offer remains open until May 15.' The gallery owner received the letter on May 3. On May 8, the gallery owner mailed a letter stating: 'I reject your offer.' On May 9, realizing antique prices were dropping, the gallery owner sent a telegram stating: 'Disregard my letter of May 8; I hereby accept your offer of May 1.' The collector received the telegram at 11:00 AM on May 10. The collector received the mailed rejection letter at 2:00 PM on May 11. The collector refused to buy the desk, asserting the rejection terminated the offer.",
        q: "Was a binding contract formed between the collector and the gallery owner?",
        opts: [
            "No, because under the mailbox rule, a rejection is effective immediately upon dispatch, terminating the offer.",
            "Yes, because acceptances are effective upon dispatch, overriding any prior written rejections regardless of receipt.",
            "Yes, because when a rejection is dispatched before an acceptance, whichever communication is received first controls.",
            "No, because the gallery owner's telegram constituted an invalid revocation of a prior executed rejection."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under Restatement (Second) of Contracts § 40, when an offeree dispatches a rejection and subsequently dispatches an acceptance, the mailbox rule does not apply. Instead, whichever communication is received first governs. If the acceptance is received first, a contract is formed. Because the collector received the acceptance telegram on May 10, a full day before receiving the rejection letter on May 11, a binding contract was formed upon receipt on May 10. (A) is incorrect because rejections are never effective upon dispatch; they are effective only upon actual receipt. (B) is incorrect because dispatching a prior rejection suspends the normal mailbox rule for the subsequent acceptance. (D) is incorrect because a dispatched rejection can be superseded if an acceptance overtakes it and arrives first."
    },
    {
        id: 2,
        topic: "Formation / UCC 2-207 Additional Term Material Alteration",
        fp: "A machine shop mailed a purchase order to an industrial supplier for 500 steel drill bits at $40 each. The purchase order contained no provisions regarding remedies. The supplier mailed back a signed acknowledgment agreeing to the quantity and price, but adding a pre-printed term: 'In no event shall seller be liable for consequential damages; buyer's exclusive remedy is replacement.' Both parties were merchants. The machine shop read the form, made no objection, and accepted the bits. Several bits shattered during normal operations, causing $15,000 in damage to a milling machine. The machine shop sued for consequential damages.",
        q: "Did the clause excluding consequential damages become part of the contract under UCC § 2-207?",
        opts: [
            "No, because a clause excluding consequential damages is a material alteration that does not enter the contract absent express assent.",
            "Yes, because between merchants, additional terms automatically become part of the contract unless objected to within a reasonable time.",
            "Yes, because limitation of remedies is expressly authorized by UCC § 2-719, and the buyer accepted the goods.",
            "No, because the supplier's acknowledgment operated as an invalid counteroffer that prevented any contract formation."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under UCC § 2-207(2), between merchants, additional terms become part of the contract unless they materially alter it. Clauses that negate standard implied warranties or eliminate statutory remedies like consequential damages introduce unreasonable surprise, constituting material alterations as a matter of law. A material alteration drops out unless the offeror expressly agrees to it. Because the machine shop never expressly agreed, the clause never became part of the contract. (B) is incorrect because the automatic inclusion rule explicitly excludes terms that materially alter the deal. (C) is incorrect because while UCC § 2-719 permits parties to agree to limit remedies, an unagreed unilateral proposal in a confirmation does not bind the other party. (D) is incorrect because UCC § 2-207(1) forms a binding contract on the writings despite additional terms."
    },
    {
        id: 3,
        topic: "Consideration / Settlement of Liquidated Debt (Pre-Existing Duty)",
        fp: "A roofing contractor repaired a commercial roof pursuant to a written contract for an agreed, liquidated price of $10,000. There was no dispute regarding the quality or timeliness of the work. Upon completion, the building owner stated: 'I have a cash flow shortage; if you accept $8,000 today as payment in full, I will pay now. Otherwise, wait six months.' The contractor orally agreed and accepted the $8,000 check, signing a receipt discharging all claims. Two months later, the contractor sued the owner for the remaining $2,000. The owner asserted accord and satisfaction.",
        q: "Is the contractor legally entitled to recover the remaining $2,000?",
        opts: [
            "No, because the contractor signed a written receipt explicitly discharging all claims upon receipt of the $8,000.",
            "Yes, because under the pre-existing duty rule, payment of a lesser sum on the due date cannot satisfy an undisputed liquidated debt.",
            "No, because the owner's cash flow shortage constituted an unanticipated circumstance excusing the balance.",
            "Yes, because agreements settling construction contracts must be recorded formally under commercial statutes."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under the common law pre-existing duty rule (Foakes v. Beer), payment of a lesser sum is not consideration for the discharge of an undisputed, liquidated debt. An accord and satisfaction requires consideration. Where the debt is liquidated, undisputed, and already due, the debtor does nothing more than he is already legally obligated to do by paying a smaller amount. The creditor's promise to accept the lesser amount lacks consideration, allowing recovery of the unpaid balance despite signing a full release. (A) is incorrect because a written receipt cannot cure a total absence of legal consideration under common law. (C) is incorrect because a debtor's private financial distress does not constitute an unanticipated circumstance that excuses debt. (D) is incorrect because commercial statutes do not govern the underlying contract doctrine of consideration in this manner."
    },
    {
        id: 4,
        topic: "Statute of Frauds / Land Sale & Part Performance",
        fp: "An owner of a 5-acre unimproved parcel orally agreed to sell the land to a buyer for $50,000. The buyer immediately paid a $10,000 cash down payment, which the owner accepted. With the owner's express permission, the buyer entered the land, cleared one acre of trees, graded a driveway, and installed a septic tank at an expense of $15,000. Before closing, land values surged, and the owner repudiated the agreement, claiming the contract was unenforceable under the Statute of Frauds.",
        q: "Will the buyer be able to enforce the oral contract for the sale of the land?",
        opts: [
            "No, because contracts for the transfer of an interest in real property must be in a signed writing without exception.",
            "No, because the part performance exception requires payment of 100% of the purchase price in cash.",
            "Yes, because the owner's acceptance of the $10,000 down payment operated as an equitable ratification of the agreement.",
            "Yes, because under the part performance doctrine, taking possession, paying part of the price, and making improvements removes the bar."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under the equitable part performance exception to the Statute of Frauds, an oral contract for the sale of land will be enforced if the buyer, in reasonable reliance on the contract, takes possession of the property and either pays part of the purchase price or makes valuable, permanent improvements. The buyer paid $10,000, took physical possession with consent, and made permanent improvements. These acts unequivocally refer to the contract of sale, removing the agreement from the Statute of Frauds. (A) is incorrect because part performance is a universally recognized exception to the land sale Statute of Frauds. (B) is incorrect because full payment is not required when accompanied by possession and substantial improvements. (C) is incorrect because mere acceptance of a down payment without possession and improvements does not constitute an equitable exception."
    },
    {
        id: 5,
        topic: "Defenses / Unilateral Mistake Known to Other Party",
        fp: "A homeowner solicited bids from contractors to paint his house. Three contractors submitted bids of $14,000, $15,500, and $16,000. A fourth contractor, accidentally omitting a $12,000 labor column on his worksheet, submitted a bid of $3,000. The homeowner immediately noticed the $3,000 bid was less than one-fourth the price of the others. Realizing the obvious calculation error, the homeowner immediately signed and returned an acceptance. The contractor discovered the omission two hours later and gave notice of rescission.",
        q: "Can the contractor avoid the contract on the ground of unilateral mistake?",
        opts: [
            "No, because unilateral errors caused by a contractor's own clerical negligence cannot excuse contractual obligations.",
            "Yes, because the homeowner had reason to know of the palpable clerical error, making enforcement unconscionable.",
            "No, because the contractor assumed the risk of its own arithmetic calculations in the bidding process.",
            "Yes, under the doctrine of supervening impossibility due to the financial ruin enforcement would cause."
        ],
        ans: 1,
        exp: "(B) is the correct response. A unilateral mistake makes a contract voidable where the other party had reason to know of the mistake (Restatement § 153). Under the 'palpable error' doctrine, an offeree cannot 'snap up' an offer that contains an obvious, glaring arithmetic or clerical mistake. A $3,000 bid where all others exceeded $14,000 put the homeowner on actual notice of a clerical blunder. Because the homeowner knew of the mistake, the contractor is entitled to rescission. (A) is incorrect because unilateral clerical errors known to the offeree provide standard grounds for avoidance. (C) is incorrect because a bidder does not assume the risk of clerical slips that the other party seeks to exploit. (D) is incorrect because the issue is an existing mistake of fact at formation, not supervening impossibility."
    },
    {
        id: 6,
        topic: "Formation / Promissory Estoppel in Construction Bidding",
        fp: "A general contractor prepared a prime bid to construct a school. An electrical subcontractor telephoned the general contractor and submitted an oral bid of $40,000. The second-lowest bid was $49,000. Relying on the $40,000 figure, the general contractor incorporated it into its prime bid and submitted it. The school board awarded the prime contract to the general contractor. The next day, the subcontractor telephoned and stated: 'We omitted generator costs due to an oversight; our bid is revoked.' The general contractor sued the subcontractor for $9,000.",
        q: "Is the electrical subcontractor legally bound to its $40,000 bid?",
        opts: [
            "No, because an oral bid is a revocable offer that may be freely withdrawn at any time prior to formal acceptance.",
            "No, because the $9,000 disparity placed the general contractor on constructive notice of a clerical mistake.",
            "Yes, under promissory estoppel, because the general contractor reasonably and foreseeably relied on the bid.",
            "Yes, because under UCC § 2-205, firm offers between commercial merchants remain irrevocable without consideration."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under the doctrine of Drennan v. Star Paving Co. (Restatement § 87(2)), an offer which the offeror should reasonably expect to induce action or forbearance before acceptance and which does induce such action is binding as an option contract. In commercial bidding, a subcontractor's oral bid induces foreseeable reliance when the general contractor incorporates it into a binding prime bid. The subcontractor is bound under promissory estoppel. (A) is incorrect because detrimental reliance creates an option contract that limits the ordinary power of revocation. (B) is incorrect because an 18% variance ($40k vs $49k) is not so extreme as to indicate an obvious calculation blunder. (D) is incorrect because construction subcontracts are service contracts governed by common law, not UCC § 2-205, and UCC firm offers require a signed writing."
    },
    {
        id: 7,
        topic: "Formation / UCC 2-205 Firm Offer Signed Writing Requirement",
        fp: "An industrial wholesaler telephoned a contractor and stated: 'I have 500 cases of steel anchors. I will sell them to you for $50 per case. I promise to hold this offer open for 60 days.' Ten days later, the market price of steel spiked. The wholesaler telephoned the contractor: 'I hereby revoke my offer.' The contractor immediately responded: 'You promised to hold it open for 60 days; I accept.'",
        q: "Did the wholesaler effectively revoke the offer?",
        opts: [
            "Yes, because under UCC § 2-205, a firm offer is not binding unless it is in a signed writing.",
            "No, because an oral firm offer between merchants is irrevocable for a reasonable time under UCC § 2-205.",
            "No, because the contractor's prior course of dealing created an equitable option contract.",
            "Yes, because under the common law, an offeror may revoke an offer only by written communication."
        ],
        ans: 0,
        exp: "(A) is the correct response. A firm offer under UCC § 2-205 strictly requires a signed writing. An offer by a merchant to buy or sell goods in a signed writing which by its terms gives assurance that it will be held open is not revocable for lack of consideration. Oral promises to hold an offer open fail to satisfy this mandatory statutory requirement. Without a signed writing or consideration, the wholesaler's oral offer remained revocable at will. The telephoned revocation was effective. (B) is incorrect because UCC § 2-205 firm offers cannot be oral. (C) is incorrect because course of dealing cannot supply the signed writing element of a firm offer. (D) is incorrect because an offer can be revoked orally at common law; there is no writing requirement for revocation itself."
    },
    {
        id: 8,
        topic: "Parol Evidence / Condition Precedent to Legal Effectiveness",
        fp: "An investor entered into a signed written contract to purchase an office building. The contract contained a standard merger clause. Before signing, the investor orally stated: 'Our agreement is effective only on the condition that the city grants a parking variance by June 1.' The owner orally agreed. The written contract omitted any mention of the variance. On May 20, the city denied the variance. The investor notified the owner that the contract was off. The owner sued for breach, moving to exclude evidence of the oral agreement under the Parol Evidence Rule.",
        q: "Is evidence of the oral understanding regarding the parking variance admissible?",
        opts: [
            "No, because the written contract contained an express merger clause establishing a total integration.",
            "No, because the oral condition directly contradicts the express unconditional closing covenant in the writing.",
            "Yes, because commercial real estate contracts are exempt from the Parol Evidence Rule.",
            "Yes, because parol evidence is admissible to prove an oral condition precedent to the legal effectiveness of the contract."
        ],
        ans: 3,
        exp: "(D) is the correct response. Parol evidence is universally admissible to show that a written agreement was subject to an oral condition precedent to its legal effectiveness (Restatement § 217). While extrinsic evidence is inadmissible to contradict a completely integrated writing, oral testimony is admissible to demonstrate that the parties agreed the writing would not become operative unless a specified condition occurred. This proves that the contract never came into legal existence. (A) is incorrect because a merger clause does not preclude evidence showing the document never became legally operative. (B) is incorrect because the condition precedent exception bypasses the contradiction bar. (C) is incorrect because real estate contracts are fully subject to the Parol Evidence Rule."
    },
    {
        id: 9,
        topic: "Performance / Substantial Performance & Economic Waste",
        fp: "A builder contracted to construct a warehouse. The specifications required 'Reading Brand cast-iron drainpipes.' The builder completed the structure, but negligently installed 'Cohoes Brand cast-iron drainpipes.' Expert testimony established that Cohoes pipe was identical in grade, durability, and market value to Reading pipe, and that the warehouse's market value was unaffected. To remove the Cohoes pipe would require demolishing masonry walls at a cost of $50,000. The owner refused to make the final payment of $40,000.",
        q: "What amount is the builder entitled to recover from the owner?",
        opts: [
            "Nothing, because the builder's failure to install Reading pipe was a breach of an express condition.",
            "The reasonable value of the installed pipe in quantum meruit, not to exceed $10,000.",
            "$40,000, because the builder substantially performed and the diminution in value is zero.",
            "$40,000 offset by the $50,000 cost of replacement, resulting in a $10,000 judgment for the owner."
        ],
        ans: 2,
        exp: "(C) is the correct response. The builder substantially performed, and the cost of replacement would involve unreasonable economic waste (Jacob & Youngs v. Kent). In construction contracts, where a breach is unintentional, does not impair structural integrity or utility, and the cost of replacement is grossly disproportionate to the benefit to be obtained, damages are measured by the diminution in market value rather than cost of repair. Demolishing walls at an expense of $50,000 to replace identical pipe where the market value difference is $0 constitutes gross economic waste. The builder is entitled to the full unpaid contract balance. (A) is incorrect because material specifications are construed as covenants, not conditions of forfeiture. (B) is incorrect because a contractor who substantially performs recovers on the contract, not in quantum meruit. (D) is incorrect because cost-of-replacement damages are denied when they produce unreasonable economic waste."
    },
    {
        id: 10,
        topic: "Performance / Right to Cure within Contract Time (UCC 2-508)",
        fp: "A fabricator contracted to supply 200 American standard threaded couplings to a distributor by October 1. On September 15, the fabricator delivered couplings machined to a metric pitch. The distributor immediately rejected the shipment. On September 17, the fabricator sent a certified letter stating: 'We will deliver conforming American standard couplings by September 30.' The distributor replied: 'You failed to make perfect tender; we cancel the contract.' Conforming couplings were tendered on September 30, but refused.",
        q: "Did the distributor have the legal right to cancel the contract on September 17?",
        opts: [
            "Yes, because under the UCC perfect tender rule, any nonconformity entitles the buyer to cancel the agreement immediately.",
            "No, because under UCC § 2-508(1), the seller had an absolute right to cure within the agreed contract period upon seasonable notice.",
            "Yes, because the tender of metric couplings constituted an anticipatory repudiation that discharged the buyer.",
            "No, because the difference in thread pitch did not constitute a material breach under common law substantial performance."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under UCC § 2-508(1), where any tender by the seller is rejected because it is non-conforming and the agreed time for performance has not expired, the seller may seasonably notify the buyer of his intention to cure and make a conforming delivery within the contract time. The contractual deadline was October 1. The seller gave prompt notice of intention to cure on September 17 and tendered conforming goods on September 30. The statutory right to cure overrides the buyer's attempt to cancel under the perfect tender rule. (A) is incorrect because the perfect tender rule (UCC § 2-601) is expressly subject to the seller's right to cure. (C) is incorrect because tendering nonconforming goods is not an anticipatory repudiation when the seller exercises the right to cure. (D) is incorrect because sales of goods are governed by the perfect tender rule, not common law substantial performance."
    },
    {
        id: 11,
        topic: "Breach / Anticipatory Repudiation & Cover (UCC 2-712)",
        fp: "A bakery contracted to purchase 100 sacks of flour from a mill at $30 per sack, delivery scheduled for October 1. On September 20, the mill repudiated the contract. On that day, the market price was $32 per sack. On September 22, the bakery reasonably purchased 100 sacks of identical flour from another supplier for $35 per sack. By October 1, the market price of flour had climbed to $40 per sack. The bakery sued the mill under UCC Article 2.",
        q: "What amount of damages is the bakery entitled to recover?",
        opts: [
            "$500, representing the difference between the actual cover price and the contract price.",
            "$200, representing the difference between the market price at repudiation and the contract price.",
            "$1,000, representing the difference between the market price on the delivery date and the contract price.",
            "$800, representing the seller's unjust profits realized from the repudiation."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under UCC § 2-712, an aggrieved buyer who effectuates a proper commercial cover recovers the difference between the cost of cover and the contract price. After an anticipatory repudiation, the buyer may 'cover' by making in good faith and without unreasonable delay any reasonable purchase of goods in substitution. Cover is the primary preferred remedy. Because the bakery made a prompt, reasonable cover purchase at $35 per sack, its damages are measured strictly under § 2-712 ($3,500 cover price minus $3,000 contract price = $500). (B) is incorrect because the market-price-at-repudiation formula applies only when the buyer fails to cover. (C) is incorrect because an aggrieved buyer who covers cannot elect market-price damages to capture subsequent price increases. (D) is incorrect because contract damages are compensatory, not based on disgorgement."
    },
    {
        id: 12,
        topic: "Excuse / Impossibility Due to Supervening Destruction",
        fp: "A cabinetmaker contracted with a homeowner to install custom built-in walnut bookshelves in a historic residence for $30,000, payable upon completion. On August 20, the cabinetmaker had installed 75% of the millwork. That evening, a freak lightning storm ignited a fire that burned the house to the ground, destroying the residence and all installed millwork without fault of either party. The cabinetmaker had spent $18,000 on labor and materials and received no payments. The cabinetmaker sued the homeowner's estate in restitution.",
        q: "Is the cabinetmaker entitled to recover the $18,000 from the estate?",
        opts: [
            "No, because the total destruction of the house discharged both parties from the contract, leaving accrued losses where they fell.",
            "Yes, because under modern contract law, a contractor whose performance is discharged by impossibility is entitled to restitution for the reasonable value of the performance incorporated into the structure prior to destruction.",
            "No, because the homeowner derived no ultimate benefit from the millwork since the house was completely destroyed.",
            "Yes, because the risk of loss in construction contracts remains with the real property owner at all times."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under Restatement (Second) of Contracts § 377, a party whose performance is discharged by impossibility is entitled to restitution for the reasonable value of the benefit conferred prior to the discharging event. When an existing structure that is the subject of a repair or improvement contract is destroyed without fault, both parties are discharged under the doctrine of impossibility. Under modern principles, work incorporated into the owner's building prior to destruction is deemed a benefit conferred upon the owner at the time of installation. The cabinetmaker is entitled to recover the reasonable value of that partial performance in quantum meruit to prevent unjust forfeiture. (A) is incorrect because modern law grants restitution rather than leaving losses where they fell. (C) is incorrect because benefit is measured at the time performance is rendered, not after subsequent casualty. (D) is incorrect because new construction contracts place the risk on the builder; repair contracts of existing buildings place the risk on the owner, supporting restitution."
    },
    {
        id: 13,
        topic: "Third-Party Beneficiaries / Vesting of Donee Beneficiary Rights",
        fp: "An uncle contracted with a builder to construct a pool in the backyard of the uncle's daughter for $30,000. The contract explicitly stated the pool was a birthday gift for the daughter. On June 5, the daughter learned of the contract, visited the builder at the site, and said: 'I am so excited about the pool; thank you.' On June 10, the uncle had an argument with his daughter and signed a mutual agreement with the builder rescinding the contract. The daughter sued the builder to compel performance.",
        q: "Can the daughter enforce the pool construction contract?",
        opts: [
            "No, because the original contracting parties retain the absolute power to modify or rescind their agreement at any time prior to completion.",
            "No, because the daughter gave no consideration to either the uncle or the builder.",
            "Yes, but only if the daughter detrimentally changed her position in reliance on the gift.",
            "Yes, because the daughter's rights as an intended third-party beneficiary vested when she manifested assent to the contract."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under Restatement (Second) of Contracts § 311(3), the power of the promisor and promisee to modify or discharge a duty to an intended beneficiary terminates when the beneficiary: (1) materially changes position in justifiable reliance; (2) brings suit; or (3) manifests assent to it at the request of the promisor or promisee. The daughter was an intended donee beneficiary. Her personal visit to the job site manifesting joy and assent to the builder before the attempted rescission vested her rights. Once vested, the contract cannot be modified or rescinded without her consent. (A) is incorrect because the power of the original parties to rescind terminates upon vesting. (B) is incorrect because third-party beneficiaries need not supply consideration. (C) is incorrect because manifestation of assent is an independent ground for vesting; detrimental reliance is not strictly required."
    },
    {
        id: 14,
        topic: "Assignment & Delegation / Prohibition against Assignment",
        fp: "A manufacturer contracted with a precision assembler to produce 5,000 circuit boards. The contract contained the provision: 'This contract may not be assigned, and any violation of this prohibition shall void the contract.' The assembler concluded its production line was full and entered into an agreement with a competing assembler to manufacture all 5,000 boards. The competitor possessed equal certifications and a flawless reputation. When the manufacturer learned of this, it terminated the contract and refused to allow the competitor to perform.",
        q: "Was the manufacturer legally justified in canceling the contract under UCC Article 2?",
        opts: [
            "No, because the competitor was equally skilled and delegation did not materially impair the manufacturer's expectations.",
            "No, because contractual prohibitions on assignment in commercial merchant contracts are void as against public policy.",
            "Yes, because a contractual prohibition against assignment of 'the contract' bars delegation of performance duties under UCC § 2-210(3).",
            "Yes, because the assembler assigned a personal right to receive payment in violation of an express negative covenant."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-210(3), 'Unless the circumstances indicate the contrary a prohibition of assignment of \"the contract\" is to be construed as barring only the delegation to the assignee of the assignor's performance.' The agreement explicitly prohibited assignment of 'the contract' and provided that violation would void it. The assembler's subcontracting was an attempted delegation of its performance duties. Under § 2-210(3), this delegation breached the express non-assignment clause, operating as a repudiation that entitled the buyer to cancel. (A) is incorrect because an express contractual restriction on delegation overrides the competitor's equal competence. (B) is incorrect because UCC § 2-210 explicitly validates contractual prohibitions against delegation of performance duties. (D) is incorrect because the assembler delegated an unperformed manufacturing duty, rather than assigning an earned right to payment."
    },
    {
        id: 15,
        topic: "Remedies / Lost Volume Seller Overhead Deduction",
        fp: "A retail boat dealer contracted to sell a new factory-standard speedboat to a customer for $50,000. The wholesale cost from the manufacturer was $40,000. The customer unjustifiably repudiated the contract. The dealer resold the exact same boat to another buyer for $50,000. The dealer had an unlimited supply of boats from the manufacturer. In a suit against the customer for lost profits under UCC § 2-708(2), the customer argued the dealer's $10,000 gross margin must be reduced by allocated fixed overhead costs of $3,000.",
        q: "What amount of lost profit is the dealer entitled to recover?",
        opts: [
            "Nothing, because the dealer resold the boat for the contract price.",
            "$10,000, because under UCC § 2-708(2), a lost volume seller recovers profit including reasonable overhead without deduction for fixed expenses.",
            "$7,000, representing net operating profit after deducting allocated overhead.",
            "$50,000, representing the entire contract price of the boat."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under UCC § 2-708(2), the measure of damages for a lost volume seller is 'the profit (including reasonable overhead) which the seller would have made from full performance by the buyer.' Fixed overhead expenses (rent, salaries) are incurred regardless of whether an individual contract is performed; allocating fixed costs as a deduction against the gross margin would under-compensate the seller. Therefore, the dealer recovers the full gross profit margin of $10,000 ($50,000 contract price minus $40,000 direct wholesale cost) without deduction for the $3,000 allocated overhead. (A) is incorrect because a lost volume seller loses the opportunity to make an additional sale. (C) is incorrect because UCC § 2-708(2) expressly bars the deduction of fixed overhead. (D) is incorrect because an action for the price under UCC § 2-709 does not apply when the seller retains the goods and can resell them."
    },
    {
        id: 16,
        topic: "Remedies / Consequential Damages Foreseeability (Hadley Rule)",
        fp: "An independent commercial trucker contracted with a shop to rebuild his truck engine for $8,000, completion by May 1. The trucker told the shop owner: 'I have a hauling contract starting May 2 that pays $1,000 net profit per day; if my truck is not ready by May 1, I lose $1,000 every single day.' The shop promised completion by May 1 but negligently delayed until May 11. The trucker lost ten days of hauling ($10,000). The trucker sued the shop for $10,000 in consequential damages.",
        q: "Is the trucker entitled to recover the $10,000 in lost profits from the overhaul shop?",
        opts: [
            "Yes, because the shop owner had express notice of the special circumstances at the time of contracting, making the damages foreseeable under Hadley v. Baxendale.",
            "No, because lost profits are speculative and unrecoverable in common law vehicle repair contracts.",
            "No, because the lost profits ($10,000) exceeded the entire contract price ($8,000), constituting an invalid penalty.",
            "Yes, because commercial repair facilities are strictly liable as enterprise insurers for all consequential delays."
        ],
        ans: 0,
        exp: "(A) is the correct response. Consequential damages are recoverable if they arise from special circumstances beyond the ordinary course of events that the breaching party had reason to know at the time the contract was made (Hadley v. Baxendale and Restatement § 351). The trucker explicitly informed the shop owner at the time of contracting of the specific hauling contract and the exact $1,000 daily loss. Because the special circumstances were communicated and foreseeable, the $10,000 in lost profits is fully recoverable. (B) is incorrect because lost profits proven with reasonable certainty are recoverable. (C) is incorrect because consequential damages can legally exceed the contract price if foreseeable; the penalty doctrine applies to liquidated damages, not actual compensatory damages. (D) is incorrect because repair shops sound in contract/negligence, not strict insurer liability."
    },
    {
        id: 17,
        topic: "Remedies / Liquidated Damages Reasonableness Test",
        fp: "A commercial developer contracted with a paving company to pave a parking lot for $50,000, completion due September 1. The contract stated: 'If Paving Company fails to complete by September 1, it shall pay Developer, as liquidated damages, $1,000 for each calendar day of delay.' At contracting, both parties anticipated delay would force the clinic to rent auxiliary parking at $900 to $1,100 per day. The paving company completed the lot five days late. The developer incurred $5,200 in actual rental costs and withheld $5,000 from the final payment. The paving company sued to recover the $5,000, claiming it was a penalty.",
        q: "Is the liquidated damages clause enforceable against the paving company?",
        opts: [
            "No, because liquidated damages clauses in construction contracts are disfavored as against public policy.",
            "No, because the developer's actual damages ($5,200) exceeded the liquidated amount ($5,000).",
            "Yes, but only if the developer proves the paving company acted with intentional disregard of the deadline.",
            "Yes, because the stipulated amount was a reasonable forecast of anticipated harm that was difficult to estimate at the time of contracting."
        ],
        ans: 3,
        exp: "(D) is the correct response. Liquidated damages provisions are enforceable if: (1) the damages resulting from breach are difficult to estimate at contract formation; and (2) the amount stipulated is a reasonable forecast of the just compensation for the harm caused by the breach (Restatement § 356(1)). Here, daily delay damages were uncertain, and the stipulated $1,000 per day matched the anticipated daily loss and was virtually identical to the actual damages incurred. The clause is reasonable and enforceable, not a penalty. (A) is incorrect because reasonable liquidated damages clauses are favored in construction contracts. (B) is incorrect because an enforceable liquidated damages clause binds the parties even if actual damages vary slightly from the forecast. (C) is incorrect because liquidated damages enforcement requires reasonableness, not proof of intentional fault."
    },
    {
        id: 18,
        topic: "Terms / Implied Warranties & Disclaimers (UCC 2-316)",
        fp: "A machine shop owner purchased an industrial metal lathe from a dealer for $12,000. Two days later, the dealer delivered the lathe accompanied by a written invoice. On the front, printed in bold, conspicuous capitalized type, was: 'SELLER DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY WARRANTY OF FITNESS.' The shop owner paid the invoice. Two weeks later, the lathe's main drive spindle seized due to internal bearing misalignment, rendering it unusable. The lathe was not of merchantable quality. The dealer refused to repair it, asserting the implied warranty of merchantability had been disclaimed.",
        q: "Is the dealer's disclaimer of the implied warranty of merchantability legally effective under UCC § 2-316?",
        opts: [
            "Yes, because the disclaimer was printed in conspicuous, capitalized type on the face of the written invoice.",
            "Yes, because an express warranty of materials automatically displaces all implied warranties under the UCC.",
            "No, because to exclude or modify the implied warranty of merchantability, the disclaimer must explicitly mention the word 'merchantability.'",
            "No, because disclaimers of implied warranties delivered after contract formation are unconscionable per se."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-316(2), to exclude or modify the implied warranty of merchantability, the language must mention merchantability and in case of a writing must be conspicuous. Although the dealer's disclaimer was conspicuous, it mentioned only 'fitness' and 'all other warranties,' but omitted the mandatory statutory word 'merchantability' (and did not utilize standard 'as is' language under § 2-316(3)(a)). Because the clause failed to mention merchantability, the disclaimer was ineffective, and the implied warranty of merchantability remained in full legal effect. (A) is incorrect because conspicuousness alone is insufficient; mentioning 'merchantability' is an indispensable statutory prerequisite. (B) is incorrect because express warranties do not displace implied warranties unless inconsistent. (D) is incorrect because post-formation disclaimers are analyzed under modification rules, not labeled unconscionable per se."
    },
    {
        id: 19,
        topic: "Statute of Frauds / Specially Manufactured Goods (UCC 2-201)",
        fp: "An optometrist phoned a manufacturer and ordered 100 specialized diagnostic frames custom-engraved with the clinic's logo and calibration markings for $6,000. The manufacturer orally agreed. The manufacturer ordered custom blanks and completed engraving 80 frames. Before shipment, the optometrist canceled the order, stating: 'Our agreement was oral and exceeded $500, so it is unenforceable under the Statute of Frauds.' The custom frames could not be resold to any other buyer. The manufacturer sued for breach.",
        q: "Is the oral contract enforceable against the optometrist under UCC Article 2?",
        opts: [
            "No, because contracts for the sale of goods for $500 or more must be evidenced by a writing signed by the party to be charged.",
            "Yes, because under the specially manufactured goods exception, the goods were custom-made, not suitable for sale to others, and manufacture had substantially begun.",
            "No, because the manufacturer had completed only 80 of the 100 frames, barring full performance.",
            "Yes, but only if the optometrist admits the existence of the oral contract under oath in court."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under UCC § 2-201(3)(a), an oral contract for the sale of goods for $500 or more is enforceable without a writing if: (1) the goods are specially manufactured for the buyer; (2) they are not suitable for sale to others; and (3) the seller has made a substantial beginning of their manufacture or commitments for their procurement. The frames were custom-engraved with the clinic's unique logo, could not be resold, and the manufacturer had assembled 80% of the order before receiving notice of cancellation. The oral contract is fully enforceable. (A) is incorrect because it ignores the statutory exception in UCC § 2-201(3)(a). (C) is incorrect because the statute requires only a 'substantial beginning' of manufacture, not 100% completion. (D) is incorrect because judicial admission under § 2-201(3)(b) is an alternative exception, not a prerequisite when specially manufactured goods are proven."
    },
    {
        id: 20,
        topic: "Terms / Risk of Loss in Carrier Shipments (UCC 2-509)",
        fp: "A manufacturer of stainless-steel prep tables contracted to supply ten tables to a restaurant for $10,000. The contract provided that the manufacturer would ship via commercial freight carrier but contained no F.O.B. term and did not specify who bore transportation costs. On July 10, the manufacturer packaged the tables, delivered them to a licensed trucking company at its factory, and made a reasonable contract for carriage. The manufacturer promptly notified the restaurant. While en route, an errant driver collided with the truck, destroying the shipment. The restaurant refused to pay the $10,000 invoice.",
        q: "Who bears the risk of loss for the destroyed prep tables under UCC Article 2?",
        opts: [
            "The restaurant owner, because where a contract requires carriage but does not specify a destination delivery term, it is presumed to be a shipment contract under UCC § 2-509.",
            "The manufacturer, because where a contract is silent as to delivery terms, the law presumes an F.O.B. destination contract.",
            "The commercial trucking company, because common carriers are held to absolute strict insurer liability for all roadway collisions.",
            "The loss is split equally between the parties under the UCC doctrine of commercial frustration."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under UCC § 2-509(1)(a), a carrier contract that does not specify an F.O.B. destination term is presumed to be a shipment contract, shifting the risk of loss to the buyer upon delivery to the carrier. If the contract requires the seller to ship by carrier but does not require delivery at a particular destination, risk passes to the buyer when the goods are duly delivered to the carrier. Under Article 2, the statutory default presumption is a shipment contract; destination contracts must be expressly agreed upon. Because the contract was silent, the shipment contract rule applied, and risk of loss shifted to the restaurant owner when the tables were delivered to the trucking company. The buyer must pay the contract price. (B) is incorrect because the statutory presumption is a shipment contract. (C) is incorrect because traffic collisions do not impose insurer liability on carriers, and contract risk rules govern between buyer and seller. (D) is incorrect because the UCC places the risk of loss entirely on one party."
    },
    {
        id: 21,
        topic: "Consideration / Output Contract Mutuality and Best Efforts",
        fp: "An organic vineyard entered into a written agreement with a boutique winery. The agreement provided: 'Vineyard agrees to sell, and Winery agrees to purchase, all the Pinot Noir grapes harvested by Vineyard from its Estate parcel during the upcoming season, estimated at 50 tons, at a fixed price of $2,000 per ton.' Due to an early spring frost that destroyed 60% of the grape buds, the vineyard harvested only 20 tons. The vineyard tendered all 20 tons to the winery. The winery refused to accept or pay for them, asserting the contract was unenforceable for lack of mutuality of obligation because the vineyard was not bound to produce a specific minimum quantity.",
        q: "Is the contract enforceable against the winery under UCC Article 2?",
        opts: [
            "No, because an output contract without an express minimum quantity is illusory.",
            "No, because the 60% decline in grape harvest constituted an unreasonably disproportionate reduction as a matter of law.",
            "Yes, because under UCC § 2-306, an output contract is supported by consideration through the implied obligation of good faith and best efforts.",
            "Yes, but only if the vineyard purchases 30 tons of replacement grapes on the open market."
        ],
        ans: 2,
        exp: "(C) is the correct response. UCC § 2-306 explicitly validates output contracts against illusory promise challenges by imposing an implied obligation of good faith and best efforts. An output contract measures quantity by the actual good-faith output of the seller. This statutory obligation provides mutuality of obligation and valid consideration, defeating any claim that the agreement is illusory. Furthermore, under Official Comment 2, a seller who reduces output in good faith due to unexpected agricultural casualty (such as frost) does not breach. The winery is bound to accept and pay for the 20 tons. (A) is incorrect because UCC § 2-306 expressly validates output contracts lacking minimum quotas. (B) is incorrect because the 'unreasonably disproportionate' limitation restricts excessive increases, not good-faith agricultural curtailments. (D) is incorrect because the contract specified 'Estate' grapes, limiting performance to the seller's own harvest."
    },
    {
        id: 22,
        topic: "Breach / Anticipatory Repudiation & Retraction",
        fp: "A manufacturer contracted to build 50 fruit-harvesting trailers for a cooperative for $150,000, delivery on August 1. On May 1, the manufacturer sent a letter stating: 'Due to labor strikes, we will not fulfill our contract.' On May 5, the cooperative contacted competing builders, learning substitute trailers would cost $190,000. However, the cooperative signed no contracts and sent no communication. On May 15, the manufacturer settled its labor dispute and emailed: 'We retract our letter of May 1; we will deliver all 50 trailers on August 1.' The cooperative received the email on May 15. On May 20, the cooperative executed a purchase contract with a competitor for $190,000 and sued the original manufacturer for $40,000.",
        q: "Was the manufacturer's May 15 retraction legally effective under UCC Article 2?",
        opts: [
            "No, because the cooperative materially changed its position by soliciting formal price quotations from competing builders.",
            "No, because an anticipatory repudiation operates as an immediate total breach that terminates all rights of retraction.",
            "Yes, because under the UCC, an anticipatory repudiation can be retracted at any time up until the date scheduled for delivery.",
            "Yes, because the retraction was received before the cooperative canceled the contract, filed suit, or materially changed position in reliance."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under UCC § 2-611(1), a repudiating party can retract an anticipatory repudiation until his next performance is due UNLESS the aggrieved party has, since the repudiation: (a) canceled the contract, (b) materially changed position in reliance on the repudiation, or (c) otherwise indicated that he considers the repudiation final. Merely inquiring about market prices or soliciting price quotations from competitors without entering into a binding cover contract, incurring non-refundable expenses, or communicating cancellation does not constitute a material change of position. Because the cooperative took no binding action prior to receiving the retraction on May 15, the manufacturer's retraction was legally effective. (A) is incorrect because soliciting bids without binding commitment is not a material change of position. (B) is incorrect because an anticipatory repudiation is subject to retraction until reliance, cancellation, or suit. (C) is incorrect because the right to retract terminates immediately upon reliance, cancellation, or suit."
    },
    {
        id: 23,
        topic: "Performance / Express Condition of Personal Satisfaction",
        fp: "A wealthy patron entered into a signed written contract with a renowned portrait artist to paint a portrait of his daughter for $30,000. The contract stated: 'It is an express condition precedent to Patron's obligation to pay that the finished portrait shall meet with the personal satisfaction of Patron.' The artist spent three months creating a technically flawless likeness. However, upon viewing it, the patron genuinely disliked the subtle shading of the daughter's cheekbones, honestly stating: 'I do not doubt your skill, but the portrait does not personally satisfy me; I will not pay.' The patron acted in subjective good faith. The artist sued the patron for the $30,000 contract price.",
        q: "Is the patron legally obligated to pay for the portrait?",
        opts: [
            "Yes, because where a condition calls for satisfaction, the law applies an objective reasonable-person standard.",
            "No, because contracts involving personal aesthetics and taste enforce an express condition of subjective personal satisfaction, provided the dissatisfaction is in good faith.",
            "Yes, because the artist substantially performed in full conformity with technical standards.",
            "No, because contracts conditioning payment on personal satisfaction are illusory and void for lack of mutuality."
        ],
        ans: 1,
        exp: "(B) is the correct response. In contracts involving personal taste, fancy, or aesthetic judgment, an express condition of personal satisfaction is governed by a subjective standard (Restatement § 228). When a contract conditions performance on personal satisfaction, an objective reasonable-person standard applies to commercial or utility contracts. However, where the contract involves personal aesthetics, art, or individual fancy, the subjective standard controls: the promisor's personal, subjective dissatisfaction excuses payment, provided the dissatisfaction is genuine and in good faith. Because the patron was genuinely dissatisfied with the aesthetic shading, the condition failed, discharging the duty to pay. (A) is incorrect because the objective standard does not apply to contracts of personal art and aesthetic taste. (C) is incorrect because substantial performance cannot override the failure of an express aesthetic condition. (D) is incorrect because the implied covenant of good-faith evaluation supplies mutuality of obligation."
    },
    {
        id: 24,
        topic: "Remedies / Specific Performance & Uniqueness",
        fp: "A real estate investor entered into a signed written contract to purchase a historic Victorian commercial building for $800,000, closing scheduled for July 1. On June 15, the owner notified the investor that he would not convey the building. The investor tendered the $800,000 on July 1, but the owner refused to deliver the deed. The investor sought a decree of specific performance. The owner demonstrated that there were several modern office buildings of comparable square footage available for purchase nearby, arguing that money damages provided an adequate legal remedy.",
        q: "Is the investor entitled to a decree of specific performance?",
        opts: [
            "Yes, because real property is presumed unique as a matter of law, rendering legal damages inadequate.",
            "No, because modern commercial office buildings were available nearby, providing an adequate substitute.",
            "No, because specific performance is an extraordinary equitable remedy restricted to residential dwellings.",
            "Yes, but only if the investor proves that the owner acted with intentional malice in breaching the agreement."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under established equity jurisprudence and Restatement (Second) of Contracts § 360, every parcel of real property is deemed unique as a matter of law, making money damages inadequate. Specific performance is granted when legal remedies are inadequate. Because land is fixed in location and unique in physical attributes, equity conclusively presumes that land is unique, entitling an aggrieved purchaser of real estate to specific performance of a contract of conveyance as a matter of course. The availability of commercial office space nearby does not eliminate the uniqueness of this specific historic parcel. (B) is incorrect because modern buildings are not an adequate substitute for unique real property. (C) is incorrect because specific performance applies to commercial and residential land alike. (D) is incorrect because specific performance requires a valid contract and an inadequate legal remedy; proof of malice is not required."
    },
    {
        id: 25,
        topic: "Statute of Frauds / One-Year Provision",
        fp: "On December 1, an accounting firm orally hired a senior tax accountant for a salary of $10,000 per month. The managing partner explicitly stated: 'Your employment shall commence on January 1, and your term of employment shall run for exactly one year, concluding on December 31.' The accountant accepted and reported for work on January 1. On March 1, the firm discharged the accountant without cause. The accountant sued for breach. The firm asserted the Statute of Frauds.",
        q: "Is the oral employment contract enforceable under the Statute of Frauds?",
        opts: [
            "Yes, because the performance period of the employment contract was exactly one year.",
            "Yes, because part performance of an employment agreement by working for two months removes the contract from the Statute of Frauds.",
            "No, because the contract could not be fully performed within one year from the date of contract formation on December 1.",
            "No, because all employment contracts paying more than $500 per month must be in writing."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under Restatement (Second) of Contracts § 130(1), the one-year provision of the Statute of Frauds is measured from the date of contract formation, not the date performance begins. An oral agreement is unenforceable if it cannot be fully performed within one year from the time the contract is made. The agreement was formed on December 1, performance commenced on January 1, and performance concluded on December 31 (a total duration of 13 months from formation to completion). Because full performance was impossible within one year of December 1, the agreement falls squarely within the Statute of Frauds and is unenforceable absent a signed writing. (A) is incorrect because the clock begins running on the date the contract is made, not when work commences. (B) is incorrect because partial performance of an oral employment contract does not take the remaining executory portion outside the Statute of Frauds. (D) is incorrect because the $500 threshold applies strictly to sales of goods under UCC § 2-201, not employment contracts."
    }
];