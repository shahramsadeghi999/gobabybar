const examData = [
    // FACT PATTERN 1 (Q1-Q2)
    {
        id: 1,
        topic: "Formation / Mirror Image Rule vs UCC 2-207",
        fp: "Alice (a non-merchant) offers to sell her used sedan to Bob for $2,000. Bob replies, 'I accept your offer, provided you throw in the fuzzy dice hanging from the rearview mirror.' Alice refuses to include the dice and sells the car to a third party.",
        q: "Under the common law mirror image rule, what is the legal effect of Bob's reply?",
        opts: [
            "It constitutes a rejection and a completely new counteroffer.",
            "It operates as a legally binding acceptance with an additional proposed term.",
            "It forms a valid option contract.",
            "It revokes Alice's original offer entirely."
        ],
        ans: 0, // A
        exp: "At common law, the 'mirror image rule' dictates that an acceptance must match the offer exactly. Any addition or alteration of terms (like demanding the fuzzy dice) acts as a rejection of the original offer and constitutes a new counteroffer."
    },
    {
        id: 2,
        topic: "Formation / UCC Governing Law",
        fp: "Alice (a non-merchant) offers to sell her used sedan to Bob for $2,000. Bob replies, 'I accept your offer, provided you throw in the fuzzy dice hanging from the rearview mirror.' Alice refuses to include the dice and sells the car to a third party.",
        q: "Because the transaction involves the sale of a used automobile, which body of law actually governs this contractual dispute?",
        opts: [
            "State real property law.",
            "Uniform Commercial Code (UCC) Article 2, because a car is a tangible, movable good.",
            "Traditional common law.",
            "Federal commercial shipping regulations."
        ],
        ans: 1, // B
        exp: "UCC Article 2 governs all contracts for the sale of goods. Goods are defined as tangible, movable items at the time of identification to the contract. A car, even a used one sold by a non-merchant, is a good, so the UCC governs the transaction."
    },
    // FACT PATTERN 2 (Q3-Q4)
    {
        id: 3,
        topic: "Defenses / Statute of Frauds (Suretyship)",
        fp: "Son wants to buy a computer on credit from Store. Store refuses due to Son's lack of credit history. Father calls Store on the phone and says, 'Give him the computer. If he doesn't pay you, I will.' Store gives Son the computer. Son defaults on the payments.",
        q: "Is Father's oral promise to the Store enforceable?",
        opts: [
            "Yes, because family relationships inherently substitute for a formal signature.",
            "Yes, because the electronic transfer of merchandise satisfies commercial standards.",
            "No, because an oral promise to answer for the debt of another violates the Statute of Frauds and is legally unenforceable.",
            "No, because the original debtor must be officially declared bankrupt before a guarantor can be sued."
        ],
        ans: 2, // C
        exp: "The Statute of Frauds requires certain contracts to be in writing to be enforceable. One such category is a 'suretyship' agreement—a promise to answer for the debt, default, or miscarriage of another person. Father's oral promise is unenforceable without a writing."
    },
    {
        id: 4,
        topic: "Defenses / Main Purpose Exception to SOF",
        fp: "Son wants to buy a computer on credit from Store. Store refuses due to Son's lack of credit history. Father calls Store on the phone and says, 'Give him the computer. If he doesn't pay you, I will.' Store gives Son the computer. Son defaults on the payments.\n\nAssume instead that Father made the promise because Son desperately needed the new computer to manage the accounting books for Father's own lucrative business.",
        q: "Under this modified scenario, is Father's oral promise enforceable?",
        opts: [
            "No, because all suretyship agreements strictly require notarization.",
            "No, because the primary loan was still issued entirely in the son's name.",
            "Yes, because the commercial nature of the equipment exempts it from the statute.",
            "Yes, it is enforceable under the 'main purpose' exception, because the father's primary motive was to secure a direct economic benefit for himself."
        ],
        ans: 3, // D
        exp: "An oral promise to pay the debt of another is enforceable (removed from the SOF) if the promisor's 'main purpose' or 'leading object' is to serve their own direct economic interest. Because Father needed the computer for his own business accounting, the main purpose exception applies."
    },
    // FACT PATTERN 3 (Q5-Q7)
    {
        id: 5,
        topic: "Formation / Mailbox Rule & Revocation",
        fp: "On Monday, Xaver mails an offer to Yolanda. On Tuesday, Xaver changes his mind and mails a revocation. On Wednesday, Yolanda receives the offer and immediately mails an acceptance. On Thursday, Yolanda receives the revocation. On Friday, Xaver receives the acceptance.",
        q: "Is there a valid, enforceable contract?",
        opts: [
            "Yes, because the acceptance was dispatched before the revocation was received.",
            "No, because the offeror successfully dispatched the revocation before the acceptance was mailed.",
            "Yes, because offers are universally deemed irrevocable for a period of three days.",
            "No, because the offeror must actually receive the acceptance for mutual assent to occur."
        ],
        ans: 0, // A
        exp: "Under the mailbox rule, an acceptance is effective upon dispatch (Wednesday). A revocation is only effective upon receipt (Thursday). Because Yolanda dispatched her acceptance before she received the revocation, a valid contract was formed on Wednesday."
    },
    {
        id: 6,
        topic: "Formation / Intersecting Dispatches",
        fp: "On Monday, Xaver mails an offer to Yolanda. On Tuesday, Xaver changes his mind and mails a revocation. On Wednesday, Yolanda receives the offer and immediately mails an acceptance. On Thursday, Yolanda receives the revocation. On Friday, Xaver receives the acceptance.\n\nAssume instead that on Wednesday, Yolanda mailed a rejection. On Thursday, she changed her mind and mailed an acceptance. Xaver received the acceptance on Friday, and the rejection on Saturday.",
        q: "If an offeree mails a rejection followed by an acceptance, which communication legally controls the outcome?",
        opts: [
            "The rejection, because it instantly terminates the power of acceptance upon physical dispatch.",
            "Whichever communication is actually received first by the offeror.",
            "The acceptance, because the mailbox rule strictly prioritizes affirmative commercial assent.",
            "Neither, because sending conflicting documents voids the initial offer."
        ],
        ans: 1, // B
        exp: "When an offeree mails a rejection and then changes their mind and mails an acceptance, the standard mailbox rule is suspended. Instead, a 'race to the offeror's mailbox' occurs: whichever letter is received FIRST by the offeror controls. Since the acceptance arrived first, a contract is formed."
    },
    {
        id: 7,
        topic: "Formation / Revocation Timing",
        fp: "On Monday, Xaver mails an offer to Yolanda. On Tuesday, Xaver changes his mind and mails a revocation. On Wednesday, Yolanda receives the offer and immediately mails an acceptance. On Thursday, Yolanda receives the revocation. On Friday, Xaver receives the acceptance.",
        q: "At what specific moment is a revocation of an offer generally effective under common law?",
        opts: [
            "Upon being placed into the mail system by the offeror.",
            "At the exact moment the offeror subjectively forms the intent to revoke.",
            "Upon actual receipt by the offeree.",
            "Exactly twenty-four hours after the initial offer was formally transmitted."
        ],
        ans: 2, // C
        exp: "Unlike an acceptance (which is generally effective upon dispatch), a revocation of an offer is only effective when it is received by the offeree."
    },
    // FACT PATTERN 4 (Q8-Q9)
    {
        id: 8,
        topic: "Consideration / Illusory Promises",
        fp: "Factory Company agrees in writing to buy 'all the coal we choose to order' from Miner at $50 per ton for one year. Three months later, Company orders 100 tons of coal. Miner refuses to deliver, stating the contract is legally invalid.",
        q: "Is the contract enforceable against Miner?",
        opts: [
            "Yes, because the written document establishes an irrebuttable presumption of mutual commercial intent.",
            "Yes, because partial performance via placing an order legally validates the agreement.",
            "No, because mining contracts are governed strictly by federal property statutes.",
            "No, because the company's promise is illusory, completely lacking mutuality of obligation."
        ],
        ans: 3, // D
        exp: "A promise is illusory and lacks consideration if it does not actually bind the promisor to do anything. Promising to buy 'all the coal we CHOOSE to order' leaves the Company totally free to order nothing at all. Because the Company is not bound, the Miner is not bound."
    },
    {
        id: 9,
        topic: "Consideration / Requirements Contracts (UCC)",
        fp: "Factory Company agrees in writing to buy 'all the coal we choose to order' from Miner at $50 per ton for one year. Three months later, Company orders 100 tons of coal. Miner refuses to deliver, stating the contract is legally invalid.\n\nAssume instead the contract read: 'Company agrees to buy all the coal it requires for its factory operations from Miner.'",
        q: "Would this modified agreement be enforceable?",
        opts: [
            "Yes, because it constitutes a valid, enforceable requirements contract under the Uniform Commercial Code.",
            "No, because the precise quantity of coal was left blank, rendering the contract too indefinite.",
            "Yes, but only if the company formally guarantees a minimum purchase volume.",
            "No, because exclusivity clauses are strictly prohibited in common law commodity transactions."
        ],
        ans: 0, // A
        exp: "Under UCC § 2-306, a 'requirements' contract (where a buyer agrees to purchase all of a specific good they require for their business from a single seller) is valid and enforceable. The buyer suffers a legal detriment by giving up the right to buy the good from anyone else, providing mutuality of obligation."
    },
    // FACT PATTERN 5 (Q10-Q12)
    {
        id: 10,
        topic: "Performance / Perfect Tender Rule",
        fp: "Buyer orders 100 green desktop lamps from Seller for delivery on May 1. On May 1, Seller delivers 99 green lamps and 1 red lamp.",
        q: "Can Buyer legally reject the entire shipment?",
        opts: [
            "No, because the defect is legally de minimis and ignored by commercial courts.",
            "Yes, because under the perfect tender rule for single-delivery contracts, a buyer can reject goods that fail in any respect to conform to the contract.",
            "No, because the doctrine of substantial performance governs all physical commodity transactions.",
            "Yes, but only if Buyer can demonstrate severe, calculable financial damages resulting from the red lamp."
        ],
        ans: 1, // B
        exp: "For single-delivery contracts under the UCC, the Perfect Tender Rule applies. If the goods or tender of delivery fail in ANY respect to conform to the contract (e.g., wrong color, wrong quantity), the buyer may reject the whole shipment, accept the whole, or accept any commercial unit and reject the rest."
    },
    {
        id: 11,
        topic: "Performance / Right to Cure",
        fp: "Buyer orders 100 green desktop lamps from Seller for delivery on May 1. On May 1, Seller delivers 99 green lamps and 1 red lamp.\n\nAssume instead that Seller delivered the mixed lamps early, on April 25. Buyer immediately rejected the shipment.",
        q: "What right does Seller possess upon Buyer's early rejection?",
        opts: [
            "The right to demand full payment under the substantial performance doctrine.",
            "The right to immediately file a lawsuit for anticipatory repudiation.",
            "The absolute right to seasonably notify the buyer of an intention to cure and deliver conforming goods by the original May 1 deadline.",
            "No rights, because shipping non-conforming goods permanently terminates the commercial relationship."
        ],
        ans: 2, // C
        exp: "Under UCC § 2-508, if a buyer rejects non-conforming goods and the time for performance has NOT yet expired, the seller may seasonably notify the buyer of their intention to cure and may then make a conforming delivery within the contract time (by May 1)."
    },
    {
        id: 12,
        topic: "Performance / Installment Contracts",
        fp: "Buyer orders 100 green desktop lamps from Seller for delivery on May 1. On May 1, Seller delivers 99 green lamps and 1 red lamp.\n\nAssume instead this was an installment contract calling for 10 monthly deliveries of 10 green lamps each. The very first delivery consisted of 9 green lamps and 1 red lamp.",
        q: "Could Buyer cancel the entire installment contract based on this first delivery?",
        opts: [
            "Yes, because the perfect tender rule applies stringently to the initial foundational delivery of an ongoing agreement.",
            "No, because buyers must accept all non-conforming installments and seek monetary damages exclusively.",
            "Yes, but only if the seller explicitly refuses to provide a proportional commercial discount.",
            "No, because under an installment contract, a buyer can only cancel the entire agreement if the non-conformity substantially impairs the value of the whole contract."
        ],
        ans: 3, // D
        exp: "The Perfect Tender Rule does NOT apply to installment contracts. Under UCC § 2-612, a buyer can only reject a specific non-conforming installment if it 'substantially impairs' the value of that installment and cannot be cured. The buyer can only cancel the ENTIRE contract if the non-conformity 'substantially impairs the value of the whole contract.'"
    },
    // FACT PATTERN 6 (Q13-Q14)
    {
        id: 13,
        topic: "Remedies / Expectation Damages",
        fp: "Builder contracts to construct a wooden deck for Homeowner for $5,000. Builder calculates the job will cost him exactly $3,000 in materials and labor, leaving a $2,000 expected profit. Homeowner unjustifiably breaches the contract before Builder purchases any materials or begins any physical work.",
        q: "What amount is Builder entitled to recover in expectation damages?",
        opts: [
            "$2,000, representing the expected profit he would have realized had the contract been fully performed.",
            "$5,000.",
            "$3,000.",
            "$0, because he suffered no actual physical loss or property damage."
        ],
        ans: 0, // A
        exp: "Expectation damages aim to put the non-breaching party in the position they would have been in had the contract been performed. If performed, Builder would have received $5,000 but spent $3,000, netting a $2,000 profit. Awarding the $2,000 expected profit makes him whole."
    },
    {
        id: 14,
        topic: "Remedies / Expectation Plus Reliance",
        fp: "Builder contracts to construct a wooden deck for Homeowner for $5,000. Builder calculates the job will cost him exactly $3,000 in materials and labor, leaving a $2,000 expected profit. Homeowner unjustifiably breaches the contract before Builder purchases any materials or begins any physical work.\n\nAssume instead that Builder had already spent $1,000 on custom, non-returnable wood before Homeowner breached.",
        q: "What are Builder's total recoverable damages in this modified scenario?",
        opts: [
            "$1,000, restricting recovery solely to out-of-pocket costs.",
            "$3,000, representing the expected profit plus the reliance costs already incurred.",
            "$5,000, enforcing the full contract price to penalize the breach.",
            "$2,000, because prep-work expenses are strictly excluded from expectation calculations."
        ],
        ans: 1, // B
        exp: "To put the Builder in the position he would have been in had the contract been fully performed, he must recover his expected net profit ($2,000) PLUS the out-of-pocket costs he already reasonably incurred in reliance on the contract ($1,000) before the breach. Total damages = $3,000."
    },
    // FACT PATTERN 7 (Q15-Q16)
    {
        id: 15,
        topic: "Third Parties / Incidental Beneficiaries",
        fp: "City contracts with Paving Co. to pave Elm Street. Homeowner lives on Elm Street, and local real estate experts confirm that his property value will increase by $10,000 once the road is paved. Paving Co. breaches the contract and abandons the job. Homeowner sues Paving Co. for the $10,000 lost property value.",
        q: "Can Homeowner recover damages from Paving Co.?",
        opts: [
            "Yes, because his property value loss is directly traceable to the breach of a municipal service contract.",
            "Yes, under the doctrine of promissory estoppel.",
            "No, because Homeowner is merely an incidental beneficiary who completely lacks the legal standing to enforce the agreement.",
            "No, because government entities maintain sovereign immunity."
        ],
        ans: 2, // C
        exp: "Only 'intended' third-party beneficiaries have the right to sue to enforce a contract. A party is an 'incidental' beneficiary if they just happen to benefit from the contract (like property values rising due to public works) but the contracting parties did not make the contract with the primary intent to benefit them. Incidental beneficiaries have no legal standing to sue."
    },
    {
        id: 16,
        topic: "Third Parties / Intended Beneficiaries",
        fp: "City contracts with Paving Co. to pave Elm Street. Homeowner lives on Elm Street, and local real estate experts confirm that his property value will increase by $10,000 once the road is paved. Paving Co. breaches the contract and abandons the job. Homeowner sues Paving Co. for the $10,000 lost property value.",
        q: "To elevate his status to an 'intended' beneficiary with enforcement rights, what must a third party typically demonstrate?",
        opts: [
            "That they suffered severe, calculable financial damages directly resulting from the breach of contract.",
            "That they possess a formal familial or fiduciary relationship with one of the primary signatories.",
            "That they provided direct financial consideration to the promisor.",
            "That the original contracting parties explicitly intended to confer a direct legal or financial benefit upon them."
        ],
        ans: 3, // D
        exp: "A third party is an intended beneficiary (with the right to sue) only if the primary contracting parties clearly intended to benefit that specific third party when forming the contract (e.g., to pay off a debt owed to the third party, or to give them a direct gift)."
    },
    // FACT PATTERN 8 (Q17-Q18)
    {
        id: 17,
        topic: "Defenses / Mutual Mistake",
        fp: "Adam contracts to sell his antique violin to Betty for $100. Both Adam and Betty genuinely believe the instrument is a cheap, mass-produced student model from the 1980s. A week later, a professional appraiser discovers the instrument is actually a rare, genuine Stradivarius worth over $100,000. Adam seeks to void the sale.",
        q: "Will Adam succeed in voiding the contract?",
        opts: [
            "Yes, because there was a mutual mistake regarding a basic assumption (the nature of the item) that materially affected the agreed exchange.",
            "No, because sellers always assume the strict commercial risk of undervalued asset sales.",
            "No, because the physical identity of the wooden instrument was not in dispute.",
            "Yes, but only if he can prove Betty committed actionable fraud during negotiations."
        ],
        ans: 0, // A
        exp: "A contract is voidable by the adversely affected party if there is a mutual mistake about a basic assumption of the contract (the violin's true identity/nature) that has a material effect on the agreed exchange, provided the adversely affected party did not bear the risk of the mistake."
    },
    {
        id: 18,
        topic: "Defenses / Assumption of Risk in Mistake",
        fp: "Adam contracts to sell his antique violin to Betty for $100. Both Adam and Betty genuinely believe the instrument is a cheap, mass-produced student model from the 1980s. A week later, a professional appraiser discovers the instrument is actually a rare, genuine Stradivarius worth over $100,000. Adam seeks to void the sale.\n\nAssume instead that Adam knew absolutely nothing about violins, but consciously chose to sell it at a garage sale without bothering to have it appraised.",
        q: "Would Adam still be able to void the contract under the doctrine of mistake?",
        opts: [
            "Yes, because the monetary disparity renders the transaction unconscionable.",
            "No, because a party bears the risk of a mistake when they are aware they have only limited knowledge regarding the facts but treat that limited knowledge as sufficient.",
            "Yes, because amateur sellers are shielded by consumer protection regulations.",
            "No, because unilateral mistakes never provide grounds for rescission under any circumstances."
        ],
        ans: 1, // B
        exp: "A party cannot assert the defense of mutual mistake if they 'bear the risk' of the mistake. A party bears the risk if they are aware at the time the contract is made that they have only limited knowledge with respect to the facts (e.g., selling an unknown item without an appraisal) but treat their limited knowledge as sufficient (conscious ignorance)."
    },
    // FACT PATTERN 9 (Q19-Q20)
    {
        id: 19,
        topic: "Formation / Promissory Estoppel",
        fp: "Employer orally promises Employee, 'When you retire next month, I will pay you a $1,000/month pension for the rest of your life.' Employee, relying on this, retires and does not seek other work. Employer pays for one year, then stops, claiming the promise lacked consideration since the past work was already completed.",
        q: "What legal doctrine provides Employee the best chance to enforce the pension promise?",
        opts: [
            "Unjust enrichment.",
            "The preexisting duty rule.",
            "Promissory estoppel.",
            "Anticipatory repudiation."
        ],
        ans: 2, // C
        exp: "A promise that lacks consideration is still enforceable under the doctrine of promissory estoppel if the promisor should reasonably expect the promise to induce action or forbearance, the promisee does in fact reasonably and detrimentally rely on it (retiring and not seeking work), and injustice can only be avoided by enforcement."
    },
    {
        id: 20,
        topic: "Formation / Elements of Promissory Estoppel",
        fp: "Employer orally promises Employee, 'When you retire next month, I will pay you a $1,000/month pension for the rest of your life.' Employee, relying on this, retires and does not seek other work. Employer pays for one year, then stops, claiming the promise lacked consideration since the past work was already completed.",
        q: "What is a mandatory, core requirement for the application of promissory estoppel?",
        opts: [
            "The presence of a formal, notarized written document.",
            "Proof that the promisor received a direct, calculable financial benefit.",
            "The exchange of nominal consideration at the time of the promise.",
            "That the promisee foreseeably and detrimentally relied on the promise."
        ],
        ans: 3, // D
        exp: "Promissory estoppel explicitly replaces the requirement of consideration with the requirement of detrimental reliance. The promisee must take some action, or refrain from some action, in justifiable and foreseeable reliance on the promise."
    },
    // FACT PATTERN 10 (Q21-Q22)
    {
        id: 21,
        topic: "Performance / Prevention of Express Conditions",
        fp: "Buyer signs a contract to purchase a house from Seller for $500,000. The contract is expressly conditioned on Buyer obtaining a 5% mortgage within 30 days. Buyer decides he doesn't want the house. In bad faith, he only applies for a highly unusual 2% mortgage, is predictably rejected by the bank, and tells Seller the condition failed.",
        q: "Must Buyer purchase the house?",
        opts: [
            "Yes, because Buyer wrongfully prevented the condition from occurring in bad faith, which legally excuses the condition.",
            "No, because the express condition precedent was not satisfied by the designated deadline.",
            "Yes, because financing contingencies are automatically waived in modern real estate transactions.",
            "No, because the banking institution retained sole discretionary authority over the loan approval."
        ],
        ans: 0, // A
        exp: "Under the prevention doctrine, if a party whose duty is subject to a condition wrongfully (in bad faith) prevents or hinders the occurrence of that condition (like purposefully applying for an impossible loan to sabotage the deal), the condition is legally excused. The party must then perform as if the condition had been satisfied."
    },
    {
        id: 22,
        topic: "Performance / Failure of Express Condition",
        fp: "Buyer signs a contract to purchase a house from Seller for $500,000. The contract is expressly conditioned on Buyer obtaining a 5% mortgage within 30 days. Buyer decides he doesn't want the house. In bad faith, he only applies for a highly unusual 2% mortgage, is predictably rejected by the bank, and tells Seller the condition failed.\n\nAssume instead that Buyer eagerly wanted the house and applied for the 5% mortgage in complete good faith at five different banks, but was rejected by all of them due to a sudden market crash.",
        q: "What is the legal result in this alternate scenario?",
        opts: [
            "Buyer must still purchase the house, but is granted an automatic extension.",
            "Buyer's duty to perform is completely discharged by the failure of the express condition precedent.",
            "The seller must provide owner-financing at the stipulated rate.",
            "The contract is voidable strictly at the discretion of the seller."
        ],
        ans: 1, // B
        exp: "An express condition precedent must be strictly satisfied before the performance duty arises. If the buyer acts in good faith to fulfill the condition but fails (e.g., banks reject the loan application), the condition has failed. The buyer's duty to purchase the house never arises and is completely discharged."
    },
    // FACT PATTERN 11 (Q23-Q25)
    {
        id: 23,
        topic: "Terms / Parol Evidence Rule",
        fp: "Xavier and Yvette sign a completely integrated written contract for the sale of a used commercial tractor. The contract includes a prominent merger clause and states 'sold as is, with no warranties.' However, prior to signing, Xavier orally promised Yvette a 1-year warranty on the engine. Yvette also orally agreed that the contract wouldn't take effect unless her brother approved it. The brother never approved it.",
        q: "If Yvette sues for breach of the engine warranty, can she introduce evidence of the oral 1-year warranty?",
        opts: [
            "Yes, because the oral promise was made chronologically prior to the execution of the written document.",
            "Yes, because the doctrine of promissory estoppel inherently overrides written merger clauses.",
            "No, because the Parol Evidence Rule bars prior oral agreements that add to or contradict a completely integrated written contract.",
            "No, because tractors are heavily regulated agricultural equipment."
        ],
        ans: 2, // C
        exp: "The Parol Evidence Rule prevents a party from introducing evidence of prior or contemporaneous oral agreements to contradict or supplement a 'completely integrated' written contract (a contract intended as the final expression of the agreement). The oral 1-year warranty directly contradicts the 'no warranties' clause and is barred."
    },
    {
        id: 24,
        topic: "Terms / Parol Evidence Exception (Condition Precedent)",
        fp: "Xavier and Yvette sign a completely integrated written contract for the sale of a used commercial tractor. The contract includes a prominent merger clause and states 'sold as is, with no warranties.' However, prior to signing, Xavier orally promised Yvette a 1-year warranty on the engine. Yvette also orally agreed that the contract wouldn't take effect unless her brother approved it. The brother never approved it.",
        q: "Can Yvette introduce evidence of the oral condition requiring her brother's approval?",
        opts: [
            "No, because the integration clause creates an irrebuttable presumption of immediate contractual effectiveness.",
            "No, because familial consent is not a recognized commercial defense.",
            "Yes, because oral modifications made after a contract is signed are universally admissible.",
            "Yes, because parol evidence is admissible to show a condition precedent to the formation or existence of the contract itself."
        ],
        ans: 3, // D
        exp: "A widely recognized exception to the Parol Evidence Rule allows a party to introduce evidence of an oral agreement establishing a condition precedent to the FORMATION or effectiveness of the entire contract. Showing that the contract wasn't supposed to exist until the brother approved is admissible."
    },
    {
        id: 25,
        topic: "Terms / Parol Evidence Exception (Fraud)",
        fp: "Xavier and Yvette sign a completely integrated written contract for the sale of a used commercial tractor. The contract includes a prominent merger clause and states 'sold as is, with no warranties.' However, prior to signing, Xavier orally promised Yvette a 1-year warranty on the engine. Yvette also orally agreed that the contract wouldn't take effect unless her brother approved it. The brother never approved it.\n\nSuppose Yvette instead alleges that Xavier committed fraud to induce her signature by intentionally lying and saying the tractor's engine was brand new.",
        q: "Is evidence of this fraudulent oral statement admissible?",
        opts: [
            "No, because the merger clause strictly protects commercial sellers from all liability.",
            "Yes, but only if the fraud involved a physical threat of violence.",
            "Yes, because evidence of fraud, misrepresentation, or duress is a widely recognized exception to the Parol Evidence Rule.",
            "No, because the integration clause creates an irrebuttable presumption of honest dealing."
        ],
        ans: 2, // C
        exp: "While the Parol Evidence Rule bars prior agreements that contradict the writing, evidence of fraud, misrepresentation, or duress is ALWAYS admissible to show that the contract itself is invalid or was induced by deceit, regardless of how completely integrated the writing is."
    }
];