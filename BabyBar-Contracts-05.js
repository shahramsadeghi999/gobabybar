const examData = [
    // FACT PATTERN 1 (Q1-Q3)
    {
        id: 1,
        topic: "Formation / Mailbox Rule",
        fp: "On May 1, Alice mails a signed letter to Bob stating, 'I offer to sell you my antique desk for $500. This offer is valid until May 10.' Bob receives the letter on May 3. On May 4, Alice changes her mind and mails a revocation to Bob. On May 5, before receiving the revocation, Bob mails a letter of acceptance to Alice. Bob receives the revocation on May 6. Alice receives the acceptance on May 7.",
        q: "Is there an enforceable contract between Alice and Bob?",
        opts: [
            "No, because the revocation was physically dispatched before the acceptance.",
            "No, because the offeror is the master of the offer and can revoke at any time.",
            "Yes, because under the mailbox rule, an acceptance is effective upon proper dispatch, which occurred before the revocation was received.",
            "Yes, because Alice guaranteed the offer would remain open until May 10, establishing a binding option."
        ],
        ans: 2, // C
        exp: "Under the mailbox rule, an acceptance is generally effective upon proper dispatch (May 5). A revocation is effective only upon receipt (May 6). Because Bob dispatched his acceptance before he received the revocation, a valid contract was formed on May 5."
    },
    {
        id: 2,
        topic: "Formation / Option Contracts",
        fp: "On May 1, Alice mails a signed letter to Bob stating, 'I offer to sell you my antique desk for $500. This offer is valid until May 10.' Bob receives the letter on May 3. On May 4, Alice changes her mind and mails a revocation to Bob. On May 5, before receiving the revocation, Bob mails a letter of acceptance to Alice. Bob receives the revocation on May 6. Alice receives the acceptance on May 7.",
        q: "Regarding Alice's promise to keep the offer open until May 10, was this promise legally binding such that she could not revoke it?",
        opts: [
            "Yes, because the explicit inclusion of a deadline generates an irrebuttable presumption of mutual assent under common law.",
            "No, because the promise to keep the offer open was not supported by any independent consideration from Bob, and she is not a merchant.",
            "Yes, under the firm offer rule of the Uniform Commercial Code.",
            "No, because the antique desk was priced at five hundred dollars, requiring strict compliance with the statute of frauds."
        ],
        ans: 1, // B
        exp: "Under common law, a promise to keep an offer open (an option contract) requires independent consideration. Since Bob gave no consideration, Alice's promise was not binding. (Note: The UCC firm offer rule does not apply because there is no indication Alice is a merchant)."
    },
    {
        id: 3,
        topic: "Formation / Intersecting Dispatches",
        fp: "On May 1, Alice mails a signed letter to Bob stating, 'I offer to sell you my antique desk for $500. This offer is valid until May 10.' Bob receives the letter on May 3. On May 4, Alice changes her mind and mails a revocation to Bob. On May 5, before receiving the revocation, Bob mails a letter of acceptance to Alice. Bob receives the revocation on May 6. Alice receives the acceptance on May 7.\n\nAssume instead that on May 4, Bob mailed a letter saying 'I reject the offer.' But on May 5, he changed his mind and mailed an acceptance. Alice received the acceptance on May 7, and the rejection on May 8.",
        q: "Under this modified timeline, is a contract formed?",
        opts: [
            "No, because a rejection immediately terminates the power of acceptance upon dispatch.",
            "No, because the initial rejection serves as a complete and binding counteroffer.",
            "Yes, because the mailbox rule applies rigidly to all dispatched acceptances regardless of any prior intervening communications.",
            "Yes, because when an offeree mails a rejection followed by an acceptance, the mailbox rule does not apply, and whichever letter is received first controls; here, the acceptance was received first."
        ],
        ans: 3, // D
        exp: "When an offeree mails a rejection and then changes their mind and mails an acceptance, the mailbox rule (acceptance effective on dispatch) is suspended. Instead, a 'race to the offeror's mailbox' occurs: whichever letter is received FIRST by the offeror controls. Since the acceptance was received first, a contract is formed."
    },
    // FACT PATTERN 2 (Q4-Q5)
    {
        id: 4,
        topic: "Defenses / Infancy Ratification",
        fp: "17-year-old Charlie signs a 1-year lease for a luxury apartment near his college, paying $1,000 per month. The age of majority is 18. Charlie lives there and pays rent for 3 months, then turns 18. He continues living in the apartment and paying rent for 2 more months. He then decides he wants to move, attempting to disaffirm the lease and demand all his money back.",
        q: "Can Charlie successfully disaffirm the lease and recover his prior rent payments?",
        opts: [
            "Yes, because the contract was originally signed when he lacked legal capacity, rendering it void ab initio.",
            "No, because continuing to retain the benefits of the lease and paying rent after reaching the age of majority constitutes an implied ratification of the entire contract.",
            "Yes, but only for the specific monthly payments rendered prior to his eighteenth birthday.",
            "No, because luxury apartments are universally classified as legal necessaries for emancipated college students."
        ],
        ans: 1, // B
        exp: "Contracts entered into by minors are voidable at their option. However, if a minor reaches the age of majority and continues to retain the benefits of the contract (like living in the apartment and paying rent), they impliedly ratify the contract, losing the power to disaffirm it."
    },
    {
        id: 5,
        topic: "Defenses / Infancy (Necessaries)",
        fp: "17-year-old Charlie signs a 1-year lease for an apartment near his college, paying $1,000 per month. The age of majority is 18. Charlie lives there and pays rent for 3 months, then turns 18. He continues living in the apartment and paying rent for 2 more months. He then decides he wants to move, attempting to disaffirm the lease and demand all his money back.\n\nAssume instead that Charlie disaffirmed the lease and moved out while he was still 17. The landlord sues Charlie for the fair market value of the 3 months he already lived there.",
        q: "Can the landlord recover?",
        opts: [
            "No, because contracts with minors are entirely unenforceable.",
            "Yes, but only if the minor intentionally misrepresented their age during the application process.",
            "Yes, because shelter is considered a 'necessary,' and a minor is liable in quasi-contract for the reasonable value of necessaries actually furnished.",
            "No, because landlords assume the strict absolute risk of non-payment when executing agreements with unemancipated youth."
        ],
        ans: 2, // C
        exp: "While a minor can disaffirm a contract, they remain liable in quasi-contract (restitution) for the reasonable, fair market value of 'necessaries' (food, clothing, shelter, medical care) that were actually furnished to them prior to disaffirmance."
    },
    // FACT PATTERN 3 (Q6-Q8)
    {
        id: 6,
        topic: "Performance / UCC Installment Contracts",
        fp: "Bakery contracts with Mill for 1,000 pounds of flour to be delivered in 10 equal monthly installments of 100 pounds each. In Month 1, Mill delivers 99 pounds of flour instead of 100. Bakery notices the 1-pound shortage and immediately attempts to cancel the entire 10-month contract.",
        q: "Under the UCC, can Bakery cancel the entire contract based on this shortage?",
        opts: [
            "No, because a single non-conforming installment only allows cancellation of the entire contract if the non-conformity substantially impairs the value of the whole contract, which a 1-pound shortage does not.",
            "Yes, under the strict application of the perfect tender rule.",
            "Yes, provided the bakery files a formal grievance with the agricultural board.",
            "No, because commercial buyers must accept any good-faith effort by the seller regardless of numerical discrepancies."
        ],
        ans: 0, // A
        exp: "The Perfect Tender Rule does not apply to installment contracts under UCC § 2-612. A buyer can only cancel the ENTIRE installment contract if a non-conforming delivery 'substantially impairs the value of the whole contract.' A 1-pound shortage out of 1,000 pounds does not substantially impair the whole contract."
    },
    {
        id: 7,
        topic: "Performance / Rejecting an Installment",
        fp: "Bakery contracts with Mill for 1,000 pounds of flour to be delivered in 10 equal monthly installments of 100 pounds each. In Month 1, Mill delivers 99 pounds of flour instead of 100. Bakery notices the 1-pound shortage and immediately attempts to cancel the entire 10-month contract.",
        q: "Assuming Bakery cannot cancel the whole contract, can Bakery at least reject the specific 99-pound delivery for Month 1?",
        opts: [
            "Yes, because the perfect tender rule allows rejection of any non-conforming delivery, regardless of whether it is an installment.",
            "No, because buyers in long-term contracts waive all rights to inspect individual commercial shipments.",
            "Yes, but only if the seller explicitly refuses to provide a proportional discount.",
            "No, a buyer can only reject an installment if the non-conformity substantially impairs the value of that specific installment and cannot be cured."
        ],
        ans: 3, // D
        exp: "Under UCC § 2-612, a buyer can only reject a specific non-conforming installment if the non-conformity 'substantially impairs the value of that installment' and cannot be cured. A 1% shortage in flour likely does not substantially impair the value of that batch, meaning the bakery must accept it (though they can demand a cure or deduct the 1-pound difference in price)."
    },
    {
        id: 8,
        topic: "Performance / Perfect Tender Rule",
        fp: "Bakery contracts with Mill for 1,000 pounds of flour to be delivered in 10 equal monthly installments of 100 pounds each. In Month 1, Mill delivers 99 pounds of flour instead of 100. Bakery notices the 1-pound shortage and immediately attempts to cancel the entire 10-month contract.\n\nAssume instead the contract called for a single delivery of 1,000 pounds of flour. Mill delivers 999 pounds.",
        q: "Under this modified scenario, can Bakery reject the shipment?",
        opts: [
            "No, because the doctrine of substantial performance governs agricultural commodities.",
            "No, because a 1-pound discrepancy is legally de minimis and ignored by commercial courts.",
            "Yes, because under the perfect tender rule for single-delivery contracts, a buyer can reject goods that fail in any respect to conform to the contract.",
            "Yes, but they must simultaneously return all previously accepted shipments to the vendor."
        ],
        ans: 2, // C
        exp: "For single-delivery contracts under the UCC, the Perfect Tender Rule applies. If the goods or tender of delivery fail in ANY respect to conform to the contract (even a 1-pound shortage), the buyer may reject the whole shipment."
    },
    // FACT PATTERN 4 (Q9-Q10)
    {
        id: 9,
        topic: "Remedies / Expectation Damages",
        fp: "Homeowner hires Painter to paint his house for $5,000. Painter calculates that the job will cost him exactly $3,000 in supplies and labor, leaving him an expected profit of $2,000. Before Painter purchases any supplies or begins work, Homeowner unjustifiably repudiates the contract.",
        q: "If Painter sues Homeowner, what amount of damages will Painter likely recover?",
        opts: [
            "$5,000.",
            "$3,000.",
            "$2,000, representing the expectation profit he would have realized had the contract been fully performed.",
            "$0, because he had not yet commenced physical labor."
        ],
        ans: 2, // C
        exp: "Expectation damages aim to put the non-breaching party in the position they would have been in had the contract been performed. If performed, Painter would have netted a $2,000 profit. Since he hasn't incurred the $3,000 in costs yet, awarding the $2,000 profit alone makes him whole."
    },
    {
        id: 10,
        topic: "Remedies / Expectation Plus Reliance",
        fp: "Homeowner hires Painter to paint his house for $5,000. Painter calculates that the job will cost him exactly $3,000 in supplies and labor, leaving him an expected profit of $2,000. Before Painter purchases any supplies or begins work, Homeowner unjustifiably repudiates the contract.\n\nAssume instead that Painter had already spent $1,000 on custom, non-returnable paint perfectly matching Homeowner's unique color choice before Homeowner repudiated.",
        q: "Under this scenario, what is the appropriate measure of damages for Painter?",
        opts: [
            "$3,000, representing the $2,000 expected profit plus the $1,000 out-of-pocket reliance costs.",
            "$1,000, restricting recovery to actual physical losses.",
            "$5,000, enforcing the full contract price as a penalty for bad faith.",
            "$2,000, because expectation damages strictly exclude prep-work expenses."
        ],
        ans: 0, // A
        exp: "To put the Painter in the position he would have been in had the contract been fully performed, he must recover his expected net profit ($2,000) PLUS the out-of-pocket costs he already reasonably incurred in reliance on the contract ($1,000) before the breach. Total damages = $3,000."
    },
    // FACT PATTERN 5 (Q11-Q13)
    {
        id: 11,
        topic: "Third Parties / Intended Donee Beneficiary",
        fp: "Mom wants to help her son, Son, pass his exams. Mom pays Tutor $500 in advance. In the contract, Tutor explicitly agrees to provide 10 hours of tutoring services directly to Son. Tutor takes the money but never contacts Son or provides the tutoring.",
        q: "What is Son's legal status regarding the contract?",
        opts: [
            "Incidental beneficiary.",
            "Intended creditor beneficiary.",
            "Primary promisee.",
            "Intended donee beneficiary, because the primary purpose of the promisee was to confer a gift of services upon him."
        ],
        ans: 3, // D
        exp: "An intended beneficiary is a third party whom the contracting parties intended to benefit. Because Mom's explicit purpose was to confer a gift (free tutoring) rather than to discharge a legal debt owed to Son, he is classified as an intended donee beneficiary."
    },
    {
        id: 12,
        topic: "Third Parties / Beneficiary Suing Promisor",
        fp: "Mom wants to help her son, Son, pass his exams. Mom pays Tutor $500 in advance. In the contract, Tutor explicitly agrees to provide 10 hours of tutoring services directly to Son. Tutor takes the money but never contacts Son or provides the tutoring.",
        q: "Can Son successfully sue Tutor for breach of contract?",
        opts: [
            "No, because he lacks direct contractual privity.",
            "Yes, because an intended third-party beneficiary possesses the legal standing to directly enforce the promise made for their benefit against the promisor.",
            "No, because he did not personally provide the financial consideration.",
            "Yes, but his recovery is strictly limited to emotional distress damages."
        ],
        ans: 1, // B
        exp: "An intended third-party beneficiary (whether a donee or a creditor beneficiary) has the legal right to sue the promisor (Tutor) directly to enforce the contract once their rights have vested."
    },
    {
        id: 13,
        topic: "Third Parties / Donee Beneficiary Suing Promisee",
        fp: "Mom wants to help her son, Son, pass his exams. Mom pays Tutor $500 in advance. In the contract, Tutor explicitly agrees to provide 10 hours of tutoring services directly to Son. Tutor takes the money but never contacts Son or provides the tutoring.",
        q: "If Tutor refuses to perform, can Son sue Mom for breach of contract?",
        opts: [
            "No, because a donee beneficiary generally has no right to sue the promisee, as there is no underlying debt or consideration between them; it was merely an uncompleted gift.",
            "Yes, because she initiated the transaction.",
            "Yes, under the doctrine of strict vicarious liability.",
            "No, because intra-family lawsuits are universally barred by common law public policy."
        ],
        ans: 0, // A
        exp: "While an intended beneficiary can sue the promisor (Tutor), a donee beneficiary generally CANNOT sue the promisee (Mom) who bought the gift. The promisee simply intended to give a gift, and there is no underlying contract, debt, or consideration flowing between the mother and son."
    },
    // FACT PATTERN 6 (Q14-Q15)
    {
        id: 14,
        topic: "Defenses / Statute of Frauds (Suretyship)",
        fp: "Debtor wants to borrow $10,000 from Bank to buy a personal boat. Bank refuses because Debtor has terrible credit. Guarantor, Debtor's wealthy uncle, calls the Bank and says, 'Lend him the money. If Debtor doesn't pay you back, I will.' Bank agrees and lends the money. Debtor defaults. Guarantor refuses to pay.",
        q: "If Bank sues Guarantor, what is Guarantor's best defense?",
        opts: [
            "Lack of mutuality.",
            "Unconscionability.",
            "The Statute of Frauds, because a promise to answer for the debt of another (a suretyship agreement) must be in writing to be enforceable.",
            "Promissory estoppel."
        ],
        ans: 2, // C
        exp: "The Statute of Frauds requires certain contracts to be in writing. One of these categories is a 'suretyship' agreement—a promise to answer for the debt, default, or miscarriage of another person. Because Guarantor's promise was oral over the phone, the SOF renders it unenforceable."
    },
    {
        id: 15,
        topic: "Defenses / Main Purpose Exception to SOF",
        fp: "Debtor wants to borrow $10,000 from Bank to buy a personal boat. Bank refuses because Debtor has terrible credit. Guarantor, Debtor's wealthy uncle, calls the Bank and says, 'Lend him the money. If Debtor doesn't pay you back, I will.' Bank agrees and lends the money. Debtor defaults. Guarantor refuses to pay.\n\nAssume instead that Guarantor is Debtor's primary business supplier. Guarantor guaranteed the $10,000 bank loan solely so Debtor's business would survive, ensuring Debtor could continue purchasing large shipments of supplies from Guarantor.",
        q: "Under this modified scenario, is Guarantor's oral promise enforceable?",
        opts: [
            "No, because all banking transactions are strictly governed by federal written mandates.",
            "Yes, because commercial suppliers are exempt from the statute of frauds.",
            "No, because the underlying debt was still technically held in the debtor's name.",
            "Yes, under the 'main purpose' (or 'leading object') exception, because the guarantor's primary motive was to secure a direct economic benefit for himself, removing the promise from the Statute of Frauds."
        ],
        ans: 3, // D
        exp: "An oral promise to pay the debt of another is enforceable (removed from the SOF) if the promisor's 'main purpose' or 'leading object' in making the guarantee is to serve their own direct, pecuniary, or economic interest. Here, Guarantor guaranteed the loan to ensure his own business retained a valuable customer, satisfying the exception."
    },
    // FACT PATTERN 7 (Q16-Q18)
    {
        id: 16,
        topic: "Terms / Parol Evidence Rule",
        fp: "Buyer and Seller negotiate the sale of a used car. Seller orally promises to include a set of brand-new snow tires. The next day, they sign a completely integrated, final written contract that states: 'Car sold for $10,000. No warranties. This document contains the entire agreement.' The written contract does not mention snow tires. Seller refuses to provide the snow tires.",
        q: "If Buyer sues for breach of contract, can Buyer introduce evidence of the oral promise regarding the tires?",
        opts: [
            "Yes, because it was a condition precedent.",
            "No, because the Parol Evidence Rule bars prior oral agreements that add to or contradict a completely integrated written contract.",
            "Yes, because oral promises made during negotiations are binding under the UCC.",
            "No, because vehicle accessories must be registered with the DMV."
        ],
        ans: 1, // B
        exp: "The Parol Evidence Rule prevents a party from introducing evidence of prior or contemporaneous oral agreements to contradict or supplement a 'completely integrated' written contract (a contract intended as the final, complete expression of the agreement, often evidenced by a merger clause). The oral promise adds to the written terms and is barred."
    },
    {
        id: 17,
        topic: "Terms / PER Exception (Fraud)",
        fp: "Buyer and Seller negotiate the sale of a used car. Seller orally promises to include a set of brand-new snow tires. The next day, they sign a completely integrated, final written contract that states: 'Car sold for $10,000. No warranties. This document contains the entire agreement.' The written contract does not mention snow tires. Seller refuses to provide the snow tires.\n\nSuppose Buyer wants to introduce evidence that Seller committed fraud during negotiations by intentionally lying and saying the car's engine was brand new, merely to induce Buyer to sign the 'as-is' contract.",
        q: "Is evidence of this fraudulent oral statement admissible?",
        opts: [
            "No, because the merger clause strictly protects commercial sellers from all liability.",
            "Yes, but only if the fraud involved a physical threat of violence.",
            "Yes, because evidence of fraud, misrepresentation, or duress is a widely recognized exception to the Parol Evidence Rule.",
            "No, because the integration clause creates an irrebuttable presumption of honest dealing."
        ],
        ans: 2, // C
        exp: "While the Parol Evidence Rule bars prior agreements that contradict the writing, evidence of fraud, misrepresentation, or duress is ALWAYS admissible to show that the contract itself is invalid or was induced by deceit, regardless of how completely integrated the writing is."
    },
    {
        id: 18,
        topic: "Terms / PER Exception (Condition Precedent)",
        fp: "Buyer and Seller negotiate the sale of a used car. Seller orally promises to include a set of brand-new snow tires. The next day, they sign a completely integrated, final written contract that states: 'Car sold for $10,000. No warranties. This document contains the entire agreement.' The written contract does not mention snow tires. Seller refuses to provide the snow tires.\n\nSuppose Buyer wants to introduce evidence that they orally agreed the written contract would only take effect IF Buyer secured a $10,000 bank loan, and the bank subsequently denied the loan.",
        q: "Is evidence of this oral agreement regarding the bank loan admissible?",
        opts: [
            "Yes, because parol evidence is admissible to show a condition precedent to the formation or existence of the contract.",
            "No, because it contradicts the absolute nature of the signed writing.",
            "Yes, because banks are third-party beneficiaries.",
            "No, because financing contingencies must be notarized."
        ],
        ans: 0, // A
        exp: "A widely recognized exception to the Parol Evidence Rule allows a party to introduce evidence of an oral agreement establishing a condition precedent to the FORMATION or effectiveness of the entire contract. If the contract was never meant to take effect until the condition (loan approval) was met, the evidence is admissible to show no contract exists."
    },
    // FACT PATTERN 8 (Q19-Q20)
    {
        id: 19,
        topic: "Performance / Anticipatory Repudiation",
        fp: "On June 1, Landscaper agrees in writing to landscape Yard Owner's property by July 1 for $5,000. On June 15, Landscaper calls Yard Owner and unequivocally states, 'I am too busy with other jobs. I absolutely will not landscape your yard.'",
        q: "What is the legal effect of the June 15 phone call?",
        opts: [
            "It constitutes a minor breach requiring a cure period.",
            "It acts as a valid, unilateral contract modification.",
            "It establishes an implied novation.",
            "It is an anticipatory repudiation, allowing the yard owner to immediately sue for total breach of contract without waiting until July 1."
        ],
        ans: 3, // D
        exp: "An anticipatory repudiation occurs when one party clearly and unequivocally communicates that they will not perform their contractual duties before the time of performance arrives. The non-breaching party may treat this as an immediate, total breach and seek substitute arrangements or sue right away."
    },
    {
        id: 20,
        topic: "Performance / Retraction of Repudiation",
        fp: "On June 1, Landscaper agrees in writing to landscape Yard Owner's property by July 1 for $5,000. On June 15, Landscaper calls Yard Owner and unequivocally states, 'I am too busy with other jobs. I absolutely will not landscape your yard.'\n\nOn June 16, Yard Owner relies on the phone call and signs a binding contract with a different landscaping company to do the job. On June 17, Landscaper calls back and says, 'My schedule cleared up. I will do the job by July 1 as planned.'",
        q: "Was the June 17 retraction legally effective?",
        opts: [
            "Yes, because the retraction occurred prior to the established July 1 deadline.",
            "No, because the yard owner materially changed their position in reliance on the repudiation by hiring a substitute company before the retraction occurred.",
            "Yes, because oral phone calls cannot legally terminate written service agreements.",
            "No, because anticipatory repudiations are completely irrevocable once spoken."
        ],
        ans: 1, // B
        exp: "A party can retract an anticipatory repudiation before their performance is due, UNLESS the aggrieved party has, since the repudiation, canceled the contract, materially changed their position (e.g., by hiring a replacement), or indicated they consider the repudiation final. Because Yard Owner hired a replacement on June 16, Landscaper's power to retract was extinguished."
    },
    // FACT PATTERN 9 (Q21-Q22)
    {
        id: 21,
        topic: "Defenses / Mutual Mistake",
        fp: "Rancher signs a contract to sell a specific, identified cow named 'Bessie' to Farmer for $500. At the time of the contract, both Rancher and Farmer genuinely believe Bessie is barren (unable to have calves), which is why the price is only $500. Before the cow is delivered, a veterinarian examines Bessie and confirms she is pregnant, meaning she is actually worth $5,000.",
        q: "Can Rancher void the contract and keep Bessie?",
        opts: [
            "No, because sellers always assume the strict commercial risk of undervalued asset sales.",
            "Yes, but only if the farmer intentionally defrauded the rancher during the initial negotiations.",
            "Yes, because there was a mutual mistake of material fact regarding a basic assumption (the cow's fertility) that profoundly altered the agreed exchange of values.",
            "No, because the physical identity of the animal was clearly established in the written documentation."
        ],
        ans: 2, // C
        exp: "This is based on the classic case of Sherwood v. Walker. A contract is voidable by the adversely affected party if there is a mutual mistake about a basic assumption of the contract (the cow's fundamental nature: barren vs. fertile breeder) that has a material effect on the agreed exchange, provided the party did not bear the risk of the mistake."
    },
    {
        id: 22,
        topic: "Defenses / Unilateral Mistake",
        fp: "Rancher signs a contract to sell a specific, identified cow named 'Bessie' to Farmer for $500. At the time of the contract, both Rancher and Farmer genuinely believe Bessie is barren (unable to have calves), which is why the price is only $500. Before the cow is delivered, a veterinarian examines Bessie and confirms she is pregnant, meaning she is actually worth $5,000.\n\nAssume instead that Farmer secretly knew Bessie was pregnant before signing the contract, but Rancher incorrectly believed she was barren. Farmer said nothing about the pregnancy.",
        q: "Under this scenario, can Rancher void the contract?",
        opts: [
            "Yes, because unilateral mistake is a valid defense if the non-mistaken party actually knew of the other party's erroneous assumption.",
            "No, because the doctrine of caveat emptor protects the buyer's superior knowledge.",
            "Yes, because all agricultural transactions require full fiduciary disclosure.",
            "No, because unilateral mistakes never provide grounds for rescission under modern common law."
        ],
        ans: 0, // A
        exp: "A unilateral mistake generally does not render a contract voidable. However, a major exception exists: if the non-mistaken party (Farmer) KNEW or had reason to know of the mistake made by the other party (Rancher), the mistaken party can void the contract. Exploiting a known mistake constitutes grounds for rescission."
    },
    // FACT PATTERN 10 (Q23-Q25)
    {
        id: 23,
        topic: "Performance / Discharge by Impossibility",
        fp: "Artist contracts to paint a magnificent, intricate mural on the interior ceiling of a specific historic cathedral on August 1. On July 25, a massive, unpredicted wildfire sweeps through the city and completely burns the historic cathedral to the ground through no fault of either party.",
        q: "Is Artist liable for breach of contract for failing to paint the mural?",
        opts: [
            "Yes, because she failed to procure adequate commercial insurance.",
            "Yes, but she is only liable for nominal damages due to the unforeseen circumstances.",
            "No, because she lacked specific intent.",
            "No, because the destruction of the specific physical subject matter required for performance renders the contract objectively impossible, legally discharging her duties."
        ],
        ans: 3, // D
        exp: "Performance is excused under the doctrine of objective impossibility when the specific subject matter or physical location essential to the contract (the historic cathedral) is destroyed through no fault of either party prior to performance."
    },
    {
        id: 24,
        topic: "Performance / Personal Services (Death)",
        fp: "Artist contracts to paint a magnificent, intricate mural on the interior ceiling of a specific historic cathedral on August 1. On July 25, a massive, unpredicted wildfire sweeps through the city and completely burns the historic cathedral to the ground through no fault of either party.\n\nAssume instead the cathedral survived, but Artist tragically died of a sudden heart attack on July 25.",
        q: "Is Artist's estate liable for breach of contract?",
        opts: [
            "Yes, because the estate is legally obligated to hire a replacement contractor to fulfill the obligations.",
            "No, because contracts requiring unique personal services are discharged by objective impossibility upon the death or incapacitating illness of the specific performer.",
            "Yes, because the physical canvas (the cathedral) remained entirely intact and available.",
            "No, because artistic endeavors are entirely immune from civil litigation."
        ],
        ans: 1, // B
        exp: "When a contract requires the unique personal services of a specific individual (like an artist painting a custom mural), the unforeseen death or severe incapacitating illness of that specific person renders performance objectively impossible. The duty to perform is discharged."
    },
    {
        id: 25,
        topic: "Performance / Impracticability vs. Economic Hardship",
        fp: "Artist contracts to paint a magnificent, intricate mural on the interior ceiling of a specific historic cathedral on August 1. On July 25, a massive, unpredicted wildfire sweeps through the city and completely burns the historic cathedral to the ground through no fault of either party.\n\nAssume both the Artist and the cathedral are fine. However, Artist's preferred paint supplier goes bankrupt, forcing Artist to buy paint from a different vendor, which increases her total costs by 5%.",
        q: "Does this price increase excuse Artist's performance under the doctrine of impracticability?",
        opts: [
            "No, because mere economic fluctuation or increased costs do not constitute legal impracticability.",
            "Yes, because the bankruptcy of a primary supplier constitutes an unforeseeable absolute force majeure event.",
            "Yes, because any reduction in expected profit voids a commercial service agreement.",
            "No, because she failed to formally request a price modification."
        ],
        ans: 0, // A
        exp: "Commercial impracticability requires an unforeseeable event that makes performance excessively and unreasonably burdensome. Mere market shifts, inflation, or needing to use a different supplier that moderately increases costs (like a 5% bump) are considered normal business risks and do NOT excuse performance."
    }
];