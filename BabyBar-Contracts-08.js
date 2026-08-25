const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Formation / Option Contracts",
        fp: "Alice offers to sell her farm to Ben for $500,000, leaving the offer open until Friday. Ben gives Alice $10 in cash on Monday to keep it open. On Wednesday, Alice sells the farm to Carl. Later that day, Ben's friend tells Ben about the sale. Ben formally accepts the offer on Thursday.",
        q: "Is the option contract valid despite the nominal $10 consideration?",
        opts: [
            "No, because consideration must equal a reasonable percentage of the underlying property value to prevent equitable fraud.",
            "No, because real estate transactions are strictly exempt from short-term option clauses.",
            "Yes, because under common law, nominal consideration is generally sufficient to support a short-term option contract provided it is actually paid and bargained for.",
            "Yes, because the friend's notification established a binding constructive trust."
        ],
        ans: 2, // C
        exp: "An option contract requires consideration to hold an offer open. Under common law, courts typically do not inquire into the adequacy of consideration. Nominal consideration (like $10) is generally sufficient to support a short-term option contract if it is actually paid and represents a bargained-for exchange."
    },
    {
        id: 2,
        topic: "Formation / Revocation of Option",
        fp: "Alice offers to sell her farm to Ben for $500,000, leaving the offer open until Friday. Ben gives Alice $10 in cash on Monday to keep it open. On Wednesday, Alice sells the farm to Carl. Later that day, Ben's friend tells Ben about the sale. Ben formally accepts the offer on Thursday.",
        q: "Did the friend's information revoke the offer before Ben's acceptance?",
        opts: [
            "No, because an option contract makes the offer irrevocable for the stated period, rendering any direct or indirect revocation entirely legally ineffective.",
            "Yes, because hearing reliable information from a third party that the offeror took inconsistent action operates as a valid indirect revocation.",
            "Yes, because the sale of the physical property instantly terminates the offeror's legal capacity to contract.",
            "No, because the friend was not an authorized agent."
        ],
        ans: 0, // A
        exp: "Normally, an offer is revoked if the offeree learns from a reliable source that the offeror took action inconsistent with the offer (indirect revocation). HOWEVER, because Ben paid $10 to create a valid option contract, the offer was legally irrevocable until Friday. Alice had no power to revoke it, directly or indirectly."
    },
    {
        id: 3,
        topic: "Remedies / Specific Performance",
        fp: "Alice offers to sell her farm to Ben for $500,000, leaving the offer open until Friday. Ben gives Alice $10 in cash on Monday to keep it open. On Wednesday, Alice sells the farm to Carl. Later that day, Ben's friend tells Ben about the sale. Ben formally accepts the offer on Thursday.",
        q: "If Ben successfully sues Alice for breach of contract, can he obtain the equitable remedy of specific performance?",
        opts: [
            "No, because specific performance is never granted if the property has already been sold to a third party.",
            "Yes, because real estate is inherently unique and monetary damages are generally deemed inadequate.",
            "No, because the ten-dollar option fee limits his recovery strictly to nominal restitution.",
            "Yes, provided he can prove that Carl was fully aware of the prior agreement."
        ],
        ans: 1, // B
        exp: "Specific performance is an equitable remedy available when the subject matter of the contract is unique and monetary damages are inadequate. Courts universally consider every parcel of real property to be unique. (Note: He can seek specific performance, though if Carl was a bona fide purchaser without notice, Ben's remedy might be limited to damages, but B is the best general rule statement)."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Defenses / Statute of Frauds (One-Year Provision)",
        fp: "TechCorp orally offers Dave a three-year employment contract. Relying on this, Dave quits his job and moves across the country. TechCorp fires Dave after one month without cause.",
        q: "Does the Statute of Frauds apply to the oral contract?",
        opts: [
            "No, because employment contracts are generally considered at-will under state law.",
            "Yes, because any employment agreement involving executive compensation must be formally notarized.",
            "No, because Dave actually commenced performance by working for one month.",
            "Yes, because a three-year employment contract is inherently incapable of being fully performed within one year."
        ],
        ans: 3, // D
        exp: "The Statute of Frauds requires a signed writing for contracts that cannot possibly be fully performed within one year from the date of formation. A contract for exactly three years of employment cannot be completed in one year, so it falls within the Statute of Frauds and is unenforceable if oral."
    },
    {
        id: 5,
        topic: "Defenses / Promissory Estoppel Exception to SOF",
        fp: "TechCorp orally offers Dave a three-year employment contract. Relying on this, Dave quits his job and moves across the country. TechCorp fires Dave after one month without cause.",
        q: "What equitable doctrine provides Dave the best chance to overcome the Statute of Frauds and enforce the promise?",
        opts: [
            "Unconscionability.",
            "Quantum meruit.",
            "Promissory estoppel, because Dave foreseeably and detrimentally relied on the oral promise by relocating and resigning from his previous employment.",
            "The part performance doctrine."
        ],
        ans: 2, // C
        exp: "When an oral contract is barred by the Statute of Frauds, a plaintiff may still seek enforcement (or at least reliance damages) under the doctrine of promissory estoppel. If the promisor reasonably expected the promise to induce action, and the promisee detrimentally relied on it (quitting a job and moving), courts may enforce the promise to avoid injustice."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Terms / Parol Evidence Rule (Partial Integration)",
        fp: "Merchant X and Merchant Y sign a partially integrated written contract for 500 laptops. During negotiations, X orally promised to include free carrying cases. The writing says nothing about carrying cases.",
        q: "Can Y introduce evidence of the oral promise for carrying cases?",
        opts: [
            "No, because the Parol Evidence Rule bars any and all prior oral statements once a written document is signed.",
            "Yes, because the Parol Evidence Rule allows a partially integrated written agreement to be supplemented by consistent additional terms that do not contradict the writing.",
            "No, because commercial goods must be explicitly enumerated in the invoice.",
            "Yes, because the Uniform Commercial Code mandates the inclusion of standard accessories."
        ],
        ans: 1, // B
        exp: "If a contract is only 'partially integrated' (intended as a final expression of the terms it contains, but not a complete expression of all terms agreed upon), the Parol Evidence Rule allows the introduction of consistent additional terms to supplement the writing, as long as they don't contradict it."
    },
    {
        id: 7,
        topic: "Terms / Parol Evidence Rule (Complete Integration)",
        fp: "Merchant X and Merchant Y sign a written contract for 500 laptops. During negotiations, X orally promised to include free carrying cases. The writing says nothing about carrying cases.\n\nAssume the contract had a strict merger clause stating it was the 'complete and exclusive agreement of the parties.'",
        q: "Can Y still introduce evidence of the oral promise for carrying cases?",
        opts: [
            "No, because a completely integrated contract cannot be supplemented by prior oral agreements.",
            "Yes, because an oral promise constitutes an independent collateral contract.",
            "No, unless the carrying cases were worth less than five hundred dollars.",
            "Yes, because merchants are bound by their verbal commitments regardless of integration clauses."
        ],
        ans: 0, // A
        exp: "A merger clause typically establishes that a writing is 'completely integrated' (a complete and exclusive statement of all terms). The Parol Evidence Rule strictly bars the introduction of prior or contemporaneous oral agreements that either contradict OR supplement a completely integrated contract."
    },
    {
        id: 8,
        topic: "Terms / Parol Evidence (Fraud Exception)",
        fp: "Merchant X and Merchant Y sign a completely integrated written contract for 500 laptops. The writing says nothing about carrying cases. Y discovers the laptops only have 8GB of RAM, not the 16GB X orally promised.\n\nAssume Y wants to introduce evidence that X committed deliberate fraud by lying about the RAM to induce Y to sign the contract.",
        q: "Is evidence of X's fraudulent statements admissible?",
        opts: [
            "No, because a merger clause conclusively establishes that no misrepresentations occurred during negotiations.",
            "Yes, but the remedy is strictly limited to rescission rather than monetary damages.",
            "No, because the buyer failed to conduct a reasonable inspection prior to signing.",
            "Yes, because evidence of fraud in the inducement is a universal exception to the Parol Evidence Rule."
        ],
        ans: 3, // D
        exp: "While the Parol Evidence Rule bars prior agreements that contradict the writing, evidence of fraud, misrepresentation, or duress is ALWAYS admissible to show that the contract itself is invalid or was induced by deceit, regardless of how completely integrated the writing is."
    },
    // FACT PATTERN 4 (Q9-Q11)
    {
        id: 9,
        topic: "Performance / Perfect Tender Rule",
        fp: "Buyer orders 1,000 red shirts from Seller to be delivered on October 1. On September 25, Seller delivers 990 red shirts and 10 pink shirts. Buyer immediately rejects the entire shipment.",
        q: "Was Buyer legally entitled to reject the shipment?",
        opts: [
            "Yes, because under the perfect tender rule for single-delivery contracts, a buyer can reject the entire shipment if the goods fail in any respect to conform to the contractual specifications.",
            "No, because a 1% error rate is considered commercially acceptable under the doctrine of substantial performance.",
            "No, because the buyer must give the seller a mandatory 30-day grace period to inspect the goods.",
            "Yes, but only if the pink shirts were irreparably damaged during transit."
        ],
        ans: 0, // A
        exp: "For single-delivery contracts under the UCC, the Perfect Tender Rule applies. If the goods or tender of delivery fail in ANY respect to conform to the contract (e.g., wrong quantity or color), the buyer may reject the whole shipment, accept the whole, or accept any commercial unit and reject the rest."
    },
    {
        id: 10,
        topic: "Performance / Right to Cure",
        fp: "Buyer orders 1,000 red shirts from Seller to be delivered on October 1. On September 25, Seller delivers 990 red shirts and 10 pink shirts. Buyer immediately rejects the entire shipment.",
        q: "After the buyer's immediate rejection, what right does the Seller possess?",
        opts: [
            "The right to sue for anticipatory repudiation.",
            "No rights, because shipping non-conforming goods terminates the agreement.",
            "Yes, because the time for performance has not yet expired, giving the seller an absolute right to seasonably cure.",
            "The right to force the buyer to accept the 990 conforming shirts at a discounted price."
        ],
        ans: 2, // C
        exp: "Under UCC § 2-508(1), if a buyer rejects non-conforming goods and the time for performance has NOT yet expired (Oct 1), the seller has an absolute right to seasonably notify the buyer of their intention to cure and may then make a conforming delivery within the contract time."
    },
    {
        id: 11,
        topic: "Performance / Installment Contracts",
        fp: "Buyer orders 1,000 red shirts from Seller to be delivered on October 1. On September 25, Seller delivers 990 red shirts and 10 pink shirts. Buyer immediately rejects the entire shipment.\n\nAssume instead the contract was an installment contract calling for 10 monthly deliveries of 100 shirts. Month 1 contains 90 red shirts and 10 pink shirts.",
        q: "Can Buyer cancel the entire installment contract based on this first delivery?",
        opts: [
            "Yes, because the perfect tender rule applies strictly to the foundational delivery of an ongoing commercial relationship.",
            "No, because an installment contract can only be entirely canceled if the non-conformity substantially impairs the value of the whole contract, which a minor defect in one installment does not.",
            "Yes, because mixed colors indicate a fundamental breakdown in manufacturing quality control.",
            "No, because buyers are legally required to accept all non-conforming goods in installment agreements and seek a partial refund."
        ],
        ans: 1, // B
        exp: "The Perfect Tender Rule does NOT apply to installment contracts. Under UCC § 2-612, a buyer can only cancel the ENTIRE installment contract if a non-conformity in one or more installments 'substantially impairs the value of the whole contract.' A minor 10-shirt error in the first delivery does not meet this high threshold."
    },
    // FACT PATTERN 5 (Q12-Q14)
    {
        id: 12,
        topic: "Performance / Demand for Assurances",
        fp: "Builder agrees to build a pool by June 1. On May 1, Homeowner hears a highly credible rumor from multiple suppliers that Builder is completely bankrupt and is actively abandoning local projects. Homeowner emails a written demand for adequate assurances. Builder ignores the email.",
        q: "Did Homeowner possess the legal right to demand assurances?",
        opts: [
            "No, because rumors can never serve as the basis for suspending a commercial contract.",
            "No, because the homeowner must wait until the June 1 deadline to establish an actual breach.",
            "Yes, but only if the contract contained an explicit 'insecurity' clause.",
            "Yes, because the credible rumor provided reasonable grounds for insecurity regarding Builder's future performance."
        ],
        ans: 3, // D
        exp: "Under both common law (Restatement) and the UCC, if a party has 'reasonable grounds for insecurity' regarding the other party's performance (such as hearing credible rumors of bankruptcy or abandonment), they may demand adequate assurance of due performance and suspend their own performance until it is received."
    },
    {
        id: 13,
        topic: "Performance / Anticipatory Repudiation (Failure to Assure)",
        fp: "Builder agrees to build a pool by June 1. On May 1, Homeowner hears a highly credible rumor from multiple suppliers that Builder is completely bankrupt and is actively abandoning local projects. Homeowner emails a written demand for adequate assurances. Builder ignores the email.",
        q: "What is the legal effect of Builder ignoring the demand for 30 days?",
        opts: [
            "It constitutes an anticipatory repudiation, allowing the homeowner to immediately treat the contract as totally breached and seek alternative arrangements.",
            "It operates as a mutual rescission of the original contract.",
            "It has no legal effect until the June 1 performance deadline officially expires.",
            "It transfers the burden of performance to the homeowner."
        ],
        ans: 0, // A
        exp: "When a party makes a justified demand for adequate assurances, the failure of the other party to provide such assurances within a reasonable time (under the UCC, not exceeding 30 days) is legally treated as an anticipatory repudiation of the contract."
    },
    {
        id: 14,
        topic: "Performance / Reasonable Time for Assurances",
        fp: "Builder agrees to build a pool by June 1. On May 1, Homeowner hears a highly credible rumor from multiple suppliers that Builder is completely bankrupt and is actively abandoning local projects. Homeowner emails a written demand for adequate assurances. Builder ignores the email.\n\nAssume instead that on Day 5, Builder replied, 'I am fine, I will finish the pool.' However, Homeowner had already hired a replacement contractor on Day 3.",
        q: "Was Homeowner legally justified in hiring the replacement on Day 3?",
        opts: [
            "Yes, because a failure to respond within 48 hours is per se unreasonable in construction contexts.",
            "Yes, because demanding assurances immediately grants the aggrieved party the right to cover.",
            "No, because the builder had a reasonable time to provide the requested assurances before a repudiation is legally established.",
            "No, because homeowners are never permitted to hire replacement contractors without a judicial order."
        ],
        ans: 2, // C
        exp: "A party must give the other side a 'reasonable time' to respond to a demand for assurances. If the demanding party treats the contract as breached and hires a replacement before a reasonable time has elapsed (e.g., just 3 days), the demanding party is the one who breaches the contract."
    },
    // FACT PATTERN 6 (Q15-Q17)
    {
        id: 15,
        topic: "Third Parties / Intended Creditor Beneficiary",
        fp: "Mom owes Dentist $5,000 for dental work. Mom enters a contract with Painter to paint Painter's house. In exchange, Painter explicitly promises in the contract to pay Dentist the $5,000 to settle Mom's debt. Dentist is completely unaware of this arrangement. Painter does a terrible job and ruins the exterior of the house.",
        q: "What is Dentist's legal status regarding the contract between Mom and Painter?",
        opts: [
            "An incidental beneficiary.",
            "An intended creditor beneficiary, because the primary purpose was to discharge Mom's existing debt.",
            "A primary promisee.",
            "An intended donee beneficiary."
        ],
        ans: 1, // B
        exp: "A third party is an intended beneficiary if the contract was made with the primary intent to benefit them. Because Mom's explicit purpose was to discharge a legal obligation owed to the third party (Dentist), the third party is a creditor beneficiary."
    },
    {
        id: 16,
        topic: "Third Parties / Promisor Defenses Against Beneficiary",
        fp: "Mom owes Dentist $5,000 for dental work. Mom enters a contract with Painter to paint Painter's house. In exchange, Painter explicitly promises in the contract to pay Dentist the $5,000 to settle Mom's debt. Dentist is completely unaware of this arrangement. Painter does a terrible job and ruins the exterior of the house.",
        q: "If Dentist eventually learns of the contract and sues Painter for the $5,000, what is Painter's best defense?",
        opts: [
            "That the Dentist was not physically present during the contract negotiations.",
            "That medical debts cannot be legally discharged through bartered labor agreements.",
            "That third-party beneficiaries possess no legal standing to sue commercial artisans.",
            "That the promisor may assert any valid contract defenses against the third-party beneficiary that they could have asserted against the promisee, such as Mom's material breach."
        ],
        ans: 3, // D
        exp: "In a third-party beneficiary contract, the promisor (Painter) can raise any defense against the beneficiary (Dentist) that the promisor would have had against the promisee (Mom). Because Mom materially breached the contract by ruining the house, Painter's duty to pay is excused, even against Dentist."
    },
    {
        id: 17,
        topic: "Third Parties / Vesting of Beneficiary Rights",
        fp: "Mom owes Dentist $5,000 for dental work. Mom enters a contract with Painter to paint Painter's house. In exchange, Painter explicitly promises in the contract to pay Dentist the $5,000 to settle Mom's debt. Dentist is completely unaware of this arrangement. Painter does a terrible job and ruins the exterior of the house.\n\nAssume Mom actually did a great job painting the house. However, before Dentist ever learned of the contract, Mom and Painter mutually agreed to cancel the payment arrangement.",
        q: "Can Dentist sue Painter for the $5,000?",
        opts: [
            "No, because the beneficiary's rights had not yet legally vested.",
            "Yes, because a creditor beneficiary possesses absolute enforcement rights upon formation.",
            "No, because painting contracts are inherently subject to rescission at will.",
            "Yes, because cancelling the agreement constitutes an illegal fraudulent conveyance."
        ],
        ans: 0, // A
        exp: "The original contracting parties can modify or cancel a contract without the third-party beneficiary's consent UNTIL the beneficiary's rights have 'vested.' Rights vest when the beneficiary learns of and assents to the contract, relies on it, or brings suit. Since Dentist didn't even know about the contract, his rights hadn't vested, and the cancellation was valid."
    },
    // FACT PATTERN 7 (Q18-Q20)
    {
        id: 18,
        topic: "Third Parties / Delegation of Personal Services",
        fp: "City hires Famous Artist to paint a custom mural in the town square. The contract contains a clause stating: 'No assignments or delegations permitted.' Artist gets busy and delegates the duty to paint the mural to Apprentice, who is equally skilled. City objects and demands Artist paint it.",
        q: "Is the delegation to Apprentice legally valid?",
        opts: [
            "Yes, because the apprentice was objectively verified to be equally skilled in the necessary mediums.",
            "No, because the contract involves highly specialized personal skills and artistic judgment, making the duties strictly non-delegable without the obligee's explicit consent.",
            "Yes, because the Uniform Commercial Code freely permits all delegations in commercial settings.",
            "No, because all municipal contracts require notarized consent for any third-party involvement."
        ],
        ans: 1, // B
        exp: "Duties are generally delegable without the obligee's consent unless the duties involve specialized personal skill, artistic judgment, or unique trust/reputation (like a famous artist painting a custom mural). In such cases, the obligee has a substantial interest in having the specific person perform, rendering the duty non-delegable."
    },
    {
        id: 19,
        topic: "Third Parties / Delegation Anti-Delegation Clauses",
        fp: "City hires Famous Artist to paint a custom mural in the town square. The contract contains a clause stating: 'No assignments or delegations permitted.' Artist gets busy and delegates the duty to paint the mural to Apprentice, who is equally skilled. City objects and demands Artist paint it.\n\nAssume instead the contract was for routine street sweeping, but still contained the exact same 'No assignments or delegations permitted' clause. Artist delegates the sweeping to Apprentice.",
        q: "Is the delegation of the street sweeping valid?",
        opts: [
            "Yes, because routine duties cannot be restricted by standardized boilerplate language.",
            "No, because municipal workers must pass specialized background checks.",
            "No, because the contract contains an express clause explicitly prohibiting the delegation of duties.",
            "Yes, because the delegation of mechanical duties is a fundamental constitutional right."
        ],
        ans: 2, // C
        exp: "While routine duties (like street sweeping) are generally freely delegable, they CANNOT be delegated if the contract expressly prohibits delegation. An explicit anti-delegation clause is strictly enforced."
    },
    {
        id: 20,
        topic: "Third Parties / Liability After Delegation",
        fp: "City hires Famous Artist to paint a custom mural in the town square. The contract contains a clause stating: 'No assignments or delegations permitted.' Artist gets busy and delegates the duty to paint the mural to Apprentice, who is equally skilled. City objects and demands Artist paint it.\n\nAssume the contract had no prohibition, and Artist validly delegated the routine street sweeping to Apprentice. Apprentice does a terrible job.",
        q: "Is Artist liable to City for the defective sweeping?",
        opts: [
            "No, because a valid delegation fully transfers all legal obligations to the subcontractor.",
            "No, because the city failed to supervise the apprentice.",
            "Yes, but only if the artist acted with gross negligence in selecting the apprentice.",
            "Yes, because a delegating party remains secondarily liable unless a formal novation occurs."
        ],
        ans: 3, // D
        exp: "A valid delegation of duties does NOT relieve the original obligor (Artist) of liability. The obligor remains secondarily liable as a surety if the delegate (Apprentice) fails to perform properly. To completely escape liability, there must be a 'novation'."
    },
    // FACT PATTERN 8 (Q21-Q23)
    {
        id: 21,
        topic: "Performance / Impracticability (Destruction of Subject Matter)",
        fp: "Farmer contracts to sell 1,000 tons of wheat explicitly designated to be harvested from 'Farmer's West Field' to Buyer. A week before harvest, a freak flood completely destroys the West Field. Wheat is currently abundant and cheap on the open market.",
        q: "Is Farmer liable for breach of contract for failing to deliver the wheat?",
        opts: [
            "No, because the destruction of the specifically identified source of the goods renders performance objectively impossible, discharging the seller's duty.",
            "Yes, because the farmer could have easily procured substitute goods on the open market to fulfill the agreement.",
            "No, because all agricultural contracts contain an implied force majeure clause that absolutely forgives weather delays.",
            "Yes, because a seller always bears the strict risk of loss until physical delivery is executed."
        ],
        ans: 0, // A
        exp: "If a contract requires goods to be sourced from a specifically identified source (e.g., 'Farmer's West Field'), and that source fails or is destroyed through no fault of the seller, performance is excused under the doctrine of objective impossibility/impracticability. Farmer is not required to buy substitute wheat."
    },
    {
        id: 22,
        topic: "Performance / Impracticability (Generic Goods)",
        fp: "Farmer contracts to sell 1,000 tons of wheat explicitly designated to be harvested from 'Farmer's West Field' to Buyer. A week before harvest, a freak flood completely destroys the West Field. Wheat is currently abundant and cheap on the open market.\n\nAssume instead the contract simply stated '1,000 tons of wheat' with no mention of a specific field. Farmer intended to use his West Field, which was destroyed.",
        q: "Is Farmer liable for breach in this alternate scenario?",
        opts: [
            "No, because the flood still constitutes an unforeseeable act of God.",
            "No, because the destruction of a seller's personal property immediately triggers legal impossibility.",
            "Yes, because the goods were not designated from a specific source, meaning performance is not objectively impossible since he can buy substitute wheat.",
            "Yes, but his liability is mitigated to nominal damages due to the weather event."
        ],
        ans: 2, // C
        exp: "If the contract does NOT specify a particular source for generic goods, the destruction of the seller's intended source does not excuse performance. The seller is expected to cover by purchasing the generic goods on the open market to fulfill the contract. Because he can still buy wheat, performance is not impossible."
    },
    {
        id: 23,
        topic: "Defenses / Mutual Mistake (Existence of Subject Matter)",
        fp: "Farmer contracts to sell 1,000 tons of wheat explicitly designated to be harvested from 'Farmer's West Field' to Buyer. A week before harvest, a freak flood completely destroys the West Field. Wheat is currently abundant and cheap on the open market.\n\nAssume the West Field was entirely destroyed by a localized flash flood the day BEFORE the contract was signed, but neither Farmer nor Buyer knew about it yet.",
        q: "What doctrine best addresses the failure of the contract in this specific timeline?",
        opts: [
            "Promissory estoppel.",
            "Frustration of purpose.",
            "Anticipatory repudiation.",
            "The contract is voidable based on a mutual mistake regarding a basic assumption of fact that materially affected the agreed exchange."
        ],
        ans: 3, // D
        exp: "If the subject matter of the contract was destroyed BEFORE the contract was formed, and neither party knew, the parties have made a mutual mistake regarding a basic assumption of the contract (the existence of the wheat). This renders the contract voidable by the adversely affected party."
    },
    // FACT PATTERN 9 (Q24-Q25)
    {
        id: 24,
        topic: "Remedies / Liquidated Damages (Penalty)",
        fp: "Company hires Developer to build a custom internal website for $20,000. The contract contains a clause: 'If Developer is late by even one day, Developer must pay a late fee of $10,000 per day.' Developer is 1 day late. Company's actual harm from the delay is exactly $100.",
        q: "Is the $10,000 per day clause enforceable?",
        opts: [
            "Yes, because sophisticated commercial entities are legally bound by their agreed-upon contractual terms.",
            "No, because it functions as an unconscionable punitive penalty rather than a reasonable forecast of actual damages.",
            "Yes, because software delays routinely cause incalculable digital harm.",
            "No, because liquidated damages are completely banned under the Uniform Commercial Code."
        ],
        ans: 1, // B
        exp: "Liquidated damages clauses are only enforceable if actual damages were difficult to estimate at formation AND the specified amount is a reasonable forecast of compensatory damages. A $10,000 per day penalty on a $20,000 contract is grossly disproportionate to any actual harm (which was only $100), making it an unenforceable penalty clause."
    },
    {
        id: 25,
        topic: "Remedies / Expectation Damages Objective",
        fp: "Company hires Developer to build a custom internal website for $20,000. The contract contains a clause: 'If Developer is late by even one day, Developer must pay a late fee of $10,000 per day.' Developer is 1 day late. Company's actual harm from the delay is exactly $100.",
        q: "Since the clause is struck down as a penalty, what damages can Company recover?",
        opts: [
            "Zero damages, because invalidating the clause voids the entire breach provision.",
            "Restitution damages of $20,000.",
            "Actual expectation damages of $100.",
            "Punitive damages to deter future delays."
        ],
        ans: 2, // C
        exp: "When a liquidated damages clause is voided as a penalty, the aggrieved party is still entitled to their actual compensatory (expectation) damages. Since the actual harm caused by the 1-day delay was proven to be $100, the Company recovers exactly $100 to make them whole."
    }
];