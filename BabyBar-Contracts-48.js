// BabyBar-Contracts-48.js
// Total Questions: 25
// Subject: Contracts (Common Law & UCC Article 2) ONLY
// Standard: Master Tier 5 / First-Year Law Students' Examination (Baby Bar) Benchmark
const examData = [
    {
        id: 1,
        topic: "Formation / UCC 2-205 Firm Offer",
        fp: "On March 1, a commercial bakery sent a signed, written letter to a flour supplier: 'We offer to buy 500 sacks of whole wheat flour at $20 per sack. We will hold this offer open until April 15.' On April 1, the market price of flour dropped to $15 per sack. The bakery telephoned the supplier and stated: 'We revoke our March 1 offer.' The supplier replied: 'You promised to keep it open until April 15. I accept your offer for 500 sacks at $20.' The bakery refused to purchase the flour at $20.",
        q: "Did the bakery effectively revoke its offer?",
        opts: [
            "Yes, because under the common law, an offeror may revoke an offer at any time prior to tender of cash.",
            "Yes, because a firm offer under UCC § 2-205 is irrevocable only if it is made by a merchant seller, not a buyer.",
            "No, because the bakery's signed writing explicitly promised that the offer would remain open until April 15.",
            "No, because under UCC § 2-205, the period of irrevocability for a firm offer cannot exceed three months."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-205, an offer by a merchant to buy or sell goods in a signed writing which by its terms gives assurance that it will be held open is not revocable, for lack of consideration, during the time stated. The bakery is a merchant, the offer was to buy goods, it was in a signed writing, and it assured the offer would be held open until April 15 (less than three months). Therefore, the offer was irrevocable. The revocation on April 1 was ineffective, and the supplier's acceptance created a binding contract. (A) is incorrect because UCC § 2-205 alters the common law rule of revocability. (B) is incorrect because UCC § 2-205 applies to an offer 'to buy or sell goods,' so it applies to merchant buyers as well as sellers. (D) is an accurate statement of law but does not explain why the revocation here (which occurred within the three months) was ineffective; (C) directly answers the question."
    },
    {
        id: 2,
        topic: "Consideration / Promissory Estoppel (Restatement 90)",
        fp: "An uncle promised to pay his niece $5,000 if she would refrain from purchasing a motorcycle until she turned 25. The niece, who was 21, orally agreed. The niece did not buy a motorcycle. When she turned 25, she asked her uncle for the $5,000. The uncle refused to pay, arguing that his promise was a mere gift and that the niece's failure to buy a motorcycle actually saved her money, meaning she suffered no detriment.",
        q: "Is the uncle's promise legally enforceable?",
        opts: [
            "No, because the niece did not suffer any actual economic detriment by refraining from buying a motorcycle.",
            "Yes, because forbearing from a legal right at the promisor's request constitutes valid consideration.",
            "No, because family promises are presumed to be gratuitous and require a signed writing to be enforceable.",
            "Yes, under the doctrine of promissory estoppel, because the niece relied on the promise to her financial detriment."
        ],
        ans: 1,
        exp: "(B) is the correct response. Consideration requires a bargained-for exchange involving a legal detriment to the promisee or a legal benefit to the promisor. A 'legal detriment' occurs when a promisee refrains from doing something they have a legal right to do. Because the niece was 21, she had a legal right to buy a motorcycle. Her forbearance from exercising this right at her uncle's request constitutes valid consideration, making the promise an enforceable bilateral contract (Hamer v. Sidway). (A) is incorrect because actual economic detriment is not required; legal detriment (forbearance of a right) is sufficient. (C) is incorrect because familial promises supported by consideration are enforceable, and this agreement is outside the Statute of Frauds. (D) is incorrect because there is actual bargained-for consideration, so the equitable doctrine of promissory estoppel is unnecessary."
    },
    {
        id: 3,
        topic: "Formation / Option Contract Rejection",
        fp: "A developer paid a landowner $1,000 for a 30-day written option to purchase a commercial lot for $500,000. Ten days into the option period, the developer discovered a different lot and emailed the landowner: 'I am rejecting the option and will not be buying your lot.' The landowner read the email but took no action. Five days later, the developer's other deal fell through, and he emailed the landowner: 'I have changed my mind. I exercise my option to buy the lot for $500,000.' The landowner refused to sell, claiming the earlier email terminated the option.",
        q: "Did the developer effectively exercise the option?",
        opts: [
            "Yes, because a rejection of an option contract does not terminate the power of acceptance unless the offeror materially relies on it.",
            "No, because the developer's rejection of the option contract operated as an immediate mutual rescission.",
            "Yes, because under the mailbox rule, an option exercise is effective upon dispatch, overriding a prior rejection.",
            "No, because an explicit rejection permanently terminates an offeree's power of acceptance under the common law."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under Restatement (Second) of Contracts § 37, the power of acceptance under an option contract is not terminated by rejection or counter-offer, by revocation, or by death or incapacity of the offeror, unless the requirements are met for the discharge of a contractual duty. Because an option is a completed contract to hold an offer open, an offeree's rejection does not terminate the option unless the offeror materially changes position in justifiable reliance on the rejection. Here, the landowner took no action in reliance. Thus, the developer's subsequent exercise within the 30-day period was effective. (B) is incorrect because a unilateral rejection is not a mutual rescission. (C) is incorrect because the mailbox rule does not apply to option contracts (acceptance is effective only upon receipt), but here receipt occurred within the option period. (D) is incorrect because the traditional termination-by-rejection rule does not apply to paid option contracts."
    },
    {
        id: 4,
        topic: "Defenses / Mutual Mistake in Basic Assumption",
        fp: "A homeowner sold an old violin to a musician for $200. Both parties believed it was a low-quality student instrument. After the purchase, the musician took it to an appraiser, who determined it was a rare 18th-century Italian masterpiece worth $150,000. The homeowner sued to rescind the contract on the grounds of mutual mistake.",
        q: "Will the homeowner succeed in rescinding the contract?",
        opts: [
            "Yes, because the contract was unconscionable due to the gross disparity between the purchase price and actual value.",
            "No, because a unilateral mistake by a merchant cannot void a commercial sale of consumer goods.",
            "Yes, because both parties were mutually mistaken about a basic assumption of fact that materially affected the agreed exchange.",
            "No, because the homeowner consciously bore the risk of ignorance by selling the violin without an expert appraisal."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under Restatement (Second) of Contracts § 154(b), a party bears the risk of a mistake when he is aware, at the time the contract is made, that he has only limited knowledge with respect to the facts to which the mistake relates but treats his limited knowledge as sufficient (conscious ignorance). By selling an antique instrument without obtaining an appraisal, the homeowner assumed the risk that it might be far more valuable than believed. Because the homeowner bore the risk of the mistake, he cannot void the contract under the doctrine of mutual mistake. (A) is incorrect because unconscionability requires both procedural and substantive unfairness at formation; an unexpected windfall is not unconscionability. (B) is incorrect because the mistake was mutual, not unilateral, and neither party was necessarily a merchant. (C) is incorrect because although both parties were mistaken about a basic assumption, the adversely affected party (the homeowner) bore the risk of that mistake."
    },
    {
        id: 5,
        topic: "Defenses / Unilateral Mistake Known to Other Party",
        fp: "A general contractor solicited bids for a masonry project. A subcontractor submitted a bid for $45,000. The other three bids were $110,000, $115,000, and $120,000. The subcontractor had accidentally failed to include the cost of materials in its bid spreadsheet. Recognizing the $45,000 bid was impossibly low for a job of this scope, the general contractor immediately sent a signed acceptance. The subcontractor discovered the error an hour later and promptly notified the general contractor of the withdrawal of the bid.",
        q: "Can the subcontractor avoid the contract on the ground of unilateral mistake?",
        opts: [
            "Yes, because the general contractor knew or had reason to know of the palpable clerical error, making enforcement unconscionable.",
            "No, because unilateral errors caused by a contractor's own clerical negligence cannot excuse contractual obligations.",
            "No, because the general contractor incorporated the subcontractor's bid into a binding prime bid.",
            "Yes, under the doctrine of supervening commercial impracticability due to extreme financial hardship."
        ],
        ans: 0,
        exp: "(A) is the correct response. A unilateral mistake makes a contract voidable where the other party knew or had reason to know of the mistake (Restatement § 153(b)). Under the 'palpable error' doctrine, an offeree cannot 'snap up' an offer that contains an obvious, glaring arithmetic or clerical mistake. The massive disparity between the $45,000 bid and the other bids (over $110,000) gave the experienced general contractor reason to know of the mistake. Therefore, the subcontractor can rescind. (B) is incorrect because a known unilateral mistake is a standard ground for avoidance, overcoming the mistaken party's negligence. (C) is incorrect because the general contractor's reliance is not justifiable if he had reason to know the bid was a mistake (defeating promissory estoppel under Drennan v. Star Paving). (D) is incorrect because the issue is a mistake at formation, not supervening impracticability."
    },
    {
        id: 6,
        topic: "Defenses / Economic Duress",
        fp: "A trucking company contracted to transport perishable seafood for a distributor for $5,000. On the day of pickup, the trucking company manager told the distributor: 'We won't load the seafood unless you sign an agreement to pay $8,000 instead of $5,000.' The distributor tried to find another carrier, but none were available on such short notice, and the seafood would spoil within 24 hours. To save the cargo, the distributor signed the agreement for $8,000. After the delivery, the distributor paid $5,000 and refused to pay the additional $3,000.",
        q: "Is the distributor bound by the agreement to pay the additional $3,000?",
        opts: [
            "Yes, because commercial parties possess unrestricted freedom of contract to modify shipping rates.",
            "No, because the modification was induced by an improper threat that left the distributor with no reasonable alternative.",
            "No, because modifications of commercial shipping contracts require independent consideration in cash.",
            "Yes, because the distributor signed the writing voluntarily after evaluating its business interests."
        ],
        ans: 1,
        exp: "(B) is the correct response. A contract or modification is voidable for economic duress if a party's assent is induced by an improper threat that leaves the victim no reasonable alternative (Restatement § 175). Threatening to breach an existing contract without commercial justification is an improper threat. Because the seafood would spoil and no substitute carriers were available, the distributor had no reasonable alternative but to sign the modification to mitigate catastrophic loss. The modification was coerced and is voidable. (A) is incorrect because freedom of contract is bounded by the defense of duress. (C) is incorrect because under UCC § 2-209(1), modifications need no consideration, but they must be made in good faith; extorting money under threat of breach violates good faith. (D) is incorrect because signing under severe coercive pressure without practical alternatives is not legally voluntary."
    },
    {
        id: 7,
        topic: "Consideration / Illusory Promises vs Mutuality",
        fp: "A manufacturer and a retailer entered into a signed written agreement stating: 'Manufacturer will supply Retailer with all the Grade-A widgets that Retailer may desire to order over the next year at $10 per widget.' Three months later, the market price of widgets doubled. The retailer submitted an order for 1,000 widgets. The manufacturer refused to fulfill the order, declaring the agreement invalid.",
        q: "Is the manufacturer liable to the retailer for breach of contract?",
        opts: [
            "Yes, because the agreement was embodied in a signed writing with a fixed price term.",
            "Yes, because the agreement constituted a valid requirements contract under UCC § 2-306.",
            "No, because commercial agreements for the sale of goods over $500 require consideration in cash.",
            "No, because the retailer's promise to buy only what it 'may desire to order' was illusory, rendering the agreement void for lack of mutuality."
        ],
        ans: 3,
        exp: "(D) is the correct response. A promise to buy only what the promisor 'may desire to order' reserves complete discretion to the buyer, making the promise illusory and unenforceable (Restatement § 77). An illusory promise does not bind the promisor to any actual commitment. Because the retailer did not promise to buy all of its actual requirements in good faith, but merely what it 'desired' to order, the retailer provided no consideration. The agreement lacked mutuality of obligation and operated merely as a revocable continuing offer, which the manufacturer lawfully revoked. (A) is incorrect because a writing and a price term cannot cure a total lack of consideration. (B) is incorrect because a valid requirements contract requires a commitment to buy all actual good-faith requirements, not merely what the buyer desires to order. (C) is incorrect because consideration need not be in cash."
    },
    {
        id: 8,
        topic: "Statute of Frauds / Suretyship Main Purpose Doctrine",
        fp: "A homeowner hired a contractor to build a garage. The contractor purchased lumber on credit from a lumberyard. When the contractor failed to pay his $5,000 lumber bill, the lumberyard refused to deliver the final load of materials needed to finish the garage. The homeowner called the lumberyard and said: 'Deliver the final load so my garage can be finished on time; if the contractor doesn't pay his $5,000 bill, I will pay it myself.' Relying on this, the lumberyard delivered the materials. The contractor defaulted. The homeowner refused to pay, asserting the Statute of Frauds.",
        q: "Is the homeowner's oral promise enforceable by the lumberyard?",
        opts: [
            "No, because a collateral promise to answer for the debt of another must be in a signed writing.",
            "Yes, under the main purpose rule, because the homeowner's primary objective was to secure completion of his garage.",
            "Yes, but only to the extent of the new deliveries, excluding the pre-existing $5,000 balance.",
            "No, because oral suretyship agreements are void per se under UCC § 2-201."
        ],
        ans: 1,
        exp: "(B) is the correct response. The homeowner's promise falls within the 'main purpose' (or leading object) exception to the suretyship Statute of Frauds (Restatement § 116). A collateral promise to answer for the debt of another generally requires a signed writing. However, if the promisor's chief purpose in making the promise is to advance a substantial pecuniary or business interest of his own, the promise is treated as an original undertaking outside the Statute of Frauds. The homeowner promised to pay the bill primarily to secure the final delivery and ensure his garage was completed on time. Because the promise was motivated by advancing his own direct economic interest, it is enforceable without a writing. (A) is incorrect because it ignores the main purpose exception. (C) is incorrect because the main purpose doctrine encompasses pre-existing debts if securing performance advances the promisor's interest. (D) is incorrect because suretyship contracts are governed by common law, not UCC § 2-201."
    },
    {
        id: 9,
        topic: "Statute of Frauds / Land Sale Part Performance",
        fp: "A buyer and seller orally agreed to the sale of a residential lot for $40,000. The buyer gave the seller a check for $10,000, which the seller cashed. With the seller's permission, the buyer took possession of the lot and spent $15,000 installing a concrete foundation and utility hookups. The seller then received a higher offer from a third party and refused to convey the property, asserting the Statute of Frauds.",
        q: "Can the buyer successfully enforce the oral land sale contract?",
        opts: [
            "Yes, because under the part performance exception, taking possession, paying part of the price, and making substantial permanent improvements removes the bar.",
            "No, because contracts for the sale of real estate must be in a signed writing without exception.",
            "Yes, because the seller's endorsement of the $10,000 check satisfied the Statute of Frauds memorandum requirement.",
            "No, because the part performance exception requires payment of 100% of the purchase price."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under the equitable part performance exception to the Statute of Frauds, an oral contract for the sale of land will be enforced if the buyer, in justifiable reliance on the contract, takes possession of the property and either pays part of the purchase price or makes valuable, permanent improvements. The buyer satisfied all three criteria: paying a $10,000 down payment, taking actual physical possession with consent, and making $15,000 in permanent improvements (foundation and utilities). These acts unequivocally refer to the contract of sale, removing the agreement from the Statute of Frauds and entitling the buyer to specific performance. (B) is incorrect because part performance is a universally recognized exception. (C) is incorrect because a check endorsement without essential terms (description of land, price) does not constitute a sufficient memorandum. (D) is incorrect because full payment is never required when accompanied by possession and permanent improvements."
    },
    {
        id: 10,
        topic: "Parol Evidence / Consistent Additional Terms",
        fp: "A landlord and a commercial tenant signed a lease for a retail storefront. The lease specified the rent, duration, and maintenance duties, but contained no merger clause and was silent regarding parking spaces. Prior to signing, the landlord orally agreed that the tenant would have exclusive use of two parking spaces behind the building. When the tenant moved in, the landlord denied him the spaces. The tenant sued, offering evidence of the oral parking agreement. The landlord objected under the Parol Evidence Rule.",
        q: "Is the oral agreement regarding the parking spaces admissible?",
        opts: [
            "No, because the written contract set forth all the essential obligations of the parties.",
            "Yes, because extrinsic evidence is always admissible to add duties to a written real estate lease.",
            "Yes, because the writing is a partial integration and the oral term is a consistent additional term.",
            "No, because the oral condition directly contradicts the express payment covenants in the writing."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under the Parol Evidence Rule, where a writing is a final expression of the terms it includes, but is not completely integrated (i.e., not a complete and exclusive statement of the entire agreement), evidence of prior agreements that contradict the writing is barred, but evidence of consistent additional terms is permitted (Restatement § 216). The lease lacked a merger clause and was completely silent as to parking. The prior oral agreement allocating two parking spaces supplements the writing without contradicting any express term. Therefore, the writing is a partial integration, and the consistent additional term is admissible. (A) is incorrect because the omission of a term in a partial integration allows consistent extrinsic supplementation. (B) is incorrect because extrinsic evidence is not 'always' admissible; it is barred if the contract is completely integrated or if the term is contradictory. (D) is incorrect because adding a term about parking does not contradict a covenant to pay rent."
    },
    {
        id: 11,
        topic: "Formation / UCC 2-207 Additional Term (Material Alteration)",
        fp: "A bakery mailed a purchase order to a supplier for 100 bags of sugar at $20 each. The purchase order contained no provisions regarding dispute resolution. The supplier mailed back a signed acknowledgment form that agreed to the quantity and price, but added a pre-printed term stating: 'Any dispute regarding this contract shall be submitted to binding arbitration.' Both parties were merchants. The bakery read the form, made no objection, and accepted the sugar. Later, the bakery sued the supplier for breach of warranty over contaminated sugar. The supplier moved to compel arbitration.",
        q: "Did the arbitration clause become part of the contract under UCC § 2-207?",
        opts: [
            "Yes, because between merchants, additional terms automatically become part of the contract unless objected to.",
            "No, because a mandatory arbitration clause is a material alteration that does not become part of the contract without express assent.",
            "Yes, because accepting and paying for the shipment operated as an express assent to all terms on the supplier's form.",
            "No, because the supplier's acknowledgment operated as an invalid counteroffer that prevented contract formation."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under UCC § 2-207(2), between merchants, additional terms become part of the contract unless they materially alter it. Official Comment 4 explicitly identifies mandatory arbitration clauses as textbook examples of clauses that introduce unreasonable surprise and hardship, constituting material alterations as a matter of law. A material alteration drops out of the contract unless the offeror expressly agrees to its inclusion. Because the bakery never expressly agreed to arbitrate, the clause never became part of the contract. (A) is incorrect because the automatic inclusion rule explicitly excludes terms that materially alter the deal. (C) is incorrect because taking delivery under § 2-207 forms a contract on the agreed terms plus gap-fillers; it does not constitute express assent to material alterations. (D) is incorrect because UCC § 2-207(1) forms a binding contract on the writings despite additional terms unless acceptance is expressly made conditional on assent."
    },
    {
        id: 12,
        topic: "Performance / Express Condition of Personal Satisfaction",
        fp: "A wealthy art patron entered into a written contract with an artist to paint a portrait of the patron's wife for $10,000. The contract stated: 'It is an express condition precedent to Patron's obligation to pay that the finished portrait shall meet with the personal satisfaction of Patron.' The artist painted a technically brilliant portrait. However, upon viewing it, the patron genuinely disliked the portrayal of the wife's smile, stating: 'It doesn't capture her warmth; I will not pay.' The patron acted in subjective good faith. The artist sued for the $10,000 contract price.",
        q: "Is the patron legally obligated to pay for the portrait?",
        opts: [
            "Yes, because the artist substantially performed in full conformity with technical artistic standards.",
            "Yes, because where a condition calls for satisfaction, the law applies an objective reasonable-person standard.",
            "No, because contracts conditioning payment on personal satisfaction are illusory and void for lack of mutuality.",
            "No, because contracts involving personal aesthetics enforce an express condition of subjective personal satisfaction, provided dissatisfaction is in good faith."
        ],
        ans: 3,
        exp: "(D) is the correct response. In contracts involving personal taste, fancy, or aesthetic judgment, an express condition of personal satisfaction is governed by a subjective standard (Restatement § 228). When a contract conditions performance on personal satisfaction, an objective reasonable-person standard applies to commercial or utility contracts (e.g., building a wall). However, where the contract involves personal aesthetics or art, the subjective standard controls: the promisor's personal, subjective dissatisfaction excuses payment, provided the dissatisfaction is genuine and in good faith. Because the patron was genuinely dissatisfied with the aesthetics, the condition failed, discharging the duty to pay. (A) is incorrect because substantial performance cannot override the failure of an express aesthetic condition. (B) is incorrect because the objective standard does not apply to contracts of personal art. (C) is incorrect because the implied covenant of good-faith evaluation supplies mutuality of obligation."
    },
    {
        id: 13,
        topic: "Breach / Anticipatory Repudiation & Retraction",
        fp: "A manufacturer contracted to build 50 industrial fans for a buyer for $50,000, delivery on August 1. On May 1, the manufacturer sent a letter stating: 'Due to metal shortages, we will not fulfill our contract.' On May 5, the buyer contacted competing builders to ask about pricing, but signed no contracts and sent no communication to the manufacturer. On May 15, the manufacturer secured the metal and emailed: 'We retract our letter of May 1; we will deliver all 50 fans on August 1.' The buyer received the email on May 15. On May 20, the buyer executed a purchase contract with a competitor for $60,000 and sued the original manufacturer for $10,000 in cover damages.",
        q: "Was the manufacturer's May 15 retraction legally effective under UCC Article 2?",
        opts: [
            "Yes, because the retraction was received before the buyer canceled the contract, filed suit, or materially changed position in reliance.",
            "No, because the buyer materially changed its position by soliciting formal price quotations from competing builders.",
            "No, because an anticipatory repudiation operates as an immediate total breach that terminates all rights of retraction.",
            "Yes, because under the UCC, an anticipatory repudiation can be retracted at any time up until the date scheduled for delivery."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under UCC § 2-611(1), a repudiating party can retract an anticipatory repudiation until his next performance is due UNLESS the aggrieved party has, since the repudiation: (a) canceled the contract, (b) materially changed position in reliance on the repudiation, or (c) otherwise indicated that he considers the repudiation final. Merely inquiring about market prices or soliciting quotations without entering into a binding cover contract or communicating cancellation does not constitute a material change of position. Because the buyer took no binding action and sent no notification of finality prior to receiving the retraction on May 15, the manufacturer's retraction was legally effective, reinstating the contract. (B) is incorrect because soliciting bids without binding commitment is not a material change of position. (C) is incorrect because an anticipatory repudiation is subject to retraction until reliance, cancellation, or suit. (D) is incorrect because the right to retract terminates immediately upon reliance, cancellation, or suit."
    },
    {
        id: 14,
        topic: "Remedies / Buyer's Cover Damages (UCC 2-712)",
        fp: "A bakery contracted to purchase 100 sacks of specialized pastry flour from a milling company at $30 per sack ($3,000 total), delivery scheduled for October 1. On September 20, the milling company repudiated the contract, stating it could not deliver. On September 20, the market price of comparable flour was $32 per sack. On September 22, the bakery reasonably and in good faith purchased 100 sacks of identical flour from another local supplier for $35 per sack ($3,500 total). By October 1, the market price of flour had climbed to $40 per sack. The bakery sued the milling company for breach of contract under UCC Article 2.",
        q: "What amount of damages is the bakery entitled to recover?",
        opts: [
            "$200, representing the difference between the market price at repudiation and the contract price.",
            "$1,000, representing the difference between the market price on the delivery date and the contract price.",
            "$800, representing the seller's unjust profits realized from the repudiation.",
            "$500, representing the difference between the actual cover price ($3,500) and the contract price ($3,000)."
        ],
        ans: 3,
        exp: "(D) is the correct response. Under UCC § 2-712, an aggrieved buyer who effectuates a proper commercial cover recovers the difference between the cost of cover and the contract price. After a breach or anticipatory repudiation by the seller, the buyer may 'cover' by making in good faith and without unreasonable delay any reasonable purchase of goods in substitution. Cover is the primary preferred remedy under the UCC. Because the bakery made a prompt, reasonable cover purchase at $35 per sack, its damages are measured strictly under § 2-712 ($3,500 cover price minus $3,000 contract price = $500). (A) is incorrect because the market-price-at-repudiation formula under UCC § 2-713 applies only when the buyer fails to cover. (B) is incorrect because an aggrieved buyer who covers cannot elect market-price damages to capture a market surge. (C) is incorrect because contract damages are compensatory, not based on disgorgement of seller profits."
    },
    {
        id: 15,
        topic: "Remedies / Lost Volume Seller Overhead Deduction",
        fp: "A retail boat dealer contracted to sell a new factory-standard speedboat to a customer for $50,000. The wholesale cost from the manufacturer was $40,000. The customer unjustifiably repudiated the contract prior to delivery. The dealer resold the exact same boat to another buyer for $50,000. The dealer had an unlimited supply of boats from the manufacturer. In a suit against the customer for lost profits under UCC § 2-708(2), the customer argued that the dealer's $10,000 gross margin must be reduced by allocated fixed overhead costs (rent, utilities) of $3,000, limiting recovery to $7,000.",
        q: "What amount of lost profit is the dealer entitled to recover?",
        opts: [
            "Nothing, because the dealer resold the boat for the contract price.",
            "$10,000, because under UCC § 2-708(2), a lost volume seller recovers profit including reasonable overhead without deduction for fixed expenses.",
            "$7,000, representing net operating profit after deducting allocated overhead.",
            "$50,000, representing the entire contract price of the boat."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under UCC § 2-708(2), the measure of damages for a lost volume seller is 'the profit (including reasonable overhead) which the seller would have made from full performance by the buyer.' Fixed overhead expenses (rent, property taxes) are incurred by the merchant regardless of whether an individual contract is performed; allocating fixed costs as a deduction against the gross margin would under-compensate the seller. Therefore, the dealer recovers the full gross profit margin of $10,000 ($50,000 contract price minus $40,000 wholesale cost) without deduction for the $3,000 allocated overhead. (A) is incorrect because a lost volume seller loses the opportunity to make an additional sale. (C) is incorrect because UCC § 2-708(2) expressly bars the deduction of fixed overhead. (D) is incorrect because an action for the price under UCC § 2-709 does not apply when the seller retains the goods and can resell them."
    },
    {
        id: 16,
        topic: "Remedies / Specific Performance & Uniqueness",
        fp: "An investor entered into a signed written contract to purchase a historic 19th-century Victorian commercial building from an owner for $800,000, closing scheduled for July 1. On June 15, the owner notified the investor that he would not convey the building. The investor tendered the $800,000 on July 1, but the owner refused to deliver the deed. The investor brought an action seeking specific performance. The owner demonstrated that there were several modern office buildings of comparable square footage available for purchase nearby, arguing that money damages provided an adequate legal remedy.",
        q: "Is the investor entitled to a decree of specific performance?",
        opts: [
            "Yes, because real property is presumed unique as a matter of law, rendering legal damages inadequate.",
            "No, because modern commercial office buildings were available nearby, providing an adequate substitute.",
            "No, because specific performance is an extraordinary equitable remedy restricted to residential dwellings.",
            "Yes, but only if the investor proves that the owner acted with intentional malice in breaching the agreement."
        ],
        ans: 0,
        exp: "(A) is the correct response. Under established equity jurisprudence and Restatement (Second) of Contracts § 360, every parcel of real property is deemed unique as a matter of law, making money damages inadequate. Specific performance is granted when legal remedies are inadequate to put the injured party in the position performance would have provided. Because land is fixed in location and unique in physical attributes, equity conclusively presumes that land is unique, entitling an aggrieved purchaser of real estate to specific performance of a contract of conveyance as a matter of course. The availability of commercial office space nearby does not eliminate the uniqueness of this specific historic parcel. (B) is incorrect because modern buildings are not an adequate substitute for unique real property. (C) is incorrect because specific performance applies to commercial and residential land alike. (D) is incorrect because specific performance requires a valid contract and an inadequate legal remedy; proof of malice is not required."
    },
    {
        id: 17,
        topic: "Remedies / Restitution in Favor of Breaching Buyer (UCC 2-718)",
        fp: "A consumer entered into a written contract to purchase an antique bedroom furniture set from an antique dealer for $5,000, paying a cash down payment deposit of $1,500. The contract contained no liquidated damages clause. Before the delivery date, the consumer unjustifiably repudiated the contract and refused to accept or pay for the furniture. The dealer incurred no incidental expenses, and two days later resold the identical furniture set to another customer at the full contract price of $5,000. The dealer suffered zero actual damages. When the consumer demanded the return of his $1,500 down payment, the dealer refused, claiming the right to retain the entire deposit.",
        q: "What amount of the down payment is the dealer legally entitled to retain under UCC § 2-718(2)?",
        opts: [
            "$1,500, because a buyer who willfully repudiates a contract of sale forfeits all rights to a down payment.",
            "Zero, because the dealer resold the goods at the full contract price and suffered zero actual damages.",
            "$500, because in the absence of a liquidated damages clause, the seller's statutory retention is limited to 20% of the contract price or $500, whichever is smaller.",
            "$1,000, representing 20% of the total contract price of the furniture."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under UCC § 2-718(2)(b), a seller may retain only 20% of the contract price or $500, whichever is smaller, when the buyer breaches in the absence of a liquidated damages clause. Where the seller justifiably withholds delivery because of the buyer's breach, the buyer is entitled to restitution of any amount by which the sum of his payments exceeds 'twenty per cent of the value of the total performance for which the buyer is obligated under the contract or $500, whichever is smaller.' The contract price was $5,000. Twenty percent of $5,000 is $1,000. Because $500 is smaller than $1,000, the statutory ceiling on the dealer's retention is $500. The dealer must refund the remaining $1,000 to the consumer. (A) is incorrect because the UCC rejects common law deposit forfeiture. (B) is incorrect because § 2-718(2)(b) grants the seller a statutory minimum retention even if actual damages are zero. (D) is incorrect because $500 is smaller than $1,000."
    },
    {
        id: 18,
        topic: "Remedies / Liquidated Damages Reasonableness Test",
        fp: "A developer contracted with a paving company to pave a parking lot for a medical clinic for $50,000, completion due by September 1. The contract stated: 'If Paving Company fails to complete the paving by September 1, it shall pay Developer, as liquidated damages, $1,000 for each calendar day of delay.' At the time of contracting, both parties anticipated that delay would force the clinic to rent auxiliary gravel parking at an estimated cost of $900 to $1,100 per day. The paving company completed the lot on September 6 (five days late). The developer incurred $5,200 in actual rental costs and withheld $5,000 from the final payment. The paving company sued to recover the $5,000, claiming it was an unenforceable penalty.",
        q: "Is the liquidated damages clause enforceable against the paving company?",
        opts: [
            "No, because liquidated damages clauses in construction contracts are disfavored as against public policy.",
            "Yes, because the stipulated amount was a reasonable forecast of anticipated harm that was difficult to estimate at the time of contracting.",
            "No, because the developer's actual damages ($5,200) exceeded the liquidated amount ($5,000).",
            "Yes, but only if the developer proves that the paving company acted with intentional disregard of the completion deadline."
        ],
        ans: 1,
        exp: "(B) is the correct response. Liquidated damages provisions are enforceable if: (1) the damages resulting from breach are difficult to estimate or ascertain at contract formation; and (2) the amount stipulated is a reasonable forecast of the just compensation for the harm caused by the breach (Restatement § 356(1)). Here, daily delay damages involving shuttle logistics and patient disruption were uncertain, and the stipulated $1,000 per day matched the anticipated daily loss ($900 to $1,100) and was virtually identical to the actual damages incurred ($5,200 for 5 days). The clause is reasonable and enforceable, not a penalty. (A) is incorrect because reasonable liquidated damages clauses are favored in construction contracts. (C) is incorrect because an enforceable liquidated damages clause binds the parties even if actual damages vary slightly from the forecast. (D) is incorrect because liquidated damages enforcement requires reasonableness, not proof of intentional fault."
    },
    {
        id: 19,
        topic: "Third-Party Beneficiaries / Vesting of Donee Beneficiary Rights",
        fp: "An uncle contracted with a builder to construct a pool in the backyard of the uncle's daughter for $30,000. The contract explicitly stated the pool was a birthday gift for the daughter. On June 5, the daughter learned of the contract, visited the builder at the site, and said: 'I am so excited about the pool; thank you.' On June 10, the uncle had an argument with his daughter and signed a mutual agreement with the builder rescinding the contract. The daughter sued the builder to compel performance.",
        q: "Can the daughter enforce the pool construction contract?",
        opts: [
            "No, because the original contracting parties retain the absolute power to modify or rescind their agreement at any time prior to completion.",
            "No, because the daughter gave no consideration to either the uncle or the builder.",
            "Yes, because the daughter's rights as an intended third-party beneficiary vested when she manifested assent to the contract.",
            "Yes, but only if the daughter detrimentally changed her position in reliance on the gift."
        ],
        ans: 2,
        exp: "(C) is the correct response. Under Restatement (Second) of Contracts § 311(3), the power of the promisor and promisee to modify or discharge a duty to an intended beneficiary terminates when the beneficiary: (1) materially changes position in justifiable reliance; (2) brings suit; or (3) manifests assent to it at the request of the promisor or promisee. The daughter was an intended donee beneficiary named in the contract. Her personal visit to the job site manifesting joy and assent to the builder before the attempted rescission vested her rights. Once vested, the contract cannot be modified or rescinded without her consent. (A) is incorrect because the power of the original parties to rescind terminates upon vesting. (B) is incorrect because third-party beneficiaries need not supply consideration. (D) is incorrect because manifestation of assent is an independent ground for vesting; detrimental reliance is not strictly required."
    },
    {
        id: 20,
        topic: "Assignment & Delegation / Novation vs Delegation",
        fp: "A master tailor contracted with an opera company to hand-sew ten period costumes for $20,000. In July, the tailor was offered a film studio job. The tailor proposed that an equally skilled, licensed master seamstress take over the contract. The opera company director agreed, and the tailor, the seamstress, and the opera company signed a three-party writing stating: 'Seamstress agrees to assume all duties under the July contract, Opera Company agrees to pay Seamstress the $20,000 fee, and Tailor is hereby released from all further obligations.' The seamstress delivered defective costumes late, forcing the opera company to cancel the performance. The opera company sued the original tailor for breach.",
        q: "Is the original tailor liable to the opera company for the breach?",
        opts: [
            "Yes, because a delegating obligor remains secondarily liable as a surety unless supported by fresh consideration.",
            "Yes, because contracts involving personal artistic skills cannot be delegated under common law.",
            "No, because an assignee takes subject to all defenses existing against the assignor.",
            "No, because the three-party agreement constituted a novation that completely discharged the tailor from all liability."
        ],
        ans: 3,
        exp: "(D) is the correct response. The three-party agreement was a valid novation under Restatement (Second) of Contracts § 280. A novation is a substituted contract that includes as a party one who was neither the obligor nor the obligee of the original duty. A novation requires: (1) a previous valid obligation; (2) an agreement of all parties to a new contract; (3) the extinguishment of the old contractual obligation; and (4) the validity of the new contract. Unlike a simple delegation (where the delegating party remains liable as a surety), the signed three-party agreement explicitly released the tailor from all obligations and substituted the seamstress. This express release discharged the tailor from all primary and secondary liability. (A) is incorrect because mutual agreement of all three parties to substitute an obligor and release the original party supplies valid consideration. (B) is incorrect because while personal service duties cannot be unilaterally delegated, they can be transferred with the obligee's consent via novation. (C) is incorrect because the issue involves a novation of duties, not an assignment of claims."
    },
    {
        id: 21,
        topic: "Performance / Adequate Assurances (UCC 2-609)",
        fp: "A dairy farm contracted with a feed supplier to purchase 50 tons of organic grain per month for two years. One year into the contract, the dairy farm's purchasing agent read an investigative report stating that the feed supplier's primary grain elevator had suffered a catastrophic collapse and that the supplier was defaulting on commercial contracts. The dairy farm immediately sent a signed, written letter to the supplier demanding adequate assurance of due performance within 30 days under UCC § 2-609. The supplier received the letter on August 5. The supplier made no response and offered no communication for 35 days. On September 10, the dairy farm contracted with another feed mill for substitute grain and canceled the original contract. The original supplier then tendered 50 tons of grain and sued the dairy farm for breach.",
        q: "Did the dairy farm have the legal right to cancel the contract and purchase substitute grain?",
        opts: [
            "No, because the dairy farm had no right to suspend performance until the supplier actually missed a scheduled monthly delivery.",
            "Yes, because the supplier's failure to provide adequate assurance of performance within a reasonable time not exceeding 30 days operated as an anticipatory repudiation.",
            "No, because demands for adequate assurance under the UCC require an affidavit certified by an independent commodities broker.",
            "Yes, because requirements and output feed agreements are terminable at will by either party upon 30 days' notice."
        ],
        ans: 1,
        exp: "(B) is the correct response. The supplier's failure to provide adequate assurance within 30 days operated as an anticipatory repudiation under UCC § 2-609(4). When reasonable grounds for insecurity arise with respect to the performance of either party, the other may in writing demand adequate assurance of due performance. Under UCC § 2-609(4), 'After receipt of a justified demand failure to provide within a reasonable time not exceeding thirty days such assurance of due performance as is adequate under the circumstances of the particular case is a repudiation of the contract.' The catastrophic silo collapse provided reasonable grounds for insecurity. Because the supplier remained silent for 35 days (exceeding the 30-day statutory ceiling), the failure operated as an anticipatory repudiation, authorizing the dairy farm to cancel and cover. (A) is incorrect because an aggrieved party is not required to wait for an actual delivery failure once an anticipatory repudiation occurs. (C) is incorrect because UCC § 2-609 requires only a written demand, not an expert affidavit. (D) is incorrect because fixed-term agricultural supply contracts are not terminable at will."
    },
    {
        id: 22,
        topic: "Statute of Frauds / UCC 2-201 Judicial Admission Exception",
        fp: "A restaurant owner orally agreed over the telephone to purchase 100 cases of specialty olive oil from an importer for $8,000 ($80 per case). The importer did not send a written confirmation, and no writing was signed by the restaurant owner. When the importer tendered the 100 cases, the restaurant owner refused to accept or pay for them, asserting the Statute of Frauds. The importer sued for breach of contract. In his formal, signed answer filed in court and during his subsequent deposition under oath, the restaurant owner admitted: 'I had a telephone conversation with the importer and orally agreed to buy 100 cases of olive oil at $80 per case, but our agreement was oral and is unenforceable under the Statute of Frauds.'",
        q: "Is the oral contract enforceable against the restaurant owner under UCC Article 2?",
        opts: [
            "No, because contracts for the sale of goods for $500 or more require an extrinsic signed writing executed prior to litigation.",
            "No, because a party may plead the Statute of Frauds as an affirmative defense without forfeiting its protections through factual admissions.",
            "Yes, because oral contracts between restaurant merchants are exempt from the Statute of Frauds.",
            "Yes, because under UCC § 2-201(3)(b), an oral contract is enforceable if the party against whom enforcement is sought admits in his pleading or testimony that a contract was made."
        ],
        ans: 3,
        exp: "(D) is the correct response. The restaurant owner's formal admission in his pleading and deposition satisfied the judicial admission exception of UCC § 2-201(3)(b). Under UCC § 2-201(3)(b), an oral contract for the sale of goods for $500 or more that fails to satisfy the writing requirement is nonetheless enforceable 'if the party against whom enforcement is sought admits in his pleading, testimony or otherwise in court that a contract for sale was made' (enforceable up to the quantity admitted). The restaurant owner formally admitted in his court pleading and deposition testimony that he agreed to purchase 100 cases at $80 per case. This in-court admission removes the Statute of Frauds bar, making the oral contract fully enforceable for all 100 cases. (A) is incorrect because UCC § 2-201(3)(b) is an express statutory exception to the writing requirement. (B) is incorrect because admitting the contract in court waives the Statute of Frauds defense under the UCC. (C) is incorrect because merchants are fully subject to the Statute of Frauds."
    },
    {
        id: 23,
        topic: "Excuse / Impracticability Due to Government Regulation",
        fp: "A fireworks manufacturer entered into a written contract with an amusement park to design, manufacture, and deliver 500 commercial aerial display mortars for $100,000, delivery scheduled on June 15. On May 1, the federal Consumer Product Safety Commission enacted an emergency federal administrative regulation with immediate nationwide effect that banned the manufacture, transportation, sale, and commercial use of the specific chemical flash powders required to fabricate the contracted display mortars. Fulfilling the contract became illegal under federal criminal law. The manufacturer notified the amusement park that its performance was discharged. The amusement park sued for breach of contract.",
        q: "Is the manufacturer's performance excused under contract law?",
        opts: [
            "Yes, under the doctrine of supervening illegality and objective impossibility under Restatement (Second) of Contracts § 264.",
            "No, because commercial manufacturers assume the risk of administrative regulatory changes.",
            "No, because the amusement park did not consent to a modification or discharge of the contract.",
            "Yes, but only under UCC § 2-615 if the manufacturer pays reliance damages to the amusement park."
        ],
        ans: 0,
        exp: "(A) is the correct response. Supervening government regulation making performance illegal discharges contractual duties under Restatement (Second) of Contracts § 264 and UCC § 2-615. Under Restatement § 264 and UCC § 2-615(a), if the performance of a duty is made impracticable or illegal by having to comply with a supervening governmental regulation or order, the non-occurrence of which was a basic assumption on which the contract was made, the duty is discharged under the doctrine of supervening illegality/impossibility. When federal regulators banned the chemical flash powder required to make the mortars, physical and legal performance became objectively impossible. The manufacturer is fully excused from performance and is not liable for breach damages. (B) is incorrect because unprecedented, emergency criminal statutory bans are not ordinary assumed business risks. (C) is incorrect because discharge by operation of law occurs without requiring the obligee's consent. (D) is incorrect because discharge for supervening illegality excuses performance without requiring payment of reliance damages."
    },
    {
        id: 24,
        topic: "Remedies / Specific Performance in Output/Requirements Contracts",
        fp: "An electric power utility entered into a long-term, ten-year written output contract with a coal mining company. The contract provided: 'Utility agrees to purchase, and Mining Company agrees to sell, all low-sulfur metallurgical compliance coal produced by Mining Company at its Blue Mountain Mine, estimated at 1,000,000 tons per year, at a fixed price of $40 per ton.' Five years into the contract, an international energy crisis caused spot market coal prices to surge to $120 per ton. The mining company repudiated the contract, refusing to deliver any more coal to the utility, and began selling its output on the spot market. Because global supplies were committed under existing long-term contracts, low-sulfur coal of that specific chemical purity was unobtainable on the open market from any other producer in the country. The utility brought an action against the mining company seeking a decree of specific performance.",
        q: "Is the utility entitled to a decree of specific performance under UCC § 2-716?",
        opts: [
            "No, because specific performance is an equitable remedy restricted to contracts for unique real property.",
            "No, because output contracts lack a definite quantity term and cannot be enforced by injunction.",
            "Yes, because under UCC § 2-716(1), specific performance may be decreed where the goods are unique or in other proper circumstances, such as an inability to effect cover.",
            "Yes, but only if the utility deposits the full ten-year purchase price in escrow."
        ],
        ans: 2,
        exp: "(C) is the correct response. UCC § 2-716(1) authorizes specific performance in sales of goods where the buyer is unable to cover under 'other proper circumstances.' Under UCC § 2-716(1), 'Specific performance may be decreed where the goods are unique or in other proper circumstances.' Official Comment 2 expressly clarifies that the inability to cover is strong evidence of 'other proper circumstances.' Where an energy utility holds a long-term requirements or output contract for vital fuel, and market scarcity makes substitute compliance coal impossible to purchase anywhere on the open market, monetary damages are inadequate, and specific performance is appropriate. (A) is incorrect because UCC § 2-716 expressly expands specific performance to sales of goods. (B) is incorrect because output contracts are valid and enforceable under UCC § 2-306. (D) is incorrect because specific performance does not require advance escrow of future decade-long installments."
    },
    {
        id: 25,
        topic: "Terms / Risk of Loss in Non-Carrier Bailee Cases (UCC 2-509)",
        fp: "A buyer contracted to purchase 1,000 barrels of oil from a seller for $100,000. The oil was currently being stored in a third-party independent commercial warehouse (a bailee). The contract provided that the buyer would pick up the oil from the warehouse. On March 1, the seller provided the buyer with a negotiable warehouse receipt covering the 1,000 barrels. On March 3, before the buyer had gone to the warehouse to pick up the oil, the warehouse burned down, destroying the oil. The seller sued the buyer for the $100,000 purchase price.",
        q: "Who bears the risk of loss for the destroyed oil under UCC Article 2?",
        opts: [
            "The seller, because the buyer had not yet taken physical possession of the goods.",
            "The buyer, because risk of loss passes to the buyer upon receipt of a negotiable document of title covering the goods.",
            "The seller, because risk of loss in bailee cases passes only after a reasonable time for pickup has elapsed.",
            "The warehouse, because bailees are strictly liable for all losses occurring on their premises."
        ],
        ans: 1,
        exp: "(B) is the correct response. Under UCC § 2-509(2), where goods are held by a bailee to be delivered without being moved, the risk of loss passes to the buyer (a) on his receipt of a negotiable document of title covering the goods; or (b) on acknowledgment by the bailee of the buyer's right to possession; or (c) after his receipt of a non-negotiable document of title or other written direction to deliver. Here, the seller gave the buyer a negotiable warehouse receipt on March 1. The risk of loss passed to the buyer immediately upon receipt of that document. Therefore, the buyer bore the risk when the fire occurred on March 3 and must pay the contract price. (A) is incorrect because physical possession is not required to pass risk of loss when goods are held by a bailee and a negotiable document of title is delivered. (C) is incorrect because the passage of risk is immediate upon receipt of a negotiable document under § 2-509(2)(a). (D) is incorrect because warehouse liability requires negligence, and regardless, contract risk of loss rules govern the rights between buyer and seller."
    }
];