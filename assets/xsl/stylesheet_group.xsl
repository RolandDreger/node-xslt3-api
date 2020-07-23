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
    xmlns:rd="http://www.rolanddreger.net"
    xmlns="http://www.w3.org/1999/xhtml" 
    exclude-result-prefixes="xsl ixsl math xlink array map err fn xs js rd"
    extension-element-prefixes="ixsl" 
    expand-text="yes"
>
    
    <xsl:param name="param"/>
    <xsl:output method="xml" indent="false" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <Root>
            <doc>
                <xsl:for-each-group select="addressbook/address" group-by="zip">
                    <xsl:sort select="zip" order="ascending" data-type="number"/>
                    <zip-group aid:pstyle="H1" type="block">
                        <xsl:value-of select="zip"/>
                    </zip-group>
                    <xsl:for-each select="current-group()">
                        <xsl:sort select="name/last-name" order="ascending" data-type="text"/>
                        <xsl:sort select="name/first-name" order="ascending" data-type="text"/>
                        <xsl:call-template name="contact"/>
                    </xsl:for-each>
                </xsl:for-each-group>
            </doc>
        </Root>
    </xsl:template>
    
    <xsl:template name="contact">
        <contact  aid:pstyle="P" type="block">
            <name>
                <first-name aid:cstyle="Strong">
                    <xsl:value-of select="name/first-name"/>
                </first-name>
                <xsl:text> </xsl:text>
                <last-name aid:cstyle="Strong">
                    <xsl:value-of select="name/last-name"/>
                </last-name>
            </name>
            <separator aid:cstyle="Strong">
                <xsl:text>, </xsl:text>
            </separator>
            <address>
                <xsl:value-of select="street"/>
                <xsl:text>, </xsl:text>
                <xsl:value-of select="zip"/>
                <xsl:text> </xsl:text>
                <xsl:value-of select="city"/>
                <xsl:text> (</xsl:text>
                <xsl:value-of select="state"/>
                <xsl:text>)</xsl:text>
            </address>
        </contact>
    </xsl:template>
    
</xsl:stylesheet>