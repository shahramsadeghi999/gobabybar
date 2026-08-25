const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Performance / Output Contracts (UCC 2-306)",
        fp: "Buyer signs an output contract to buy 'all the grade-A widgets Seller produces.' Seller historically produces 10,000 units per year. In year two, Seller acquires a massive new factory and produces 100,000 units, tendering them all to Buyer. Buyer rejects the excess 90,000 units, claiming he cannot physically store them.",
        q: "Is Buyer legally required to accept and pay for all 100,000 units?",
        opts: [
            "Yes, because output contracts explicitly transfer absolute volumetric risk to the purchasing party without limitation.",
            "No, because the acquisition of a new factory operates as an automatic novation of the original commercial agreement.",
            "No, because under UCC § 2-306, an output contract requires good faith, meaning no quantity unreasonably disproportionate to any stated estimate or normal prior output may be tendered or demanded.",
            "Yes, but the buyer is entitled to a judicially determined bulk discount."
        ],
        ans: 2,
        exp: "Under UCC § 2-306, output and requirements contracts are subject to a standard of good faith. Furthermore, no quantity 'unreasonably disproportionate' to any stated estimate or to normal or otherwise comparable prior output/requirements may be tendered or demanded. A sudden 1,000% increase due to a new factory is unreasonably disproportionate, excusing Buyer from taking the excess."
    },
    {
        id: 2,
        topic: "Performance / Output Contracts (Good Faith Shutdown)",
        fp: "Buyer signs an output contract to buy 'all the grade-A widgets Seller produces.' Seller historically produces 10,000 units per year. In year two, Seller acquires a massive new factory and produces 100,000 units, tendering them all to Buyer. Buyer rejects the excess 90,000 units, claiming he cannot physically store them.\n\nAssume instead that in year two, Seller's production costs increased slightly, rendering widget production moderately unprofitable. To avoid these minor losses, Seller completely shut down the widget factory, tendering exactly zero widgets to Buyer. Buyer sues for breach.",
        q: "Is Seller liable for breach of contract?",
        opts: [
            "Yes, because shutting down production merely to avoid financial losses constitutes a breach of the implied covenant of good faith.",
            "No, because an output contract allows the seller to dictate production volumes entirely at their subjective discretion.",
            "Yes, because any tender below previous historical output triggers strict liability damages.",
            "No, because unprofitability inherently establishes objective legal commercial impracticability."
        ],
        ans: 0,
        exp: "Under an output contract (UCC § 2-306), the seller must operate their plant in good faith according to commercial standards. A shutdown by an output seller merely to avoid losses or because the contract has become unprofitable is generally considered a breach of good faith. (A shutdown is only justified by a genuine imperative business reason, like catastrophic bankruptcy or destruction)."
    },
    {
        id: 3,
        topic: "Discharge / Accord and Satisfaction (UCC 3-311)",
        fp: "Buyer signs an output contract to buy 'all the grade-A widgets Seller produces.' Seller historically produces 10,000 units per year. In year two, Seller acquires a massive new factory and produces 100,000 units, tendering them all to Buyer. Buyer rejects the excess 90,000 units, claiming he cannot physically store them.\n\nAssume instead the contract was for exactly 10,000 widgets for a liquidated, undisputed total debt of $10,000. Buyer sent a check for $5,000 containing a conspicuous note: 'Cashing this settles the entire account.' Seller cashed the check and sued for the remaining $5,000.",
        q: "Does cashing the check discharge the remaining debt?",
        opts: [
            "Yes, because physical negotiation of a restrictive banking instrument establishes an absolute waiver.",
            "No, because the payment of a lesser sum on a liquidated debt lacks consideration.",
            "Yes, under the doctrine of mutually executed commercial accord.",
            "No, because the notation was not formally notarized."
        ],
        ans: 1,
        exp: "An accord and satisfaction via a 'payment in full' check only works under UCC § 3-311 if the debt is unliquidated or subject to a bona fide dispute. If a debt is liquidated (undisputed and certain in amount, like the $10,000 here), accepting a lesser amount lacks consideration under the preexisting duty rule. Cashing the check does not discharge the remainder."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Defenses / Economic Duress vs. Hard Bargaining",
        fp: "DevCo owes Bank $5,000,000 on a commercial loan, due in exactly one week. DevCo lacks the funds and asks Bank for an extension. Bank replies, 'We will extend the loan by one year, but ONLY IF you agree to transfer to us a 10% equity stake in your company.' DevCo, facing immediate bankruptcy if the loan is called in, signs the equity transfer.",
        q: "Can DevCo void the equity transfer under the doctrine of economic duress?",
        opts: [
            "Yes, because the bank leveraged a vastly superior bargaining position to extract an unconscionable proprietary concession.",
            "Yes, because DevCo faced immediate and total financial ruin, completely eliminating all reasonable commercial alternatives.",
            "No, because all commercial loan modifications are shielded by federal banking regulations.",
            "No, because threatening to exercise a valid legal right, such as calling in a due loan, does not constitute a wrongful threat under the doctrine of economic duress."
        ],
        ans: 3,
        exp: "Economic duress requires two elements: (1) a WRONGFUL or improper threat, and (2) no reasonable alternative but to agree. A threat to exercise a valid legal right (like refusing to extend a loan and calling it due) is 'hard bargaining,' not a wrongful threat. Therefore, the defense of economic duress fails."
    },
    {
        id: 5,
        topic: "Defenses / Duress (Threat of Tort)",
        fp: "DevCo owes Bank $5,000,000 on a commercial loan, due in exactly one week. DevCo lacks the funds and asks Bank for an extension. Bank replies, 'We will extend the loan by one year, but ONLY IF you agree to transfer to us a 10% equity stake in your company.' DevCo, facing immediate bankruptcy if the loan is called in, signs the equity transfer.\n\nAssume instead that Bank threatened to maliciously publish utterly false, defamatory rumors about DevCo's CEO in the national press unless DevCo signed the equity transfer. DevCo signed to prevent the defamation.",
        q: "Does this modified threat satisfy the first element of economic duress?",
        opts: [
            "Yes, because the threat to commit a tortious act—such as publishing false, defamatory statements—constitutes a legally wrongful threat that destroys free will.",
            "No, because physical violence or imprisonment is strictly required to satisfy the elements of commercial duress.",
            "Yes, but only if the CEO can objectively prove massive reputational damage actually occurred.",
            "No, because corporate entities lack standing to claim personal reputational distress."
        ],
        ans: 0,
        exp: "The first element of duress requires an improper or wrongful threat. Threats to commit a crime or a tort (such as malicious defamation or libel) are inherently wrongful and improper. When combined with a lack of reasonable alternatives, this satisfies the requirements to render the contract voidable for duress."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Terms / Course of Performance Waiver (UCC 2-208 / 1-303)",
        fp: "Retailer and Supplier execute a fully integrated written contract for 12 monthly shipments of 'exactly 100 units of Part X.' The contract contains a strict 'No Oral Modifications' and 'No Waivers' clause. For months 1 through 5, Supplier delivers only 90 units. Retailer accepts them without any complaint. In month 6, Retailer suddenly rejects the 90-unit shipment and sues Supplier for breach regarding the first 5 months.",
        q: "Can Retailer successfully sue for breach regarding the shipments from months 1 through 5?",
        opts: [
            "Yes, because the perfect tender rule allows retroactive enforcement of written quantitative terms.",
            "No, because under the UCC, a course of performance accepted without objection operates as a waiver of the strict quantity term for those specific accepted installments.",
            "Yes, because the 'No Waivers' clause conclusively preserves the buyer's right to litigate all historical discrepancies.",
            "No, because a five-month delay violates the absolute statute of limitations."
        ],
        ans: 1,
        exp: "Under UCC § 1-303 (and former § 2-208), a course of performance accepted or acquiesced in without objection is highly relevant to determining the meaning of the agreement and may operate as a waiver of an express term. By accepting 90 units without objection for 5 months, Retailer waived the right to sue for breach on those specific past installments."
    },
    {
        id: 7,
        topic: "Terms / Retraction of Course of Performance Waiver",
        fp: "Retailer and Supplier execute a fully integrated written contract for 12 monthly shipments of 'exactly 100 units of Part X.' The contract contains a strict 'No Oral Modifications' and 'No Waivers' clause. For months 1 through 5, Supplier delivers only 90 units. Retailer accepts them without any complaint. In month 6, Retailer suddenly rejects the 90-unit shipment and sues Supplier for breach regarding the first 5 months.",
        q: "Can Retailer legally demand strict compliance (exactly 100 units) for month 7 and all future installments?",
        opts: [
            "No, because the established course of performance permanently and irrevocably modified the underlying contract for all future interactions.",
            "No, because the supplier materially relied on the ninety-unit manufacturing schedule.",
            "Yes, by providing reasonable notification to the supplier that strict performance will be required for future installments.",
            "Yes, but only if the retailer provides additional financial consideration for the adjustment."
        ],
        ans: 2,
        exp: "A waiver affecting an EXECUTORY (future) portion of the contract may be retracted by reasonable notification received by the other party that strict performance will be required, UNLESS the retraction would be unjust in view of a material change of position in reliance on the waiver. By giving notice, Retailer can demand 100 units for month 7."
    },
    {
        id: 8,
        topic: "Terms / Waiving 'No Waiver' Clauses",
        fp: "Retailer and Supplier execute a fully integrated written contract for 12 monthly shipments of 'exactly 100 units of Part X.' The contract contains a strict 'No Oral Modifications' and 'No Waivers' clause. For months 1 through 5, Supplier delivers only 90 units. Retailer accepts them without any complaint. In month 6, Retailer suddenly rejects the 90-unit shipment and sues Supplier for breach regarding the first 5 months.",
        q: "Does the explicit 'No Waivers' clause in the integrated text prevent the course of performance from establishing a legal waiver?",
        opts: [
            "Yes, because commercial parties possess the absolute freedom to contractually preclude all equitable equitable defenses.",
            "Yes, because the integration clause seals the document from all external behavioral interpretations.",
            "No, provided the supplier filed a formal administrative grievance.",
            "No, because courts generally hold that 'no waiver' clauses can themselves be implicitly waived by the ongoing course of performance between the parties."
        ],
        ans: 3,
        exp: "This is an advanced UCC concept. Courts routinely hold that an anti-waiver clause (a clause stating that failure to enforce a term does not constitute a waiver) can itself be waived by the parties' course of performance. Repeatedly accepting defective performance waives both the underlying term AND the anti-waiver clause."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Performance / Perfect Tender Rule vs Acceptance",
        fp: "Buyer orders 5,000 blue pens from Seller under a single-delivery contract. Seller delivers 4,990 blue pens and 10 red pens. Buyer accepts the entire shipment but deducts $10 from the payment to account for the wrong colors. Seller sues Buyer for the full, original contract payment.",
        q: "Did Seller technically breach the contract upon initial delivery?",
        opts: [
            "Yes, because the perfect tender rule allows rejection for any non-conformity.",
            "No, because the defect was strictly de minimis and ignored by commercial tribunals.",
            "No, because the doctrine of substantial performance excuses trivial numerical discrepancies.",
            "Yes, but the breach is automatically cured by the buyer's physical retention of the goods."
        ],
        ans: 0,
        exp: "Under the UCC Perfect Tender Rule (§ 2-601), if the goods fail in ANY respect to conform to the contract (e.g., 10 wrong pens out of 5,000), the seller has breached the contract and the buyer has the absolute right to reject the entire shipment."
    },
    {
        id: 10,
        topic: "Remedies / Buyer's Liability After Acceptance (UCC 2-607)",
        fp: "Buyer orders 5,000 blue pens from Seller under a single-delivery contract. Seller delivers 4,990 blue pens and 10 red pens. Buyer accepts the entire shipment but deducts $10 from the payment to account for the wrong colors. Seller sues Buyer for the full, original contract payment.",
        q: "Since Buyer formally accepted the non-conforming shipment, what is Buyer's financial liability to Seller?",
        opts: [
            "The buyer must return the entire shipment at his own expense to avoid liability.",
            "The buyer must pay at the original contract rate for all goods formally accepted, but retains the right to sue for or offset damages resulting directly from the non-conformity.",
            "The buyer is completely excused from paying any sum because the seller breached the perfect tender rule.",
            "The buyer must pay the full contract price without any deduction because acceptance waives all defects."
        ],
        ans: 1,
        exp: "Under UCC § 2-607, once a buyer ACCEPTS non-conforming goods, they must pay for them at the contract rate. However, acceptance does NOT waive the right to damages. Under § 2-714, the buyer may recover (or offset/deduct under § 2-717) damages for the non-conformity, provided they gave timely notice of the breach."
    },
    {
        id: 11,
        topic: "Performance / Substantial Performance (Common Law)",
        fp: "Buyer orders 5,000 blue pens from Seller under a single-delivery contract. Seller delivers 4,990 blue pens and 10 red pens. Buyer accepts the entire shipment but deducts $10 from the payment to account for the wrong colors. Seller sues Buyer for the full, original contract payment.\n\nAssume instead the contract was for Builder to construct 5,000 wooden fences for Owner. Builder perfectly constructs 4,990 fences, but 10 are slightly crooked due to an innocent measurement error. Owner refuses to pay Builder anything.",
        q: "Is Builder entitled to payment for the construction contract?",
        opts: [
            "No, because the perfect tender rule applies uniformly to all commercial agreements.",
            "Yes, but only under quasi-contractual restitution capped at the exact cost of lumber.",
            "The builder substantially performed and is entitled to the full contract price minus an offset for the cost of repairing the ten defective fences.",
            "No, because the breach was material since it affected multiple distinct structures."
        ],
        ans: 2,
        exp: "Construction contracts are services governed by the common law, not the UCC perfect tender rule. Under the common law, if a party 'substantially performs' their obligations in good faith, they have not committed a material breach. They are entitled to the contract price minus an offset for the cost of fixing the minor defects."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Performance / Revocation of Acceptance (Latent Defect)",
        fp: "Buyer purchases a heavy industrial lathe from Seller for $50,000. Upon delivery, the lathe looks perfect and functions normally. Buyer officially accepts it and bolts it to the factory floor. Three weeks later, a severe latent micro-fracture deep inside the steel frame—which was impossible to see during standard inspection—causes the lathe to completely shatter during operation. Buyer notifies Seller he is revoking his acceptance.",
        q: "Was the Buyer's revocation of acceptance legally valid?",
        opts: [
            "No, because physical installation permanently waives all subsequent rejection rights.",
            "Yes, but only if the buyer had explicitly negotiated an extended commercial warranty.",
            "No, because the risk of all latent manufacturing defects shifts unconditionally to the buyer upon formal acceptance.",
            "Yes, because a buyer may revoke acceptance if a non-conformity substantially impairs the value of the goods and the acceptance was reasonably induced by the extreme difficulty of discovering a latent defect."
        ],
        ans: 3,
        exp: "Under UCC § 2-608, a buyer may revoke their prior acceptance of goods if a non-conformity substantially impairs the value of the goods to the buyer AND the acceptance was reasonably induced either by the extreme difficulty of discovery before acceptance (a latent defect) or by the seller's assurances."
    },
    {
        id: 13,
        topic: "Performance / Risk of Loss After Revocation (UCC 2-510(2))",
        fp: "Buyer purchases a heavy industrial lathe from Seller for $50,000. Upon delivery, the lathe looks perfect and functions normally. Buyer officially accepts it and bolts it to the factory floor. Three weeks later, a severe latent micro-fracture deep inside the steel frame—which was impossible to see during standard inspection—causes the lathe to completely shatter during operation. Buyer notifies Seller he is revoking his acceptance.\n\nImmediately after Buyer validly revokes acceptance, a freak flood destroys the shattered lathe entirely. Buyer's factory insurance only covers 50% of the damage.",
        q: "Who bears the risk of loss for the destroyed lathe?",
        opts: [
            "The seller bears the risk of loss to the extent of any deficiency in the buyer's effective insurance coverage.",
            "The buyer, because the goods were located on the buyer's physical premises.",
            "The risk is split evenly under comparative fault.",
            "The seller bears the absolute risk of loss regardless of any insurance policies held by the buyer."
        ],
        ans: 0,
        exp: "This tests a specific, advanced UCC rule. Under UCC § 2-510(2), where a buyer rightfully revokes acceptance, they may, to the extent of any deficiency in their effective insurance coverage, treat the risk of loss as having rested on the SELLER from the beginning. Since Buyer's insurance only covers 50%, Seller bears the remaining 50% risk."
    },
    {
        id: 14,
        topic: "Remedies / Damages After Revocation & Cover",
        fp: "Buyer purchases a heavy industrial lathe from Seller for $50,000. Upon delivery, the lathe looks perfect and functions normally. Buyer officially accepts it and bolts it to the factory floor. Three weeks later, a severe latent micro-fracture deep inside the steel frame—which was impossible to see during standard inspection—causes the lathe to completely shatter during operation. Buyer notifies Seller he is revoking his acceptance.\n\nAssume the revocation is valid. Buyer returns the shattered lathe, demands his $50,000 back, and immediately buys a substitute lathe (cover) for $55,000 on the open market.",
        q: "What amount is Buyer entitled to recover from Seller?",
        opts: [
            "Only the five-thousand-dollar difference between the cover price and the contract price.",
            "The recovery of the purchase price paid plus the cover differential.",
            "Only the fifty-thousand-dollar original purchase price.",
            "Zero, because the revocation of acceptance mutually rescinds the contract and waives all expectation damages."
        ],
        ans: 1,
        exp: "Under the UCC, a buyer who validly revokes acceptance has the same rights as if they had rejected the goods initially. Under § 2-711, the buyer may recover the price already paid ($50,000) PLUS 'cover' damages under § 2-712 (the difference between the cover price and the contract price, which is $5,000). Total recovery = $55,000."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Third Parties / Modification Before Vesting",
        fp: "City hires WaterCo to build a massive dam to protect a specific lower valley neighborhood from flooding. The contract explicitly names the 'Lower Valley Neighborhood Association' (Association) as the intended beneficiary. The contract contains a clause allowing modifications by City and WaterCo. Before the Association learns of the contract, City and WaterCo amend it to significantly reduce the dam's height to save money. Association later sues WaterCo.",
        q: "Did the amendment validly reduce the dam's height against the Association's interests?",
        opts: [
            "No, because the public policy doctrine prevents municipalities from compromising citizen safety.",
            "No, because intended beneficiaries possess an absolute, irrevocable right to the original promised performance.",
            "Yes, because the original contracting parties retain the absolute right to modify the agreement before the beneficiary's rights have legally vested.",
            "Yes, but only if the association is formally compensated for the reduction in protective value."
        ],
        ans: 2,
        exp: "The original contracting parties can modify or cancel a third-party beneficiary contract without the beneficiary's consent UNTIL the beneficiary's rights have 'vested' (learned of it and relied, assented, or sued). Since the Association had not yet learned of the contract, their rights had not vested, making the modification valid."
    },
    {
        id: 16,
        topic: "Third Parties / Reserved Power to Modify",
        fp: "City hires WaterCo to build a massive dam to protect a specific lower valley neighborhood from flooding. The contract explicitly names the 'Lower Valley Neighborhood Association' (Association) as the intended beneficiary. The contract contains a clause allowing modifications by City and WaterCo. Before the Association learns of the contract, City and WaterCo amend it to significantly reduce the dam's height to save money. Association later sues WaterCo.\n\nAssume instead the Association DID know of the contract and had already heavily relied on it by building new parks near the river. THEN, City and WaterCo modified the height, citing a specific clause in the original contract that explicitly reserved their right to modify the agreement at any time without the beneficiary's consent.",
        q: "Is the modification valid despite the Association's reliance?",
        opts: [
            "No, because detrimental reliance permanently extinguishes all reserved modification powers under the Restatement.",
            "No, because the modification constitutes a fraudulent conveyance of public assets.",
            "Yes, but only if the modification is approved by a state judge.",
            "Yes, because if the contract expressly reserves the power for the original promisor and promisee to modify the agreement without the beneficiary's consent, that clause controls even after vesting."
        ],
        ans: 3,
        exp: "Under Restatement (Second) of Contracts § 311, if the original contract expressly provides that the promisor and promisee retain the right to modify or discharge the agreement without the beneficiary's consent, that reservation of power is effective. The beneficiary's reliance does not override this explicit contractual reservation."
    },
    {
        id: 17,
        topic: "Third Parties / Creditor vs Donee Beneficiary",
        fp: "City hires WaterCo to build a massive dam to protect a specific lower valley neighborhood from flooding. The contract explicitly names the 'Lower Valley Neighborhood Association' (Association) as the intended beneficiary. The contract contains a clause allowing modifications by City and WaterCo. Before the Association learns of the contract, City and WaterCo amend it to significantly reduce the dam's height to save money. Association later sues WaterCo.",
        q: "Assuming the City had no pre-existing legal duty or tort liability requiring it to protect the lower valley, what is the Association's classification?",
        opts: [
            "An intended donee beneficiary.",
            "An incidental beneficiary.",
            "An intended creditor beneficiary.",
            "An assignee of municipal rights."
        ],
        ans: 0,
        exp: "Because the City did not owe a pre-existing legal debt or duty to build the dam for the Association, the primary purpose of the promise was to confer a benefit/gift of protection upon the residents. Therefore, the Association is classified as an intended donee beneficiary."
    },
    // FACT PATTERN 7 (Q18-Q20)
    {
        id: 18,
        topic: "Third Parties / UCC Article 9 & Anti-Assignment Clauses",
        fp: "Subcontractor performs framing work for General Contractor (GC) for $50,000. The contract explicitly states: 'All assignments of this contract or the rights hereunder are absolutely VOID.' Subcontractor completes the work and immediately assigns his right to receive the $50,000 payment to Bank to secure a loan. Bank demands payment from GC.",
        q: "Is the anti-assignment clause effective to void the assignment of the payment to Bank?",
        opts: [
            "Yes, because the specific use of the word 'void' successfully destroys the underlying power of assignment under common law.",
            "No, because under UCC Article 9, any contract term that prohibits or restricts the assignment of an account (the right to receive payment) is entirely legally ineffective.",
            "Yes, because construction contracts are inherently exempt from banking transfer protocols.",
            "No, because the subcontractor had completely finished the physical labor before executing the transfer."
        ],
        ans: 1,
        exp: "This is a highly tested UCC Article 9 exception. While at common law the word 'VOID' destroys the power to assign, UCC § 9-406(d) governs the assignment of 'accounts' (the right to payment for services rendered or goods sold). Under Article 9, ANY contract term that prohibits, restricts, or requires consent for the assignment of an account is completely ineffective. The right to get paid is freely assignable."
    },
    {
        id: 19,
        topic: "Third Parties / Payment After Notice of Assignment",
        fp: "Subcontractor performs framing work for General Contractor (GC) for $50,000. The contract explicitly states: 'All assignments of this contract or the rights hereunder are absolutely VOID.' Subcontractor completes the work and immediately assigns his right to receive the $50,000 payment to Bank to secure a loan. Bank demands payment from GC.\n\nAssume the assignment to Bank is completely valid. Bank sends proper, formalized written notice to GC detailing the assignment and directing GC to pay Bank. GC ignores the notice and pays the $50,000 directly to Subcontractor instead. Subcontractor goes bankrupt. Bank sues GC.",
        q: "Is GC liable to pay the $50,000 to Bank despite having already paid Subcontractor?",
        opts: [
            "No, because a good faith payment to the original obligee totally discharges the underlying commercial debt.",
            "No, because the bank failed to secure an injunction against the general contractor.",
            "Yes, because paying the assignor after receiving proper formal notice of a valid assignment does not discharge the underlying commercial obligation.",
            "Yes, but the bank's recovery is restricted to bankruptcy court dividends."
        ],
        ans: 2,
        exp: "Once an obligor (GC) receives proper notice that their debt has been assigned to an assignee (Bank), the obligor MUST pay the assignee. Paying the original assignor (Subcontractor) after receiving notice does NOT discharge the debt. GC is still liable to Bank and must essentially pay twice (though GC can try to recover from Subcontractor in bankruptcy)."
    },
    {
        id: 20,
        topic: "Third Parties / Defenses Against Assignee",
        fp: "Subcontractor performs framing work for General Contractor (GC) for $50,000. The contract explicitly states: 'All assignments of this contract or the rights hereunder are absolutely VOID.' Subcontractor completes the work and immediately assigns his right to receive the $50,000 payment to Bank to secure a loan. Bank demands payment from GC.\n\nAssume the assignment is valid. However, GC discovers that Subcontractor completely falsified his licensing credentials and intentionally lied about passing municipal inspections to induce GC into signing the initial contract. Bank demands payment.",
        q: "Can GC assert this fraud defense against Bank?",
        opts: [
            "No, because financial institutions are holder-in-due-course assignees immune from upstream service fraud.",
            "No, because the underlying physical framing work was already substantially completed.",
            "Yes, but only if the bank had actual knowledge of the fraudulent scheme prior to the assignment.",
            "Yes, because the assignee completely stands in the shoes of the assignor, subjecting them to all original contractual defenses."
        ],
        ans: 3,
        exp: "An assignee (Bank) stands in the shoes of the assignor (Subcontractor). The obligor (GC) can raise any defense against the assignee that it could have raised against the assignor, provided the defense arises from the contract itself. Fraud in the inducement is a valid defense against the contract, so GC can use it to defeat Bank's claim for payment."
    },
    // FACT PATTERN 8 (Q21-Q23)
    {
        id: 21,
        topic: "Performance / Constructive Conditions Concurrent",
        fp: "Artist contracts to paint a mural for Patron for $10,000. The contract states: 'Artist will deliver the completed mural canvas to Patron on June 1; Patron will pay Artist $10,000 on June 1.' On June 1, Artist stays home and does not deliver the canvas. Patron also stays home and does not tender the $10,000.",
        q: "Who is in breach of contract?",
        opts: [
            "Neither party is in breach.",
            "The Artist, because delivery of goods inherently precedes financial compensation.",
            "The Patron, because commercial buyers bear the initial burden of tender.",
            "Both parties are in simultaneous material breach."
        ],
        ans: 0,
        exp: "Where performances are to be exchanged simultaneously, they are 'constructive conditions concurrent.' This means each party's duty to perform is conditioned on the other party tendering performance. Because neither party tendered performance on June 1, neither party's duty was triggered, and therefore neither party is in breach."
    },
    {
        id: 22,
        topic: "Performance / Constructive Condition Precedent",
        fp: "Artist contracts to paint a mural for Patron for $10,000. The contract states: 'Artist will deliver the completed mural canvas to Patron on June 1; Patron will pay Artist $10,000 on June 1.' On June 1, Artist stays home and does not deliver the canvas. Patron also stays home and does not tender the $10,000.\n\nAssume instead the contract stated: 'Artist will paint the mural directly onto the wall of Patron's house over the entire month of June. Patron will pay Artist $10,000.' The contract is completely silent on when payment is due.",
        q: "Under common law constructive conditions, when is Patron legally required to pay?",
        opts: [
            "Half prior to commencement, and half upon completion.",
            "Payment is due only after the mural is completely finished, because when one performance takes a period of time, it operates as a constructive condition precedent to the instantaneous payment.",
            "In equal weekly installments throughout the month of June.",
            "Payment is due on day one to secure the artist's labor."
        ],
        ans: 1,
        exp: "When a contract is silent on the timing of payment, the common law applies constructive conditions of exchange. The rule is that the party whose performance takes a period of time (Artist painting the mural over a month) must fully perform BEFORE the party whose performance can be rendered in an instant (Patron paying money) is required to perform."
    },
    {
        id: 23,
        topic: "Performance / Ready, Willing, and Able",
        fp: "Artist contracts to paint a mural for Patron for $10,000. The contract states: 'Artist will deliver the completed mural canvas to Patron on June 1; Patron will pay Artist $10,000 on June 1.' On June 1, Artist stays home and does not deliver the canvas. Patron also stays home and does not tender the $10,000.\n\nAssume instead that on May 15, Patron wrongfully called Artist and explicitly repudiated the contract, saying he would not pay. Artist sued Patron for breach of contract on June 2.",
        q: "To successfully recover expectation damages for Patron's breach, what must Artist demonstrate regarding his own performance?",
        opts: [
            "That he physically delivered the canvas to the patron's residence on June 1 despite the repudiation.",
            "That he mitigated his damages by successfully selling the mural to a third party.",
            "Demonstrate that he was ready, willing, and able to perform the painting duties but for the repudiation.",
            "Nothing; the repudiation automatically guarantees full expectation damages regardless of the artist's capabilities."
        ],
        ans: 2,
        exp: "When one party anticipatorily repudiates, it excuses the non-breaching party from actually tendering performance. However, to recover expectation damages, the non-breaching party must still prove that they were 'ready, willing, and able' to perform their side of the contract had the repudiation not occurred. If Artist had broken both his arms on May 10 and couldn't paint anyway, he cannot recover damages."
    },
    // FACT PATTERN 9 (Q24-Q25)
    {
        id: 24,
        topic: "Remedies / Specific Performance vs Liquidated Damages",
        fp: "Buyer contracts to purchase a highly unique, customized mega-yacht from Builder for $10,000,000. The contract contains a liquidated damages clause stating: 'In the event of Builder's unexcused breach, Builder shall pay Buyer $1,000,000 in liquidated damages.' Builder breaches and refuses to deliver the completed yacht, wanting to sell it to a billionaire for $15,000,000. Buyer sues for specific performance.",
        q: "Does the presence of the liquidated damages clause prevent the court from ordering specific performance?",
        opts: [
            "Yes, because monetary damages were explicitly pre-calculated and agreed upon by sophisticated commercial parties.",
            "Yes, because liquidated damages inherently establish an adequate remedy at law, barring all equitable relief.",
            "No, because maritime vessels are categorically excluded from monetary limitations.",
            "No, the presence of a liquidated damages clause does not automatically bar specific performance unless the contract explicitly provides that liquidated damages are the sole and exclusive remedy."
        ],
        ans: 3,
        exp: "A common misconception is that a liquidated damages clause precludes specific performance because it provides an 'adequate remedy at law.' However, modern contract law (and the UCC) holds that unless a contract explicitly states that liquidated damages are the SOLE AND EXCLUSIVE remedy, a buyer can still seek specific performance for unique goods."
    },
    {
        id: 25,
        topic: "Remedies / Election of Remedies (No Double Recovery)",
        fp: "Buyer contracts to purchase a highly unique, customized mega-yacht from Builder for $10,000,000. The contract contains a liquidated damages clause stating: 'In the event of Builder's unexcused breach, Builder shall pay Buyer $1,000,000 in liquidated damages.' Builder breaches and refuses to deliver the completed yacht, wanting to sell it to a billionaire for $15,000,000. Buyer sues for specific performance.\n\nAssume the court successfully orders specific performance and forces Builder to deliver the yacht to Buyer. Buyer then demands the court also award him the $1,000,000 in liquidated damages for the breach.",
        q: "Can the court award BOTH specific performance and the $1,000,000 liquidated expectation damages?",
        opts: [
            "No, because granting specific performance alongside expectation or liquidated damages for total breach constitutes a prohibited double recovery.",
            "Yes, because the builder acted in extreme bad faith by attempting to sell the vessel to a secondary party.",
            "Yes, because specific performance and liquidated damages are entirely distinct, cumulative commercial remedies.",
            "No, because specific performance inherently requires the buyer to forfeit all other contractual rights."
        ],
        ans: 0,
        exp: "A plaintiff cannot get double recovery. Liquidated damages (or general expectation damages) are designed to compensate the plaintiff for not getting the item. Specific performance gives the plaintiff the actual item. You cannot get both the item AND the damages for not getting the item. (Note: A court might award specific performance PLUS minor incidental damages for the *delay*, but not the massive liquidated sum intended for total breach)."
    }
];