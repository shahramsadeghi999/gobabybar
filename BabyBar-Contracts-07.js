const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Governing Law / Predominant Purpose Test",
        fp: "Builder contracts to buy 500 custom-carved wooden doors from Manufacturer for a total of $50,000. The contract includes a provision that Manufacturer will also install the doors at Builder's commercial property. The itemized invoice shows the cost of the doors is $40,000, and the labor for installation is $10,000. After the installation is complete, Builder claims the doors are defective.",
        q: "Which body of law governs this contractual dispute?",
        opts: [
            "UCC Article 2, because the sale of the physical goods predominates the transaction.",
            "Common law, because any inclusion of labor automatically reclassifies the transaction as a service contract.",
            "Federal commercial law, because custom goods operate entirely outside state-level UCC jurisdictions.",
            "A hybrid application where common law governs the installation and the UCC governs the physical doors."
        ],
        ans: 0, // A
        exp: "When a contract involves both goods and services (a hybrid contract), courts apply the 'predominant purpose test' to determine which body of law governs the ENTIRE contract. Because the cost of the doors ($40,000) significantly outweighs the cost of the installation labor ($10,000), the sale of goods predominates, and UCC Article 2 governs."
    },
    {
        id: 2,
        topic: "Formation / Battle of the Forms (Material Alteration)",
        fp: "Builder contracts to buy 500 custom-carved wooden doors from Manufacturer for a total of $50,000. The contract includes a provision that Manufacturer will also install the doors at Builder's commercial property. The itemized invoice shows the cost of the doors is $40,000, and the labor for installation is $10,000. After the installation is complete, Builder claims the doors are defective.\n\nAssume both parties are merchants. Builder's initial purchase order contained standard terms. Manufacturer responded with a signed acknowledgment form that included a new clause requiring all disputes to be settled by binding arbitration in another state. Builder did not object. The doors were shipped, installed, and accepted.",
        q: "Is the arbitration clause part of the contract under UCC § 2-207?",
        opts: [
            "Yes, because the failure to object within ten days conclusively binds the recipient to all proposed terms.",
            "No, because adding an arbitration clause is generally considered a material alteration that does not automatically enter the contract.",
            "Yes, because under the mirror image rule, taking physical possession of the goods constitutes absolute acceptance of all counteroffer terms.",
            "No, because between merchants, any additional terms completely void the initial offer and operate exclusively as an independent counteroffer."
        ],
        ans: 1, // B
        exp: "Under UCC § 2-207(2), between merchants, additional terms automatically become part of the contract UNLESS they materially alter it, the offer expressly limits acceptance, or the offeror objects. Courts routinely hold that adding a binding arbitration clause is a 'material alteration.' Therefore, it does not become part of the contract without express assent."
    },
    {
        id: 3,
        topic: "Defenses / Statute of Frauds (Specially Manufactured Goods)",
        fp: "Builder contracts to buy 500 custom-carved wooden doors from Manufacturer for a total of $50,000. The contract includes a provision that Manufacturer will also install the doors at Builder's commercial property. The itemized invoice shows the cost of the doors is $40,000, and the labor for installation is $10,000. After the installation is complete, Builder claims the doors are defective.\n\nAssume the original agreement for the 500 custom-carved doors was entirely oral. Manufacturer completes manufacturing all 500 doors, which feature Builder's unique corporate logo, making them unsellable to anyone else. Before delivery, Builder calls and cancels the order, asserting the Statute of Frauds.",
        q: "Does the Statute of Frauds bar Manufacturer from enforcing the contract?",
        opts: [
            "Yes, because the total contract price exceeds the five-hundred-dollar threshold.",
            "Yes, because the agreement involved real estate fixtures.",
            "No, because the goods are specially manufactured, not suitable for sale to others, and the seller substantially began manufacturing them.",
            "No, because commercial parties waive all Statute of Frauds protections in ongoing mercantile relationships."
        ],
        ans: 2, // C
        exp: "Under UCC § 2-201(3)(a), an oral contract for the sale of goods over $500 is enforceable if the goods are specially manufactured for the buyer, are not suitable for sale to others in the ordinary course of the seller's business, and the seller has made a substantial beginning of their manufacture. The custom logo doors fit this exception perfectly."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Discharge / Accord and Satisfaction (UCC § 3-311)",
        fp: "Debtor owes Creditor $10,000, due today. Debtor disputes $2,000 of the debt in good faith, claiming a defect in the goods provided. Debtor sends a check for $8,000 to Creditor. The memo line of the check prominently states 'Payment in full for all debts owed.' Creditor cashes the check, but then immediately sues Debtor for the remaining $2,000.",
        q: "What is the legal effect of Creditor cashing the check?",
        opts: [
            "It constitutes a novation, transferring the remaining debt to the issuing financial institution.",
            "It operates as a waiver of the statute of limitations, allowing the creditor to pursue the balance indefinitely.",
            "It has no legal effect on the remaining balance because the preexisting duty rule strictly invalidates partial payments.",
            "It establishes a valid accord and satisfaction, discharging the entire $10,000 debt."
        ],
        ans: 3, // D
        exp: "Under common law and UCC § 3-311, if a claim is unliquidated or subject to a good faith dispute, a debtor can offer a lesser amount as full settlement. If the debtor tenders a check conspicuously marked 'payment in full' and the creditor cashes it, an accord and satisfaction is achieved, completely discharging the debt."
    },
    {
        id: 5,
        topic: "Consideration / Preexisting Duty Rule (Liquidated Debt)",
        fp: "Debtor owes Creditor $10,000, due today. Debtor disputes $2,000 of the debt in good faith, claiming a defect in the goods provided. Debtor sends a check for $8,000 to Creditor. The memo line of the check prominently states 'Payment in full for all debts owed.' Creditor cashes the check, but then immediately sues Debtor for the remaining $2,000.\n\nAssume instead that the $10,000 debt was completely undisputed (a liquidated debt). Debtor simply didn't have enough money and sent a check for $8,000 marked 'payment in full.' Creditor cashes it and sues for the remaining $2,000.",
        q: "Is the remaining $2,000 debt discharged in this alternate scenario?",
        opts: [
            "No, because payment of a lesser sum on a liquidated and undisputed debt does not constitute valid consideration to support the discharge of the balance.",
            "Yes, because the creditor's physical endorsement of the check serves as an absolute legal waiver.",
            "No, because the debtor failed to provide a formal promissory note for the remainder.",
            "Yes, because the UCC abolishes the preexisting duty rule for all financial negotiations."
        ],
        ans: 0, // A
        exp: "If a debt is liquidated (undisputed and certain in amount), an agreement to accept a lesser amount as full payment lacks consideration under the preexisting duty rule. The debtor is merely doing what they are already legally bound to do (pay $8k of the $10k), providing no new detriment to support forgiving the remaining $2k."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Defenses / Mutual Mistake & Conscious Ignorance",
        fp: "Anna sells an antique painting to Ben for $5,000. Both Anna and Ben agree they have no idea who painted it, but they assume it is by a minor 19th-century artist. Ben later discovers it is actually a lost masterpiece by Rembrandt worth $500,000. Anna sues to rescind the contract based on mutual mistake.",
        q: "Will Anna succeed in rescinding the contract?",
        opts: [
            "Yes, because the massive monetary disparity renders the transaction inherently unconscionable.",
            "No, because the parties contracted with 'conscious ignorance' regarding the painting's origin, meaning Anna legally bore the risk of the mistake.",
            "Yes, because there was a mutual mistake regarding a basic assumption that materially affected the agreed exchange.",
            "No, because unilateral mistakes never provide grounds for rescission under modern common law."
        ],
        ans: 1, // B
        exp: "A mutual mistake can void a contract unless the adversely affected party 'bore the risk' of the mistake. A party bears the risk if they enter the contract with 'conscious ignorance'—knowing they have limited knowledge about the facts (the artist's true identity) but treating that limited knowledge as sufficient. Because Anna knew she didn't know who the artist was, she bore the risk."
    },
    {
        id: 7,
        topic: "Defenses / Unilateral Mistake",
        fp: "Anna sells an antique painting to Ben for $5,000. Both Anna and Ben agree they have no idea who painted it, but they assume it is by a minor 19th-century artist. Ben later discovers it is actually a lost masterpiece by Rembrandt worth $500,000. Anna sues to rescind the contract based on mutual mistake.\n\nAssume instead that Ben secretly knew it was a Rembrandt before the sale. Anna erroneously believed it was a cheap replica. Ben stayed silent and bought it for $5,000.",
        q: "Can Anna rescind the contract under this modified scenario?",
        opts: [
            "No, because the doctrine of caveat emptor absolutely protects the buyer's superior knowledge.",
            "Yes, because all high-value transactions require full fiduciary disclosure.",
            "Yes, because unilateral mistake is a valid defense if the non-mistaken party actually knew or had reason to know of the other party's erroneous assumption.",
            "No, because unilateral mistakes never provide grounds for rescission under any circumstances."
        ],
        ans: 2, // C
        exp: "A unilateral mistake generally does not render a contract voidable. However, a major exception exists: if the non-mistaken party (Ben) KNEW or had reason to know of the mistake made by the other party (Anna), the mistaken party can void the contract. Exploiting a known mistake constitutes grounds for rescission."
    },
    {
        id: 8,
        topic: "Terms / Implied Warranty of Title",
        fp: "Anna sells an antique painting to Ben for $5,000. Both Anna and Ben agree they have no idea who painted it, but they assume it is by a minor 19th-century artist. Ben later discovers it is actually a lost masterpiece by Rembrandt worth $500,000. Anna sues to rescind the contract based on mutual mistake.\n\nAssume the sale goes through, but six months later, a third party approaches Ben with absolute proof that the painting was stolen from their museum ten years ago. The museum legally reclaims the painting from Ben.",
        q: "What recourse does Ben have against Anna?",
        opts: [
            "None, because the sale of stolen property automatically voids all subsequent contractual remedies.",
            "He can sue for breach of the implied warranty of merchantability.",
            "He can sue for unjust enrichment based on Anna's bad faith possession.",
            "He can sue Anna for breach of the implied warranty of title, which automatically accompanies all sales of goods."
        ],
        ans: 3, // D
        exp: "Under UCC § 2-312, every contract for the sale of goods includes an implied warranty that the title conveyed is good and its transfer is rightful. This warranty is automatically included unless explicitly modified or excluded by specific language. Anna breached this warranty because she sold stolen goods (even if she didn't know they were stolen)."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Terms / Parol Evidence Rule (Condition Precedent)",
        fp: "Store and TechCorp sign a completely integrated written agreement for the purchase of inventory software. Before signing the document, the Store's manager orally told TechCorp, 'I will sign this now, but our agreement is only effective if my Board of Directors approves the purchase by Friday.' The Board rejects the purchase, but TechCorp sues for breach.",
        q: "Can Store introduce evidence of the oral agreement regarding the Board's approval?",
        opts: [
            "Yes, because parol evidence is always admissible to demonstrate a condition precedent to the formation or legal existence of the contract.",
            "No, because the Parol Evidence Rule bars prior oral agreements that add to or contradict a completely integrated written contract.",
            "Yes, because the statement demonstrates fraud in the inducement.",
            "No, because the integration clause creates an irrebuttable presumption of immediate contractual effectiveness."
        ],
        ans: 0, // A
        exp: "A widely recognized exception to the Parol Evidence Rule allows a party to introduce extrinsic evidence to show that the contract was subject to an oral condition precedent to its FORMATION. If the contract was never meant to take effect until the condition (Board approval) was met, the evidence is admissible to prove no contract ever existed."
    },
    {
        id: 10,
        topic: "Terms / Parol Evidence Rule (Supplemental Terms)",
        fp: "Store and TechCorp sign a completely integrated written agreement for the purchase of inventory software. Before signing the document, the Store's manager orally told TechCorp, 'I will sign this now, but our agreement is only effective if my Board of Directors approves the purchase by Friday.' The Board rejects the purchase, but TechCorp sues for breach.\n\nAssume the Board did approve it. However, contemporaneous with signing the integrated agreement, TechCorp orally promised to provide 'one year of free software updates.' The written contract is completely silent on updates.",
        q: "If TechCorp refuses to provide the updates, can Store enforce the oral promise?",
        opts: [
            "Yes, because the oral promise does not directly contradict any explicitly written term.",
            "No, because the Parol Evidence Rule prohibits introducing supplemental consistent terms if the writing is deemed completely integrated.",
            "Yes, because software updates are statutorily required under consumer protection doctrines.",
            "No, because oral promises made during negotiations expire after thirty days."
        ],
        ans: 1, // B
        exp: "If a contract is 'completely integrated' (intended as the complete and exclusive statement of the parties' terms), the Parol Evidence Rule bars the introduction of prior or contemporaneous oral agreements that CONTRADICT *or* SUPPLEMENT the writing. Because the writing is completely integrated, the supplemental promise of updates is inadmissible."
    },
    {
        id: 11,
        topic: "Terms / UCC Parol Evidence (Course of Dealing)",
        fp: "Store and TechCorp sign a completely integrated written agreement for the purchase of inventory software. Before signing the document, the Store's manager orally told TechCorp, 'I will sign this now, but our agreement is only effective if my Board of Directors approves the purchase by Friday.' The Board rejects the purchase, but TechCorp sues for breach.\n\nAssume the contract says nothing about software updates. However, Store and TechCorp have signed 5 similar software contracts over the past 5 years, and in every previous instance, TechCorp provided 1 year of free updates.",
        q: "Can Store introduce evidence of these prior 5 transactions to obligate TechCorp to provide updates?",
        opts: [
            "No, because the presence of a strict integration clause conclusively prohibits all external evidence.",
            "Yes, because the doctrine of promissory estoppel inherently overrides all written constraints.",
            "Yes, under the UCC, even completely integrated contracts may be explained or supplemented by evidence of a consistent course of dealing.",
            "No, because each commercial contract is viewed in an absolute legal vacuum under formalist interpretation rules."
        ],
        ans: 2, // C
        exp: "Under UCC § 2-202, even if a written contract is completely integrated, it may ALWAYS be explained or supplemented by course of dealing (the parties' prior conduct across past contracts), usage of trade, or course of performance, provided the written terms do not specifically negate them."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Performance / Perfect Tender Rule",
        fp: "Retailer orders 1,000 red shirts from Wholesaler for delivery by October 1. On September 20, Wholesaler delivers 1,000 burgundy shirts. Retailer realizes the color is wrong and immediately rejects the shipment.",
        q: "Was Retailer legally entitled to reject the burgundy shirts?",
        opts: [
            "No, because the color variation is a minor, legally de minimis defect.",
            "Yes, but only if Retailer proves actual, calculable financial damages resulting from the specific color discrepancy.",
            "No, because the doctrine of substantial performance governs all physical commodity transactions.",
            "Yes, because under the perfect tender rule for single-delivery contracts, a buyer can reject goods that fail in any respect to conform to the contract."
        ],
        ans: 3, // D
        exp: "For single-delivery contracts under the UCC, the Perfect Tender Rule applies. If the goods or tender of delivery fail in ANY respect to conform to the contract (e.g., wrong shade of color), the buyer may reject the whole shipment, accept the whole, or accept any commercial unit and reject the rest."
    },
    {
        id: 13,
        topic: "Performance / Right to Cure (Before Deadline)",
        fp: "Retailer orders 1,000 red shirts from Wholesaler for delivery by October 1. On September 20, Wholesaler delivers 1,000 burgundy shirts. Retailer realizes the color is wrong and immediately rejects the shipment.\n\nOn September 25, Wholesaler notifies Retailer, 'I will send the correct red shirts by October 1.' Retailer says, 'Too late, contract canceled.'",
        q: "Does Wholesaler have the right to cure the defective delivery?",
        opts: [
            "Yes, because the time for performance has not yet expired, the seller has an absolute right to seasonably notify the buyer of an intention to cure and deliver conforming goods.",
            "No, the perfect tender rule allows the buyer to permanently cancel the contract immediately upon any non-conformity.",
            "Yes, but only if the buyer grants explicit written permission to attempt a second commercial delivery.",
            "No, because shipping non-conforming goods constitutes an automatic and irreversible anticipatory repudiation."
        ],
        ans: 0, // A
        exp: "Under UCC § 2-508(1), if a buyer rejects non-conforming goods and the time for performance has NOT yet expired (Oct 1), the seller has an absolute right to seasonably notify the buyer of their intention to cure and may then make a conforming delivery within the contract time."
    },
    {
        id: 14,
        topic: "Performance / Right to Cure (After Deadline)",
        fp: "Retailer orders 1,000 red shirts from Wholesaler for delivery by October 1. On September 20, Wholesaler delivers 1,000 burgundy shirts. Retailer realizes the color is wrong and immediately rejects the shipment.\n\nAssume instead the burgundy shirts were delivered exactly on October 1. Retailer rejects them. Wholesaler had sent burgundy shirts to Retailer in three prior shipments over the last year, and Retailer had always accepted them without complaint.",
        q: "Does Wholesaler have any right to cure the delivery after the October 1 deadline has passed?",
        opts: [
            "No, because the right to cure strictly expires concurrently with the contractual performance deadline.",
            "Yes, if the seller had reasonable grounds to believe the non-conforming goods would be acceptable (based on prior dealings), the seller is granted a further reasonable time to substitute a conforming tender.",
            "No, because course of dealing cannot override the explicit terms of a formal purchase order.",
            "Yes, because the UCC grants an automatic 30-day grace period for all apparel transactions."
        ],
        ans: 1, // B
        exp: "Under UCC § 2-508(2), if the time for performance HAS expired, a seller generally cannot cure. However, a major exception exists: if the seller had reasonable grounds to believe the non-conforming tender would be acceptable (often based on prior course of dealing), the seller is granted a 'further reasonable time' to substitute a conforming tender."
    },
    // FACT PATTERN 6 (Q15-Q16)
    {
        id: 15,
        topic: "Performance / Frustration of Purpose",
        fp: "Venue rents its concert hall to Rock Band for $10,000 for a performance scheduled at 10 PM on Friday. Both parties understand the hall is rented specifically for this loud rock concert. On Thursday, the city suddenly passes an emergency noise ordinance banning all amplified music after 8 PM anywhere in the city limits. Rock Band refuses to pay the rental fee.",
        q: "What is Rock Band's best defense against Venue's breach of contract lawsuit?",
        opts: [
            "Mutual mistake, because they assumed the legal landscape would remain static.",
            "Unconscionability, because municipal ordinances disproportionately harm commercial entertainers.",
            "Frustration of purpose, because a supervening, unforeseeable event fundamentally destroyed the mutually understood, core purpose of the contract.",
            "Promissory estoppel, because the band detrimentally relied on the venue's implied warranty of quiet enjoyment."
        ],
        ans: 2, // C
        exp: "Frustration of purpose excuses performance when a supervening, unforeseeable event completely destroys the mutually understood, core purpose of the contract. The venue still physically exists (so it's not strictly 'impossible' to rent it), but the new ordinance completely destroys the sole purpose of renting the hall for a 10 PM rock concert."
    },
    {
        id: 16,
        topic: "Performance / Impossibility",
        fp: "Venue rents its concert hall to Rock Band for $10,000 for a performance scheduled at 10 PM on Friday. Both parties understand the hall is rented specifically for this loud rock concert. On Thursday, the city suddenly passes an emergency noise ordinance banning all amplified music after 8 PM anywhere in the city limits. Rock Band refuses to pay the rental fee.\n\nAssume instead that no ordinance was passed, but on Thursday night, the concert hall burned completely to the ground due to a lightning strike.",
        q: "What doctrine best excuses Rock Band's duty to pay in this alternate scenario?",
        opts: [
            "Waiver of condition.",
            "Frustration of purpose.",
            "Constructive eviction.",
            "Impossibility, because the specific physical subject matter essential to the contract was destroyed without fault."
        ],
        ans: 3, // D
        exp: "Performance is excused under the doctrine of objective impossibility (or impracticability) when the specific physical subject matter essential to the contract (the concert hall) is destroyed through no fault of either party prior to performance."
    },
    // FACT PATTERN 7 (Q17-Q19)
    {
        id: 17,
        topic: "Third Parties / Intended Creditor Beneficiary",
        fp: "Uncle owes Mechanic $5,000 for repairing his truck. Uncle buys a new car from Dealer for $5,000 cash. In the written contract, Dealer explicitly promises to deliver the new car directly to Mechanic in order to completely satisfy Uncle's $5,000 debt. Dealer takes the cash but never delivers the car.",
        q: "What is Mechanic's legal status regarding the contract between Uncle and Dealer?",
        opts: [
            "An intended creditor beneficiary, because the primary purpose of the promisee was to discharge a legal obligation owed to the third party.",
            "An incidental beneficiary, possessing no right to enforce the commercial agreement.",
            "An intended donee beneficiary, because the car was fundamentally a gift.",
            "A direct promisee to the underlying financial transaction."
        ],
        ans: 0, // A
        exp: "A third party is an intended beneficiary if the contract was made with the primary intent to benefit them. If the promisee (Uncle) seeks the promisor's (Dealer's) performance to discharge a pre-existing legal obligation owed to the third party (Mechanic), the third party is a creditor beneficiary."
    },
    {
        id: 18,
        topic: "Third Parties / Vesting of Beneficiary Rights",
        fp: "Uncle owes Mechanic $5,000 for repairing his truck. Uncle buys a new car from Dealer for $5,000 cash. In the written contract, Dealer explicitly promises to deliver the new car directly to Mechanic in order to completely satisfy Uncle's $5,000 debt. Dealer takes the cash but never delivers the car.\n\nBefore Mechanic ever learns about the contract, Uncle and Dealer mutually agree to cancel the sale. Dealer refunds Uncle the $5,000.",
        q: "Can Mechanic successfully sue Dealer for the car?",
        opts: [
            "Yes, because a creditor beneficiary possesses absolute enforcement rights instantly upon contract formation.",
            "No, because the original contracting parties retained the right to modify or cancel the agreement since Mechanic's rights had not yet legally vested.",
            "Yes, because the cancellation constitutes a fraudulent conveyance of commercial assets.",
            "No, because third-party beneficiaries inherently lack legal standing in civil jurisdictions."
        ],
        ans: 1, // B
        exp: "The original contracting parties can modify or cancel a contract without the third-party beneficiary's consent UNTIL the beneficiary's rights have 'vested.' Rights vest when the beneficiary learns of and assents to the contract, relies on it, or brings suit. Since Mechanic didn't even know about the contract, his rights hadn't vested, and the cancellation was valid."
    },
    {
        id: 19,
        topic: "Third Parties / Promisor Defenses",
        fp: "Uncle owes Mechanic $5,000 for repairing his truck. Uncle buys a new car from Dealer for $5,000 cash. In the written contract, Dealer explicitly promises to deliver the new car directly to Mechanic in order to completely satisfy Uncle's $5,000 debt. Dealer takes the cash but never delivers the car.\n\nAssume Mechanic was fully aware of the contract. However, Uncle's $5,000 check to Dealer bounced due to insufficient funds. Dealer refuses to deliver the car.",
        q: "If Mechanic sues Dealer for the car, will Mechanic win?",
        opts: [
            "Yes, because the third-party beneficiary is an innocent actor immune from upstream financial disputes.",
            "Yes, because the debt transfer is entirely severable from the underlying consideration failure.",
            "No, because the promisor can assert any defenses against the third-party beneficiary that they could have asserted against the promisee, such as the uncle's material breach.",
            "No, because automobiles cannot be legally transferred without formal DMV registration."
        ],
        ans: 2, // C
        exp: "In a third-party beneficiary contract, the promisor (Dealer) can raise any defense against the beneficiary (Mechanic) that the promisor would have had against the promisee (Uncle). Because Uncle materially breached the contract by providing a bad check, Dealer's duty to deliver the car is excused, even against Mechanic."
    },
    // FACT PATTERN 8 (Q20-Q22)
    {
        id: 20,
        topic: "Third Parties / Assignment of Payment Rights",
        fp: "City hires PavingCo to pave Main Street for $50,000. The contract contains a prominent clause stating: 'No assignments of this contract are permitted.' PavingCo immediately assigns its right to receive the $50,000 payment to Local Bank to secure a business loan. PavingCo completes the paving. Local Bank demands payment, but City refuses, citing the clause.",
        q: "Is the assignment of the right to receive payment valid despite the anti-assignment clause?",
        opts: [
            "No, because the contract explicitly and unequivocally prohibited all assignments.",
            "No, because municipal service contracts are strictly immune from third-party financial transfers.",
            "Yes, because the assignment of rights to a financial institution requires explicit prior authorization.",
            "Yes, because an anti-assignment clause generally only destroys the right to assign, not the power to assign, and assignments of the right to receive money are strongly favored."
        ],
        ans: 3, // D
        exp: "A general clause stating 'no assignments are permitted' is construed as merely a promise not to assign. While assigning it is technically a breach of that promise, the assignment itself remains valid and enforceable (destroying the 'right' to assign, but not the 'power' to do so). The UCC and common law strongly favor the free assignability of the right to receive money."
    },
    {
        id: 21,
        topic: "Third Parties / Delegation of Routine Duties",
        fp: "City hires PavingCo to pave Main Street for $50,000. The contract contains a prominent clause stating: 'No assignments of this contract are permitted.' PavingCo immediately assigns its right to receive the $50,000 payment to Local Bank to secure a business loan. PavingCo completes the paving. Local Bank demands payment, but City refuses, citing the clause.\n\nAssume the contract lacked any anti-delegation language. PavingCo gets too busy and delegates the physical duty of paving the street to ShadyPaving, another local contractor. City objects.",
        q: "Was the delegation of the paving duty legally valid without City's consent?",
        opts: [
            "Yes, because routine or mechanical duties that do not require highly specialized personal skill or unique trust are freely delegable.",
            "No, because the contract involves distinct personal artistic judgment.",
            "Yes, because all commercial delegations completely relieve the original obligor of all liability.",
            "No, because government entities must formally approve all subcontractors in writing."
        ],
        ans: 0, // A
        exp: "Duties are generally freely delegable without the obligee's consent unless the contract expressly prohibits it or the duties involve highly specialized personal skill, artistic judgment, or unique trust. Standard asphalt paving is considered a routine, mechanical duty that can be freely delegated."
    },
    {
        id: 22,
        topic: "Third Parties / Delegation vs. Novation",
        fp: "City hires PavingCo to pave Main Street for $50,000. The contract contains a prominent clause stating: 'No assignments of this contract are permitted.' PavingCo immediately assigns its right to receive the $50,000 payment to Local Bank to secure a business loan. PavingCo completes the paving. Local Bank demands payment, but City refuses, citing the clause.\n\nShadyPaving does a terrible job, leaving massive potholes. City sues PavingCo for breach of contract. PavingCo argues they are not liable because they validly delegated the duty.",
        q: "Is PavingCo liable to City for the defective work?",
        opts: [
            "No, because the physical delegation cleanly and automatically transferred all legal obligations to the subcontractor.",
            "Yes, because a valid delegation does not relieve the delegating party of their original contractual liability unless a formal novation occurs.",
            "No, because ShadyPaving assumed full privity of contract with the municipality.",
            "Yes, but only if the City can prove PavingCo acted with malicious intent."
        ],
        ans: 1, // B
        exp: "A valid delegation of duties does NOT relieve the original obligor (PavingCo) of liability. The obligor remains secondarily liable as a surety if the delegate (ShadyPaving) fails to perform properly. To completely escape liability, there must be a 'novation'—an agreement among all three parties releasing the original obligor."
    },
    // FACT PATTERN 9 (Q23-Q25)
    {
        id: 23,
        topic: "Remedies / Expectation Damages (Cost minus Salvage)",
        fp: "Buyer contracts to buy a highly customized, unsellable industrial machine from Seller for $100,000. Seller begins building it. After Seller spends $20,000 on parts and labor, Buyer unjustifiably repudiates the contract. Seller estimates it would have cost an additional $60,000 to finish the machine. Seller halts construction and manages to sell the unfinished scrap metal for $5,000.",
        q: "What amount is Seller entitled to recover in expectation damages?",
        opts: [
            "$100,000.",
            "$20,000.",
            "$35,000.",
            "$15,000."
        ],
        ans: 2, // C
        exp: "Expectation damages = Expected Profit + Costs reasonably incurred - Salvage value. If fully performed, Seller would have received $100k and spent $80k total ($20k + $60k), resulting in an expected profit of $20,000. Seller recovers: $20,000 (profit) + $20,000 (costs already spent) - $5,000 (salvage value) = $35,000."
    },
    {
        id: 24,
        topic: "Remedies / Lost Volume Seller (UCC 2-708(2))",
        fp: "Buyer contracts to buy a highly customized, unsellable industrial machine from Seller for $100,000. Seller begins building it. After Seller spends $20,000 on parts and labor, Buyer unjustifiably repudiates the contract. Seller estimates it would have cost an additional $60,000 to finish the machine. Seller halts construction and manages to sell the unfinished scrap metal for $5,000.\n\nAssume instead the machine was a standard, mass-produced boat that Seller sells regularly. Buyer breaches a contract to buy one for $100,000. Seller immediately sells that exact boat to another customer for $100,000. Seller has an unlimited supply of these boats at his factory.",
        q: "Is Seller entitled to recover damages from Buyer despite successfully reselling the boat for the exact same price?",
        opts: [
            "No, because the seller successfully mitigated the damages and suffered zero actual financial loss.",
            "Yes, but the recovery is strictly limited to nominal damages and court filing fees.",
            "No, because double recovery is strictly prohibited under the commercial code.",
            "Yes, as a 'lost volume seller,' the seller is entitled to the lost profit from the breached sale because they would have made TWO sales instead of just one if the buyer hadn't breached."
        ],
        ans: 3, // D
        exp: "Under UCC § 2-708(2), if the standard measure of damages (contract price minus market price) is inadequate to put the seller in as good a position as performance would have done, a 'lost volume seller' (one with unlimited supply) can recover their lost profit. Had Buyer not breached, Seller would have sold two boats and made two profits, not one."
    },
    {
        id: 25,
        topic: "Remedies / Specific Performance (Unique Goods)",
        fp: "Buyer contracts to buy a highly customized, unsellable industrial machine from Seller for $100,000. Seller begins building it. After Seller spends $20,000 on parts and labor, Buyer unjustifiably repudiates the contract. Seller estimates it would have cost an additional $60,000 to finish the machine. Seller halts construction and manages to sell the unfinished scrap metal for $5,000.\n\nAssume instead that Seller fully finished the highly customized machine, but then Seller breached the contract by refusing to deliver it to Buyer. The machine is patented and completely unique; no substitute exists anywhere.",
        q: "What is Buyer's best remedy to obtain the physical machine?",
        opts: [
            "Punitive damages.",
            "Specific performance, because the goods are entirely unique and monetary damages are legally inadequate.",
            "Liquidated damages.",
            "A writ of habeas corpus."
        ],
        ans: 1, // B
        exp: "Under UCC § 2-716, a buyer may obtain the equitable remedy of specific performance where the goods are unique or in other proper circumstances. Because the machine is highly customized, patented, and cannot be replaced (no adequate remedy at law via cover), the court will order the Seller to deliver the specific machine."
    }
];