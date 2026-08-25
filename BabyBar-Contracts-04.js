const examData = [
    {
        id: 1,
        topic: "Formation / Consideration (Hamer v. Sidway)",
        fp: "Uncle promises to pay his Niece $5,000 if she refrains from smoking cigarettes until her 21st birthday. Smoking is legal for Niece in this jurisdiction. Niece successfully stops smoking entirely until she turns 21. When she asks for the money, Uncle refuses to pay, arguing that quitting smoking was beneficial for her health, so she suffered no actual detriment.",
        q: "Is there valid consideration to enforce the Uncle's promise?",
        opts: [
            "No, because consideration must involve an economic or financial detriment to the promisee.",
            "No, because the agreement lacked mutuality of obligation since she was not bound to stop.",
            "Yes, because refraining from a legal right constitutes a valid legal detriment.",
            "Yes, because familial obligations automatically substitute for traditional consideration."
        ],
        ans: 2,
        exp: "Consideration requires a bargained-for exchange of legal value. A 'legal detriment' occurs when a person refrains from doing something they have a legal right to do (like smoking). It does not matter if the forbearance is factually beneficial to their health; giving up a legal right is sufficient consideration (Hamer v. Sidway)."
    },
    {
        id: 2,
        topic: "Formation / Promissory Estoppel",
        fp: "Uncle promises to pay his Niece $5,000 if she refrains from smoking cigarettes until her 21st birthday. Smoking is legal for Niece in this jurisdiction. Niece successfully stops smoking entirely until she turns 21. When she asks for the money, Uncle refuses to pay, arguing that quitting smoking was beneficial for her health, so she suffered no actual detriment.\n\nAssume for this question only that the court somehow finds traditional consideration is entirely lacking.",
        q: "What alternative legal theory offers Niece the best chance of enforcing the Uncle's promise?",
        opts: [
            "Unjust enrichment.",
            "Promissory estoppel, because she detrimentally relied on the promise.",
            "Moral obligation doctrine.",
            "Quasi-contract."
        ],
        ans: 1,
        exp: "If a promise lacks consideration, it may still be enforced under the doctrine of promissory estoppel. This requires a promise that the promisor should reasonably expect to induce action or forbearance, actual reliance by the promisee, and that injustice can only be avoided by enforcement."
    },
    {
        id: 3,
        topic: "Formation / Unilateral Contract Revocation",
        fp: "Uncle promises to pay his Niece $5,000 if she refrains from smoking cigarettes until her 21st birthday. Smoking is legal for Niece in this jurisdiction. Niece successfully stops smoking entirely until she turns 21. When she asks for the money, Uncle refuses to pay, arguing that quitting smoking was beneficial for her health, so she suffered no actual detriment.\n\nSuppose that when Niece turned 20, Uncle explicitly told her, 'I revoke my offer.' Niece nevertheless continued not to smoke until age 21.",
        q: "Was Uncle's revocation legally effective?",
        opts: [
            "Yes, because the offeror is the master of the offer and may revoke at any time prior to completion.",
            "Yes, because unilateral contracts provide no protection to the offeree until the very last act is completed.",
            "No, because familial promises become irrevocable once spoken.",
            "No, because her beginning of performance created an implied option contract."
        ],
        ans: 3,
        exp: "An offer for a unilateral contract (seeking acceptance by performance) becomes irrevocable once the offeree begins performance. Beginning performance creates an implied option contract, giving the offeree a reasonable time to complete the requested performance."
    },
    {
        id: 4,
        topic: "Defenses / Statute of Frauds (Specially Manufactured Goods)",
        fp: "Wholesaler and Retailer agree over the phone that Wholesaler will produce 600 custom-engraved jackets for Retailer for $10 each. The jackets feature Retailer's unique logo. Wholesaler immediately begins manufacturing the jackets and completes 400 of them. Retailer then calls and cancels the order, arguing that the oral agreement violates the Statute of Frauds.",
        q: "Does the Statute of Frauds bar enforcement of this contract?",
        opts: [
            "No, because specially manufactured goods that cannot be resold in the ordinary course of business are an exception to the Statute of Frauds.",
            "Yes, because the total contract price exceeds five hundred dollars.",
            "Yes, because all contracts between merchants must be executed in writing under the UCC.",
            "No, because partial completion of any good automatically eliminates the writing requirement for the entire contract."
        ],
        ans: 0,
        exp: "Under UCC § 2-201(3)(a), oral contracts for goods priced at $500 or more are enforceable if the goods are specially manufactured for the buyer, are not suitable for sale to others in the ordinary course of the seller's business, and the seller has made a substantial beginning of their manufacture."
    },
    {
        id: 5,
        topic: "Defenses / Merchant's Confirmatory Memo",
        fp: "Wholesaler and Retailer agree over the phone that Wholesaler will produce 600 custom-engraved jackets for Retailer for $10 each. The jackets feature Retailer's unique logo. Wholesaler immediately begins manufacturing the jackets and completes 400 of them. Retailer then calls and cancels the order, arguing that the oral agreement violates the Statute of Frauds.\n\nAssume instead the jackets were plain, standard inventory (not custom). After the phone call, Wholesaler immediately sent a signed email to Retailer stating: 'Confirming our agreement for 600 plain jackets at $10 each.' Retailer read it but never replied.",
        q: "Is the oral contract enforceable in this alternate scenario?",
        opts: [
            "No, because the retailer never signed any documentation.",
            "Yes, because the merchant's confirmatory memo rule applies.",
            "No, because emails do not satisfy the strict signature requirements of the commercial code.",
            "Yes, because plain jackets are exempt from the statute of frauds."
        ],
        ans: 1,
        exp: "Under UCC § 2-201(2), between merchants, if one party sends a written confirmation of the oral agreement within a reasonable time, it satisfies the Statute of Frauds against the recipient UNLESS the recipient objects in writing within 10 days."
    },
    {
        id: 6,
        topic: "Performance / Retraction of Anticipatory Repudiation",
        fp: "Seller agrees to sell 1,000 widgets to Buyer for delivery on November 1. On October 1, Seller emails Buyer: 'Market prices are up. I absolutely will not deliver the widgets unless you pay 10% more.' Buyer immediately responds, 'No, I expect delivery at the contract price.' On October 5, Buyer signs a contract with a different supplier to cover the widgets. On October 10, Seller emails Buyer: 'Never mind, I will honor the original price and deliver on Nov 1.'",
        q: "Can Seller effectively retract the repudiation on October 10?",
        opts: [
            "Yes, because the time for performance (November 1) had not yet arrived.",
            "No, because the buyer materially changed position by obtaining substitute goods before the retraction.",
            "Yes, because the buyer's initial response on October 1 was merely a demand for performance rather than a formal cancellation.",
            "No, because anticipatory repudiations are completely irrevocable once placed in a written format."
        ],
        ans: 1,
        exp: "A party can retract an anticipatory repudiation before their next performance is due UNLESS the aggrieved party has, since the repudiation, canceled the contract, materially changed their position (e.g., by covering/buying substitute goods), or otherwise indicated that they consider the repudiation final."
    },
    {
        id: 7,
        topic: "Remedies / Cover Damages (UCC)",
        fp: "Seller agrees to sell 1,000 widgets to Buyer for delivery on November 1. On October 1, Seller emails Buyer: 'Market prices are up. I absolutely will not deliver the widgets unless you pay 10% more.' Buyer immediately responds, 'No, I expect delivery at the contract price.' On October 5, Buyer signs a contract with a different supplier to cover the widgets. On October 10, Seller emails Buyer: 'Never mind, I will honor the original price and deliver on Nov 1.'",
        q: "If Buyer successfully sues Seller for breach of contract, what is the appropriate measure of damages?",
        opts: [
            "Specific performance of the widget delivery.",
            "The full cost paid to the substitute supplier.",
            "The difference between the cost of cover and the contract price.",
            "Punitive damages for bad faith market manipulation."
        ],
        ans: 2,
        exp: "Under UCC § 2-712, when a seller breaches, the buyer may 'cover' by making a reasonable purchase of substitute goods in good faith. The buyer may then recover the difference between the cost of cover and the contract price, plus incidental/consequential damages, minus expenses saved."
    },
    {
        id: 8,
        topic: "Performance / Elements of Anticipatory Repudiation",
        fp: "Seller agrees to sell 1,000 widgets to Buyer for delivery on November 1. On October 1, Seller emails Buyer: 'Market prices are up. I absolutely will not deliver the widgets unless you pay 10% more.' Buyer immediately responds, 'No, I expect delivery at the contract price.' On October 5, Buyer signs a contract with a different supplier to cover the widgets. On October 10, Seller emails Buyer: 'Never mind, I will honor the original price and deliver on Nov 1.'",
        q: "Did Seller's October 1 email constitute a valid anticipatory repudiation?",
        opts: [
            "No, because it was merely a request to negotiate price modifications.",
            "No, because the seller did not explicitly state they were financially insolvent.",
            "Yes, because any communication from a seller expressing unease triggers an automatic total breach.",
            "Yes, because it was an unequivocal statement that he would not perform unless an extra-contractual demand was met."
        ],
        ans: 3,
        exp: "Anticipatory repudiation requires a clear, unequivocal statement or voluntary act indicating that the promisor will not or cannot perform their contractual duties. Stating 'I absolutely will not deliver unless you pay 10% more' is a clear, unequivocal refusal to perform the existing contract."
    },
    {
        id: 9,
        topic: "Terms / Parol Evidence Rule",
        fp: "Buyer signs a written contract to purchase a sailboat from Seller for $20,000. The contract explicitly states the boat is sold 'as-is' and contains a standard merger clause. However, the day before signing, Seller orally promised Buyer that he would repair a tear in the mainsail prior to delivery. Seller delivers the boat with the torn sail.",
        q: "If Buyer sues Seller for failing to repair the sail, can Buyer introduce evidence of the prior oral promise?",
        opts: [
            "Yes, because the oral promise was made chronologically prior to the execution of the written document.",
            "No, because the Parol Evidence Rule bars prior oral agreements that contradict a completely integrated written contract.",
            "Yes, because the doctrine of promissory estoppel inherently overrides written merger clauses to prevent commercial injustice.",
            "No, because maritime vessels are strictly exempt from the Uniform Commercial Code."
        ],
        ans: 1,
        exp: "The Parol Evidence Rule prohibits the introduction of prior or contemporaneous oral agreements that contradict the terms of a completely integrated written contract (a contract with a merger clause intended as the final expression of the agreement). The oral promise to repair contradicts the written 'as-is' term."
    },
    {
        id: 10,
        topic: "Terms / Parol Evidence Exceptions (Condition Precedent)",
        fp: "Buyer signs a written contract to purchase a sailboat from Seller for $20,000. The contract explicitly states the boat is sold 'as-is' and contains a standard merger clause. However, the day before signing, Seller orally promised Buyer that he would repair a tear in the mainsail prior to delivery. Seller delivers the boat with the torn sail.\n\nAssume instead that right before signing, Seller orally stated, 'I will sell you the boat, but this contract only becomes valid if my wife agrees to it tomorrow.' The wife did not agree, but Buyer sues to enforce the contract.",
        q: "Is evidence of Seller's oral statement regarding his wife's approval admissible?",
        opts: [
            "No, because the merger clause permanently seals the final written document from any external oral modifications.",
            "Yes, because the statement demonstrates fraud in the inducement.",
            "Yes, because parol evidence is admissible to show a condition precedent to the formation of the contract.",
            "No, because marital consent is not a recognized commercial defense."
        ],
        ans: 2,
        exp: "A widely recognized exception to the Parol Evidence Rule allows a party to introduce evidence of an oral agreement that establishing a condition precedent to the FORMATION or existence of the entire contract. If the contract was never meant to take effect until the condition (wife's approval) was met, the evidence is admissible to show no contract exists."
    },
    {
        id: 11,
        topic: "Third Parties / Intended Creditor Beneficiary",
        fp: "Al owes Ben $1,000 for a past loan. Al later contracts with Carl to mow Carl's massive estate lawn for the summer. In exchange, Carl explicitly promises in the contract to pay the $1,000 directly to Ben to settle Al's debt. Carl fails to pay Ben.",
        q: "What is Ben's legal status regarding the contract between Al and Carl?",
        opts: [
            "Intended creditor beneficiary.",
            "Incidental beneficiary.",
            "Assignee of rights.",
            "Intended donee beneficiary."
        ],
        ans: 0,
        exp: "A third party is an intended beneficiary if the contract was made with the primary intent to benefit them. If the promisee (Al) seeks the promisor's (Carl's) performance to discharge a pre-existing legal obligation owed to the third party (Ben), that third party is a creditor beneficiary."
    },
    {
        id: 12,
        topic: "Third Parties / Beneficiary Suing Promisor",
        fp: "Al owes Ben $1,000 for a past loan. Al later contracts with Carl to mow Carl's massive estate lawn for the summer. In exchange, Carl explicitly promises in the contract to pay the $1,000 directly to Ben to settle Al's debt. Carl fails to pay Ben.",
        q: "Can Ben successfully sue Carl for the $1,000?",
        opts: [
            "Yes, because the third-party beneficiary has the right to enforce the promise made for their benefit.",
            "No, because there is no strict privity of contract between Ben and Carl.",
            "Yes, but only if Ben explicitly provided fresh consideration to Carl.",
            "No, because only the original promisee may initiate litigation for breach of service agreements."
        ],
        ans: 0,
        exp: "An intended third-party beneficiary (whether a creditor or donee beneficiary) has the legal standing to sue the promisor (the one who made the promise to perform for the beneficiary) directly to enforce the contract once their rights have vested."
    },
    {
        id: 13,
        topic: "Third Parties / Beneficiary Suing Promisee",
        fp: "Al owes Ben $1,000 for a past loan. Al later contracts with Carl to mow Carl's massive estate lawn for the summer. In exchange, Carl explicitly promises in the contract to pay the $1,000 directly to Ben to settle Al's debt. Carl fails to pay Ben.",
        q: "If Carl refuses to pay, can Ben still sue Al?",
        opts: [
            "No, because the new contract legally constitutes a complete novation that releases Al.",
            "No, because Al fully performed his duties by mowing the lawn.",
            "Yes, but only for nominal damages.",
            "Yes, because the original debt between Al and Ben was not discharged."
        ],
        ans: 3,
        exp: "A creditor beneficiary can sue BOTH the promisor (Carl) on the third-party beneficiary contract AND the promisee (Al) on the underlying original debt. The new contract does not discharge the original debt unless there is a formal novation (an agreement by all parties to substitute Carl for Al), which did not occur here."
    },
    {
        id: 14,
        topic: "Formation / Mutual Misunderstanding",
        fp: "Buyer agrees to buy cotton from Seller, to arrive on the ship 'Peerless.' Unbeknownst to either party, there are two ships named 'Peerless.' Buyer means the one arriving in October; Seller means the one arriving in December. Seller ships the cotton on the December ship. Buyer refuses to accept it.",
        q: "Is there an enforceable contract between the parties?",
        opts: [
            "Yes, because the objective manifestation of the word 'Peerless' establishes a binding commercial commitment.",
            "Yes, and the court will impose a reasonable standard delivery timeframe.",
            "No, because there was no mutual assent since both parties attached materially different meanings to an ambiguous term and neither knew of the other's meaning.",
            "No, because the statute of frauds invalidates maritime shipping contracts."
        ],
        ans: 2,
        exp: "This is the classic Raffles v. Wichelhaus scenario. If a contract term is materially ambiguous, both parties attach different meanings to it, and NEITHER party knows or has reason to know of the ambiguity, there is no meeting of the minds and therefore no contract is formed."
    },
    {
        id: 15,
        topic: "Formation / Unilateral Knowledge of Misunderstanding",
        fp: "Buyer agrees to buy cotton from Seller, to arrive on the ship 'Peerless.' Unbeknownst to either party, there are two ships named 'Peerless.' Buyer means the one arriving in October; Seller means the one arriving in December. Seller ships the cotton on the December ship. Buyer refuses to accept it.\n\nAssume instead that Buyer secretly knew there were two ships named 'Peerless', but Seller only knew about the December ship. Buyer remains silent.",
        q: "What is the result under this modified scenario?",
        opts: [
            "No contract is formed because there is still no subjective meeting of the minds.",
            "A contract is formed on the seller's terms because the buyer knew of the ambiguity.",
            "A contract is formed on the buyer's terms to penalize the seller for failing to conduct due diligence.",
            "The contract is voidable at the strict discretion of the shipping company."
        ],
        ans: 1,
        exp: "If one party knows or has reason to know of a material ambiguity, and the other party does not, a contract is formed according to the meaning attached by the innocent (unaware) party. Since Buyer knew of the ambiguity and Seller did not, the contract is formed on Seller's terms (the December ship)."
    },
    {
        id: 16,
        topic: "Defenses / Mistake vs Misunderstanding",
        fp: "Buyer agrees to buy cotton from Seller, to arrive on the ship 'Peerless.' Unbeknownst to either party, there are two ships named 'Peerless.' Buyer means the one arriving in October; Seller means the one arriving in December. Seller ships the cotton on the December ship. Buyer refuses to accept it.",
        q: "What is the proper legal classification of the initial failure of mutual assent in this scenario?",
        opts: [
            "Misunderstanding, because it relates to the meaning of the words rather than a factual assumption about the world.",
            "Mutual mistake, because both parties were mistaken about the physical existence of the cargo.",
            "Fraud in the inducement, because shipping schedules are material facts.",
            "Unconscionability, because maritime delays disproportionately harm consumers."
        ],
        ans: 0,
        exp: "This scenario illustrates 'misunderstanding' (where parties use the same words but attach different, equally reasonable meanings to them), which prevents contract formation. This is distinct from 'mutual mistake,' where parties reach a clear agreement but are both mistaken about a basic factual assumption underlying the contract (e.g., both think a barren cow is fertile)."
    },
    {
        id: 17,
        topic: "Performance / Excuse of Condition (Bad Faith)",
        fp: "Builder contracts to build a house for Owner. The contract states: 'Final payment is expressly conditioned upon Builder securing a certificate of approval from Architect.' Builder finishes the house flawlessly. Architect inspects the house, admits it is perfectly built, but refuses to issue the certificate solely because he personally despises Builder.",
        q: "Must Owner make the final payment to Builder?",
        opts: [
            "No, because an express condition requires strict, 100% compliance without exception.",
            "No, because the architect serves as an independent third-party arbiter whose decisions are absolute.",
            "Yes, but the builder must first obtain a replacement certificate from a municipal inspector.",
            "Yes, because the architect acted in bad faith, which legally excuses the condition of the certificate."
        ],
        ans: 3,
        exp: "While express conditions generally require strict compliance, a condition is legally excused if it is wrongfully prevented or hindered in bad faith. An architect or third party who withholds a required certificate maliciously or in bad faith (despite flawless work) excuses the condition, requiring the Owner to pay."
    },
    {
        id: 18,
        topic: "Performance / Conditions of Satisfaction",
        fp: "Builder contracts to build a house for Owner. The contract states: 'Final payment is expressly conditioned upon Builder securing a certificate of approval from Architect.' Builder finishes the house flawlessly. Architect inspects the house, admits it is perfectly built, but refuses to issue the certificate solely because he personally despises Builder.\n\nAssume instead the contract was for Builder to paint a custom portrait of Owner, expressly conditioned on 'Owner's personal satisfaction.'",
        q: "If Owner genuinely dislikes the portrait, what standard applies to determine if the condition is met?",
        opts: [
            "An objective standard of commercial reasonableness.",
            "A subjective standard of personal satisfaction.",
            "A hybrid standard requiring expert third-party aesthetic appraisal.",
            "Strict performance regardless of personal feelings."
        ],
        ans: 1,
        exp: "When a contract condition involves personal aesthetics, taste, or fancy (such as a custom portrait), courts apply a subjective standard. As long as the party is genuinely dissatisfied in good faith, the condition fails, and they do not have to pay."
    },
    {
        id: 19,
        topic: "Terms / Disclaimer of Implied Warranties",
        fp: "Consumer buys a new toaster from Appliance Store. The toaster shoots sparks and severely burns Consumer's hand during normal use. The store claims they are not liable because the instruction manual contained a disclaimer that read 'sold as is' in tiny, size 6 font buried on page 10.",
        q: "Is the disclaimer legally valid to exclude the implied warranty of merchantability?",
        opts: [
            "Yes, because the phrase 'as is' universally excludes all implied warranties regardless of formatting.",
            "Yes, because consumer negligence supersedes warranty claims.",
            "No, because disclaimers of the implied warranty of merchantability must be conspicuous.",
            "No, because merchants cannot disclaim express warranties."
        ],
        ans: 2,
        exp: "Under UCC § 2-316, while language like 'as is' can disclaim implied warranties, any written disclaimer of the implied warranty of merchantability MUST be conspicuous (e.g., larger font, bold, contrasting color). A disclaimer buried in tiny print on page 10 is not conspicuous and therefore invalid."
    },
    {
        id: 20,
        topic: "Terms / Implied Warranty of Merchantability",
        fp: "Consumer buys a new toaster from Appliance Store. The toaster shoots sparks and severely burns Consumer's hand during normal use. The store claims they are not liable because the instruction manual contained a disclaimer that read 'sold as is' in tiny, size 6 font buried on page 10.",
        q: "Assuming the disclaimer is invalid, which warranty did Appliance Store breach?",
        opts: [
            "The implied warranty of merchantability.",
            "The implied warranty of fitness for a particular purpose.",
            "The express warranty of absolute perfection.",
            "The warranty of title and against infringement."
        ],
        ans: 0,
        exp: "The implied warranty of merchantability requires that goods be 'fit for the ordinary purposes for which such goods are used.' A toaster that shoots sparks and burns people during normal operation is clearly unfit for its ordinary purpose."
    },
    {
        id: 21,
        topic: "Third Parties / Delegation of Personal Services",
        fp: "Famous Chef contracts to cater a high-end wedding for $20,000. One week before the wedding, Chef delegates his duty to cook to Novice, a recent culinary school graduate. Wedding Planner immediately objects and demands Chef perform.",
        q: "Is the delegation to Novice legally valid?",
        opts: [
            "Yes, because delegations of contractual duties are freely permitted under standard commercial law.",
            "Yes, provided the novice utilizes the exact same recipes provided by the famous chef.",
            "No, because duties involving specialized personal skill or reputation cannot be delegated without consent.",
            "No, because delegations require a formal written novation."
        ],
        ans: 2,
        exp: "Duties are generally delegable without the obligee's consent unless the duties involve specialized personal skill, artistic judgment, or unique trust/reputation (like a famous chef catering a high-end event). In such cases, the obligee has a substantial interest in having the specific person perform, rendering the duty non-delegable."
    },
    {
        id: 22,
        topic: "Third Parties / Assignment of Payment Rights",
        fp: "Famous Chef contracts to cater a high-end wedding for $20,000. One week before the wedding, Chef delegates his duty to cook to Novice, a recent culinary school graduate. Wedding Planner immediately objects and demands Chef perform.\n\nAssume Chef does perform and cooks the meal perfectly. He then assigns his right to receive the $20,000 payment to Local Bank.",
        q: "Is the assignment of the right to receive payment valid?",
        opts: [
            "No, because the underlying contract involved highly specialized personal services.",
            "No, because assigning funds to financial institutions requires explicit prior authorization from the obligor.",
            "Yes, but only if the bank agrees to indemnify the wedding planner.",
            "Yes, because the right to receive money is generally freely assignable even if duties are non-delegable."
        ],
        ans: 3,
        exp: "Even if the duties under a contract are strictly non-delegable (because they involve personal services), the right to receive payment upon completion of those services is almost always freely assignable. Commercial law strongly favors the assignability of money."
    },
    {
        id: 23,
        topic: "Third Parties / Delegation of Standard Duties",
        fp: "Famous Chef contracts to cater a high-end wedding for $20,000. One week before the wedding, Chef delegates his duty to cook to Novice, a recent culinary school graduate. Wedding Planner immediately objects and demands Chef perform.\n\nAssume instead the contract was merely to mow the grass around the wedding venue. Chef delegates the grass mowing to Novice.",
        q: "Is the delegation of the grass-mowing duty valid?",
        opts: [
            "No, because any contract bearing the signature of a specialized professional restricts all associated delegations.",
            "Yes, because mechanical or routine duties are generally delegable.",
            "No, because real estate maintenance contracts strictly prohibit third-party substitutions.",
            "Yes, but only if the novice provides an independent performance bond."
        ],
        ans: 1,
        exp: "Unlike specialized personal services, routine or mechanical duties (like mowing grass or painting a standard fence) do not require unique skill or reputation. Therefore, they are freely delegable without the obligee's consent, though the delegating party remains liable if the delegate breaches."
    },
    {
        id: 24,
        topic: "Remedies / Liquidated Damages (Penalty)",
        fp: "City contracts with Builder to construct a small pedestrian footbridge for $100,000. The contract contains a clause stating: 'For every day Builder is late, Builder shall pay $1,000,000 in damages.' Builder is 2 days late. The actual inconvenience to the city is minimal, perhaps $1,000 total.",
        q: "Is the liquidated damages clause enforceable?",
        opts: [
            "Yes, because sophisticated commercial entities are strictly bound to the terms of their negotiated contracts.",
            "Yes, because municipal contracts inherently demand rigid adherence to strict construction schedules.",
            "No, because the amount is grossly disproportionate to actual damages and functions as a punitive penalty.",
            "No, because liquidated damages clauses are unconstitutional in government contracts."
        ],
        ans: 2,
        exp: "Liquidated damages clauses are only enforceable if actual damages were difficult to estimate at formation AND the specified amount is a reasonable forecast of compensatory damages. A $1,000,000 per day penalty for a $100,000 bridge is grossly disproportionate to any actual harm, making it an unenforceable penalty clause."
    },
    {
        id: 25,
        topic: "Remedies / Expectation Damages Objective",
        fp: "City contracts with Builder to construct a small pedestrian footbridge for $100,000. The contract contains a clause stating: 'For every day Builder is late, Builder shall pay $1,000,000 in damages.' Builder is 2 days late. The actual inconvenience to the city is minimal, perhaps $1,000 total.",
        q: "Since the liquidated damages clause is struck down, what is the primary objective of the compensatory damages the court will award?",
        opts: [
            "Punitive damages, to deter future delays by commercial contractors.",
            "Restitution damages, to disgorge any profit the builder acquired by delaying performance.",
            "Reliance damages, to reimburse the city for initial zoning expenses.",
            "Actual expectation damages, to put the non-breaching party in the position they would have been in."
        ],
        ans: 3,
        exp: "When a liquidated damages clause is voided as a penalty, the aggrieved party is still entitled to their actual compensatory damages. The primary objective of contract damages is to award 'expectation damages,' which are designed to put the non-breaching party in the same economic position they would have been in had the contract been fully and properly performed."
    }
];