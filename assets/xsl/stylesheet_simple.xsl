<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:ixsl="http://saxonica.com/ns/interactiveXSLT"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:array="http://www.w3.org/2005/xpath-functions/array"
    xmlns:map="http://www.w3.org/2005/xpath-functions/map"
    xmlns:err="http://www.w3.org/2005/xqt-errors" 
    xmlns:fn="http://www.w3.org/2005/xpath-functions"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" 
    xmlns:js="http://saxonica.com/ns/globalJS"
    xmlns:aid="http://ns.adobe.com/AdobeInDesign/4.0/"
    xmlns:aid5="http://ns.adobe.com/AdobeInDesign/5.0/" 
    xmlns="http://www.w3.org/1999/xhtml" 
    exclude-result-prefixes="xsl ixsl math xlink array map err fn xs js"
    extension-element-prefixes="ixsl" expand-text="yes">
    
    <xsl:param name="mode"/>
    <xsl:output method="xml" indent="false" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <Root>
            <xsl:apply-templates/>
        </Root>
    </xsl:template>
    
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
    
    <xsl:template match="ueberschrift1">
        <h1 aid:pstyle="H1">
            <xsl:apply-templates select="@*|node()"/>
        </h1>
        <h2>Parameter: <xsl:value-of select="$mode"/></h2>
    </xsl:template>
    
    <xsl:template match="absatz">
        <p>
            <xsl:apply-templates select="@*|node()"/>
        </p>
    </xsl:template>
    
</xsl:stylesheet>